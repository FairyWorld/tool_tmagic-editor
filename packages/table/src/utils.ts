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

import { datetimeFormatter } from '@tmagic/form';

import type { ColumnConfig } from './schema';

export const formatter = (item: ColumnConfig, row: any, data: { index: number }) => {
  if (!item.prop) return '';

  if (item.formatter) {
    if (item.formatter === 'datetime') {
      item.formatter = (value: string) => datetimeFormatter(value);
    }
    try {
      return item.formatter(row[item.prop], row, data);
    } catch (e) {
      console.error('Formatter error:', e);
      return row[item.prop];
    }
  } else {
    return row[item.prop];
  }
};

export const createColumns = (columns: ColumnConfig[]) => columns;
