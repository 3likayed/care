import { mergeProps, unref, useSSRContext, computed, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { o as colorsBgLight } from "../app.js";
const _sfc_main$1 = {
  __name: "NotificationBarInCard",
  __ssrInlineRender: true,
  props: {
    color: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col mb-6 -mt-6 -ms-6 -me-6 animate-fade-in" }, _attrs))}><div class="${ssrRenderClass([[unref(colorsBgLight)[__props.color]], "rounded-t-2xl flex flex-col p-6 transition-colors"])}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/NotificationBarInCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "FormValidationErrors",
  __ssrInlineRender: true,
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    return (_ctx, _push, _parent, _attrs) => {
      if (hasErrors.value) {
        _push(ssrRenderComponent(_sfc_main$1, mergeProps({ color: "danger" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="grid text-start"${_scopeId}><b${_scopeId}>للأسف!! هناك شيء غير صحيح.</b><!--[-->`);
              ssrRenderList(errors.value, (error, key) => {
                _push2(`<span${_scopeId}>${ssrInterpolate(error)}</span>`);
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "grid text-start" }, [
                  createVNode("b", null, "للأسف!! هناك شيء غير صحيح."),
                  (openBlock(true), createBlock(Fragment, null, renderList(errors.value, (error, key) => {
                    return openBlock(), createBlock("span", { key }, toDisplayString(error), 1);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/FormValidationErrors.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
