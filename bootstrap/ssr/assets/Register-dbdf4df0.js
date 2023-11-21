import { computed, withCtx, unref, createVNode, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm, usePage, Head } from "@inertiajs/vue3";
import { mdiAccount, mdiEmail, mdiFormTextboxPassword } from "@mdi/js";
import { b as _sfc_main$1, _ as _sfc_main$6, c as _sfc_main$8, e as _sfc_main$9, a as _sfc_main$a } from "../app.js";
import { _ as _sfc_main$2 } from "./SectionFullScreen-2cccaecf.js";
import { _ as _sfc_main$3 } from "./CardBox-b517a69f.js";
import { _ as _sfc_main$7 } from "./FormCheckRadioGroup-1bb8b6e3.js";
import { a as _sfc_main$4, _ as _sfc_main$5 } from "./FormField-a416fc4e.js";
import "pinia";
import "ziggy-js";
/* empty css                                 */import "axios";
import "@tinymce/tinymce-vue";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "@fawmi/vue-google-maps";
const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      terms: []
    });
    const hasTermsAndPrivacyPolicyFeature = computed(
      () => {
        var _a;
        return (_a = usePage().props.jetstream) == null ? void 0 : _a.hasTermsAndPrivacyPolicyFeature;
      }
    );
    const submit = () => {
      form.transform((data) => ({
        ...data,
        terms: form.terms && form.terms.length
      })).post(route("dashboard.register"), {
        onFinish: () => form.reset("password", "password_confirmation")
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Register" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, { bg: "purplePink" }, {
              default: withCtx(({ cardClass }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    class: [cardClass, "my-24"],
                    "is-form": "",
                    onSubmit: submit
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$4, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$5, {
                          label: "Name",
                          "label-for": "name",
                          help: "Please enter your name"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$6, {
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                id: "name",
                                icon: unref(mdiAccount),
                                autocomplete: "name",
                                type: "text",
                                required: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$6, {
                                  modelValue: unref(form).name,
                                  "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                  id: "name",
                                  icon: unref(mdiAccount),
                                  autocomplete: "name",
                                  type: "text",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$5, {
                          label: "Email",
                          "label-for": "email",
                          help: "Please enter your email"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$6, {
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                id: "email",
                                icon: unref(mdiEmail),
                                autocomplete: "email",
                                type: "email",
                                required: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$6, {
                                  modelValue: unref(form).email,
                                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                  id: "email",
                                  icon: unref(mdiEmail),
                                  autocomplete: "email",
                                  type: "email",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$5, {
                          label: "Password",
                          "label-for": "password",
                          help: "Please enter new password"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$6, {
                                modelValue: unref(form).password,
                                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                id: "password",
                                icon: unref(mdiFormTextboxPassword),
                                type: "password",
                                autocomplete: "new-password",
                                required: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$6, {
                                  modelValue: unref(form).password,
                                  "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                  id: "password",
                                  icon: unref(mdiFormTextboxPassword),
                                  type: "password",
                                  autocomplete: "new-password",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$5, {
                          label: "Confirm Password",
                          "label-for": "password_confirmation",
                          help: "Please confirm your password"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$6, {
                                modelValue: unref(form).password_confirmation,
                                "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                                id: "password_confirmation",
                                icon: unref(mdiFormTextboxPassword),
                                type: "password",
                                autocomplete: "new-password",
                                required: ""
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$6, {
                                  modelValue: unref(form).password_confirmation,
                                  "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                                  id: "password_confirmation",
                                  icon: unref(mdiFormTextboxPassword),
                                  type: "password",
                                  autocomplete: "new-password",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        if (hasTermsAndPrivacyPolicyFeature.value) {
                          _push4(ssrRenderComponent(_sfc_main$7, {
                            modelValue: unref(form).terms,
                            "onUpdate:modelValue": ($event) => unref(form).terms = $event,
                            name: "remember",
                            options: { agree: "I agree to the Terms" }
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_sfc_main$8, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$9, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$a, {
                                type: "submit",
                                color: "info",
                                label: "Register",
                                class: { "opacity-25": unref(form).processing },
                                disabled: unref(form).processing
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_sfc_main$a, {
                                "route-name": "login",
                                color: "info",
                                outline: "",
                                label: "Login"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$a, {
                                  type: "submit",
                                  color: "info",
                                  label: "Register",
                                  class: { "opacity-25": unref(form).processing },
                                  disabled: unref(form).processing
                                }, null, 8, ["class", "disabled"]),
                                createVNode(_sfc_main$a, {
                                  "route-name": "login",
                                  color: "info",
                                  outline: "",
                                  label: "Login"
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$4),
                          createVNode(_sfc_main$5, {
                            label: "Name",
                            "label-for": "name",
                            help: "Please enter your name"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6, {
                                modelValue: unref(form).name,
                                "onUpdate:modelValue": ($event) => unref(form).name = $event,
                                id: "name",
                                icon: unref(mdiAccount),
                                autocomplete: "name",
                                type: "text",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$5, {
                            label: "Email",
                            "label-for": "email",
                            help: "Please enter your email"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6, {
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                id: "email",
                                icon: unref(mdiEmail),
                                autocomplete: "email",
                                type: "email",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$5, {
                            label: "Password",
                            "label-for": "password",
                            help: "Please enter new password"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6, {
                                modelValue: unref(form).password,
                                "onUpdate:modelValue": ($event) => unref(form).password = $event,
                                id: "password",
                                icon: unref(mdiFormTextboxPassword),
                                type: "password",
                                autocomplete: "new-password",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$5, {
                            label: "Confirm Password",
                            "label-for": "password_confirmation",
                            help: "Please confirm your password"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$6, {
                                modelValue: unref(form).password_confirmation,
                                "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                                id: "password_confirmation",
                                icon: unref(mdiFormTextboxPassword),
                                type: "password",
                                autocomplete: "new-password",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }),
                          hasTermsAndPrivacyPolicyFeature.value ? (openBlock(), createBlock(_sfc_main$7, {
                            key: 0,
                            modelValue: unref(form).terms,
                            "onUpdate:modelValue": ($event) => unref(form).terms = $event,
                            name: "remember",
                            options: { agree: "I agree to the Terms" }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                          createVNode(_sfc_main$8),
                          createVNode(_sfc_main$9, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a, {
                                type: "submit",
                                color: "info",
                                label: "Register",
                                class: { "opacity-25": unref(form).processing },
                                disabled: unref(form).processing
                              }, null, 8, ["class", "disabled"]),
                              createVNode(_sfc_main$a, {
                                "route-name": "login",
                                color: "info",
                                outline: "",
                                label: "Login"
                              })
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
                      class: [cardClass, "my-24"],
                      "is-form": "",
                      onSubmit: withModifiers(submit, ["prevent"])
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$4),
                        createVNode(_sfc_main$5, {
                          label: "Name",
                          "label-for": "name",
                          help: "Please enter your name"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6, {
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              id: "name",
                              icon: unref(mdiAccount),
                              autocomplete: "name",
                              type: "text",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$5, {
                          label: "Email",
                          "label-for": "email",
                          help: "Please enter your email"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6, {
                              modelValue: unref(form).email,
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              id: "email",
                              icon: unref(mdiEmail),
                              autocomplete: "email",
                              type: "email",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$5, {
                          label: "Password",
                          "label-for": "password",
                          help: "Please enter new password"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6, {
                              modelValue: unref(form).password,
                              "onUpdate:modelValue": ($event) => unref(form).password = $event,
                              id: "password",
                              icon: unref(mdiFormTextboxPassword),
                              type: "password",
                              autocomplete: "new-password",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$5, {
                          label: "Confirm Password",
                          "label-for": "password_confirmation",
                          help: "Please confirm your password"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$6, {
                              modelValue: unref(form).password_confirmation,
                              "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                              id: "password_confirmation",
                              icon: unref(mdiFormTextboxPassword),
                              type: "password",
                              autocomplete: "new-password",
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }),
                        hasTermsAndPrivacyPolicyFeature.value ? (openBlock(), createBlock(_sfc_main$7, {
                          key: 0,
                          modelValue: unref(form).terms,
                          "onUpdate:modelValue": ($event) => unref(form).terms = $event,
                          name: "remember",
                          options: { agree: "I agree to the Terms" }
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                        createVNode(_sfc_main$8),
                        createVNode(_sfc_main$9, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$a, {
                              type: "submit",
                              color: "info",
                              label: "Register",
                              class: { "opacity-25": unref(form).processing },
                              disabled: unref(form).processing
                            }, null, 8, ["class", "disabled"]),
                            createVNode(_sfc_main$a, {
                              "route-name": "login",
                              color: "info",
                              outline: "",
                              label: "Login"
                            })
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
              createVNode(unref(Head), { title: "Register" }),
              createVNode(_sfc_main$2, { bg: "purplePink" }, {
                default: withCtx(({ cardClass }) => [
                  createVNode(_sfc_main$3, {
                    class: [cardClass, "my-24"],
                    "is-form": "",
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$4),
                      createVNode(_sfc_main$5, {
                        label: "Name",
                        "label-for": "name",
                        help: "Please enter your name"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            id: "name",
                            icon: unref(mdiAccount),
                            autocomplete: "name",
                            type: "text",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$5, {
                        label: "Email",
                        "label-for": "email",
                        help: "Please enter your email"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            id: "email",
                            icon: unref(mdiEmail),
                            autocomplete: "email",
                            type: "email",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$5, {
                        label: "Password",
                        "label-for": "password",
                        help: "Please enter new password"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            id: "password",
                            icon: unref(mdiFormTextboxPassword),
                            type: "password",
                            autocomplete: "new-password",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$5, {
                        label: "Confirm Password",
                        "label-for": "password_confirmation",
                        help: "Please confirm your password"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
                            modelValue: unref(form).password_confirmation,
                            "onUpdate:modelValue": ($event) => unref(form).password_confirmation = $event,
                            id: "password_confirmation",
                            icon: unref(mdiFormTextboxPassword),
                            type: "password",
                            autocomplete: "new-password",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ]),
                        _: 1
                      }),
                      hasTermsAndPrivacyPolicyFeature.value ? (openBlock(), createBlock(_sfc_main$7, {
                        key: 0,
                        modelValue: unref(form).terms,
                        "onUpdate:modelValue": ($event) => unref(form).terms = $event,
                        name: "remember",
                        options: { agree: "I agree to the Terms" }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true),
                      createVNode(_sfc_main$8),
                      createVNode(_sfc_main$9, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$a, {
                            type: "submit",
                            color: "info",
                            label: "Register",
                            class: { "opacity-25": unref(form).processing },
                            disabled: unref(form).processing
                          }, null, 8, ["class", "disabled"]),
                          createVNode(_sfc_main$a, {
                            "route-name": "login",
                            color: "info",
                            outline: "",
                            label: "Login"
                          })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
