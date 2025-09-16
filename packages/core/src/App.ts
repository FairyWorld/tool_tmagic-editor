/*
 * Tencent is pleased to support the open source community by making TMagicEditor available.
 *
 * Copyright (C) 2025 Tencent.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { EventEmitter } from 'events';

import { isEmpty } from 'lodash-es';

import { createDataSourceManager, DataSourceManager, type DataSourceManagerData } from '@tmagic/data-source';
import type { CodeBlockDSL, Id, JsEngine, MApp, RequestFunction } from '@tmagic/schema';

import Env from './Env';
import EventHelper from './EventHelper';
import Flexible from './Flexible';
import FlowState from './FlowState';
import Node from './Node';
import Page from './Page';
import { AppOptionsConfig, ErrorHandler, GetNodeOptions } from './type';
import { transformStyle as defaultTransformStyle } from './utils';

class App extends EventEmitter {
  [x: string]: any;
  static nodeClassMap = new Map<string, typeof Node>();

  public static registerNode<T extends typeof Node = typeof Node>(type: string, NodeClass: T) {
    App.nodeClassMap.set(type, NodeClass);
  }

  public env!: Env;
  public dsl?: MApp;
  public codeDsl?: CodeBlockDSL;
  public dataSourceManager?: DataSourceManager;
  public page?: Page;
  public pageFragments: Map<Id, Page> = new Map();
  public useMock = false;
  public platform = 'mobile';
  public jsEngine: JsEngine = 'browser';
  public components = new Map();
  public pageFragmentContainerType = new Set(['page-fragment-container']);
  public iteratorContainerType = new Set(['iterator-container']);
  public request?: RequestFunction;
  public transformStyle: (style: Record<string, any>) => Record<string, any>;
  public eventHelper?: EventHelper;
  public errorHandler?: ErrorHandler;
  public nodeStoreInitialData?: () => any;

  private flexible?: Flexible;

  constructor(options: AppOptionsConfig) {
    super();

    if (options.env) {
      this.setEnv(options.env);
    } else {
      this.setEnv(options.ua);
    }

    this.errorHandler = options.errorHandler;

    // 代码块描述内容在dsl codeBlocks字段
    this.codeDsl = options.config?.codeBlocks;
    options.platform && (this.platform = options.platform);
    options.jsEngine && (this.jsEngine = options.jsEngine);
    options.nodeStoreInitialData && (this.nodeStoreInitialData = options.nodeStoreInitialData);

    if (options.pageFragmentContainerType) {
      const pageFragmentContainerType = Array.isArray(options.pageFragmentContainerType)
        ? options.pageFragmentContainerType
        : [options.pageFragmentContainerType];
      pageFragmentContainerType.forEach((type) => {
        this.pageFragmentContainerType.add(type);
      });
    }

    if (options.iteratorContainerType) {
      const iteratorContainerType = Array.isArray(options.iteratorContainerType)
        ? options.iteratorContainerType
        : [options.iteratorContainerType];
      iteratorContainerType.forEach((type) => {
        this.iteratorContainerType.add(type);
      });
    }

    if (typeof options.useMock === 'boolean') {
      this.useMock = options.useMock;
    }

    if (this.jsEngine === 'browser' && !options.disabledFlexible) {
      this.flexible = new Flexible({ designWidth: options.designWidth });
    }

    if (this.platform !== 'editor') {
      this.eventHelper = new EventHelper({
        app: this,
        beforeEventHandler: options.beforeEventHandler,
        afterEventHandler: options.afterEventHandler,
      });
    }

    this.transformStyle =
      options.transformStyle || ((style: Record<string, any>) => defaultTransformStyle(style, this.jsEngine));

    if (options.request) {
      this.request = options.request;
    }

    if (options.config) {
      this.setConfig(options.config, options.curPage, options.dataSourceManagerInitialData);
    }
  }

  public setEnv<T extends Env>(ua?: string | T) {
    if (!ua || typeof ua === 'string') {
      this.env = new Env(ua);
    } else {
      this.env = ua;
    }
  }

  public setDesignWidth(width: number) {
    this.flexible?.setDesignWidth(width);
  }

  /**
   * 设置dsl
   * @param config dsl跟节点
   * @param curPage 当前页面id
   * @param initialData 数据源初始数据源
   */
  public setConfig(config: MApp, curPage?: Id, initialData?: DataSourceManagerData) {
    this.dsl = config;

    if (!curPage && config.items.length) {
      curPage = config.items[0].id;
    }

    if (this.dataSourceManager) {
      this.dataSourceManager.destroy();
    }

    this.dataSourceManager = createDataSourceManager(this, this.useMock, initialData);

    this.codeDsl = config.codeBlocks;

    const pageId = curPage || this.page?.data?.id;

    super.emit('dsl-change', { dsl: config, curPage: pageId });

    this.pageFragments.forEach((page) => {
      page.destroy();
    });
    this.pageFragments.clear();
    this.setPage(pageId);

    if (this.dataSourceManager) {
      if (this.dataSourceManager.isAllDataSourceRegistered()) {
        this.eventHelper?.bindDataSourceEvents();
      } else {
        this.dataSourceManager.once('registered-all', () => {
          this.eventHelper?.bindDataSourceEvents();
        });
      }
    }
  }

  public setPage(id?: Id) {
    const pageConfig = this.dsl?.items.find((page) => `${page.id}` === `${id}`);

    if (!pageConfig) {
      this.deletePage();

      super.emit('page-change');
      return;
    }

    if (this.page) {
      if (pageConfig === this.page.data) return;
      this.page.destroy();
    }

    this.page = new Page({
      config: pageConfig,
      app: this,
    });

    if (this.eventHelper) {
      this.eventHelper.removeNodeEvents();
      for (const [, node] of this.page.nodes) {
        this.eventHelper.bindNodeEvents(node);
      }
      for (const [, page] of this.pageFragments) {
        for (const [, node] of page.nodes) {
          this.eventHelper.bindNodeEvents(node);
        }
      }
    }

    super.emit('page-change', this.page);
  }

  public deletePage() {
    this.page?.destroy();
    this.eventHelper?.removeNodeEvents();
    this.page = undefined;
  }

  /**
   * 兼容id参数
   * @param id 节点id
   * @returns Page | void
   */
  public getPage(id?: Id) {
    if (!id) return this.page;
    if (this.page && `${this.page.data.id}` === `${id}`) {
      return this.page;
    }
  }

  public getNode<T extends Node = Node>(id: Id, options?: GetNodeOptions) {
    return this.page?.getNode<T>(id, options);
  }

  public registerComponent(type: string, Component: any) {
    this.components.set(type, Component);
  }

  public unregisterComponent(type: string) {
    this.components.delete(type);
  }

  public resolveComponent<T = any>(type: string) {
    return this.components.get(type) as T;
  }

  public emit(name: string | symbol, ...args: any[]): boolean {
    const [node, ...otherArgs] = args;
    if (
      this.eventHelper &&
      node instanceof Node &&
      node.data?.id &&
      node.eventKeys.has(`${String(name)}_${node.data.id}`)
    ) {
      return this.eventHelper?.emit(node.eventKeys.get(`${String(name)}_${node.data.id}`)!, node, ...otherArgs);
    }
    return super.emit(name, ...args);
  }

  /**
   * 执行代码块动作
   * @param eventConfig 代码动作的配置
   * @returns void
   */
  public async runCode(codeId: Id, params: Record<string, any>, args: any[], flowState?: FlowState, node?: Node) {
    if (!codeId || isEmpty(this.codeDsl)) return;
    const content = this.codeDsl?.[codeId]?.content;
    if (typeof content === 'function') {
      try {
        await content({ app: this, params, eventParams: args, flowState, node });
      } catch (e: any) {
        if (this.errorHandler) {
          this.errorHandler(e, undefined, { type: 'run-code', codeId, params, eventParams: args, flowState, node });
        } else {
          throw e;
        }
      }
    }
  }

  public async runDataSourceMethod(
    dsId: string,
    methodName: string,
    params: Record<string, any>,
    args: any[],
    flowState?: FlowState,
    node?: Node,
  ) {
    if (!dsId || !methodName) return;

    const dataSource = this.dataSourceManager?.get(dsId);

    if (!dataSource) return;

    try {
      const methods = dataSource.methods || [];

      const method = methods.find((item) => item.name === methodName);
      if (method && typeof method.content === 'function') {
        await method.content({ app: this, params, dataSource, eventParams: args, flowState, node });
      } else if (typeof dataSource[methodName] === 'function') {
        await dataSource[methodName]();
      }
    } catch (e: any) {
      if (this.errorHandler) {
        this.errorHandler(e, dataSource, { type: 'data-source-method', params, eventParams: args, flowState, node });
      } else {
        throw e;
      }
    }
  }

  public destroy() {
    this.removeAllListeners();
    this.page?.destroy();
    this.page = undefined;
    this.pageFragments.forEach((page) => {
      page.destroy();
    });
    this.pageFragments.clear();

    this.flexible?.destroy();
    this.flexible = undefined;

    this.eventHelper?.destroy();

    this.dsl = undefined;

    this.dataSourceManager?.destroy();
    this.dataSourceManager = undefined;
    this.codeDsl = undefined;
    this.components.clear();

    this.nodeStoreInitialData = undefined;
  }
}

export default App;
