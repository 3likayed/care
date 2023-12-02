import { ref, mergeProps, withCtx, unref, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { e as _sfc_main$1, c as _sfc_main$2 } from "../app.js";
const _sfc_main = {
  __name: "StepsComponent",
  __ssrInlineRender: true,
  props: {
    steps: Object | Array,
    modelValue: Number
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    let active = ref(0);
    let emit = __emit;
    function stepChange(key) {
      active.value = key;
      emit("update:modelValue", key);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ class: "flex-row" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(__props.steps, (step, key) => {
              _push2(ssrRenderComponent(_sfc_main$2, {
                key,
                active: key === unref(active),
                color: key === unref(active) ? "contrast" : "lightDark",
                label: step,
                class: "flex-auto text-center",
                outline: "",
                onClick: ($event) => stepChange(key)
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(__props.steps, (step, key) => {
                return openBlock(), createBlock(_sfc_main$2, {
                  key,
                  active: key === unref(active),
                  color: key === unref(active) ? "contrast" : "lightDark",
                  label: step,
                  class: "flex-auto text-center",
                  outline: "",
                  onClick: ($event) => stepChange(key)
                }, null, 8, ["active", "color", "label", "onClick"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/StepsComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
