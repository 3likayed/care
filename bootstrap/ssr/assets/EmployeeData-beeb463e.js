import { unref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./CardBoxModal-a656ae9f.js";
import { mdiAccount, mdiPlusCircle, mdiTrashCanOutline, mdiHome, mdiPhone, mdiFormTextboxPassword } from "@mdi/js";
import { _ as _sfc_main$2 } from "./FormField-df0fbba2.js";
import { m as modelResolver, a as _sfc_main$3, w as handleField } from "../app.js";
import { useForm, usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$4 } from "./FormCheckRadioGroup-dcffe4e0.js";
import { _ as _sfc_main$5 } from "./FormCheckRadio-6c235a0c.js";
import "moment/moment.js";
import { M as Model } from "./index-d5896b37.js";
import "./CardBox-8f14b1bf.js";
import "./FormValidationErrors-94aef0ec.js";
import "pinia";
import "ziggy-js";
import "pluralize";
/* empty css                                 */import "axios";
import "@tinymce/tinymce-vue";
import "primevue/dropdown/dropdown.esm.js";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "primevue/config/config.esm.js";
const _sfc_main = {
  __name: "EmployeeData",
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
    var _a, _b, _c, _d, _e, _f;
    let props = __props;
    let form = useForm({
      name: (_a = props.data) == null ? void 0 : _a.name,
      email: (_b = props.data) == null ? void 0 : _b.email,
      address: ((_c = props.data) == null ? void 0 : _c.address) ?? [null],
      phone: ((_d = props.data) == null ? void 0 : _d.phone) ?? [null],
      password: null,
      password_confirmation: null,
      role: (_f = (_e = props.data) == null ? void 0 : _e.role) == null ? void 0 : _f.id
    });
    let roles = usePage().props.roles;
    let model = "employee";
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.can(`${unref(modelResolver)(unref(model))}.${__props.operation}`)) {
        _push(ssrRenderComponent(_sfc_main$1, mergeProps({
          "button-label": _ctx.__(__props.operation),
          "has-cancel": __props.isModal,
          "has-errors": unref(form).hasErrors,
          "is-form": true,
          "is-modal": __props.isModal,
          "model-value": true,
          title: _ctx.__(__props.operation + "_field", { field: "employee" }),
          onCancel: ($event) => _ctx.$emit("cancel"),
          onConfirm: ($event) => unref(Model).submit(__props.operation, "patient", unref(form), __props.data.id)
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
                errors: unref(form).errors.email,
                label: _ctx.__("email"),
                "label-for": "email"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      icon: unref(mdiAccount),
                      autocomplete: "email",
                      name: "email",
                      required: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$3, {
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        icon: unref(mdiAccount),
                        autocomplete: "email",
                        name: "email",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                actions: { append: { color: "success", icon: unref(mdiPlusCircle) } },
                label: _ctx.__("address"),
                "class-addon": "space-y-4",
                "has-border": "",
                "label-for": "address",
                onAction: (action, key) => unref(handleField)(unref(form), "address", action)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(form).address, (address, key) => {
                      _push3(ssrRenderComponent(_sfc_main$3, {
                        key,
                        modelValue: unref(form).address[key],
                        "onUpdate:modelValue": ($event) => unref(form).address[key] = $event,
                        actions: { delete: { color: "danger", icon: unref(mdiTrashCanOutline), key } },
                        errors: unref(form).errors[`address.${key}`],
                        icon: unref(mdiHome),
                        autocomplete: "address",
                        name: "address",
                        required: "",
                        onAction: (action, key2) => unref(handleField)(unref(form), "address", action, key2)
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(form).address, (address, key) => {
                        return openBlock(), createBlock(_sfc_main$3, {
                          key,
                          modelValue: unref(form).address[key],
                          "onUpdate:modelValue": ($event) => unref(form).address[key] = $event,
                          actions: { delete: { color: "danger", icon: unref(mdiTrashCanOutline), key } },
                          errors: unref(form).errors[`address.${key}`],
                          icon: unref(mdiHome),
                          autocomplete: "address",
                          name: "address",
                          required: "",
                          onAction: (action, key2) => unref(handleField)(unref(form), "address", action, key2)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "actions", "errors", "icon", "onAction"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                actions: { append: { color: "success", icon: unref(mdiPlusCircle) } },
                label: _ctx.__("phone"),
                "class-addon": "space-y-4",
                "has-border": "",
                "label-for": "phone",
                onAction: (action, key) => unref(handleField)(unref(form), "phone", action)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(form).phone, (phone, key) => {
                      _push3(ssrRenderComponent(_sfc_main$3, {
                        modelValue: unref(form).phone[key],
                        "onUpdate:modelValue": ($event) => unref(form).phone[key] = $event,
                        actions: { delete: { color: "danger", icon: unref(mdiTrashCanOutline), key } },
                        errors: unref(form).errors[`phone.${key}`],
                        icon: unref(mdiPhone),
                        autocomplete: "phone",
                        name: "phone",
                        required: "",
                        onAction: (action, key2) => unref(handleField)(unref(form), "phone", action, key2)
                      }, null, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(form).phone, (phone, key) => {
                        return openBlock(), createBlock(_sfc_main$3, {
                          modelValue: unref(form).phone[key],
                          "onUpdate:modelValue": ($event) => unref(form).phone[key] = $event,
                          actions: { delete: { color: "danger", icon: unref(mdiTrashCanOutline), key } },
                          errors: unref(form).errors[`phone.${key}`],
                          icon: unref(mdiPhone),
                          autocomplete: "phone",
                          name: "phone",
                          required: "",
                          onAction: (action, key2) => unref(handleField)(unref(form), "phone", action, key2)
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "actions", "errors", "icon", "onAction"]);
                      }), 256))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                errors: unref(form).errors.password,
                label: _ctx.__("password"),
                "label-for": "password_confirmation"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      icon: unref(mdiFormTextboxPassword),
                      autocomplete: "password",
                      name: "password",
                      required: "",
                      type: "password"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$3, {
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        icon: unref(mdiFormTextboxPassword),
                        autocomplete: "password",
                        name: "password",
                        required: "",
                        type: "password"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, {
                errors: unref(form).errors.password_confirmation,
                label: _ctx.__("password_confirmation"),
                "label-for": "password_confirmation"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      modelValue: unref(form).password_confirmation,
                      "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                      icon: unref(mdiFormTextboxPassword),
                      autocomplete: "password_confirmation",
                      name: "password_confirmation",
                      required: "",
                      type: "password"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$3, {
                        modelValue: unref(form).password_confirmation,
                        "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                        icon: unref(mdiFormTextboxPassword),
                        autocomplete: "password_confirmation",
                        name: "password_confirmation",
                        required: "",
                        type: "password"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$4, {
                      label: _ctx.__("role"),
                      "label-for": "role"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(roles), (role, key) => {
                            _push4(ssrRenderComponent(_sfc_main$5, {
                              key,
                              modelValue: unref(form).role,
                              "onUpdate:modelValue": ($event) => unref(form).role = $event,
                              checked: role.id === unref(form).role,
                              label: role.name,
                              value: role.id,
                              name: "role",
                              type: "radio"
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(roles), (role, key) => {
                              return openBlock(), createBlock(_sfc_main$5, {
                                key,
                                modelValue: unref(form).role,
                                "onUpdate:modelValue": ($event) => unref(form).role = $event,
                                checked: role.id === unref(form).role,
                                label: role.name,
                                value: role.id,
                                name: "role",
                                type: "radio"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "checked", "label", "value"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$4, {
                        label: _ctx.__("role"),
                        "label-for": "role"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(roles), (role, key) => {
                            return openBlock(), createBlock(_sfc_main$5, {
                              key,
                              modelValue: unref(form).role,
                              "onUpdate:modelValue": ($event) => unref(form).role = $event,
                              checked: role.id === unref(form).role,
                              label: role.name,
                              value: role.id,
                              name: "role",
                              type: "radio"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "checked", "label", "value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["label"])
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
                  errors: unref(form).errors.email,
                  label: _ctx.__("email"),
                  "label-for": "email"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$3, {
                      modelValue: unref(form).email,
                      "onUpdate:modelValue": ($event) => unref(form).email = $event,
                      icon: unref(mdiAccount),
                      autocomplete: "email",
                      name: "email",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                  ]),
                  _: 1
                }, 8, ["errors", "label"]),
                createVNode(_sfc_main$2, {
                  actions: { append: { color: "success", icon: unref(mdiPlusCircle) } },
                  label: _ctx.__("address"),
                  "class-addon": "space-y-4",
                  "has-border": "",
                  "label-for": "address",
                  onAction: (action, key) => unref(handleField)(unref(form), "address", action)
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(form).address, (address, key) => {
                      return openBlock(), createBlock(_sfc_main$3, {
                        key,
                        modelValue: unref(form).address[key],
                        "onUpdate:modelValue": ($event) => unref(form).address[key] = $event,
                        actions: { delete: { color: "danger", icon: unref(mdiTrashCanOutline), key } },
                        errors: unref(form).errors[`address.${key}`],
                        icon: unref(mdiHome),
                        autocomplete: "address",
                        name: "address",
                        required: "",
                        onAction: (action, key2) => unref(handleField)(unref(form), "address", action, key2)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "actions", "errors", "icon", "onAction"]);
                    }), 128))
                  ]),
                  _: 1
                }, 8, ["actions", "label", "onAction"]),
                createVNode(_sfc_main$2, {
                  actions: { append: { color: "success", icon: unref(mdiPlusCircle) } },
                  label: _ctx.__("phone"),
                  "class-addon": "space-y-4",
                  "has-border": "",
                  "label-for": "phone",
                  onAction: (action, key) => unref(handleField)(unref(form), "phone", action)
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(form).phone, (phone, key) => {
                      return openBlock(), createBlock(_sfc_main$3, {
                        modelValue: unref(form).phone[key],
                        "onUpdate:modelValue": ($event) => unref(form).phone[key] = $event,
                        actions: { delete: { color: "danger", icon: unref(mdiTrashCanOutline), key } },
                        errors: unref(form).errors[`phone.${key}`],
                        icon: unref(mdiPhone),
                        autocomplete: "phone",
                        name: "phone",
                        required: "",
                        onAction: (action, key2) => unref(handleField)(unref(form), "phone", action, key2)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "actions", "errors", "icon", "onAction"]);
                    }), 256))
                  ]),
                  _: 1
                }, 8, ["actions", "label", "onAction"]),
                createVNode(_sfc_main$2, {
                  errors: unref(form).errors.password,
                  label: _ctx.__("password"),
                  "label-for": "password_confirmation"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$3, {
                      modelValue: unref(form).password,
                      "onUpdate:modelValue": ($event) => unref(form).password = $event,
                      icon: unref(mdiFormTextboxPassword),
                      autocomplete: "password",
                      name: "password",
                      required: "",
                      type: "password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                  ]),
                  _: 1
                }, 8, ["errors", "label"]),
                createVNode(_sfc_main$2, {
                  errors: unref(form).errors.password_confirmation,
                  label: _ctx.__("password_confirmation"),
                  "label-for": "password_confirmation"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$3, {
                      modelValue: unref(form).password_confirmation,
                      "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                      icon: unref(mdiFormTextboxPassword),
                      autocomplete: "password_confirmation",
                      name: "password_confirmation",
                      required: "",
                      type: "password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                  ]),
                  _: 1
                }, 8, ["errors", "label"]),
                createVNode(_sfc_main$2, null, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$4, {
                      label: _ctx.__("role"),
                      "label-for": "role"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(roles), (role, key) => {
                          return openBlock(), createBlock(_sfc_main$5, {
                            key,
                            modelValue: unref(form).role,
                            "onUpdate:modelValue": ($event) => unref(form).role = $event,
                            checked: role.id === unref(form).role,
                            label: role.name,
                            value: role.id,
                            name: "role",
                            type: "radio"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "checked", "label", "value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ]),
                  _: 1
                })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Models/Employee/EmployeeData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
