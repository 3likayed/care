import { defineAsyncComponent, createVNode, resolveDynamicComponent, unref, mergeProps, useSSRContext } from "vue";
import { ssrRenderVNode } from "vue/server-renderer";
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const _sfc_main = {
  __name: "ModelData",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    },
    addonData: Object,
    model: String,
    isModal: {
      type: Boolean,
      default: true
    },
    operation: String
  },
  setup(__props) {
    let props = __props;
    const firstLetter = props.model.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = props.model.slice(1);
    const capitalizedWord = firstLetterCap + remainingLetters;
    let component = defineAsyncComponent(() => __variableDynamicImportRuntimeHelper(/* @__PURE__ */ Object.assign({ "./Employee/EmployeeData.vue": () => import("./EmployeeData-beeb463e.js"), "./Patient/PatientData.vue": () => import("./PatientData-2cfe9f34.js"), "./Reservation/ReservationData.vue": () => import("./ReservationData-e736197d.js"), "./ReservationType/ReservationTypeData.vue": () => import("./ReservationTypeData-4d651616.js"), "./Role/RoleData.vue": () => import("./RoleData-2a4a22d4.js") }), `./${capitalizedWord}/${capitalizedWord}Data.vue`));
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(component)), mergeProps({
        data: __props.data,
        "is-modal": __props.isModal,
        operation: __props.operation,
        onCancel: ($event) => _ctx.$emit("cancel")
      }, _attrs), null), _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Models/ModelData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  __variableDynamicImportRuntimeHelper as a
};
