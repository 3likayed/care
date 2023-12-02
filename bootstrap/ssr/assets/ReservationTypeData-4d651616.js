import { unref, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
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
  __name: "ReservationTypeData",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    },
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
    let model = "reservationType";
    let form = useForm({
      name: (_a = props.data) == null ? void 0 : _a.name,
      price: (_b = props.data) == null ? void 0 : _b.price
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
                errors: unref(form).errors.name,
                label: _ctx.__("name"),
                "label-for": "name"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      icon: unref(mdiAccount),
                      autocomplete: "name",
                      name: "name",
                      required: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$3, {
                        modelValue: unref(form).name,
                        "onUpdate:modelValue": ($event) => unref(form).name = $event,
                        icon: unref(mdiAccount),
                        autocomplete: "name",
                        name: "name",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                errors: unref(form).errors.price,
                label: _ctx.__("price"),
                "label-for": "price"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      modelValue: unref(form).price,
                      "onUpdate:modelValue": ($event) => unref(form).price = $event,
                      icon: unref(mdiAccount),
                      autocomplete: "price",
                      name: "price",
                      required: "",
                      type: "number"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$3, {
                        modelValue: unref(form).price,
                        "onUpdate:modelValue": ($event) => unref(form).price = $event,
                        icon: unref(mdiAccount),
                        autocomplete: "price",
                        name: "price",
                        required: "",
                        type: "number"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$2, {
                  errors: unref(form).errors.name,
                  label: _ctx.__("name"),
                  "label-for": "name"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$3, {
                      modelValue: unref(form).name,
                      "onUpdate:modelValue": ($event) => unref(form).name = $event,
                      icon: unref(mdiAccount),
                      autocomplete: "name",
                      name: "name",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                  ]),
                  _: 1
                }, 8, ["errors", "label"]),
                createVNode(_sfc_main$2, {
                  errors: unref(form).errors.price,
                  label: _ctx.__("price"),
                  "label-for": "price"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$3, {
                      modelValue: unref(form).price,
                      "onUpdate:modelValue": ($event) => unref(form).price = $event,
                      icon: unref(mdiAccount),
                      autocomplete: "price",
                      name: "price",
                      required: "",
                      type: "number"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Models/ReservationType/ReservationTypeData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
