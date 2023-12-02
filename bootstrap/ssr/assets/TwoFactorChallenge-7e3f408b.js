import { ref, withCtx, unref, createVNode, openBlock, createBlock, Fragment, createTextVNode, withModifiers, useSSRContext, nextTick } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { _ as _sfc_main$1, a as _sfc_main$6, b as _sfc_main$7, d as _sfc_main$8, c as _sfc_main$9 } from "../app.js";
import { _ as _sfc_main$2 } from "./SectionFullScreen-542a7658.js";
import { _ as _sfc_main$3 } from "./CardBox-8f14b1bf.js";
import { _ as _sfc_main$5 } from "./FormField-df0fbba2.js";
import { _ as _sfc_main$4 } from "./FormValidationErrors-94aef0ec.js";
import "pinia";
import "ziggy-js";
import "pluralize";
/* empty css                                 */import "@mdi/js";
import "axios";
import "@tinymce/tinymce-vue";
import "primevue/dropdown/dropdown.esm.js";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "primevue/config/config.esm.js";
const _sfc_main = {
  __name: "TwoFactorChallenge",
  __ssrInlineRender: true,
  setup(__props) {
    const recovery = ref(false);
    const form = useForm({
      code: "",
      recovery_code: ""
    });
    const recoveryCodeInput = ref(null);
    const codeInput = ref(null);
    const toggleRecovery = async () => {
      var _a, _b;
      recovery.value ^= true;
      await nextTick();
      if (recovery.value) {
        (_a = recoveryCodeInput.value) == null ? void 0 : _a.focus();
        form.code = "";
      } else {
        (_b = codeInput.value) == null ? void 0 : _b.focus();
        form.recovery_code = "";
      }
    };
    const submit = () => {
      form.post(route("two-factor.login"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Two-factor Confirmation" }, null, _parent2, _scopeId));
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
                              _push5(`<div class="mb-4 text-sm text-gray-600"${_scopeId4}>`);
                              if (!recovery.value) {
                                _push5(`<!--[--> Please confirm access to your account by entering the authentication code provided by your authenticator application. <!--]-->`);
                              } else {
                                _push5(`<!--[--> Please confirm access to your account by entering one of your emergency recovery codes. <!--]-->`);
                              }
                              _push5(`</div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mb-4 text-sm text-gray-600" }, [
                                  !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createTextVNode(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")
                                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    createTextVNode(" Please confirm access to your account by entering one of your emergency recovery codes. ")
                                  ], 64))
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        if (!recovery.value) {
                          _push4(ssrRenderComponent(_sfc_main$5, {
                            help: "Please enter one-time code",
                            label: "Code",
                            "label-for": "code"
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$6, {
                                  id: "code",
                                  modelValue: unref(form).code,
                                  "onUpdate:modelValue": ($event) => unref(form).code = $event,
                                  autocomplete: "one-time-code",
                                  autofocus: "",
                                  inputmode: "numeric",
                                  type: "text",
                                  onSetRef: ($event) => codeInput.value = $event
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$6, {
                                    id: "code",
                                    modelValue: unref(form).code,
                                    "onUpdate:modelValue": ($event) => unref(form).code = $event,
                                    autocomplete: "one-time-code",
                                    autofocus: "",
                                    inputmode: "numeric",
                                    type: "text",
                                    onSetRef: ($event) => codeInput.value = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onSetRef"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(ssrRenderComponent(_sfc_main$5, {
                            help: "Please enter recovery code",
                            label: "Recovery Code",
                            "label-for": "recovery_code"
                          }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$6, {
                                  id: "recovery_code",
                                  modelValue: unref(form).recovery_code,
                                  "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                                  autocomplete: "one-time-code",
                                  class: "mt-1 block w-full",
                                  type: "text",
                                  onSetRef: ($event) => recoveryCodeInput.value = $event
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$6, {
                                    id: "recovery_code",
                                    modelValue: unref(form).recovery_code,
                                    "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                                    autocomplete: "one-time-code",
                                    class: "mt-1 block w-full",
                                    type: "text",
                                    onSetRef: ($event) => recoveryCodeInput.value = $event
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onSetRef"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        }
                        _push4(ssrRenderComponent(_sfc_main$7, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$8, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$9, {
                                class: { "opacity-25": unref(form).processing },
                                disabled: unref(form).processing,
                                color: "info",
                                label: "Log in",
                                type: "submit"
                              }, null, _parent5, _scopeId4));
                              _push5(`<button${_scopeId4}>`);
                              if (!recovery.value) {
                                _push5(`<!--[--> Use a recovery code <!--]-->`);
                              } else {
                                _push5(`<!--[--> Use an authentication code <!--]-->`);
                              }
                              _push5(`</button>`);
                            } else {
                              return [
                                createVNode(_sfc_main$9, {
                                  class: { "opacity-25": unref(form).processing },
                                  disabled: unref(form).processing,
                                  color: "info",
                                  label: "Log in",
                                  type: "submit"
                                }, null, 8, ["class", "disabled"]),
                                createVNode("button", {
                                  onClick: withModifiers(toggleRecovery, ["prevent"])
                                }, [
                                  !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                    createTextVNode(" Use a recovery code ")
                                  ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                    createTextVNode(" Use an authentication code ")
                                  ], 64))
                                ], 8, ["onClick"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$4),
                          createVNode(_sfc_main$5, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, [
                                !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createTextVNode(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")
                                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                  createTextVNode(" Please confirm access to your account by entering one of your emergency recovery codes. ")
                                ], 64))
                              ])
                            ]),
                            _: 1
                          }),
                          !recovery.value ? (openBlock(), createBlock(_sfc_main$5, {
                            key: 0,
                            help: "Please enter one-time code",
                            label: "Code",
                            "label-for": "code"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6, {
                                id: "code",
                                modelValue: unref(form).code,
                                "onUpdate:modelValue": ($event) => unref(form).code = $event,
                                autocomplete: "one-time-code",
                                autofocus: "",
                                inputmode: "numeric",
                                type: "text",
                                onSetRef: ($event) => codeInput.value = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onSetRef"])
                            ]),
                            _: 1
                          })) : (openBlock(), createBlock(_sfc_main$5, {
                            key: 1,
                            help: "Please enter recovery code",
                            label: "Recovery Code",
                            "label-for": "recovery_code"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6, {
                                id: "recovery_code",
                                modelValue: unref(form).recovery_code,
                                "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                                autocomplete: "one-time-code",
                                class: "mt-1 block w-full",
                                type: "text",
                                onSetRef: ($event) => recoveryCodeInput.value = $event
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "onSetRef"])
                            ]),
                            _: 1
                          })),
                          createVNode(_sfc_main$7),
                          createVNode(_sfc_main$8, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$9, {
                                class: { "opacity-25": unref(form).processing },
                                disabled: unref(form).processing,
                                color: "info",
                                label: "Log in",
                                type: "submit"
                              }, null, 8, ["class", "disabled"]),
                              createVNode("button", {
                                onClick: withModifiers(toggleRecovery, ["prevent"])
                              }, [
                                !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                  createTextVNode(" Use a recovery code ")
                                ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                  createTextVNode(" Use an authentication code ")
                                ], 64))
                              ], 8, ["onClick"])
                            ]),
                            _: 1
                          })
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
                            createVNode("div", { class: "mb-4 text-sm text-gray-600" }, [
                              !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createTextVNode(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")
                              ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                createTextVNode(" Please confirm access to your account by entering one of your emergency recovery codes. ")
                              ], 64))
                            ])
                          ]),
                          _: 1
                        }),
                        !recovery.value ? (openBlock(), createBlock(_sfc_main$5, {
                          key: 0,
                          help: "Please enter one-time code",
                          label: "Code",
                          "label-for": "code"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6, {
                              id: "code",
                              modelValue: unref(form).code,
                              "onUpdate:modelValue": ($event) => unref(form).code = $event,
                              autocomplete: "one-time-code",
                              autofocus: "",
                              inputmode: "numeric",
                              type: "text",
                              onSetRef: ($event) => codeInput.value = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onSetRef"])
                          ]),
                          _: 1
                        })) : (openBlock(), createBlock(_sfc_main$5, {
                          key: 1,
                          help: "Please enter recovery code",
                          label: "Recovery Code",
                          "label-for": "recovery_code"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6, {
                              id: "recovery_code",
                              modelValue: unref(form).recovery_code,
                              "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                              autocomplete: "one-time-code",
                              class: "mt-1 block w-full",
                              type: "text",
                              onSetRef: ($event) => recoveryCodeInput.value = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "onSetRef"])
                          ]),
                          _: 1
                        })),
                        createVNode(_sfc_main$7),
                        createVNode(_sfc_main$8, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$9, {
                              class: { "opacity-25": unref(form).processing },
                              disabled: unref(form).processing,
                              color: "info",
                              label: "Log in",
                              type: "submit"
                            }, null, 8, ["class", "disabled"]),
                            createVNode("button", {
                              onClick: withModifiers(toggleRecovery, ["prevent"])
                            }, [
                              !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                createTextVNode(" Use a recovery code ")
                              ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                                createTextVNode(" Use an authentication code ")
                              ], 64))
                            ], 8, ["onClick"])
                          ]),
                          _: 1
                        })
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
              createVNode(unref(Head), { title: "Two-factor Confirmation" }),
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
                          createVNode("div", { class: "mb-4 text-sm text-gray-600" }, [
                            !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createTextVNode(" Please confirm access to your account by entering the authentication code provided by your authenticator application. ")
                            ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createTextVNode(" Please confirm access to your account by entering one of your emergency recovery codes. ")
                            ], 64))
                          ])
                        ]),
                        _: 1
                      }),
                      !recovery.value ? (openBlock(), createBlock(_sfc_main$5, {
                        key: 0,
                        help: "Please enter one-time code",
                        label: "Code",
                        "label-for": "code"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
                            id: "code",
                            modelValue: unref(form).code,
                            "onUpdate:modelValue": ($event) => unref(form).code = $event,
                            autocomplete: "one-time-code",
                            autofocus: "",
                            inputmode: "numeric",
                            type: "text",
                            onSetRef: ($event) => codeInput.value = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onSetRef"])
                        ]),
                        _: 1
                      })) : (openBlock(), createBlock(_sfc_main$5, {
                        key: 1,
                        help: "Please enter recovery code",
                        label: "Recovery Code",
                        "label-for": "recovery_code"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
                            id: "recovery_code",
                            modelValue: unref(form).recovery_code,
                            "onUpdate:modelValue": ($event) => unref(form).recovery_code = $event,
                            autocomplete: "one-time-code",
                            class: "mt-1 block w-full",
                            type: "text",
                            onSetRef: ($event) => recoveryCodeInput.value = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "onSetRef"])
                        ]),
                        _: 1
                      })),
                      createVNode(_sfc_main$7),
                      createVNode(_sfc_main$8, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$9, {
                            class: { "opacity-25": unref(form).processing },
                            disabled: unref(form).processing,
                            color: "info",
                            label: "Log in",
                            type: "submit"
                          }, null, 8, ["class", "disabled"]),
                          createVNode("button", {
                            onClick: withModifiers(toggleRecovery, ["prevent"])
                          }, [
                            !recovery.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                              createTextVNode(" Use a recovery code ")
                            ], 64)) : (openBlock(), createBlock(Fragment, { key: 1 }, [
                              createTextVNode(" Use an authentication code ")
                            ], 64))
                          ], 8, ["onClick"])
                        ]),
                        _: 1
                      })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Pages/Auth/TwoFactorChallenge.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
