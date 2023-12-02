import { withCtx, unref, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { mdiEmail } from "@mdi/js";
import { _ as _sfc_main$1, a as _sfc_main$7, b as _sfc_main$8, d as _sfc_main$9, c as _sfc_main$a } from "../app.js";
import { _ as _sfc_main$2 } from "./SectionFullScreen-542a7658.js";
import { _ as _sfc_main$3 } from "./CardBox-8f14b1bf.js";
import { _ as _sfc_main$6 } from "./FormField-df0fbba2.js";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./FormValidationErrors-94aef0ec.js";
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
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    const submit = () => {
      form.post(route("password.email"), {
        preserveState: (page) => Object.keys(page.props.errors).length
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Forgot Password" }, null, _parent2, _scopeId));
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
                        if (__props.status) {
                          _push4(ssrRenderComponent(_sfc_main$5, { color: "info" }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(__props.status)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(__props.status), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_sfc_main$6, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<div class="mb-4 text-sm text-gray-600"${_scopeId4}> Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. </div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$6, {
                          help: "Please enter your email",
                          label: "Email"
                        }, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$7, {
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                icon: unref(mdiEmail),
                                autocomplete: "email",
                                required: "",
                                type: "email"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$7, {
                                  modelValue: unref(form).email,
                                  "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                  icon: unref(mdiEmail),
                                  autocomplete: "email",
                                  required: "",
                                  type: "email"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$8, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$9, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$a, {
                                class: { "opacity-25": unref(form).processing },
                                disabled: unref(form).processing,
                                color: "info",
                                label: "Email link",
                                type: "submit"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Link), {
                                href: _ctx.route("login")
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Back to login `);
                                  } else {
                                    return [
                                      createTextVNode(" Back to login ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$a, {
                                  class: { "opacity-25": unref(form).processing },
                                  disabled: unref(form).processing,
                                  color: "info",
                                  label: "Email link",
                                  type: "submit"
                                }, null, 8, ["class", "disabled"]),
                                createVNode(unref(Link), {
                                  href: _ctx.route("login")
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Back to login ")
                                  ]),
                                  _: 1
                                }, 8, ["href"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$4),
                          __props.status ? (openBlock(), createBlock(_sfc_main$5, {
                            key: 0,
                            color: "info"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(__props.status), 1)
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_sfc_main$6, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$6, {
                            help: "Please enter your email",
                            label: "Email"
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$7, {
                                modelValue: unref(form).email,
                                "onUpdate:modelValue": ($event) => unref(form).email = $event,
                                icon: unref(mdiEmail),
                                autocomplete: "email",
                                required: "",
                                type: "email"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$8),
                          createVNode(_sfc_main$9, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$a, {
                                class: { "opacity-25": unref(form).processing },
                                disabled: unref(form).processing,
                                color: "info",
                                label: "Email link",
                                type: "submit"
                              }, null, 8, ["class", "disabled"]),
                              createVNode(unref(Link), {
                                href: _ctx.route("login")
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Back to login ")
                                ]),
                                _: 1
                              }, 8, ["href"])
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
                        __props.status ? (openBlock(), createBlock(_sfc_main$5, {
                          key: 0,
                          color: "info"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(__props.status), 1)
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_sfc_main$6, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$6, {
                          help: "Please enter your email",
                          label: "Email"
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$7, {
                              modelValue: unref(form).email,
                              "onUpdate:modelValue": ($event) => unref(form).email = $event,
                              icon: unref(mdiEmail),
                              autocomplete: "email",
                              required: "",
                              type: "email"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$8),
                        createVNode(_sfc_main$9, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$a, {
                              class: { "opacity-25": unref(form).processing },
                              disabled: unref(form).processing,
                              color: "info",
                              label: "Email link",
                              type: "submit"
                            }, null, 8, ["class", "disabled"]),
                            createVNode(unref(Link), {
                              href: _ctx.route("login")
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Back to login ")
                              ]),
                              _: 1
                            }, 8, ["href"])
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
              createVNode(unref(Head), { title: "Forgot Password" }),
              createVNode(_sfc_main$2, { bg: "purplePink" }, {
                default: withCtx(({ cardClass }) => [
                  createVNode(_sfc_main$3, {
                    class: cardClass,
                    "is-form": "",
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$4),
                      __props.status ? (openBlock(), createBlock(_sfc_main$5, {
                        key: 0,
                        color: "info"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(__props.status), 1)
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_sfc_main$6, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$6, {
                        help: "Please enter your email",
                        label: "Email"
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$7, {
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            icon: unref(mdiEmail),
                            autocomplete: "email",
                            required: "",
                            type: "email"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$8),
                      createVNode(_sfc_main$9, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$a, {
                            class: { "opacity-25": unref(form).processing },
                            disabled: unref(form).processing,
                            color: "info",
                            label: "Email link",
                            type: "submit"
                          }, null, 8, ["class", "disabled"]),
                          createVNode(unref(Link), {
                            href: _ctx.route("login")
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Back to login ")
                            ]),
                            _: 1
                          }, 8, ["href"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
