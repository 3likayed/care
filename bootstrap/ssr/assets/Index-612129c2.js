import { inject, mergeProps, unref, isRef, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, ref, provide, createCommentVNode } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$8 } from "./SectionMain-10700a79.js";
import { usePage, useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$9 } from "./BreadCrumb-4683e004.js";
import { _ as _sfc_main$a } from "./ModelList-e7955b96.js";
import { _ as _sfc_main$2 } from "./CardBoxModal-a656ae9f.js";
import { mdiAccount } from "@mdi/js";
import { _ as _sfc_main$3 } from "./FormField-df0fbba2.js";
import { g as __, a as _sfc_main$4 } from "../app.js";
import { _ as _sfc_main$6 } from "./FormCheckRadioGroup-dcffe4e0.js";
import { _ as _sfc_main$7 } from "./FormCheckRadio-6c235a0c.js";
import { _ as _sfc_main$5 } from "./FormWithLabelField-bb0b44ef.js";
import "./ModelData-c2931371.js";
import "./SectionTitleLineWithButton-20201868.js";
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
const _sfc_main$1 = {
  __name: "CreateRole",
  __ssrInlineRender: true,
  setup(__props) {
    let showCreateRole = inject("showCreateRole");
    const page = usePage();
    const allPermissions = page.props.permissions;
    let formPermissions = {};
    allPermissions.map(function(item2, key) {
      let splitted = item2.name.split(".");
      (formPermissions[splitted[0]] = formPermissions[splitted[0]] || []).push({
        name: splitted[1],
        checked: false,
        id: item2.id,
        key
      });
    });
    let form = useForm({
      name: null,
      permissions: allPermissions.map((item2) => {
        item2.checked = false;
        return item2;
      })
    });
    function submit() {
      form.post(route("dashboard.roles.store"), {
        preserveScroll: true,
        preserveState: (page2) => Object.keys(page2.props.errors).length,
        onSuccess: () => {
          showCreateRole.value = false;
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, mergeProps({
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
            _push2(ssrRenderComponent(_sfc_main$3, {
              errors: unref(form).errors.name,
              label: unref(__)("name")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    modelValue: unref(form).name,
                    "onUpdate:modelValue": ($event) => unref(form).name = $event,
                    icon: unref(mdiAccount),
                    autocomplete: "name",
                    name: "name",
                    required: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4, {
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
              _push2(ssrRenderComponent(_sfc_main$5, {
                cols: { lg: 1 },
                label: unref(__)(pKey)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$6, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(model, (permission, iKey) => {
                            _push4(ssrRenderComponent(_sfc_main$7, {
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
                              return openBlock(), createBlock(_sfc_main$7, {
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
                      createVNode(_sfc_main$6, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(model, (permission, iKey) => {
                            return openBlock(), createBlock(_sfc_main$7, {
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
              createVNode(_sfc_main$3, {
                errors: unref(form).errors.name,
                label: unref(__)("name")
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$4, {
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
                return openBlock(), createBlock(_sfc_main$5, {
                  cols: { lg: 1 },
                  label: unref(__)(pKey)
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$6, null, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(model, (permission, iKey) => {
                          return openBlock(), createBlock(_sfc_main$7, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Models/Role/RoleCreate.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePage();
    let data = page.props.roles;
    let model = "role";
    let addonData = {
      check: (permissions, permission) => {
        return Boolean(permissions.find((permission2) => permission2.id === item.id));
      }
    };
    let showCreateRole = ref(false);
    provide("showCreateRole", showCreateRole);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$8, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$9, {
              items: [{ name: _ctx.__(_ctx.modelResolver(unref(model))), href: _ctx.route(`dashboard.${_ctx.modelResolver(unref(model))}.index`) }]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$a, {
              "addon-data": unref(addonData),
              data: unref(data),
              model: unref(model),
              onCreate: ($event) => isRef(showCreateRole) ? showCreateRole.value = true : showCreateRole = true
            }, {
              create: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(showCreateRole)) {
                    _push3(ssrRenderComponent(_sfc_main$1, null, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    unref(showCreateRole) ? (openBlock(), createBlock(_sfc_main$1, { key: 0 })) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$9, {
                items: [{ name: _ctx.__(_ctx.modelResolver(unref(model))), href: _ctx.route(`dashboard.${_ctx.modelResolver(unref(model))}.index`) }]
              }, null, 8, ["items"]),
              createVNode(_sfc_main$a, {
                "addon-data": unref(addonData),
                data: unref(data),
                model: unref(model),
                onCreate: ($event) => isRef(showCreateRole) ? showCreateRole.value = true : showCreateRole = true
              }, {
                create: withCtx(() => [
                  unref(showCreateRole) ? (openBlock(), createBlock(_sfc_main$1, { key: 0 })) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["addon-data", "data", "model", "onCreate"])
            ];
          }
        }),
        _: 1
      }, _parent));
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
