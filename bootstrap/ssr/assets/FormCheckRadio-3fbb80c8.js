import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrIncludeBooleanAttr, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "FormCheckRadio",
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      default: "checkbox",
      validator: (value) => ["checkbox", "radio", "switch"].includes(value)
    },
    label: {
      type: String,
      default: null
    },
    modelValue: {
      type: [Array, String, Number, Boolean],
      default: null
    },
    checked: Boolean,
    value: {
      type: [String, Number, Boolean]
    },
    name: String
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const inputType = computed(
      () => props.type === "radio" ? "radio" : "checkbox"
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<label${ssrRenderAttrs(mergeProps({
        class: [__props.type, "me-6 mb-3 last:me-0"]
      }, _attrs))}><input${ssrIncludeBooleanAttr(__props.checked) ? " checked" : ""}${ssrRenderAttr("name", __props.name)}${ssrRenderAttr("type", inputType.value)}${ssrRenderAttr("value", __props.value)}><span class="rtl:flex-row-reverse check"></span><span class="mx-2">${ssrInterpolate(__props.label)}</span></label>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/FormCheckRadio.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
