import { mergeProps, unref, useSSRContext, computed, useSlots } from "vue";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
import { k as _sfc_main$2, o as colorsBgLight, q as colorsText } from "../app.js";
const _sfc_main$1 = {
  __name: "IconRounded",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: null
    },
    w: {
      type: String,
      default: "w-12"
    },
    h: {
      type: String,
      default: "h-12"
    },
    bg: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
        class: [
          __props.bg ? unref(colorsBgLight)[__props.color] : [unref(colorsText)[__props.color], "bg-gray-50 dark:bg-slate-800"],
          "rounded-full"
        ],
        h: __props.h,
        path: __props.icon,
        w: __props.w,
        size: "24"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/IconRounded.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "SectionTitleLineWithButton",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: null
    },
    title: {
      type: String,
      required: false
    },
    main: Boolean
  },
  setup(__props) {
    const hasSlot = computed(() => useSlots().default);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({
        class: [{ "justify-between": __props.title, "justify-end": !__props.title }, "mb-6 flex items-center"]
      }, _attrs))}><div class="flex items-center justify-end">`);
      if (__props.icon && __props.main) {
        _push(ssrRenderComponent(_sfc_main$1, {
          icon: __props.icon,
          bg: "",
          class: "me-3",
          color: "light"
        }, null, _parent));
      } else if (__props.icon) {
        _push(ssrRenderComponent(_sfc_main$2, {
          path: __props.icon,
          class: "me-2",
          size: "20"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (__props.title) {
        _push(`<h1 class="${ssrRenderClass([__props.main ? "text-2xl md:text-3xl" : "text-lg mm:text-xl", "leading-tight"])}">${ssrInterpolate(__props.title)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (hasSlot.value) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      _push(`</section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/SectionTitleLineWithButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
