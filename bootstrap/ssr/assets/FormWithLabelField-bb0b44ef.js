import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { c as _sfc_main$1 } from "../app.js";
const _sfc_main = {
  __name: "FormWithLabelField",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      default: null
    },
    errors: String,
    cols: {
      type: Object,
      default: null
    },
    button: {
      type: Object,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mt-5 last:mb-0 p-2 rounded-md dark:border-slate-800 border-gray-200 border" }, _attrs))}><div class="flex items-center justify-between">`);
      if (__props.label) {
        _push(`<label class="font-extrabold rounded px-5 me-3 mb-2 inline-flex justify-center p-1.5 items-center border text-black bg-gray-50 dark:bg-slate-800 dark:text-white dark:border-gray-700">${ssrInterpolate(__props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.button) {
        _push(ssrRenderComponent(_sfc_main$1, {
          color: __props.button.color,
          icon: __props.button.icon,
          onClick: ($event) => _ctx.$emit("buttonClick")
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${ssrRenderClass(`grid gap-x-5 grid-cols-${((_a = __props.cols) == null ? void 0 : _a.sm) ?? "1"} lg:grid-cols-${((_b = __props.cols) == null ? void 0 : _b.lg) ?? 1}`)}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (__props.errors) {
        _push(`<div class="text-xs text-red-500 dark:text-red-400 mt-1">${ssrInterpolate(__props.errors)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/FormWithLabelField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
