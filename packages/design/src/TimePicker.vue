<template>
  <component
    class="tmagic-design-time-picker"
    :is="uiComponent"
    v-bind="uiProps"
    @change="changeHandler"
    @update:modelValue="updateModelValue"
  >
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';

import { getDesignConfig } from './config';
import type { TimePickerProps } from './types';

defineOptions({
  name: 'TMTimePicker',
});

const props = defineProps<TimePickerProps>();

const ui = getDesignConfig('components')?.timePicker;

const uiComponent = ui?.component || 'el-time-picker';

const uiProps = computed<TimePickerProps>(() => ui?.props(props) || props);

const emit = defineEmits(['change', 'update:modelValue']);

const changeHandler = (v: any) => {
  emit('change', v);
};

const updateModelValue = (v: any) => {
  emit('update:modelValue', v);
};
</script>
