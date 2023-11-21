import { mergeProps, withCtx, unref, openBlock, createBlock, createCommentVNode, renderSlot, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { mdiEyeOutline, mdiSquareEditOutline, mdiTrashCanOutline } from "@mdi/js";
import { e as _sfc_main$1, a as _sfc_main$2, r as can } from "../app.js";
const _sfc_main = {
  __name: "TableOptions",
  __ssrInlineRender: true,
  props: {
    hasEdit: {
      type: Boolean,
      default: true
    },
    hasDestroy: {
      type: Boolean,
      default: true
    },
    hasShow: {
      type: Boolean,
      default: true
    },
    model: String
  },
  emits: ["show", "edit", "destroy"],
  setup(__props, { emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        "no-wrap": "",
        type: "justify-end lg:justify-start"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.hasShow) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                icon: unref(mdiEyeOutline),
                disabled: __props.model ? !unref(can)(`${__props.model}.show`) : false,
                color: "contrast",
                small: "",
                onClick: ($event) => unref(emit)("show")
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.hasEdit) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                disabled: __props.model ? !unref(can)(`${__props.model}.edit`) : false,
                icon: unref(mdiSquareEditOutline),
                color: "info",
                small: "",
                onClick: ($event) => unref(emit)("edit")
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.hasDestroy) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                icon: unref(mdiTrashCanOutline),
                disabled: __props.model ? !unref(can)(`${__props.model}.delete`) : false,
                color: "danger",
                small: "",
                onClick: ($event) => unref(emit)("destroy")
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              __props.hasShow ? (openBlock(), createBlock(_sfc_main$2, {
                key: 0,
                icon: unref(mdiEyeOutline),
                disabled: __props.model ? !unref(can)(`${__props.model}.show`) : false,
                color: "contrast",
                small: "",
                onClick: ($event) => unref(emit)("show")
              }, null, 8, ["icon", "disabled", "onClick"])) : createCommentVNode("", true),
              __props.hasEdit ? (openBlock(), createBlock(_sfc_main$2, {
                key: 1,
                disabled: __props.model ? !unref(can)(`${__props.model}.edit`) : false,
                icon: unref(mdiSquareEditOutline),
                color: "info",
                small: "",
                onClick: ($event) => unref(emit)("edit")
              }, null, 8, ["disabled", "icon", "onClick"])) : createCommentVNode("", true),
              __props.hasDestroy ? (openBlock(), createBlock(_sfc_main$2, {
                key: 2,
                icon: unref(mdiTrashCanOutline),
                disabled: __props.model ? !unref(can)(`${__props.model}.delete`) : false,
                color: "danger",
                small: "",
                onClick: ($event) => unref(emit)("destroy")
              }, null, 8, ["icon", "disabled", "onClick"])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/TableOptions.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
