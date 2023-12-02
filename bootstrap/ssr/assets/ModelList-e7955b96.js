import { a as __variableDynamicImportRuntimeHelper, _ as _sfc_main$3 } from "./ModelData-c2931371.js";
import { ref, computed, defineAsyncComponent, useSlots, unref, withCtx, openBlock, createBlock, createCommentVNode, createVNode, resolveDynamicComponent, isRef, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderVNode, ssrRenderSlot } from "vue/server-renderer";
import { mdiLockAlertOutline, mdiPlusCircle } from "@mdi/js";
import { c as _sfc_main$2 } from "../app.js";
import { _ as _sfc_main$1 } from "./SectionTitleLineWithButton-20201868.js";
const _sfc_main = {
  __name: "ModelList",
  __ssrInlineRender: true,
  props: {
    data: Object,
    addonData: {
      type: Object,
      default: {}
    },
    model: String,
    hasPagination: Boolean,
    hasSearch: Boolean,
    hasCreate: {
      type: Boolean,
      default: Boolean
    }
  },
  emits: ["create"],
  setup(__props, { emit: __emit }) {
    let props = __props;
    let showCreate = ref(false);
    const firstLetterCap = props.model.charAt(0).toUpperCase();
    const remainingLetters = props.model.slice(1);
    const capitalizedWord = firstLetterCap + remainingLetters;
    let [items, pagination] = props.hasPagination ? [
      computed(() => props.data.data),
      computed(() => props.data.meta)
    ] : [
      computed(() => props.data),
      computed(() => null)
    ];
    let listComponent = defineAsyncComponent(() => __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./Employee/EmployeeList.vue": () => import("./EmployeeList-44134e54.js"), "./Patient/PatientList.vue": () => import("./PatientList-824673c5.js"), "./Reservation/ReservationList.vue": () => import("./ReservationList-47318945.js"), "./ReservationType/ReservationTypeList.vue": () => import("./ReservationTypeList-bcce28bb.js"), "./Role/RoleList.vue": () => import("./RoleList-044443ae.js") }), `./${capitalizedWord}/${capitalizedWord}List.vue`));
    let emit = __emit;
    let slots = useSlots();
    let customCreate = slots["create"];
    const click = () => {
      if (!customCreate) {
        showCreate.value = true;
      } else {
        emit("create");
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        icon: unref(mdiLockAlertOutline),
        title: _ctx.__(_ctx.modelResolver(__props.model)),
        main: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.can(`${_ctx.modelResolver(__props.model)}.create`)) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                icon: unref(mdiPlusCircle),
                color: "success",
                onClick: click
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.can(`${_ctx.modelResolver(__props.model)}.create`) ? (openBlock(), createBlock(_sfc_main$2, {
                key: 0,
                icon: unref(mdiPlusCircle),
                color: "success",
                onClick: click
              }, null, 8, ["icon"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(listComponent)), {
        data: unref(items),
        "has-search": __props.hasSearch,
        pagination: unref(props).hasPagination ? __props.data.meta : null
      }, null), _parent);
      ssrRenderSlot(_ctx.$slots, "create", {}, () => {
        if (unref(showCreate) && !unref(customCreate)) {
          _push(ssrRenderComponent(_sfc_main$3, {
            data: unref(items),
            model: __props.model,
            show: unref(showCreate),
            operation: "create",
            onCancel: ($event) => isRef(showCreate) ? showCreate.value = false : showCreate = false
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Models/ModelList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
