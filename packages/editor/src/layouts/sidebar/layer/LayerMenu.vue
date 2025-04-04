<template>
  <ContentMenu :menu-data="menuData" ref="menu" style="overflow: initial"></ContentMenu>
</template>

<script lang="ts" setup>
import { computed, markRaw, useTemplateRef } from 'vue';
import { Files, Plus } from '@element-plus/icons-vue';

import { isPage, isPageFragment } from '@tmagic/utils';

import ContentMenu from '@editor/components/ContentMenu.vue';
import { useServices } from '@editor/hooks/use-services';
import FolderMinusIcon from '@editor/icons/FolderMinusIcon.vue';
import type { ComponentGroup, CustomContentMenuFunction, MenuButton, MenuComponent } from '@editor/type';
import { useCopyMenu, useDeleteMenu, useMoveToMenu, usePasteMenu } from '@editor/utils/content-menu';

defineOptions({
  name: 'MEditorLayerMenu',
});

const props = defineProps<{
  layerContentMenu: (MenuButton | MenuComponent)[];
  customContentMenu: CustomContentMenuFunction;
}>();

const emit = defineEmits<{
  'collapse-all': [];
}>();

const services = useServices();
const { editorService, componentListService } = services;

const menuRef = useTemplateRef<InstanceType<typeof ContentMenu>>('menu');
const node = computed(() => editorService.get('node'));
const nodes = computed(() => editorService.get('nodes'));
const componentList = computed(() => componentListService.getList());

const createMenuItems = (group: ComponentGroup): MenuButton[] =>
  group.items.map((component) => ({
    text: component.text,
    type: 'button',
    icon: component.icon,
    handler: () => {
      editorService.add({
        name: component.text,
        type: component.type,
        ...(component.data || {}),
      });
    },
  }));

const getSubMenuData = computed<MenuButton[]>(() => {
  if (node.value?.type === 'tabs') {
    return [
      {
        text: '标签页',
        type: 'button',
        icon: Files,
        handler: () => {
          editorService.add({
            type: 'tab-pane',
          });
        },
      },
    ];
  }
  if (node.value?.items) {
    return (
      componentList.value.reduce(
        (subMenuData: MenuButton[], group: ComponentGroup, index) =>
          subMenuData.concat(
            createMenuItems(group),
            index < componentList.value.length - 1
              ? [
                  {
                    type: 'divider',
                    direction: 'horizontal',
                  },
                ]
              : [],
          ),
        [],
      ) || []
    );
  }
  return [];
});

const menuData = computed<(MenuButton | MenuComponent)[]>(() =>
  props.customContentMenu(
    [
      {
        type: 'button',
        text: '全部折叠',
        icon: FolderMinusIcon,
        display: () => isPage(node.value) || isPageFragment(node.value),
        handler: () => {
          emit('collapse-all');
        },
      },
      {
        type: 'button',
        text: '新增',
        icon: markRaw(Plus),
        display: () => node.value?.items && nodes.value?.length === 1,
        items: getSubMenuData.value,
      },
      useCopyMenu(),
      usePasteMenu(),
      useDeleteMenu(),
      useMoveToMenu(services),
      ...props.layerContentMenu,
    ],
    'layer',
  ),
);

const show = (e: MouseEvent) => {
  menuRef.value?.show(e);
};

defineExpose({
  show,
});
</script>
