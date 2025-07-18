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

import { reactive } from 'vue';
import { cloneDeep } from 'lodash-es';
import type { Writable } from 'type-fest';

import { type EventOption, type Id } from '@tmagic/core';
import { toLine } from '@tmagic/utils';

import type { AsyncHookPlugin, SyncHookPlugin } from '@editor/type';

import BaseService from './BaseService';

const canUsePluginMethods = {
  async: [] as const,
  sync: ['setEvent', 'getEvent', 'setMethod', 'getMethod'] as const,
};

type AsyncMethodName = Writable<(typeof canUsePluginMethods)['async']>;
type SyncMethodName = Writable<(typeof canUsePluginMethods)['sync']>;

let eventMap: Record<string, EventOption[]> = reactive({});
let methodMap: Record<string, EventOption[]> = reactive({});

class Events extends BaseService {
  constructor() {
    super([
      ...canUsePluginMethods.async.map((methodName) => ({ name: methodName, isAsync: true })),
      ...canUsePluginMethods.sync.map((methodName) => ({ name: methodName, isAsync: false })),
    ]);
  }

  public setEvents(events: Record<string, EventOption[]>) {
    Object.keys(events).forEach((type: string) => {
      this.setEvent(toLine(type), events[type] || []);
    });
  }

  public setEvent(type: string, events: EventOption[]) {
    eventMap[toLine(type)] = [...events];
  }

  public getEvent(type: string): EventOption[] {
    return cloneDeep(eventMap[toLine(type)]) || [];
  }

  public setMethods(methods: Record<string, EventOption[]>) {
    Object.keys(methods).forEach((type: string) => {
      this.setMethod(toLine(type), methods[type] || []);
    });
  }

  public setMethod(type: string, method: EventOption[]) {
    methodMap[toLine(type)] = [...method];
  }

  public getMethod(type: string, _targetId: Id) {
    return cloneDeep(methodMap[toLine(type)]) || [];
  }

  public resetState() {
    eventMap = reactive({});
    methodMap = reactive({});
  }

  public destroy() {
    this.resetState();
    this.removeAllListeners();
    this.removeAllPlugins();
  }

  public usePlugin(options: AsyncHookPlugin<AsyncMethodName, Events> & SyncHookPlugin<SyncMethodName, Events>): void {
    super.usePlugin(options);
  }
}

export type EventsService = Events;

export default new Events();
