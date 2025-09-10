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

import type { EventConfig, MNode } from '@tmagic/schema';
import { HookCodeType, HookType, NODE_DISABLE_CODE_BLOCK_KEY } from '@tmagic/schema';

import type { default as TMagicApp } from './App';
import type Page from './Page';
import Store from './Store';

interface EventCache {
  method: string;
  fromCpt: any;
  args: any[];
}

interface Methods {
  [key: string]: (...args: any[]) => any;
}

export interface NodeOptions {
  config: MNode;
  page?: Page;
  parent?: Node;
  app: TMagicApp;
}

class Node extends EventEmitter {
  public data!: MNode;
  public style!: {
    [key: string]: any;
  };
  public events: EventConfig[] = [];
  public instance?: any = null;
  public page?: Page;
  public parent?: Node;
  public app: TMagicApp;
  public store;
  public eventKeys = new Map<string, symbol>();

  private eventQueue: EventCache[] = [];

  constructor(options: NodeOptions) {
    super();

    this.store = new Store({ initialData: options.app.nodeStoreInitialData?.() || {} });
    this.page = options.page;
    this.parent = options.parent;
    this.app = options.app;
    this.setData(options.config);
    this.listenLifeSafe();
  }

  public setData(data: MNode) {
    this.data = data;
    const { events, style } = data;
    this.events = events || [];
    this.style = style || {};
    try {
      if (
        this.instance &&
        !Object.isFrozen(this.instance) &&
        Object.getOwnPropertyDescriptor(this.instance, 'config')?.writable !== false &&
        !this.instance.__isVue
      ) {
        this.instance.config = data;
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e: any) {}

    this.emit('update-data', data);
  }

  public addEventToQueue(event: EventCache) {
    this.eventQueue.push(event);
  }

  /**
   * @deprecated use setInstance instead
   */
  public registerMethod(methods: Methods) {
    if (!methods) {
      return;
    }

    if (!this.instance) {
      this.instance = {};
    }

    for (const [key, fn] of Object.entries(methods)) {
      if (typeof fn === 'function') {
        this.instance[key] = fn;
      }
    }
  }

  public setInstance(instance: any) {
    this.instance = instance;
  }

  public async runHookCode(hook: string, params?: Record<string, any>) {
    if (typeof this.data[hook] === 'function') {
      // 兼容旧的数据格式
      await this.data[hook](this);
      return;
    }

    const hookData = this.data[hook] as {
      /** 钩子类型 */
      hookType: HookType;
      hookData: {
        /** 函数类型 */
        codeType?: HookCodeType;
        /** 函数id, 代码块为string, 数据源为[数据源id, 方法名称] */
        codeId: string | [string, string];
        /** 参数配置 */
        params: Record<string, any>;
      }[];
    };

    if (hookData?.hookType !== HookType.CODE) return;

    for (const item of hookData.hookData) {
      const { codeType = HookCodeType.CODE, codeId, params: itemParams = {} } = item;

      if (codeType === HookCodeType.CODE && typeof codeId === 'string') {
        await this.app.runCode(codeId, params || itemParams, [], undefined, this);
      } else if (codeType === HookCodeType.DATA_SOURCE_METHOD && Array.isArray(codeId) && codeId.length > 1) {
        await this.app.runDataSourceMethod(codeId[0], codeId[1], params || itemParams, [], undefined, this);
      }
    }
  }

  public destroy() {
    this.eventQueue.length = 0;
    this.instance = null;
    this.events = [];
    this.style = {};
    this.removeAllListeners();
  }

  private listenLifeSafe() {
    this.once('created', (instance: any) => {
      this.once('destroy', () => {
        this.instance = null;
        if (this.data[NODE_DISABLE_CODE_BLOCK_KEY] !== true) {
          this.runHookCode('destroy');
        }

        this.listenLifeSafe();
      });

      if (instance) {
        this.setInstance(instance);
      }

      if (this.data[NODE_DISABLE_CODE_BLOCK_KEY] !== true) {
        this.runHookCode('created');
      }
    });

    this.once('mounted', (instance: any) => {
      const handler = async () => {
        if (instance) {
          this.setInstance(instance);
        }

        for (let eventConfig = this.eventQueue.shift(); eventConfig; eventConfig = this.eventQueue.shift()) {
          if (typeof instance[eventConfig.method] === 'function') {
            await instance[eventConfig.method](eventConfig.fromCpt, ...eventConfig.args);
          }
        }

        if (this.app.eventHelper) {
          for (const eventConfig of this.app.eventHelper.getEventQueue()) {
            for (const [, page] of this.app.pageFragments) {
              const node = page.getNode(eventConfig.toId);
              if (node && node === this) {
                if (typeof instance[eventConfig.method] === 'function') {
                  await instance[eventConfig.method](eventConfig.fromCpt, ...eventConfig.args);
                }

                eventConfig.handled = true;
              }
            }
          }

          this.app.eventHelper.eventQueue = this.app.eventHelper
            .getEventQueue()
            .filter((eventConfig) => !eventConfig.handled);
        }

        if (this.data[NODE_DISABLE_CODE_BLOCK_KEY] !== true) {
          this.runHookCode('mounted');
        }
      };
      handler();
    });
  }
}

export default Node;
