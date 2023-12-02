import { mergeProps, useSSRContext, computed } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { k as _sfc_main$2, n as colorsOutline, o as colorsBgLight } from "../app.js";
const _sfc_main$1 = {
  __name: "PillTagPlain",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: null
    },
    small: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [[__props.small ? "text-xs" : "text-sm"], "inline-flex items-center capitalize leading-none"]
      }, _attrs))}>`);
      if (__props.icon) {
        _push(ssrRenderComponent(_sfc_main$2, {
          class: __props.small ? "ms-1" : "ms-2",
          path: __props.icon,
          size: __props.small ? 14 : null,
          h: "h-4",
          w: "w-4"
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<span>${ssrInterpolate(__props.label)}</span></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/PillTagPlain.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "PillTag",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: null
    },
    small: Boolean,
    outline: Boolean
  },
  setup(__props) {
    const props = __props;
    const componentClass = computed(() => [
      props.small ? "py-1 px-3" : "py-1.5 px-4",
      props.outline ? colorsOutline[props.color] : colorsBgLight[props.color]
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        class: [componentClass.value, "border rounded-full"],
        icon: __props.icon,
        label: __props.label,
        small: __props.small
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/PillTag.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
