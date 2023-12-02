import { ref, onMounted, watch, unref, mergeProps, withCtx, createVNode, isRef, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./CardBoxModal-a656ae9f.js";
import { mdiAccount } from "@mdi/js";
import { _ as _sfc_main$2 } from "./FormField-df0fbba2.js";
import { a as _sfc_main$3 } from "../app.js";
import { useForm } from "@inertiajs/vue3";
import "ziggy-js";
import "pluralize";
import "moment/moment.js";
import { M as Model } from "./index-d5896b37.js";
import { debounce } from "lodash";
import moment from "moment";
import "./CardBox-8f14b1bf.js";
import "./FormValidationErrors-94aef0ec.js";
import "pinia";
/* empty css                                 */import "axios";
import "@tinymce/tinymce-vue";
import "primevue/dropdown/dropdown.esm.js";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "primevue/config/config.esm.js";
const _sfc_main = {
  __name: "ReservationData",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    },
    addonData: Object,
    show: Boolean,
    operation: String,
    isModal: {
      type: Boolean,
      default: true
    }
  },
  setup(__props) {
    var _a, _b;
    let props = __props;
    let model = "reservation";
    let form = useForm({
      date: (_a = props.data) == null ? void 0 : _a.date,
      patient_id: (_b = props.data) == null ? void 0 : _b.patient_id,
      reservation_type_id: props.data.reservation_type_id
    });
    let reservationTypes = ref();
    let patients = ref();
    let patientFilterValue = ref();
    onMounted(() => {
      const fetchPatients = (searchData) => {
        searchData.id = form.patient_id;
        Model.fetch("patients", searchData).then((data) => patients.value = data);
      };
      Model.fetch("reservationType").then((data) => reservationTypes.value = data);
      fetchPatients({});
      watch(patientFilterValue, debounce(async function(value) {
        if (value)
          fetchPatients({ search: value });
      }, 500));
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.can(`${_ctx.modelResolver(unref(model))}.${__props.operation}`)) {
        _push(ssrRenderComponent(_sfc_main$1, mergeProps({
          "button-label": _ctx.__(__props.operation),
          "has-cancel": __props.isModal,
          "has-errors": unref(form).hasErrors,
          "is-form": true,
          "is-modal": __props.isModal,
          "model-value": true,
          title: _ctx.__(__props.operation + "_field", { field: unref(model) }),
          onCancel: ($event) => _ctx.$emit("cancel"),
          onConfirm: ($event) => unref(Model).submit(__props.operation, unref(model), unref(form), __props.data.id)
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                errors: unref(form).errors.reservation_type_id,
                label: _ctx.__("reservationType"),
                "label-for": "reservation_type_id"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      modelValue: unref(form).reservation_type_id,
                      "onUpdate:modelValue": ($event) => unref(form).reservation_type_id = $event,
                      icon: unref(mdiAccount),
                      options: unref(reservationTypes),
                      name: "reservation_type_id",
                      required: "",
                      type: "select"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$3, {
                        modelValue: unref(form).reservation_type_id,
                        "onUpdate:modelValue": ($event) => unref(form).reservation_type_id = $event,
                        icon: unref(mdiAccount),
                        options: unref(reservationTypes),
                        name: "reservation_type_id",
                        required: "",
                        type: "select"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "icon", "options"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                errors: unref(form).errors.patient_id,
                label: _ctx.__("select"),
                "label-for": "select"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      modelValue: unref(form).patient_id,
                      "onUpdate:modelValue": ($event) => unref(form).patient_id = $event,
                      icon: unref(mdiAccount),
                      options: unref(patients),
                      autocomplete: "name",
                      name: "name",
                      required: "",
                      type: "select",
                      onFilter: (value) => isRef(patientFilterValue) ? patientFilterValue.value = value.value : patientFilterValue = value.value
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$3, {
                        modelValue: unref(form).patient_id,
                        "onUpdate:modelValue": ($event) => unref(form).patient_id = $event,
                        icon: unref(mdiAccount),
                        options: unref(patients),
                        autocomplete: "name",
                        name: "name",
                        required: "",
                        type: "select",
                        onFilter: (value) => isRef(patientFilterValue) ? patientFilterValue.value = value.value : patientFilterValue = value.value
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "icon", "options", "onFilter"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                errors: unref(form).errors.date,
                label: _ctx.__("date"),
                "label-for": "date"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      modelValue: unref(form).date,
                      "onUpdate:modelValue": ($event) => unref(form).date = $event,
                      icon: unref(mdiAccount),
                      min: unref(moment)().format("YYYY-MM-DDTHH:MM"),
                      autocomplete: "name",
                      name: "date",
                      required: "",
                      type: "datetime-local"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$3, {
                        modelValue: unref(form).date,
                        "onUpdate:modelValue": ($event) => unref(form).date = $event,
                        icon: unref(mdiAccount),
                        min: unref(moment)().format("YYYY-MM-DDTHH:MM"),
                        autocomplete: "name",
                        name: "date",
                        required: "",
                        type: "datetime-local"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "icon", "min"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$2, {
                  errors: unref(form).errors.reservation_type_id,
                  label: _ctx.__("reservationType"),
                  "label-for": "reservation_type_id"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$3, {
                      modelValue: unref(form).reservation_type_id,
                      "onUpdate:modelValue": ($event) => unref(form).reservation_type_id = $event,
                      icon: unref(mdiAccount),
                      options: unref(reservationTypes),
                      name: "reservation_type_id",
                      required: "",
                      type: "select"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "icon", "options"])
                  ]),
                  _: 1
                }, 8, ["errors", "label"]),
                createVNode(_sfc_main$2, {
                  errors: unref(form).errors.patient_id,
                  label: _ctx.__("select"),
                  "label-for": "select"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$3, {
                      modelValue: unref(form).patient_id,
                      "onUpdate:modelValue": ($event) => unref(form).patient_id = $event,
                      icon: unref(mdiAccount),
                      options: unref(patients),
                      autocomplete: "name",
                      name: "name",
                      required: "",
                      type: "select",
                      onFilter: (value) => isRef(patientFilterValue) ? patientFilterValue.value = value.value : patientFilterValue = value.value
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "icon", "options", "onFilter"])
                  ]),
                  _: 1
                }, 8, ["errors", "label"]),
                createVNode(_sfc_main$2, {
                  errors: unref(form).errors.date,
                  label: _ctx.__("date"),
                  "label-for": "date"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$3, {
                      modelValue: unref(form).date,
                      "onUpdate:modelValue": ($event) => unref(form).date = $event,
                      icon: unref(mdiAccount),
                      min: unref(moment)().format("YYYY-MM-DDTHH:MM"),
                      autocomplete: "name",
                      name: "date",
                      required: "",
                      type: "datetime-local"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "icon", "min"])
                  ]),
                  _: 1
                }, 8, ["errors", "label"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Models/Reservation/ReservationData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
