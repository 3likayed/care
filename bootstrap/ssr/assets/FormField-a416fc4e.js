import { mergeProps, unref, useSSRContext, computed, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSlots } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { n as colorsBgLight, e as _sfc_main$3, a as _sfc_main$4, c as _sfc_main$5 } from "../app.js";
const _sfc_main$2 = {
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/NotificationBarInCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "FormValidationErrors",
  __ssrInlineRender: true,
  setup(__props) {
    const errors = computed(() => usePage().props.errors);
    const hasErrors = computed(() => Object.keys(errors.value).length > 0);
    return (_ctx, _push, _parent, _attrs) => {
      if (hasErrors.value) {
        _push(ssrRenderComponent(_sfc_main$2, mergeProps({ color: "danger" }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<b${_scopeId}>للأسف!! هناك شيء غير صحيح.</b><!--[-->`);
              ssrRenderList(errors.value, (error, key) => {
                _push2(`<span${_scopeId}>${ssrInterpolate(error)}</span>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                createVNode("b", null, "للأسف!! هناك شيء غير صحيح."),
                (openBlock(true), createBlock(Fragment, null, renderList(errors.value, (error, key) => {
                  return openBlock(), createBlock("span", { key }, toDisplayString(error), 1);
                }), 128))
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/FormValidationErrors.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "FormField",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      default: null
    },
    customWrapperClass: String,
    labelFor: {
      type: String,
      default: null
    },
    errors: {
      type: String,
      default: null
    },
    actions: Array | Object,
    withDivider: Boolean,
    help: {
      type: String,
      default: null
    }
  },
  emits: ["action"],
  setup(__props, { emit }) {
    const props = __props;
    const slots = useSlots();
    function doAction(action, key) {
      emit("action", action, key);
    }
    const wrapperClass = computed(() => {
      const base = [];
      const slotsLength = slots.default().length;
      if (props.customWrapperClass) {
        return props.customWrapperClass;
      }
      if (slotsLength > 1) {
        base.push("grid grid-cols-1 gap-3 items-start");
      }
      if (slotsLength === 2) {
        base.push("md:grid-cols-2");
      }
      return base;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="justify-between items-start mb-3">`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", __props.labelFor)} class="block font-medium mb-2">${ssrInterpolate(__props.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${ssrRenderClass(wrapperClass.value)}">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
      if (__props.help && !__props.errors) {
        _push(`<div class="text-xs text-gray-600 dark:text-slate-300 mt-1">${ssrInterpolate(__props.help)}</div>`);
      } else {
        _push(`<!---->`);
      }
      if (__props.errors) {
        _push(`<div class="text-xs text-red-500 dark:text-red-400 mt-1">${ssrInterpolate(__props.errors)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><!--[-->`);
      ssrRenderList(__props.actions, (action, key) => {
        _push(ssrRenderComponent(_sfc_main$3, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$4, {
                key,
                color: action.color,
                icon: action.icon,
                label: action.label,
                onClick: ($event) => doAction(key, action.key)
              }, null, _parent2, _scopeId));
            } else {
              return [
                (openBlock(), createBlock(_sfc_main$4, {
                  key,
                  color: action.color,
                  icon: action.icon,
                  label: action.label,
                  onClick: ($event) => doAction(key, action.key)
                }, null, 8, ["color", "icon", "label", "onClick"]))
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      if (__props.withDivider) {
        _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/FormField.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a,
  _sfc_main$2 as b
};
