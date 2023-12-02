import { unref, mergeProps, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./CardBoxModal-a656ae9f.js";
import { mdiAccount } from "@mdi/js";
import { _ as _sfc_main$2 } from "./FormField-df0fbba2.js";
import { g as __, a as _sfc_main$3 } from "../app.js";
import { usePage, useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./FormCheckRadioGroup-dcffe4e0.js";
import { _ as _sfc_main$6 } from "./FormCheckRadio-6c235a0c.js";
import { _ as _sfc_main$4 } from "./FormWithLabelField-bb0b44ef.js";
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
  __name: "RoleData",
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
    let props = __props;
    let model = "Role";
    const page = usePage();
    let allPermissions = page.props.permissions;
    let formPermissions = {};
    allPermissions.map(function(item, key) {
      let splitted = item.name.split(".");
      (formPermissions[splitted[0]] = formPermissions[splitted[0]] || []).push({
        name: splitted[1],
        checked: Boolean(props.data.permissions.find((permission) => permission.id === item.id)),
        id: item.id,
        key
      });
    });
    let form = useForm({
      name: props.data.name,
      permissions: allPermissions.map((item) => {
        item.checked = Boolean(props.data.permissions.find((permission) => permission.id === item.id));
        return item;
      })
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.can(`${_ctx.modelResolver(unref(model))}.${__props.operation}`)) {
        _push(ssrRenderComponent(_sfc_main$1, mergeProps({
          "button-label": unref(__)(__props.operation),
          "has-cancel": __props.isModal,
          "has-errors": unref(form).hasErrors,
          "is-form": true,
          "is-modal": __props.isModal,
          "model-value": true,
          title: unref(__)(__props.operation + "_field", { field: unref(model) }),
          onCancel: ($event) => _ctx.$emit("cancel"),
          onConfirm: ($event) => unref(Model).submit(__props.operation, unref(model), unref(form), __props.data.id)
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                errors: unref(form).errors.name,
                label: unref(__)("name")
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
              _push2(`<!--[-->`);
              ssrRenderList(unref(formPermissions), (model2, pKey) => {
                _push2(ssrRenderComponent(_sfc_main$4, {
                  cols: { lg: 1 },
                  label: unref(__)(pKey)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_sfc_main$5, null, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<!--[-->`);
                            ssrRenderList(model2, (permission, iKey) => {
                              _push4(ssrRenderComponent(_sfc_main$6, {
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
                              (openBlock(true), createBlock(Fragment, null, renderList(model2, (permission, iKey) => {
                                return openBlock(), createBlock(_sfc_main$6, {
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
                        createVNode(_sfc_main$5, null, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(model2, (permission, iKey) => {
                              return openBlock(), createBlock(_sfc_main$6, {
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
                createVNode(_sfc_main$2, {
                  errors: unref(form).errors.name,
                  label: unref(__)("name")
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(formPermissions), (model2, pKey) => {
                  return openBlock(), createBlock(_sfc_main$4, {
                    cols: { lg: 1 },
                    label: unref(__)(pKey)
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$5, null, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(model2, (permission, iKey) => {
                            return openBlock(), createBlock(_sfc_main$6, {
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
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Models/Role/RoleData.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
