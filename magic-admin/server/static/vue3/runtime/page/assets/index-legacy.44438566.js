System.register(["./Component-legacy.8992014a.js","./useApp-legacy.d06aeb34.js","./index-legacy.1dc0be94.js"],(function(e,n){"use strict";var t,o,c;return{setters:[e=>{t=e.C},e=>{o=e.u},e=>{c=e._}],execute:function(){const n=Vue.defineComponent({components:{"magic-ui-component":t},props:{config:{type:Object,default:()=>({})}},setup(e){const n=o(e);return{style:Vue.computed((()=>n?.transformStyle(e.config.style||{}))),refresh(){window.location.reload()}}}}),i=["id"];e("default",c(n,[["render",function(e,n,t,o,c,u){const a=Vue.resolveComponent("magic-ui-component");return Vue.openBlock(),Vue.createElementBlock("div",{id:`${e.config.id||""}`,class:Vue.normalizeClass(`magic-ui-page magic-ui-container magic-layout-${e.config.layout}${e.config.className?` ${e.config.className}`:""}`),style:Vue.normalizeStyle(e.style)},[Vue.renderSlot(e.$slots,"default"),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.config.items,(e=>(Vue.openBlock(),Vue.createBlock(a,{key:e.id,config:e},null,8,["config"])))),128))],14,i)}],["__file","/parisma/github/tmagic-editor/packages/ui/src/page/src/index.vue"]]))}}}));
//# sourceMappingURL=index-legacy.44438566.js.map
