<template>
  <div class="m-fields-data-source-field-select">
    <FieldSelect
      v-if="!disabledDataSource && (showDataSourceFieldSelect || !config.fieldConfig)"
      :model-value="model[name]"
      :disabled="disabled"
      :size="size"
      :value="config.value"
      :checkStrictly="checkStrictly"
      :dataSourceFieldType="config.dataSourceFieldType"
      @change="onChangeHandler"
    ></FieldSelect>

    <component
      v-else
      :is="tagName"
      :config="config.fieldConfig"
      :model="model"
      :name="name"
      :disabled="disabled"
      :size="size"
      :last-values="lastValues"
      :init-values="initValues"
      :values="values"
      :prop="prop"
      @change="onChangeHandler"
    ></component>

    <TMagicTooltip
      v-if="config.fieldConfig && !disabledDataSource"
      :disabled="showDataSourceFieldSelect"
      content="选择数据源"
    >
      <TMagicButton
        style="margin-left: 5px"
        :type="showDataSourceFieldSelect ? 'primary' : 'default'"
        :size="size"
        @click="showDataSourceFieldSelect = !showDataSourceFieldSelect"
        ><MIcon :icon="Coin"></MIcon
      ></TMagicButton>
    </TMagicTooltip>
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref, resolveComponent, watch } from 'vue';
import { Coin } from '@element-plus/icons-vue';

import { DataSchema } from '@tmagic/core';
import { TMagicButton, tMagicMessage, TMagicTooltip } from '@tmagic/design';
import type { ContainerChangeEventData, DataSourceFieldSelectConfig, FieldProps, FormState } from '@tmagic/form';
import { DATA_SOURCE_FIELDS_SELECT_VALUE_PREFIX } from '@tmagic/utils';

import MIcon from '@editor/components/Icon.vue';
import { useServices } from '@editor/hooks/use-services';
import { removeDataSourceFieldPrefix } from '@editor/utils';

import FieldSelect from './FieldSelect.vue';

defineOptions({
  name: 'MFieldsDataSourceFieldSelect',
});

const emit = defineEmits(['change']);

const props = withDefaults(defineProps<FieldProps<DataSourceFieldSelectConfig>>(), {
  disabled: false,
});

const showDataSourceFieldSelect = ref(false);

watch(
  () => props.model[props.name],
  (value) => {
    if (
      Array.isArray(value) &&
      typeof value[0] === 'string' &&
      value[0].startsWith(DATA_SOURCE_FIELDS_SELECT_VALUE_PREFIX)
    ) {
      showDataSourceFieldSelect.value = true;
    } else {
      showDataSourceFieldSelect.value = false;
    }
  },
  {
    immediate: true,
  },
);

const { dataSourceService, propsService } = useServices();
const mForm = inject<FormState | undefined>('mForm');

const dataSources = computed(() => dataSourceService.get('dataSources') || []);
const disabledDataSource = computed(() => propsService.getDisabledDataSource());

const type = computed((): string => {
  let type = props.config.fieldConfig?.type;
  if (typeof type === 'function') {
    type = type(mForm, {
      model: props.model,
    });
  }
  if (type === 'form') return '';
  if (type === 'container') return '';
  return type?.replace(/([A-Z])/g, '-$1').toLowerCase() || (props.config.items ? '' : 'text');
});

const tagName = computed(() => {
  const component = resolveComponent(`m-${props.config.items ? 'form' : 'fields'}-${type.value}`);
  if (typeof component !== 'string') return component;
  return 'm-fields-text';
});

const checkStrictly = computed(() => {
  let value: boolean | undefined;

  if (typeof props.config.checkStrictly !== 'function') {
    value = props.config.checkStrictly;
  } else {
    const dsId = removeDataSourceFieldPrefix(props.model[0]);
    const dataSource = dataSources.value.find((ds) => ds.id === dsId);

    value = props.config.checkStrictly(mForm, {
      values: mForm?.initValues || {},
      model: props.model,
      parent: mForm?.parentValues || {},
      formValue: mForm?.values || props.model,
      prop: props.prop,
      config: props.config,
      dataSource,
    });
  }

  return value ?? props.config.value === 'key';
});

const onChangeHandler = (value: string[], eventData?: ContainerChangeEventData) => {
  if (!Array.isArray(value)) {
    emit('change', value, eventData);
    return;
  }

  const [dsId, ...keys] = value;
  const dataSource = dataSources.value.find((ds) => ds.id === removeDataSourceFieldPrefix(dsId));

  if (!dataSource) {
    emit('change', value, eventData);
    return;
  }

  let fields = dataSource.fields || [];
  let field: DataSchema | undefined;
  (keys || []).forEach((key) => {
    field = fields.find((f) => f.name === key);
    fields = field?.fields || [];
  });

  const dataSourceFieldType = props.config.dataSourceFieldType || ['any'];
  if (!dataSourceFieldType.length) {
    dataSourceFieldType.push('any');
  }

  if (
    !keys.length ||
    (field?.type &&
      (field.type === 'any' || dataSourceFieldType.includes('any') || dataSourceFieldType.includes(field.type)))
  ) {
    emit('change', value, eventData);
  } else {
    tMagicMessage.error(`请选择类型为${dataSourceFieldType.join('或')}的字段`);
    emit('change', [dsId], eventData);
  }
};
</script>
