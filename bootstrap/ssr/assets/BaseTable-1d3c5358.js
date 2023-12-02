import { ref, computed, unref, mergeProps, useSSRContext, withCtx, isRef, openBlock, createBlock, createCommentVNode, renderSlot, useSlots, createVNode, resolveDynamicComponent } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import { mdiEyeOutline, mdiSquareEditOutline, mdiTrashCanOutline } from "@mdi/js";
import { e as _sfc_main$4, c as _sfc_main$5, v as can } from "../app.js";
import { Link } from "@inertiajs/vue3";
import "moment/moment.js";
import { M as Model } from "./index-d5896b37.js";
import { _ as _sfc_main$6 } from "./ModelData-c2931371.js";
import { _ as _sfc_main$3 } from "./CardBoxModal-a656ae9f.js";
const _sfc_main$2 = {
  __name: "ActionConfirmComponent",
  __ssrInlineRender: true,
  props: {
    modelValue: Boolean
  },
  setup(__props) {
    ref(true);
    let props = __props;
    let computedValue = computed(
      {
        get: () => props.modelValue,
        set: (value) => emit("update:modelValue", value)
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(computedValue)) {
        _push(ssrRenderComponent(_sfc_main$3, mergeProps({
          "button-label": _ctx.__("continue"),
          "has-cancel": true,
          "model-value": unref(computedValue),
          title: _ctx.__("are_you_sure"),
          button: "danger",
          onCancel: ($event) => {
            __props.modelValue = false;
            _ctx.$emit("cancel");
          },
          onConfirm: ($event) => {
            __props.modelValue = false;
            _ctx.$emit("confirm");
          }
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/ActionConfirmComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
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
    model: String,
    data: Object
  },
  setup(__props) {
    let showEdit = ref(false);
    let showDelete = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$4, {
        "no-wrap": "",
        type: "justify-end lg:justify-start"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.hasShow) {
              _push2(ssrRenderComponent(_sfc_main$5, {
                disabled: __props.model ? !unref(can)(`${_ctx.modelResolver(__props.model)}.show`) : false,
                icon: unref(mdiEyeOutline),
                color: "contrast",
                small: "",
                onClick: ($event) => unref(Model).show(__props.model, __props.data.id)
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.hasEdit) {
              _push2(ssrRenderComponent(_sfc_main$5, {
                disabled: __props.model ? !unref(can)(`${_ctx.modelResolver(__props.model)}.edit`) : false,
                icon: unref(mdiSquareEditOutline),
                color: "info",
                small: "",
                onClick: ($event) => isRef(showEdit) ? showEdit.value = true : showEdit = true
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.hasDestroy) {
              _push2(ssrRenderComponent(_sfc_main$5, {
                disabled: __props.model ? !unref(can)(`${_ctx.modelResolver(__props.model)}.delete`) : false,
                icon: unref(mdiTrashCanOutline),
                color: "danger",
                small: "",
                onClick: ($event) => isRef(showDelete) ? showDelete.value = true : showDelete = true
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              __props.hasShow ? (openBlock(), createBlock(_sfc_main$5, {
                key: 0,
                disabled: __props.model ? !unref(can)(`${_ctx.modelResolver(__props.model)}.show`) : false,
                icon: unref(mdiEyeOutline),
                color: "contrast",
                small: "",
                onClick: ($event) => unref(Model).show(__props.model, __props.data.id)
              }, null, 8, ["disabled", "icon", "onClick"])) : createCommentVNode("", true),
              __props.hasEdit ? (openBlock(), createBlock(_sfc_main$5, {
                key: 1,
                disabled: __props.model ? !unref(can)(`${_ctx.modelResolver(__props.model)}.edit`) : false,
                icon: unref(mdiSquareEditOutline),
                color: "info",
                small: "",
                onClick: ($event) => isRef(showEdit) ? showEdit.value = true : showEdit = true
              }, null, 8, ["disabled", "icon", "onClick"])) : createCommentVNode("", true),
              __props.hasDestroy ? (openBlock(), createBlock(_sfc_main$5, {
                key: 2,
                disabled: __props.model ? !unref(can)(`${_ctx.modelResolver(__props.model)}.delete`) : false,
                icon: unref(mdiTrashCanOutline),
                color: "danger",
                small: "",
                onClick: ($event) => isRef(showDelete) ? showDelete.value = true : showDelete = true
              }, null, 8, ["disabled", "icon", "onClick"])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      if (unref(showEdit)) {
        _push(ssrRenderComponent(_sfc_main$6, {
          data: __props.data,
          model: __props.model,
          show: unref(showEdit),
          operation: "edit",
          onCancel: ($event) => isRef(showEdit) ? showEdit.value = false : showEdit = false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$2, {
        modelValue: unref(showDelete),
        "onUpdate:modelValue": ($event) => isRef(showDelete) ? showDelete.value = $event : showDelete = $event,
        onConfirm: ($event) => unref(Model).delete(__props.model, __props.data.id)
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/TableOptions.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BaseTable_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "BaseTable",
  __ssrInlineRender: true,
  props: {
    headers: Array,
    pagination: Object,
    isDraggable: Boolean
  },
  setup(__props) {
    useSlots();
    function calculatedUrl(paginationUrl) {
      if (paginationUrl !== null) {
        paginationUrl = new URL(paginationUrl);
        let paginationParams = new URLSearchParams(paginationUrl.search);
        let pageParams = new URLSearchParams(document.location.search);
        pageParams.forEach((value, key) => {
          if (key !== "page")
            paginationParams.set(key, value);
        });
        paginationUrl.search = paginationParams;
        return paginationUrl.href;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><table class="table-auto border-collapse"><thead><tr><!--[-->`);
      ssrRenderList(__props.headers, (header, key) => {
        _push(`<th>${ssrInterpolate(header)}</th>`);
      });
      _push(`<!--]--></tr></thead>`);
      if (!__props.isDraggable) {
        _push(`<tbody>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`<tr><td class="text-center w- py-24 dark:text-slate-400" colspan="100%">${ssrInterpolate(_ctx.__("no_data"))}</td></tr>`);
        }, _push, _parent);
        _push(`</tbody>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`<tr><td class="text-center w- py-24 dark:text-slate-400" colspan="100%">${ssrInterpolate(_ctx.__("no_data"))}</td></tr>`);
        }, _push, _parent);
      }
      _push(`</table>`);
      if (__props.pagination) {
        _push(`<div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"><div class="justify-between items-center flex md:flex-row flex-col gap-3"><div class="flex items-center justify-center"><div class="flex items-center justify-start flex-wrap"><!--[-->`);
        ssrRenderList(__props.pagination.links, (link, key) => {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(link.url && !link.active ? unref(Link) : "p"), {
            key,
            class: [
              {
                "dark:text-slate-600 text-gray-400 cursor-not-allowed ": !link.url,
                "hover:bg-gray-100 dark:hover:bg-slate-800": link.url,
                "bg-gray-200 dark:bg-slate-800": link.active
              },
              "inline-flex justify-center items-center rounded px-3 py-1 text-sm me-3"
            ],
            href: calculatedUrl(link.url)
          }, null), _parent);
        });
        _push(`<!--]--></div></div><div class="flex-col justify-center items-center text-center"><div class="text-xsm">${ssrInterpolate(_ctx.__("result_from", {
          from: __props.pagination.from ?? 0,
          to: __props.pagination.to ?? 0,
          total: __props.pagination.total
        }))}</div><div class="text-xsm">${ssrInterpolate(_ctx.__("page_from", {
          current: __props.pagination.current_page,
          total: __props.pagination.last_page
        }))}</div></div></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/BaseTable.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$1 as a
};
