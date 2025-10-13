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

import {
  NODE_CONDS_KEY,
  NODE_CONDS_RESULT_KEY,
  NODE_DISABLE_CODE_BLOCK_KEY,
  NODE_DISABLE_DATA_SOURCE_KEY,
} from '@tmagic/core';
import { tMagicMessage } from '@tmagic/design';
import type { FormConfig, FormState, TabConfig, TabPaneConfig } from '@tmagic/form';

export const arrayOptions = [
  { text: '包含', value: 'include' },
  { text: '不包含', value: 'not_include' },
];

export const eqOptions = [
  { text: '等于', value: '=' },
  { text: '不等于', value: '!=' },
];

export const numberOptions = [
  { text: '大于', value: '>' },
  { text: '大于等于', value: '>=' },
  { text: '小于', value: '<' },
  { text: '小于等于', value: '<=' },
  { text: '在范围内', value: 'between' },
  { text: '不在范围内', value: 'not_between' },
];

export const styleTabConfig: TabPaneConfig = {
  title: '样式',
  display: ({ services }: any) => !(services.uiService.get('showStylePanel') ?? true),
  items: [
    {
      name: 'style',
      labelWidth: '100px',
      type: 'style-setter',
      items: [
        {
          names: [
            'display',
            'flexDirection',
            'justifyContent',
            'alignItems',
            'flexWrap',
            'marginTop',
            'marginRight',
            'marginBottom',
            'marginLeft',
            'paddingTop',
            'paddingRight',
            'paddingBottom',
            'paddingLeft',
            'width',
            'height',
            'overflow',
            'fontSize',
            'lineHeight',
            'fontWeight',
            'color',
            'textAlign',
            'backgroundColor',
            'backgroundImage',
            'backgroundSize',
            'backgroundPosition',
            'backgroundRepeat',
            'position',
            'zIndex',
            'top',
            'right',
            'bottom',
            'left',
            'borderRadius',
            'borderTopWidth',
            'borderTopStyle',
            'borderTopColor',
            'borderRightColor',
            'borderRightWidth',
            'borderRightStyle',
            'borderRightColor',
            'borderBottomWidth',
            'borderBottomStyle',
            'borderBottomColor',
            'borderLeftStyle',
            'borderLeftWidth',
            'borderLeftColor',
            'borderWidth',
            'borderStyle',
            'borderColor',
          ],
        },
      ],
    },
  ],
};

export const eventTabConfig: TabPaneConfig = {
  title: '事件',
  items: [
    {
      name: 'events',
      src: 'component',
      labelWidth: '100px',
      type: 'event-select',
    },
  ],
};

export const advancedTabConfig: TabPaneConfig = {
  title: '高级',
  lazy: true,
  items: [
    {
      name: NODE_DISABLE_CODE_BLOCK_KEY,
      text: '禁用代码块',
      type: 'switch',
      defaultValue: false,
      extra: '开启后，配置的代码块将不会被执行',
    },
    {
      name: NODE_DISABLE_DATA_SOURCE_KEY,
      text: '禁用数据源',
      type: 'switch',
      defaultValue: false,
      extra: '开启后，组件内配置的数据源相关配置将不会被编译，显隐条件将失效',
    },
    {
      name: 'created',
      text: 'created',
      labelPosition: 'top',
      type: 'code-select',
      extra: '组件初始化时执行',
    },
    {
      name: 'mounted',
      text: 'mounted',
      labelPosition: 'top',
      type: 'code-select',
      extra: '组件挂载到dom时执行',
    },
    {
      name: 'display',
      text: 'display',
      extra: '控制组件是否渲染，关系的代码块返回值为false时不渲染',
      labelPosition: 'top',
      type: 'code-select',
    },
  ],
};

export const displayTabConfig: TabPaneConfig = {
  title: '显示条件',
  display: (_state: FormState, { model }: any) => model.type !== 'page',
  items: [
    {
      name: NODE_CONDS_RESULT_KEY,
      type: 'select',
      text: '条件成立时',
      defaultValue: false,
      options: [
        { text: '显示', value: false },
        { text: '隐藏', value: true },
      ],
      extra: (_state, { model }) =>
        `条件成立时${model[NODE_CONDS_RESULT_KEY] ? '隐藏' : '显示'}，不成立时${model[NODE_CONDS_RESULT_KEY] ? '显示' : '隐藏'}；<br />同一条件组内的所有条件配置同时成立时表示该条件组成立，任意一个条件组成立时表示条件成立(条件组内为且的关系，条件组间为或的关系)；<br />条件为空时表示成立；`,
    },
    {
      type: 'display-conds',
      name: NODE_CONDS_KEY,
      titlePrefix: '条件组',
      defaultValue: [],
    },
  ],
};

/**
 * 统一为组件属性表单加上事件、高级、样式配置
 * @param config 组件属性配置
 * @returns Object
 */
export const fillConfig = (
  config: FormConfig = [],
  {
    labelWidth = '80px',
    disabledDataSource = false,
    disabledCodeBlock = false,
  }: { labelWidth?: string; disabledDataSource?: boolean; disabledCodeBlock?: boolean } = {},
): FormConfig => {
  const propsConfig: FormConfig = [];

  // 组件类型，必须要有
  if (!config.find((item) => item.name === 'type')) {
    propsConfig.push({
      text: 'type',
      name: 'type',
      type: 'hidden',
    });
  }

  if (!config.find((item) => item.name === 'id')) {
    // 组件id，必须要有
    propsConfig.push({
      name: 'id',
      text: 'ID',
      type: 'text',
      disabled: true,
      append: {
        type: 'button',
        text: '复制',
        handler: (vm, { model }) => {
          navigator.clipboard
            .writeText(`${model.id}`)
            .then(() => {
              tMagicMessage.success('已复制');
            })
            .catch(() => {
              tMagicMessage.error('复制失败');
            });
        },
      },
    });
  }

  if (!config.find((item) => item.name === 'name')) {
    propsConfig.push({
      name: 'name',
      text: '组件名称',
    });
  }

  const noCodeAdvancedTabItems = advancedTabConfig.items.filter((item) => item.type !== 'code-select');

  if (noCodeAdvancedTabItems.length > 0 && disabledCodeBlock) {
    advancedTabConfig.items = noCodeAdvancedTabItems;
  }

  const tabConfig: TabConfig = {
    type: 'tab',
    labelWidth,
    items: [
      {
        title: '属性',
        items: [...propsConfig, ...config],
      },
      { ...styleTabConfig },
      { ...eventTabConfig },
    ],
  };

  if (!disabledCodeBlock) {
    tabConfig.items.push({ ...advancedTabConfig });
  } else if (noCodeAdvancedTabItems.length > 0) {
    tabConfig.items.push({ ...advancedTabConfig });
  }

  if (!disabledDataSource) {
    tabConfig.items.push({ ...displayTabConfig });
  }

  return [tabConfig];
};
