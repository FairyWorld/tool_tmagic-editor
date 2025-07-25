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

import React, { useContext, useEffect } from 'react';

import type Core from '@tmagic/core';
import type { MPage } from '@tmagic/core';
import { AppContent } from '@tmagic/react-runtime-help';

function App() {
  const app = useContext<Core | undefined>(AppContent);

  if (!app?.page?.data) {
    return null;
  }

  const MagicUiPage = app.resolveComponent('page');

  useEffect(() => {
    const page = document.querySelector(`div[data-tmagic-id=${app.page?.data.id}]`);
    page && window.magic?.onPageElUpdate(page as HTMLElement);
  });

  return <MagicUiPage config={app.page.data as MPage}></MagicUiPage>;
}

export default App;
