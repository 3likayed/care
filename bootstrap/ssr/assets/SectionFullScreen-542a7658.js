import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { u as useStyleStore, h as gradientBgDark, i as gradientBgPinkRed, j as gradientBgPurplePink } from "../app.js";
const _sfc_main = {
  __name: "SectionFullScreen",
  __ssrInlineRender: true,
  props: {
    bg: {
      type: String,
      required: true,
      validator: (value) => ["purplePink", "pinkRed"].includes(value)
    }
  },
  setup(__props) {
    const props = __props;
    const colorClass = computed(() => {
      if (useStyleStore().darkMode) {
        return gradientBgDark;
      }
      switch (props.bg) {
        case "purplePink":
          return gradientBgPurplePink;
        case "pinkRed":
          return gradientBgPinkRed;
      }
      return "";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [colorClass.value, "flex min-h-screen items-center justify-center"]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", { cardClass: "w-11/12 md:w-7/12 lg:w-6/12 xl:w-4/12 shadow-2xl" }, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/SectionFullScreen.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
