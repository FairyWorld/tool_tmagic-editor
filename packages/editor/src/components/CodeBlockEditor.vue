<template>
  <!-- 代码块编辑区 -->
  <FloatingBox
    v-model:visible="boxVisible"
    v-model:width="width"
    v-model:height="codeBlockEditorHeight"
    :title="content.name ? `${disabled ? '查看' : '编辑'}${content.name}` : '新增代码'"
    :position="boxPosition"
    :before-close="beforeClose"
  >
    <template #body>
      <MFormBox
        class="m-editor-code-block-editor"
        ref="formBox"
        label-width="80px"
        :close-on-press-escape="false"
        :title="content.name"
        :config="functionConfig"
        :values="content"
        :disabled="disabled"
        style="height: 100%"
        @change="changeHandler"
        @submit="submitForm"
        @error="errorHandler"
        @closed="closedHandler"
      >
        <template #left>
          <TMagicButton v-if="!disabled" type="primary" link @click="difVisible = true">查看修改</TMagicButton>
        </template>
      </MFormBox>
    </template>
  </FloatingBox>

  <Teleport to="body">
    <TMagicDialog title="查看修改" v-model="difVisible" fullscreen destroy-on-close>
      <div style="display: flex; margin-bottom: 10px">
        <div style="flex: 1"><TMagicTag size="small" type="info">修改前</TMagicTag></div>
        <div style="flex: 1"><TMagicTag size="small" type="success">修改后</TMagicTag></div>
      </div>

      <CodeEditor
        ref="magicVsEditor"
        type="diff"
        language="json"
        :disabled-full-screen="true"
        :initValues="content.content"
        :modifiedValues="formBox?.form?.values.content"
        :height="`${windowRect.height - 150}px`"
      ></CodeEditor>

      <template #footer>
        <span class="dialog-footer">
          <TMagicButton size="small" @click="difVisible = false">取消</TMagicButton>
          <TMagicButton size="small" type="primary" @click="diffChange">确定</TMagicButton>
        </span>
      </template>
    </TMagicDialog>
  </Teleport>
</template>

<script lang="ts" setup>
import { computed, inject, nextTick, Ref, ref, useTemplateRef, watch } from 'vue';

import type { CodeBlockContent } from '@tmagic/core';
import { TMagicButton, TMagicDialog, tMagicMessage, tMagicMessageBox, TMagicTag } from '@tmagic/design';
import {
  type ContainerChangeEventData,
  type FormConfig,
  type FormState,
  MFormBox,
  type TableColumnConfig,
} from '@tmagic/form';

import FloatingBox from '@editor/components/FloatingBox.vue';
import { useEditorContentHeight } from '@editor/hooks/use-editor-content-height';
import { useNextFloatBoxPosition } from '@editor/hooks/use-next-float-box-position';
import { useServices } from '@editor/hooks/use-services';
import { useWindowRect } from '@editor/hooks/use-window-rect';
import CodeEditor from '@editor/layouts/CodeEditor.vue';
import { getEditorConfig } from '@editor/utils/config';

defineOptions({
  name: 'MEditorCodeBlockEditor',
});

const width = defineModel<number>('width', { default: 670 });
const boxVisible = defineModel<boolean>('visible', { default: false });

const props = defineProps<{
  content: CodeBlockContent;
  disabled?: boolean;
  isDataSource?: boolean;
  dataSourceType?: string;
}>();

const emit = defineEmits<{
  submit: [values: CodeBlockContent, eventData: ContainerChangeEventData];
  close: [];
  open: [];
}>();

const { codeBlockService, uiService } = useServices();

const { height: codeBlockEditorHeight } = useEditorContentHeight();

const difVisible = ref(false);
const { rect: windowRect } = useWindowRect();

const magicVsEditorRef = useTemplateRef<InstanceType<typeof CodeEditor>>('magicVsEditor');

