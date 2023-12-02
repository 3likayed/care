import { useSlots, computed, withCtx, openBlock, createBlock, useSSRContext } from "vue";
import { ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderList } from "vue/server-renderer";
import { c as _sfc_main$1, e as _sfc_main$2, b as _sfc_main$3 } from "../app.js";
const _sfc_main = {
  __name: "FormField",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      default: null
    },
    classAddon: String,
    labelFor: {
      type: String,
      default: null
    },
    errors: {
      type: String,
      default: null
    },
    actions: Array | Object,
    button: {
      type: Object,
      default: null
    },
    withDivider: Boolean,
    help: {
      type: String,
      default: null
    },
    hasBorder: {
      type: Boolean,
      default: true
    }
  },
  emits: ["action", "buttonClick"],
  setup(__props, { emit: __emit }) {
    let props = __props;
    const slots = useSlots();
    const emit = __emit;
    function doAction(action, key) {
      emit("action", action, key);
    }
    const wrapperClass = computed(() => {
      const base = [];
      const slotsLength = slots.default().length;
      if (props.classAddon) {
        return props.classAddon;
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
      _push(`<!--[--><div class="${ssrRenderClass([{ "rounded-md dark:border-slate-800 border-gray-200 border": __props.hasBorder }, "justify-between items-start mb-3 p-2"])}"><div class="flex items-center justify-between">`);
      if (__props.label) {
        _push(`<label${ssrRenderAttr("for", __props.labelFor)} class="block font-medium mb-2">${ssrInterpolate(__props.label)}</label>`);
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
      _push(`</div><div class="${ssrRenderClass(wrapperClass.value)}">`);
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
      _push(`<!--[-->`);
      ssrRenderList(__props.actions, (action, key) => {
        _push(ssrRenderComponent(_sfc_main$2, {
          "class-addon": "mt-3",
          mb: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                key,
                color: action.color,
                icon: action.icon,
                label: action.label,
                onClick: ($event) => doAction(key, action.key)
              }, null, _parent2, _scopeId));
            } else {
              return [
                (openBlock(), createBlock(_sfc_main$1, {
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
      _push(`<!--]--></div>`);
      if (__props.withDivider) {
        _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
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
  _sfc_main as _
};
