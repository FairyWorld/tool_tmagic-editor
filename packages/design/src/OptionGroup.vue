<template>
  <component class="tmagic-design-option-group" ref="optionGroup" :is="uiComponent" v-bind="uiProps">
    <slot></slot>
  </component>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

import { getDesignConfig } from './config';
import type { OptionGroupProps } from './types';

defineOptions({
  name: 'TMOptionGroup',
});

const props = defineProps<OptionGroupProps>();

const ui = getDesignConfig('components')?.optionGroup;

const uiComponent = ui?.component || 'el-option-group';

const uiProps = computed<OptionGroupProps>(() => ui?.props(props) || props);

const optionGroup = ref<any>();
</script>
