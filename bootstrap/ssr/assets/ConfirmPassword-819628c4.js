import { ref, withCtx, unref, createVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { b as _sfc_main$1, _ as _sfc_main$6, c as _sfc_main$7, a as _sfc_main$8 } from "../app.js";
import { _ as _sfc_main$2 } from "./SectionFullScreen-2cccaecf.js";
import { _ as _sfc_main$3 } from "./CardBox-b517a69f.js";
import { a as _sfc_main$4, _ as _sfc_main$5 } from "./FormField-a416fc4e.js";
import "pinia";
import "ziggy-js";
/* empty css                                 */import "@mdi/js";
import "axios";
import "@tinymce/tinymce-vue";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "@fawmi/vue-google-maps";
const _sfc_main = {
  __name: "ConfirmPassword",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      password: ""
    });
    const passwordInput = ref(null);
    const submit = () => {
      form.post(route("password.confirm"), {
        preserveState: (page) => Object.keys(page.props.errors).length,
        onFinish: () => {
          var _a;
          form.reset();
          (_a = passwordInput.value) == null ? void 0 : _a.focus();
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Secure Area" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, { bg: "purplePink" }, {
              default: withCtx(({ cardClass }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    class: cardClass,
                    "is-form": "",
                    onSubmit: submit
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$4, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$5, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mb-4 text-sm text-gray-600"${_scopeId4}> This is a secure area of the application. Please confirm your password before continuing. </div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " This is a secure area of the application. Please confirm your password before continuing. ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$5, {
                          help: "Please enter your password to confirm",
                          label: "Password",
                          "label-for": "password"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$6, {
                                id: "password",
                                modelValue: unref(form).password,
                                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                autocomplete: "current-password",
                                required: "",
                                type: "password",
                                onSetRef: ($event) => passwordInput.value = $event
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$6, {
                                  id: "password",
                                  modelValue: unref(form).password,
                                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                  autocomplete: "current-password",
                                  required: "",
                                  type: "password",
                                  onSetRef: ($event) => passwordInput.value = $event
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "onSetRef"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$7, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$8, {
                          class: { "opacity-25": unref(form).processing },
                          disabled: unref(form).processing,
                          color: "info",
                          label: "Confirm",
                          type: "submit"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$4),
                          createVNode(_sfc_main$5, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " This is a secure area of the application. Please confirm your password before continuing. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$5, {
                            help: "Please enter your password to confirm",
                            label: "Password",
                            "label-for": "password"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6, {
                                id: "password",
                                modelValue: unref(form).password,
                                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                autocomplete: "current-password",
                                required: "",
                                type: "password",
                                onSetRef: ($event) => passwordInput.value = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onSetRef"])
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$7),
                          createVNode(_sfc_main$8, {
                            class: { "opacity-25": unref(form).processing },
                            disabled: unref(form).processing,
                            color: "info",
                            label: "Confirm",
                            type: "submit"
                          }, null, 8, ["class", "disabled"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, {
                      class: cardClass,
                      "is-form": "",
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$4),
                        createVNode(_sfc_main$5, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " This is a secure area of the application. Please confirm your password before continuing. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$5, {
                          help: "Please enter your password to confirm",
                          label: "Password",
                          "label-for": "password"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6, {
                              id: "password",
                              modelValue: unref(form).password,
                              "onUpdate:modelValue": ($event) => unref(form).password = $event,
                              autocomplete: "current-password",
                              required: "",
                              type: "password",
                              onSetRef: ($event) => passwordInput.value = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onSetRef"])
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$7),
                        createVNode(_sfc_main$8, {
                          class: { "opacity-25": unref(form).processing },
                          disabled: unref(form).processing,
                          color: "info",
                          label: "Confirm",
                          type: "submit"
                        }, null, 8, ["class", "disabled"])
                      ]),
                      _: 2
                    }, 1032, ["class", "onSubmit"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(Head), { title: "Secure Area" }),
              createVNode(_sfc_main$2, { bg: "purplePink" }, {
                default: withCtx(({ cardClass }) => [
                  createVNode(_sfc_main$3, {
                    class: cardClass,
                    "is-form": "",
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$4),
                      createVNode(_sfc_main$5, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " This is a secure area of the application. Please confirm your password before continuing. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$5, {
                        help: "Please enter your password to confirm",
                        label: "Password",
                        "label-for": "password"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
                            id: "password",
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            autocomplete: "current-password",
                            required: "",
                            type: "password",
                            onSetRef: ($event) => passwordInput.value = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onSetRef"])
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$7),
                      createVNode(_sfc_main$8, {
                        class: { "opacity-25": unref(form).processing },
                        disabled: unref(form).processing,
                        color: "info",
                        label: "Confirm",
                        type: "submit"
                      }, null, 8, ["class", "disabled"])
                    ]),
                    _: 2
                  }, 1032, ["class", "onSubmit"])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Pages/Auth/ConfirmPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
