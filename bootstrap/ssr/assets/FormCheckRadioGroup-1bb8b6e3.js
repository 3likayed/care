import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { useSSRContext } from "vue";
const _sfc_main = {
  __name: "FormCheckRadioGroup",
  __ssrInlineRender: true,
  props: {
    isColumn: Boolean,
    label: String,
    labelFor: String
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", __props.labelFor)} class="block font-bold mb-2">${ssrInterpolate(__props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass([{ "flex-col": __props.isColumn }, "flex justify-start flex-wrap -mb-3"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/FormCheckRadioGroup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
