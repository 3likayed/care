import { inject, mergeProps, unref, isRef, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, ref, provide, toDisplayString } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$d } from "./CardBox-b517a69f.js";
import { _ as _sfc_main$3, a as _sfc_main$e, b as _sfc_main$g } from "./ActionConfirmComponent-f1d725a5.js";
import { _ as _sfc_main$9, a as _sfc_main$b } from "./SectionTitleLineWithButton-9da2ae80.js";
import { usePage, useForm, router } from "@inertiajs/vue3";
import { mdiAccount, mdiLockAlertOutline, mdiPlusCircle } from "@mdi/js";
import { g as __, _ as _sfc_main$5, a as _sfc_main$c } from "../app.js";
import { _ as _sfc_main$f } from "./TableOptions-a9345eb3.js";
import { _ as _sfc_main$4 } from "./FormField-a416fc4e.js";
import { _ as _sfc_main$7 } from "./FormCheckRadioGroup-1bb8b6e3.js";
import { _ as _sfc_main$8 } from "./FormCheckRadio-3fbb80c8.js";
import { _ as _sfc_main$6 } from "./FormWithLabelField-2c980605.js";
import { _ as _sfc_main$a } from "./BreadCrumb-4683e004.js";
import "pinia";
import "ziggy-js";
/* empty css                                 */import "axios";
import "@tinymce/tinymce-vue";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "@fawmi/vue-google-maps";
const _sfc_main$2 = {
  __name: "EditRole",
  __ssrInlineRender: true,
  props: {
    role: Object
  },
  setup(__props) {
    const props = __props;
    let showEditRole = inject("showEditRole");
    let allPermissions = usePage().props.permissions.data;
    let formPermissions = {};
    allPermissions.map(function(item, key) {
      let splitted = item.name.split(".");
      (formPermissions[splitted[0]] = formPermissions[splitted[0]] || []).push({
        name: splitted[1],
        checked: Boolean(props.role.permissions.find((permission) => permission.id === item.id)),
        id: item.id,
        key
      });
    });
    let form = useForm({
      name: props.role.name,
      permissions: allPermissions.map((item) => {
        item.checked = Boolean(props.role.permissions.find((permission) => permission.id === item.id));
        return item;
      })
    });
    function submit() {
      form.put(route("dashboard.roles.update", props.role.id), {
        preserveScroll: true,
        preserveState: (page) => Object.keys(page.props.errors).length,
        onSuccess: () => {
          showEditRole.value = false;
        },
        onError: () => console.log(form.permissions)
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({
        "button-label": unref(__)("edit"),
        "has-cancel": true,
        hasErrors: unref(form).hasErrors,
        "is-form": true,
        "model-value": unref(showEditRole),
        title: unref(__)("edit_field", { field: "role" }),
        onCancel: ($event) => isRef(showEditRole) ? showEditRole.value = false : showEditRole = false,
        onConfirm: submit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, {
              errors: unref(form).errors.name,
              label: unref(__)("name")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    icon: unref(mdiAccount),
                    autocomplete: "name",
                    name: "name",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5, {
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
            _push2(`<!--[-->`);
            ssrRenderList(unref(formPermissions), (model, pKey) => {
              _push2(ssrRenderComponent(_sfc_main$6, {
                cols: { lg: 1 },
                label: unref(__)(pKey)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$7, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(model, (permission, iKey) => {
                            _push4(ssrRenderComponent(_sfc_main$8, {
                              key: iKey,
                              modelValue: unref(form).permissions[permission.key].checked,
                              "onUpdate:modelValue": ($event) => unref(form).permissions[permission.key].checked = $event,
                              checked: unref(form).permissions[permission.key].checked,
                              label: unref(__)(permission.name),
                              value: permission.id
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(model, (permission, iKey) => {
                              return openBlock(), createBlock(_sfc_main$8, {
                                key: iKey,
                                modelValue: unref(form).permissions[permission.key].checked,
                                "onUpdate:modelValue": ($event) => unref(form).permissions[permission.key].checked = $event,
                                checked: unref(form).permissions[permission.key].checked,
                                label: unref(__)(permission.name),
                                value: permission.id
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "checked", "label", "value"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$7, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(model, (permission, iKey) => {
                            return openBlock(), createBlock(_sfc_main$8, {
                              key: iKey,
                              modelValue: unref(form).permissions[permission.key].checked,
                              "onUpdate:modelValue": ($event) => unref(form).permissions[permission.key].checked = $event,
                              checked: unref(form).permissions[permission.key].checked,
                              label: unref(__)(permission.name),
                              value: permission.id
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "checked", "label", "value"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(_sfc_main$4, {
                errors: unref(form).errors.name,
                label: unref(__)("name")
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5, {
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(formPermissions), (model, pKey) => {
                return openBlock(), createBlock(_sfc_main$6, {
                  cols: { lg: 1 },
                  label: unref(__)(pKey)
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$7, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(model, (permission, iKey) => {
                          return openBlock(), createBlock(_sfc_main$8, {
                            key: iKey,
                            modelValue: unref(form).permissions[permission.key].checked,
                            "onUpdate:modelValue": ($event) => unref(form).permissions[permission.key].checked = $event,
                            checked: unref(form).permissions[permission.key].checked,
                            label: unref(__)(permission.name),
                            value: permission.id
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "checked", "label", "value"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["label"]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Roles/EditRole.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "CreateRole",
  __ssrInlineRender: true,
  setup(__props) {
    let showCreateRole = inject("showCreateRole");
    let allPermissions = usePage().props.permissions.data;
    let formPermissions = {};
    allPermissions.map(function(item, key) {
      let splitted = item.name.split(".");
      (formPermissions[splitted[0]] = formPermissions[splitted[0]] || []).push({
        name: splitted[1],
        checked: false,
        id: item.id,
        key
      });
    });
    let form = useForm({
      name: null,
      permissions: allPermissions.map((item) => {
        item.checked = false;
        return item;
      })
    });
    function submit() {
      form.post(route("dashboard.roles.store"), {
        preserveScroll: true,
        preserveState: (page) => Object.keys(page.props.errors).length,
        onSuccess: () => {
          showCreateRole.value = false;
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({
        "button-label": unref(__)("create"),
        "has-cancel": true,
        hasErrors: unref(form).hasErrors,
        "is-form": true,
        "model-value": unref(showCreateRole),
        title: unref(__)("create_field", { field: "role" }),
        onCancel: ($event) => isRef(showCreateRole) ? showCreateRole.value = false : showCreateRole = false,
        onConfirm: submit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, {
              errors: unref(form).errors.name,
              label: unref(__)("name")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    icon: unref(mdiAccount),
                    autocomplete: "name",
                    name: "name",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5, {
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
            _push2(`<!--[-->`);
            ssrRenderList(unref(formPermissions), (model, pKey) => {
              _push2(ssrRenderComponent(_sfc_main$6, {
                cols: { lg: 1 },
                label: unref(__)(pKey)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$7, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(model, (permission, iKey) => {
                            _push4(ssrRenderComponent(_sfc_main$8, {
                              key: iKey,
                              modelValue: unref(form).permissions[permission.key].checked,
                              "onUpdate:modelValue": ($event) => unref(form).permissions[permission.key].checked = $event,
                              checked: unref(form).permissions[permission.key].checked,
                              label: unref(__)(permission.name),
                              value: permission.id
                            }, null, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(model, (permission, iKey) => {
                              return openBlock(), createBlock(_sfc_main$8, {
                                key: iKey,
                                modelValue: unref(form).permissions[permission.key].checked,
                                "onUpdate:modelValue": ($event) => unref(form).permissions[permission.key].checked = $event,
                                checked: unref(form).permissions[permission.key].checked,
                                label: unref(__)(permission.name),
                                value: permission.id
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "checked", "label", "value"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$7, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(model, (permission, iKey) => {
                            return openBlock(), createBlock(_sfc_main$8, {
                              key: iKey,
                              modelValue: unref(form).permissions[permission.key].checked,
                              "onUpdate:modelValue": ($event) => unref(form).permissions[permission.key].checked = $event,
                              checked: unref(form).permissions[permission.key].checked,
                              label: unref(__)(permission.name),
                              value: permission.id
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "checked", "label", "value"]);
                          }), 128))
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              createVNode(_sfc_main$4, {
                errors: unref(form).errors.name,
                label: unref(__)("name")
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$5, {
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(formPermissions), (model, pKey) => {
                return openBlock(), createBlock(_sfc_main$6, {
                  cols: { lg: 1 },
                  label: unref(__)(pKey)
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$7, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(model, (permission, iKey) => {
                          return openBlock(), createBlock(_sfc_main$8, {
                            key: iKey,
                            modelValue: unref(form).permissions[permission.key].checked,
                            "onUpdate:modelValue": ($event) => unref(form).permissions[permission.key].checked = $event,
                            checked: unref(form).permissions[permission.key].checked,
                            label: unref(__)(permission.name),
                            value: permission.id
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "checked", "label", "value"]);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["label"]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Roles/CreateRole.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    let showEditRole = ref(false);
    let showCreateRole = ref(false);
    let actionConfirm = ref(false);
    provide("showEditRole", showEditRole);
    provide("showCreateRole", showCreateRole);
    provide("actionConfirm", actionConfirm);
    let roles = usePage().props.roles.data;
    let editedRole = ref({});
    let deletedRole = ref(null);
    function edit(role) {
      editedRole.value = role;
      showEditRole.value = true;
    }
    function destroy(role) {
      actionConfirm.value = true;
      deletedRole = role.id;
    }
    function destroyConfirm() {
      router.delete(route("dashboard.roles.destroy", deletedRole), {
        preserveState: (page) => Object.keys(page.props.errors).length,
        preserveScroll: true
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$9, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$a, {
              items: [{ name: _ctx.__("roles"), href: _ctx.route("dashboard.roles.index") }]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$b, {
              icon: unref(mdiLockAlertOutline),
              title: _ctx.__("roles"),
              main: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    icon: unref(mdiPlusCircle),
                    color: "success",
                    onClick: ($event) => isRef(showCreateRole) ? showCreateRole.value = true : showCreateRole = true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$c, {
                      icon: unref(mdiPlusCircle),
                      color: "success",
                      onClick: ($event) => isRef(showCreateRole) ? showCreateRole.value = true : showCreateRole = true
                    }, null, 8, ["icon", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$d, { "has-table": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$e, {
                    headers: ["#", _ctx.__("name"), _ctx.__("created_at")]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(roles), (role, key) => {
                          _push4(`<tr class="rtl:flex-row-reverse"${_scopeId3}><td data-label="# "${_scopeId3}>${ssrInterpolate(key + 1)}</td><td${ssrRenderAttr("data-label", _ctx.__("name"))} class="border-b-0 lg:w-6 before:hidden w-24 mx-auto"${_scopeId3}>${ssrInterpolate(role.name)}</td><td${ssrRenderAttr("data-label", _ctx.__("created_at"))}${_scopeId3}>${ssrInterpolate(role.created_at)}</td><td${ssrRenderAttr("data-label", _ctx.__("options"))}${_scopeId3}>`);
                          _push4(ssrRenderComponent(_sfc_main$f, {
                            model: "roles",
                            "has-show": false,
                            onDestroy: ($event) => destroy(role),
                            onEdit: ($event) => edit(role)
                          }, null, _parent4, _scopeId3));
                          _push4(`</td></tr>`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(roles), (role, key) => {
                            return openBlock(), createBlock("tr", { class: "rtl:flex-row-reverse" }, [
                              createVNode("td", { "data-label": "# " }, toDisplayString(key + 1), 1),
                              createVNode("td", {
                                "data-label": _ctx.__("name"),
                                class: "border-b-0 lg:w-6 before:hidden w-24 mx-auto"
                              }, toDisplayString(role.name), 9, ["data-label"]),
                              createVNode("td", {
                                "data-label": _ctx.__("created_at")
                              }, toDisplayString(role.created_at), 9, ["data-label"]),
                              createVNode("td", {
                                "data-label": _ctx.__("options")
                              }, [
                                createVNode(_sfc_main$f, {
                                  model: "roles",
                                  "has-show": false,
                                  onDestroy: ($event) => destroy(role),
                                  onEdit: ($event) => edit(role)
                                }, null, 8, ["onDestroy", "onEdit"])
                              ], 8, ["data-label"])
                            ]);
                          }), 256))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$e, {
                      headers: ["#", _ctx.__("name"), _ctx.__("created_at")]
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(roles), (role, key) => {
                          return openBlock(), createBlock("tr", { class: "rtl:flex-row-reverse" }, [
                            createVNode("td", { "data-label": "# " }, toDisplayString(key + 1), 1),
                            createVNode("td", {
                              "data-label": _ctx.__("name"),
                              class: "border-b-0 lg:w-6 before:hidden w-24 mx-auto"
                            }, toDisplayString(role.name), 9, ["data-label"]),
                            createVNode("td", {
                              "data-label": _ctx.__("created_at")
                            }, toDisplayString(role.created_at), 9, ["data-label"]),
                            createVNode("td", {
                              "data-label": _ctx.__("options")
                            }, [
                              createVNode(_sfc_main$f, {
                                model: "roles",
                                "has-show": false,
                                onDestroy: ($event) => destroy(role),
                                onEdit: ($event) => edit(role)
                              }, null, 8, ["onDestroy", "onEdit"])
                            ], 8, ["data-label"])
                          ]);
                        }), 256))
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
              createVNode(_sfc_main$a, {
                items: [{ name: _ctx.__("roles"), href: _ctx.route("dashboard.roles.index") }]
              }, null, 8, ["items"]),
              createVNode(_sfc_main$b, {
                icon: unref(mdiLockAlertOutline),
                title: _ctx.__("roles"),
                main: ""
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$c, {
                    icon: unref(mdiPlusCircle),
                    color: "success",
                    onClick: ($event) => isRef(showCreateRole) ? showCreateRole.value = true : showCreateRole = true
                  }, null, 8, ["icon", "onClick"])
                ]),
                _: 1
              }, 8, ["icon", "title"]),
              createVNode(_sfc_main$d, { "has-table": "" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$e, {
                    headers: ["#", _ctx.__("name"), _ctx.__("created_at")]
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(roles), (role, key) => {
                        return openBlock(), createBlock("tr", { class: "rtl:flex-row-reverse" }, [
                          createVNode("td", { "data-label": "# " }, toDisplayString(key + 1), 1),
                          createVNode("td", {
                            "data-label": _ctx.__("name"),
                            class: "border-b-0 lg:w-6 before:hidden w-24 mx-auto"
                          }, toDisplayString(role.name), 9, ["data-label"]),
                          createVNode("td", {
                            "data-label": _ctx.__("created_at")
                          }, toDisplayString(role.created_at), 9, ["data-label"]),
                          createVNode("td", {
                            "data-label": _ctx.__("options")
                          }, [
                            createVNode(_sfc_main$f, {
                              model: "roles",
                              "has-show": false,
                              onDestroy: ($event) => destroy(role),
                              onEdit: ($event) => edit(role)
                            }, null, 8, ["onDestroy", "onEdit"])
                          ], 8, ["data-label"])
                        ]);
                      }), 256))
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
      if (unref(showEditRole)) {
        _push(ssrRenderComponent(_sfc_main$2, { role: unref(editedRole) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(showCreateRole)) {
        _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$g, { onConfirm: destroyConfirm }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Pages/Roles/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
