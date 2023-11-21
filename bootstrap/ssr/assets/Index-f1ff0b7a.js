import { inject, mergeProps, unref, isRef, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, ref, provide, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { mdiAccount, mdiFormTextboxPassword, mdiAccountStarOutline, mdiPlusCircle } from "@mdi/js";
import { _ as _sfc_main$e } from "./TableOptions-a9345eb3.js";
import { _ as _sfc_main$8, a as _sfc_main$a } from "./SectionTitleLineWithButton-9da2ae80.js";
import { _ as _sfc_main$3, a as _sfc_main$d, b as _sfc_main$f } from "./ActionConfirmComponent-f1d725a5.js";
import { _ as _sfc_main$5, a as _sfc_main$b } from "../app.js";
import { _ as _sfc_main$4 } from "./FormField-a416fc4e.js";
import { usePage, useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$6 } from "./FormCheckRadioGroup-1bb8b6e3.js";
import { _ as _sfc_main$7 } from "./FormCheckRadio-3fbb80c8.js";
import { _ as _sfc_main$c } from "./CardBox-b517a69f.js";
import { _ as _sfc_main$9 } from "./BreadCrumb-4683e004.js";
import "pinia";
import "ziggy-js";
/* empty css                                 */import "axios";
import "@tinymce/tinymce-vue";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "@fawmi/vue-google-maps";
const _sfc_main$2 = {
  __name: "CreateAdmin",
  __ssrInlineRender: true,
  setup(__props) {
    let showCreateAdmin = inject("showCreateAdmin");
    let roles = usePage().props.roles.data;
    let employeeForm = useForm({
      name: null,
      email: null,
      password: null,
      password_confirmation: null,
      role: null
    });
    function submit() {
      employeeForm.post(route("dashboard.employees.store"), {
        preserveScroll: true,
        preserveState: (page) => Object.keys(page.props.errors).length,
        onSuccess: () => {
          showCreateAdmin.value = false;
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.can("employees.create")) {
        _push(ssrRenderComponent(_sfc_main$3, mergeProps({
          "button-label": _ctx.__("create"),
          "has-cancel": true,
          hasErrors: unref(employeeForm).hasErrors,
          "is-form": true,
          "model-value": unref(showCreateAdmin),
          title: _ctx.__("create_field", { field: "employee" }),
          onCancel: ($event) => isRef(showCreateAdmin) ? showCreateAdmin.value = false : showCreateAdmin = false,
          onConfirm: submit
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$4, {
                errors: unref(employeeForm).errors.name,
                label: _ctx.__("name"),
                "label-for": "name"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      modelValue: unref(employeeForm).name,
                      "onUpdate:modelValue": ($event) => unref(employeeForm).name = $event,
                      icon: unref(mdiAccount),
                      autocomplete: "name",
                      name: "name",
                      required: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$5, {
                        modelValue: unref(employeeForm).name,
                        "onUpdate:modelValue": ($event) => unref(employeeForm).name = $event,
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
              _push2(ssrRenderComponent(_sfc_main$4, {
                errors: unref(employeeForm).errors.email,
                label: _ctx.__("email"),
                "label-for": "email"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      modelValue: unref(employeeForm).email,
                      "onUpdate:modelValue": ($event) => unref(employeeForm).email = $event,
                      icon: unref(mdiAccount),
                      autocomplete: "email",
                      name: "email",
                      required: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$5, {
                        modelValue: unref(employeeForm).email,
                        "onUpdate:modelValue": ($event) => unref(employeeForm).email = $event,
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
              _push2(ssrRenderComponent(_sfc_main$4, {
                errors: unref(employeeForm).errors.password,
                label: _ctx.__("password"),
                "label-for": "password_confirmation"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      modelValue: unref(employeeForm).password,
                      "onUpdate:modelValue": ($event) => unref(employeeForm).password = $event,
                      icon: unref(mdiFormTextboxPassword),
                      autocomplete: "password",
                      name: "password",
                      required: "",
                      type: "password"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$5, {
                        modelValue: unref(employeeForm).password,
                        "onUpdate:modelValue": ($event) => unref(employeeForm).password = $event,
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
              _push2(ssrRenderComponent(_sfc_main$4, {
                errors: unref(employeeForm).errors.password_confirmation,
                label: _ctx.__("password_confirmation"),
                "label-for": "password_confirmation"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      modelValue: unref(employeeForm).password_confirmation,
                      "onUpdate:modelValue": ($event) => unref(employeeForm).password_confirmation = $event,
                      icon: unref(mdiFormTextboxPassword),
                      autocomplete: "password_confirmation",
                      name: "password_confirmation",
                      required: "",
                      type: "password"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$5, {
                        modelValue: unref(employeeForm).password_confirmation,
                        "onUpdate:modelValue": ($event) => unref(employeeForm).password_confirmation = $event,
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
              _push2(ssrRenderComponent(_sfc_main$4, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      label: _ctx.__("role"),
                      "label-for": "role"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(roles), (role, key) => {
                            _push4(ssrRenderComponent(_sfc_main$7, {
                              key,
                              modelValue: unref(employeeForm).role,
                              "onUpdate:modelValue": ($event) => unref(employeeForm).role = $event,
                              checked: role.checked,
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
                              return openBlock(), createBlock(_sfc_main$7, {
                                key,
                                modelValue: unref(employeeForm).role,
                                "onUpdate:modelValue": ($event) => unref(employeeForm).role = $event,
                                checked: role.checked,
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
                      createVNode(_sfc_main$6, {
                        label: _ctx.__("role"),
                        "label-for": "role"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(roles), (role, key) => {
                            return openBlock(), createBlock(_sfc_main$7, {
                              key,
                              modelValue: unref(employeeForm).role,
                              "onUpdate:modelValue": ($event) => unref(employeeForm).role = $event,
                              checked: role.checked,
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
                createVNode(_sfc_main$4, {
                  errors: unref(employeeForm).errors.name,
                  label: _ctx.__("name"),
                  "label-for": "name"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$5, {
                      modelValue: unref(employeeForm).name,
                      "onUpdate:modelValue": ($event) => unref(employeeForm).name = $event,
                      icon: unref(mdiAccount),
                      autocomplete: "name",
                      name: "name",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                  ]),
                  _: 1
                }, 8, ["errors", "label"]),
                createVNode(_sfc_main$4, {
                  errors: unref(adminForm).errors.email,
                  label: _ctx.__("email"),
                  "label-for": "email"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$5, {
                      modelValue: unref(adminForm).email,
                      "onUpdate:modelValue": ($event) => unref(adminForm).email = $event,
                      icon: unref(mdiAccount),
                      autocomplete: "email",
                      name: "email",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                  ]),
                  _: 1
                }, 8, ["errors", "label"]),
                createVNode(_sfc_main$4, {
                  errors: unref(adminForm).errors.password,
                  label: _ctx.__("password"),
                  "label-for": "password_confirmation"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$5, {
                      modelValue: unref(adminForm).password,
                      "onUpdate:modelValue": ($event) => unref(adminForm).password = $event,
                      icon: unref(mdiFormTextboxPassword),
                      autocomplete: "password",
                      name: "password",
                      required: "",
                      type: "password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                  ]),
                  _: 1
                }, 8, ["errors", "label"]),
                createVNode(_sfc_main$4, {
                  errors: unref(adminForm).errors.password_confirmation,
                  label: _ctx.__("password_confirmation"),
                  "label-for": "password_confirmation"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$5, {
                      modelValue: unref(adminForm).password_confirmation,
                      "onUpdate:modelValue": ($event) => unref(adminForm).password_confirmation = $event,
                      icon: unref(mdiFormTextboxPassword),
                      autocomplete: "password_confirmation",
                      name: "password_confirmation",
                      required: "",
                      type: "password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                  ]),
                  _: 1
                }, 8, ["errors", "label"]),
                createVNode(_sfc_main$4, null, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$6, {
                      label: _ctx.__("role"),
                      "label-for": "role"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(roles), (role, key) => {
                          return openBlock(), createBlock(_sfc_main$7, {
                            key,
                            modelValue: unref(adminForm).role,
                            "onUpdate:modelValue": ($event) => unref(adminForm).role = $event,
                            checked: role.checked,
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
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Admins/CreateAdmin.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "EditAdmin",
  __ssrInlineRender: true,
  props: {
    editedAdmin: Object
  },
  setup(__props) {
    const props = __props;
    let showEditAdmin = inject("showEditAdmin");
    let roles = usePage().props.roles.data;
    let adminForm = useForm({
      name: props.editedAdmin.name,
      email: props.editedAdmin.email,
      password: null,
      password_confirmation: null,
      role: props.editedAdmin.role.id
    });
    function submit() {
      adminForm.put(route("dashboard.admins.update", props.editedAdmin.id), {
        preserveScroll: true,
        preserveState: (page) => Object.keys(page.props.errors).length,
        onSuccess: () => {
          showEditAdmin.value = false;
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.can("admins.edit")) {
        _push(ssrRenderComponent(_sfc_main$3, mergeProps({
          "button-label": _ctx.__("edit"),
          "has-cancel": true,
          hasErrors: unref(adminForm).hasErrors,
          "is-form": true,
          "model-value": unref(showEditAdmin),
          title: _ctx.__("edit_field", { field: "admin" }),
          onCancel: ($event) => isRef(showEditAdmin) ? showEditAdmin.value = false : showEditAdmin = false,
          onConfirm: submit
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$4, {
                errors: unref(adminForm).errors.name,
                label: _ctx.__("name"),
                "label-for": "name"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      modelValue: unref(adminForm).name,
                      "onUpdate:modelValue": ($event) => unref(adminForm).name = $event,
                      icon: unref(mdiAccount),
                      autocomplete: "name",
                      name: "name",
                      required: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$5, {
                        modelValue: unref(adminForm).name,
                        "onUpdate:modelValue": ($event) => unref(adminForm).name = $event,
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
              _push2(ssrRenderComponent(_sfc_main$4, {
                errors: unref(adminForm).errors.email,
                label: _ctx.__("email"),
                "label-for": "email"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      modelValue: unref(adminForm).email,
                      "onUpdate:modelValue": ($event) => unref(adminForm).email = $event,
                      icon: unref(mdiAccount),
                      autocomplete: "email",
                      name: "email",
                      required: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$5, {
                        modelValue: unref(adminForm).email,
                        "onUpdate:modelValue": ($event) => unref(adminForm).email = $event,
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
              _push2(ssrRenderComponent(_sfc_main$4, {
                errors: unref(adminForm).errors.password,
                label: _ctx.__("password"),
                "label-for": "password_confirmation"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      modelValue: unref(adminForm).password,
                      "onUpdate:modelValue": ($event) => unref(adminForm).password = $event,
                      icon: unref(mdiFormTextboxPassword),
                      autocomplete: "password",
                      name: "password",
                      required: "",
                      type: "password"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$5, {
                        modelValue: unref(adminForm).password,
                        "onUpdate:modelValue": ($event) => unref(adminForm).password = $event,
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
              _push2(ssrRenderComponent(_sfc_main$4, {
                errors: unref(adminForm).errors.password_confirmation,
                label: _ctx.__("password_confirmation"),
                "label-for": "password_confirmation"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      modelValue: unref(adminForm).password_confirmation,
                      "onUpdate:modelValue": ($event) => unref(adminForm).password_confirmation = $event,
                      icon: unref(mdiFormTextboxPassword),
                      autocomplete: "password_confirmation",
                      name: "password_confirmation",
                      required: "",
                      type: "password"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$5, {
                        modelValue: unref(adminForm).password_confirmation,
                        "onUpdate:modelValue": ($event) => unref(adminForm).password_confirmation = $event,
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
              _push2(ssrRenderComponent(_sfc_main$4, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      label: _ctx.__("role"),
                      "label-for": "role"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(roles), (role, key) => {
                            _push4(ssrRenderComponent(_sfc_main$7, {
                              key,
                              modelValue: unref(adminForm).role,
                              "onUpdate:modelValue": ($event) => unref(adminForm).role = $event,
                              checked: role.id === unref(adminForm).role,
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
                              return openBlock(), createBlock(_sfc_main$7, {
                                key,
                                modelValue: unref(adminForm).role,
                                "onUpdate:modelValue": ($event) => unref(adminForm).role = $event,
                                checked: role.id === unref(adminForm).role,
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
                      createVNode(_sfc_main$6, {
                        label: _ctx.__("role"),
                        "label-for": "role"
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(roles), (role, key) => {
                            return openBlock(), createBlock(_sfc_main$7, {
                              key,
                              modelValue: unref(adminForm).role,
                              "onUpdate:modelValue": ($event) => unref(adminForm).role = $event,
                              checked: role.id === unref(adminForm).role,
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
                createVNode(_sfc_main$4, {
                  errors: unref(adminForm).errors.name,
                  label: _ctx.__("name"),
                  "label-for": "name"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$5, {
                      modelValue: unref(adminForm).name,
                      "onUpdate:modelValue": ($event) => unref(adminForm).name = $event,
                      icon: unref(mdiAccount),
                      autocomplete: "name",
                      name: "name",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                  ]),
                  _: 1
                }, 8, ["errors", "label"]),
                createVNode(_sfc_main$4, {
                  errors: unref(adminForm).errors.email,
                  label: _ctx.__("email"),
                  "label-for": "email"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$5, {
                      modelValue: unref(adminForm).email,
                      "onUpdate:modelValue": ($event) => unref(adminForm).email = $event,
                      icon: unref(mdiAccount),
                      autocomplete: "email",
                      name: "email",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                  ]),
                  _: 1
                }, 8, ["errors", "label"]),
                createVNode(_sfc_main$4, {
                  errors: unref(adminForm).errors.password,
                  label: _ctx.__("password"),
                  "label-for": "password_confirmation"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$5, {
                      modelValue: unref(adminForm).password,
                      "onUpdate:modelValue": ($event) => unref(adminForm).password = $event,
                      icon: unref(mdiFormTextboxPassword),
                      autocomplete: "password",
                      name: "password",
                      required: "",
                      type: "password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                  ]),
                  _: 1
                }, 8, ["errors", "label"]),
                createVNode(_sfc_main$4, {
                  errors: unref(adminForm).errors.password_confirmation,
                  label: _ctx.__("password_confirmation"),
                  "label-for": "password_confirmation"
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$5, {
                      modelValue: unref(adminForm).password_confirmation,
                      "onUpdate:modelValue": ($event) => unref(adminForm).password_confirmation = $event,
                      icon: unref(mdiFormTextboxPassword),
                      autocomplete: "password_confirmation",
                      name: "password_confirmation",
                      required: "",
                      type: "password"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                  ]),
                  _: 1
                }, 8, ["errors", "label"]),
                createVNode(_sfc_main$4, null, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$6, {
                      label: _ctx.__("role"),
                      "label-for": "role"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(roles), (role, key) => {
                          return openBlock(), createBlock(_sfc_main$7, {
                            key,
                            modelValue: unref(adminForm).role,
                            "onUpdate:modelValue": ($event) => unref(adminForm).role = $event,
                            checked: role.id === unref(adminForm).role,
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Admins/EditAdmin.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    let showCreateAdmin = ref(false);
    let showEditAdmin = ref(false);
    let actionConfirm = ref(false);
    let admins = usePage().props.admins.data;
    let editedAdmin = ref({});
    let deletedAdmin = ref(null);
    provide("showEditAdmin", showEditAdmin);
    provide("showCreateAdmin", showCreateAdmin);
    provide("actionConfirm", actionConfirm);
    function edit(admin) {
      editedAdmin.value = admin;
      showEditAdmin.value = true;
    }
    function destroy(admin) {
      actionConfirm.value = true;
      deletedAdmin = admin.id;
    }
    function destroyConfirm() {
      router.delete(route("dashboard.admins.destroy", deletedAdmin), {
        preserveState: (page) => Object.keys(page.props.errors).length,
        preserveScroll: true
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$8, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$9, {
              items: [{ name: _ctx.__("admins"), href: _ctx.route("dashboard.admins.index") }]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$a, {
              icon: unref(mdiAccountStarOutline),
              title: _ctx.__("admins"),
              main: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$b, {
                    icon: unref(mdiPlusCircle),
                    color: "success",
                    onClick: ($event) => isRef(showCreateAdmin) ? showCreateAdmin.value = true : showCreateAdmin = true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$b, {
                      icon: unref(mdiPlusCircle),
                      color: "success",
                      onClick: ($event) => isRef(showCreateAdmin) ? showCreateAdmin.value = true : showCreateAdmin = true
                    }, null, 8, ["icon", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$c, { "has-table": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$d, {
                    headers: ["#", _ctx.__("name"), _ctx.__("email"), _ctx.__("role"), _ctx.__("created_at")]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(admins), (admin, key) => {
                          _push4(`<tr class="rtl:flex-row-reverse"${_scopeId3}><td data-label="# "${_scopeId3}>${ssrInterpolate(key + 1)}</td><td${ssrRenderAttr("data-label", _ctx.__("name"))} class="border-b-0 before:hidden justify-center mx-auto"${_scopeId3}>${ssrInterpolate(admin.name)}</td><td${ssrRenderAttr("data-label", _ctx.__("email"))}${_scopeId3}>${ssrInterpolate(admin.email)}</td><td${ssrRenderAttr("data-label", _ctx.__("role"))}${_scopeId3}>${ssrInterpolate(admin.role.name)}</td><td${ssrRenderAttr("data-label", _ctx.__("created_at"))}${_scopeId3}>${ssrInterpolate(admin.created_at)}</td><td${ssrRenderAttr("data-label", _ctx.__("options"))}${_scopeId3}>`);
                          _push4(ssrRenderComponent(_sfc_main$e, {
                            model: "admins",
                            "has-show": false,
                            onDestroy: ($event) => destroy(admin),
                            onEdit: ($event) => edit(admin)
                          }, null, _parent4, _scopeId3));
                          _push4(`</td></tr>`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(admins), (admin, key) => {
                            return openBlock(), createBlock("tr", {
                              key,
                              class: "rtl:flex-row-reverse"
                            }, [
                              createVNode("td", { "data-label": "# " }, toDisplayString(key + 1), 1),
                              createVNode("td", {
                                "data-label": _ctx.__("name"),
                                class: "border-b-0 before:hidden justify-center mx-auto"
                              }, toDisplayString(admin.name), 9, ["data-label"]),
                              createVNode("td", {
                                "data-label": _ctx.__("email")
                              }, toDisplayString(admin.email), 9, ["data-label"]),
                              createVNode("td", {
                                "data-label": _ctx.__("role")
                              }, toDisplayString(admin.role.name), 9, ["data-label"]),
                              createVNode("td", {
                                "data-label": _ctx.__("created_at")
                              }, toDisplayString(admin.created_at), 9, ["data-label"]),
                              createVNode("td", {
                                "data-label": _ctx.__("options")
                              }, [
                                createVNode(_sfc_main$e, {
                                  model: "admins",
                                  "has-show": false,
                                  onDestroy: ($event) => destroy(admin),
                                  onEdit: ($event) => edit(admin)
                                }, null, 8, ["onDestroy", "onEdit"])
                              ], 8, ["data-label"])
                            ]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$d, {
                      headers: ["#", _ctx.__("name"), _ctx.__("email"), _ctx.__("role"), _ctx.__("created_at")]
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(admins), (admin, key) => {
                          return openBlock(), createBlock("tr", {
                            key,
                            class: "rtl:flex-row-reverse"
                          }, [
                            createVNode("td", { "data-label": "# " }, toDisplayString(key + 1), 1),
                            createVNode("td", {
                              "data-label": _ctx.__("name"),
                              class: "border-b-0 before:hidden justify-center mx-auto"
                            }, toDisplayString(admin.name), 9, ["data-label"]),
                            createVNode("td", {
                              "data-label": _ctx.__("email")
                            }, toDisplayString(admin.email), 9, ["data-label"]),
                            createVNode("td", {
                              "data-label": _ctx.__("role")
                            }, toDisplayString(admin.role.name), 9, ["data-label"]),
                            createVNode("td", {
                              "data-label": _ctx.__("created_at")
                            }, toDisplayString(admin.created_at), 9, ["data-label"]),
                            createVNode("td", {
                              "data-label": _ctx.__("options")
                            }, [
                              createVNode(_sfc_main$e, {
                                model: "admins",
                                "has-show": false,
                                onDestroy: ($event) => destroy(admin),
                                onEdit: ($event) => edit(admin)
                              }, null, 8, ["onDestroy", "onEdit"])
                            ], 8, ["data-label"])
                          ]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["headers"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$9, {
                items: [{ name: _ctx.__("admins"), href: _ctx.route("dashboard.admins.index") }]
              }, null, 8, ["items"]),
              createVNode(_sfc_main$a, {
                icon: unref(mdiAccountStarOutline),
                title: _ctx.__("admins"),
                main: ""
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$b, {
                    icon: unref(mdiPlusCircle),
                    color: "success",
                    onClick: ($event) => isRef(showCreateAdmin) ? showCreateAdmin.value = true : showCreateAdmin = true
                  }, null, 8, ["icon", "onClick"])
                ]),
                _: 1
              }, 8, ["icon", "title"]),
              createVNode(_sfc_main$c, { "has-table": "" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$d, {
                    headers: ["#", _ctx.__("name"), _ctx.__("email"), _ctx.__("role"), _ctx.__("created_at")]
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(admins), (admin, key) => {
                        return openBlock(), createBlock("tr", {
                          key,
                          class: "rtl:flex-row-reverse"
                        }, [
                          createVNode("td", { "data-label": "# " }, toDisplayString(key + 1), 1),
                          createVNode("td", {
                            "data-label": _ctx.__("name"),
                            class: "border-b-0 before:hidden justify-center mx-auto"
                          }, toDisplayString(admin.name), 9, ["data-label"]),
                          createVNode("td", {
                            "data-label": _ctx.__("email")
                          }, toDisplayString(admin.email), 9, ["data-label"]),
                          createVNode("td", {
                            "data-label": _ctx.__("role")
                          }, toDisplayString(admin.role.name), 9, ["data-label"]),
                          createVNode("td", {
                            "data-label": _ctx.__("created_at")
                          }, toDisplayString(admin.created_at), 9, ["data-label"]),
                          createVNode("td", {
                            "data-label": _ctx.__("options")
                          }, [
                            createVNode(_sfc_main$e, {
                              model: "admins",
                              "has-show": false,
                              onDestroy: ($event) => destroy(admin),
                              onEdit: ($event) => edit(admin)
                            }, null, 8, ["onDestroy", "onEdit"])
                          ], 8, ["data-label"])
                        ]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["headers"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(showEditAdmin)) {
        _push(ssrRenderComponent(_sfc_main$1, { editedAdmin: unref(editedAdmin) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(showCreateAdmin)) {
        _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$f, { onConfirm: destroyConfirm }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Pages/Admins/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
