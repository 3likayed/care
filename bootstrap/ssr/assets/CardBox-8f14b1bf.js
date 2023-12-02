import { mergeProps, useSSRContext, useSlots, computed, createVNode, resolveDynamicComponent, withCtx, renderSlot, openBlock, createBlock, Fragment, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderVNode, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main$2 = {
  __name: "CardBoxComponentBody",
  __ssrInlineRender: true,
  props: {
    noPadding: Boolean
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [{ "p-6": !__props.noPadding }, "flex-1"]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/CardBoxComponentBody.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "px-6 pb-6" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/CardBoxComponentFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CardBoxComponentFooter = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = {
  __name: "CardBox",
  __ssrInlineRender: true,
  props: {
    rounded: {
      type: String,
      default: "rounded-2xl"
    },
    flex: {
      type: String,
      default: "flex-col"
    },
    hasComponentLayout: Boolean,
    hasTable: Boolean,
    isForm: Boolean,
    isHoverable: Boolean,
    isModal: Boolean
  },
  emits: ["submit"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
    const slots = useSlots();
    const hasFooterSlot = computed(() => slots.footer && !!slots.footer());
    const componentClass = computed(() => {
      const base = [
        props.rounded,
        props.flex,
        props.isModal ? "dark:bg-slate-900" : "dark:bg-slate-900/70"
      ];
      if (props.isHoverable) {
        base.push("hover:shadow-lg transition-shadow duration-500");
      }
      return base;
    });
    const submit = (event) => {
      emit("submit", event);
    };
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.isForm ? "form" : "div"), mergeProps({
        class: [componentClass.value, "bg-white flex"],
        onSubmit: submit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.hasComponentLayout) {
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_sfc_main$2, { "no-padding": __props.hasTable }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  } else {
                    return [
                      renderSlot(_ctx.$slots, "default")
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
              if (hasFooterSlot.value) {
                _push2(ssrRenderComponent(CardBoxComponentFooter, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderSlot(_ctx.$slots, "footer", {}, null, _push3, _parent3, _scopeId2);
                    } else {
                      return [
                        renderSlot(_ctx.$slots, "footer")
                      ];
                    }
                  }),
                  _: 3
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<!--]-->`);
            }
          } else {
            return [
              __props.hasComponentLayout ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                createVNode(_sfc_main$2, { "no-padding": __props.hasTable }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "default")
                  ]),
                  _: 3
                }, 8, ["no-padding"]),
                hasFooterSlot.value ? (openBlock(), createBlock(CardBoxComponentFooter, { key: 0 }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "footer")
                  ]),
                  _: 3
                })) : createCommentVNode("", true)
              ], 64))
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/CardBox.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
