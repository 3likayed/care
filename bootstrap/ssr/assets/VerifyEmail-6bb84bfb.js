import { computed, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { useForm, Head, Link } from "@inertiajs/vue3";
import { _ as _sfc_main$1, b as _sfc_main$7, d as _sfc_main$8, c as _sfc_main$9 } from "../app.js";
import { _ as _sfc_main$2 } from "./SectionFullScreen-542a7658.js";
import { _ as _sfc_main$3 } from "./CardBox-8f14b1bf.js";
import { _ as _sfc_main$6 } from "./FormField-df0fbba2.js";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./FormValidationErrors-94aef0ec.js";
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
  __name: "VerifyEmail",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm();
    const verificationLinkSent = computed(
      () => props.status === "verification-link-sent"
    );
    const submit = () => {
      form.post(route("verification.send"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), { title: "Email Verification" }, null, _parent2, _scopeId));
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
                        if (verificationLinkSent.value) {
                          _push4(ssrRenderComponent(_sfc_main$5, { color: "info" }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(` A new verification link has been sent to the email address you provided during registration. `);
                              } else {
                                return [
                                  createTextVNode(" A new verification link has been sent to the email address you provided during registration. ")
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
                              _push5(`<div class="mb-4 text-sm text-gray-600"${_scopeId4}> Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn&#39;t receive the email, we will gladly send you another. </div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ")
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$7, null, null, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_sfc_main$8, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$9, {
                                class: { "opacity-25": unref(form).processing },
                                disabled: unref(form).processing,
                                color: "info",
                                label: "Resend Verification Email",
                                type: "submit"
                              }, null, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(unref(Link), {
                                href: _ctx.route("logout"),
                                as: "button",
                                method: "post"
                              }, {
                                default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(` Logout `);
                                  } else {
                                    return [
                                      createTextVNode(" Logout ")
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$9, {
                                  class: { "opacity-25": unref(form).processing },
                                  disabled: unref(form).processing,
                                  color: "info",
                                  label: "Resend Verification Email",
                                  type: "submit"
                                }, null, 8, ["class", "disabled"]),
                                createVNode(unref(Link), {
                                  href: _ctx.route("logout"),
                                  as: "button",
                                  method: "post"
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(" Logout ")
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
                          verificationLinkSent.value ? (openBlock(), createBlock(_sfc_main$5, {
                            key: 0,
                            color: "info"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" A new verification link has been sent to the email address you provided during registration. ")
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          createVNode(_sfc_main$6, null, {
                            default: withCtx(() => [
                              createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ")
                            ]),
                            _: 1
                          }),
                          createVNode(_sfc_main$7),
                          createVNode(_sfc_main$8, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$9, {
                                class: { "opacity-25": unref(form).processing },
                                disabled: unref(form).processing,
                                color: "info",
                                label: "Resend Verification Email",
                                type: "submit"
                              }, null, 8, ["class", "disabled"]),
                              createVNode(unref(Link), {
                                href: _ctx.route("logout"),
                                as: "button",
                                method: "post"
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" Logout ")
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
                        verificationLinkSent.value ? (openBlock(), createBlock(_sfc_main$5, {
                          key: 0,
                          color: "info"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" A new verification link has been sent to the email address you provided during registration. ")
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        createVNode(_sfc_main$6, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ")
                          ]),
                          _: 1
                        }),
                        createVNode(_sfc_main$7),
                        createVNode(_sfc_main$8, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$9, {
                              class: { "opacity-25": unref(form).processing },
                              disabled: unref(form).processing,
                              color: "info",
                              label: "Resend Verification Email",
                              type: "submit"
                            }, null, 8, ["class", "disabled"]),
                            createVNode(unref(Link), {
                              href: _ctx.route("logout"),
                              as: "button",
                              method: "post"
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Logout ")
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
              createVNode(unref(Head), { title: "Email Verification" }),
              createVNode(_sfc_main$2, { bg: "purplePink" }, {
                default: withCtx(({ cardClass }) => [
                  createVNode(_sfc_main$3, {
                    class: cardClass,
                    "is-form": "",
                    onSubmit: withModifiers(submit, ["prevent"])
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$4),
                      verificationLinkSent.value ? (openBlock(), createBlock(_sfc_main$5, {
                        key: 0,
                        color: "info"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" A new verification link has been sent to the email address you provided during registration. ")
                        ]),
                        _: 1
                      })) : createCommentVNode("", true),
                      createVNode(_sfc_main$6, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "mb-4 text-sm text-gray-600" }, " Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another. ")
                        ]),
                        _: 1
                      }),
                      createVNode(_sfc_main$7),
                      createVNode(_sfc_main$8, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$9, {
                            class: { "opacity-25": unref(form).processing },
                            disabled: unref(form).processing,
                            color: "info",
                            label: "Resend Verification Email",
                            type: "submit"
                          }, null, 8, ["class", "disabled"]),
                          createVNode(unref(Link), {
                            href: _ctx.route("logout"),
                            as: "button",
                            method: "post"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Logout ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Pages/Auth/VerifyEmail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};