const diffChange = () => {
  if (!magicVsEditorRef.value || !formBox.value?.form) {
    return;
  }

  formBox.value.form.values.content = magicVsEditorRef.value.getEditorValue();

  difVisible.value = false;
};

const defaultParamColConfig: TableColumnConfig = {
  type: 'row',
  label: '参数类型',
  items: [
    {
      text: '参数类型',
      labelWidth: '70px',
      type: 'select',
      name: 'type',
      options: [
        {
          text: '数字',
          label: '数字',
          value: 'number',
        },
        {
          text: '字符串',
          label: '字符串',
          value: 'text',
        },
        {
          text: '组件',
          label: '组件',
          value: 'ui-select',
        },
      ],
    },
  ],
};

const functionConfig = computed<FormConfig>(() => [
  {
    text: '名称',
    name: 'name',
    rules: [{ required: true, message: '请输入名称', trigger: 'blur' }],
  },
  {
    text: '描述',
    name: 'desc',
  },
  {
    text: '执行时机',
    name: 'timing',
    type: 'select',
    options: () => {
      const options = [
        { text: '初始化前', value: 'beforeInit' },
        { text: '初始化后', value: 'afterInit' },
      ];
      if (props.dataSourceType !== 'base') {
        options.push({ text: '请求前', value: 'beforeRequest' });
        options.push({ text: '请求后', value: 'afterRequest' });
      }
      return options;
    },
    display: () => props.isDataSource,
  },
  {
    type: 'table',
    border: true,
    text: '参数',
    enableFullscreen: false,
    enableToggleMode: false,
    name: 'params',
    dropSort: false,
    items: [
      {
        type: 'text',
        label: '参数名',
        name: 'name',
      },
      {
        type: 'text',
        label: '描述',
        name: 'extra',
      },
      codeBlockService.getParamsColConfig() || defaultParamColConfig,
    ],
  },
  {
    name: 'content',
    type: 'vs-code',
    options: inject('codeOptions', {}),
    height: '500px',
    onChange: (formState: FormState | undefined, code: string) => {
      try {
        // 检测js代码是否存在语法错误
        getEditorConfig('parseDSL')(code);

        return code;
      } catch (error: any) {
        tMagicMessage.error(error.message);

        throw error;
      }
    },
  },
]);

const submitForm = (values: CodeBlockContent, data: ContainerChangeEventData) => {
  changedValue.value = undefined;
  emit('submit', values, data);
};

const errorHandler = (error: any) => {
  tMagicMessage.error(error.message);
};

const formBox = useTemplateRef<InstanceType<typeof MFormBox>>('formBox');

const changedValue = ref<CodeBlockContent>();
const changeHandler = (values: CodeBlockContent) => {
  changedValue.value = values;
};

const beforeClose = (done: (_cancel?: boolean) => void) => {
  if (!changedValue.value) {
    done();
    return;
  }
  tMagicMessageBox
    .confirm('当前代码块已修改，是否保存？', '提示', {
      confirmButtonText: '保存并关闭',
      cancelButtonText: '不保存并关闭',
      type: 'warning',
      distinguishCancelAndClose: true,
    })
    .then(() => {
      changedValue.value && submitForm(changedValue.value, { changeRecords: formBox.value?.form?.changeRecords });
      done();
    })
    .catch((action: string) => {
      if (action === 'cancel') {
      }
      done(action === 'cancel');
    });
};

const closedHandler = () => {
  changedValue.value = undefined;
};

const parentFloating = inject<Ref<HTMLDivElement | null>>('parentFloating', ref(null));
const { boxPosition, calcBoxPosition } = useNextFloatBoxPosition(uiService, parentFloating);

watch(boxVisible, (visible) => {
  nextTick(() => {
    if (!visible) {
      emit('close');
    } else {
      emit('open');
    }
  });
});

defineExpose({
  async show() {
    calcBoxPosition();
    boxVisible.value = true;
  },

  async hide() {
    boxVisible.value = false;
  },
});
</script>
