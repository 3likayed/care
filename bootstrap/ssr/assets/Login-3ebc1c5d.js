import { unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, withModifiers, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { useForm, Head } from "@inertiajs/vue3";
import { mdiAccount, mdiAsterisk } from "@mdi/js";
import { _ as _sfc_main$1 } from "./SectionFullScreen-2cccaecf.js";
import { _ as _sfc_main$2 } from "./CardBox-b517a69f.js";
import { _ as _sfc_main$7 } from "./FormCheckRadioGroup-1bb8b6e3.js";
import { a as _sfc_main$3, b as _sfc_main$4, _ as _sfc_main$5 } from "./FormField-a416fc4e.js";
import { _ as _sfc_main$6, c as _sfc_main$9, e as _sfc_main$a, a as _sfc_main$b, b as _sfc_main$c } from "../app.js";
import { _ as _sfc_main$8 } from "./FormCheckRadio-3fbb80c8.js";
import "pinia";
import "ziggy-js";
/* empty css                                 */import "axios";
import "@tinymce/tinymce-vue";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "@fawmi/vue-google-maps";
const __default__ = {
  layout: _sfc_main$c
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: Boolean,
    status: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const form = useForm({
      email: "",
      password: "",
      remember: false
    });
    const submit = () => {
      form.post(route("dashboard.login"));
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), {
        title: _ctx.__("login")
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$1, { bg: "purplePink" }, {
        default: withCtx(({ cardClass }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              class: cardClass,
              "is-form": "",
              onSubmit: submit
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, null, null, _parent3, _scopeId2));
                  if (__props.status) {
                    _push3(ssrRenderComponent(_sfc_main$4, { color: "info" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(__props.status)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(__props.status), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    help: _ctx.__("please_enter", { value: _ctx.__("email") }),
                    label: _ctx.__("email"),
                    "label-for": "email"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$6, {
                          id: "email",
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          icon: unref(mdiAccount),
                          autocomplete: "email",
                          required: "",
                          type: "email"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$6, {
                            id: "email",
                            modelValue: unref(form).email,
                            "onUpdate:modelValue": ($event) => unref(form).email = $event,
                            icon: unref(mdiAccount),
                            autocomplete: "email",
                            required: "",
                            type: "email"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    help: _ctx.__("please_enter", { value: _ctx.__("password") }),
                    label: _ctx.__("password"),
                    "label-for": "password"
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$6, {
                          id: "password",
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          icon: unref(mdiAsterisk),
                          autocomplete: "current-password",
                          required: "",
                          type: "password"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$6, {
                            id: "password",
                            modelValue: unref(form).password,
                            "onUpdate:modelValue": ($event) => unref(form).password = $event,
                            icon: unref(mdiAsterisk),
                            autocomplete: "current-password",
                            required: "",
                            type: "password"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$7, { class: "flex justify-end" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$8, {
                          modelValue: unref(form).remember,
                          "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                          label: _ctx.__("remember_me"),
                          name: "remember",
                          type: "switch"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$8, {
                            modelValue: unref(form).remember,
                            "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                            label: _ctx.__("remember_me"),
                            name: "remember",
                            type: "switch"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$9, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$a, null, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$b, {
                          class: { "opacity-25": unref(form).processing },
                          disabled: unref(form).processing,
                          label: _ctx.__("login"),
                          color: "info",
                          type: "submit"
                        }, null, _parent4, _scopeId3));
                        if (__props.canResetPassword) {
                          _push4(ssrRenderComponent(_sfc_main$b, {
                            color: "info",
                            label: "Remind",
                            outline: "",
                            "route-name": "password.request"
                          }, null, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                      } else {
                        return [
                          createVNode(_sfc_main$b, {
                            class: { "opacity-25": unref(form).processing },
                            disabled: unref(form).processing,
                            label: _ctx.__("login"),
                            color: "info",
                            type: "submit"
                          }, null, 8, ["class", "disabled", "label"]),
                          __props.canResetPassword ? (openBlock(), createBlock(_sfc_main$b, {
                            key: 0,
                            color: "info",
                            label: "Remind",
                            outline: "",
                            "route-name": "password.request"
                          })) : createCommentVNode("", true)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3),
                    __props.status ? (openBlock(), createBlock(_sfc_main$4, {
                      key: 0,
                      color: "info"
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(__props.status), 1)
                      ]),
                      _: 1
                    })) : createCommentVNode("", true),
                    createVNode(_sfc_main$5, {
                      help: _ctx.__("please_enter", { value: _ctx.__("email") }),
                      label: _ctx.__("email"),
                      "label-for": "email"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$6, {
                          id: "email",
                          modelValue: unref(form).email,
                          "onUpdate:modelValue": ($event) => unref(form).email = $event,
                          icon: unref(mdiAccount),
                          autocomplete: "email",
                          required: "",
                          type: "email"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                      ]),
                      _: 1
                    }, 8, ["help", "label"]),
                    createVNode(_sfc_main$5, {
                      help: _ctx.__("please_enter", { value: _ctx.__("password") }),
                      label: _ctx.__("password"),
                      "label-for": "password"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$6, {
                          id: "password",
                          modelValue: unref(form).password,
                          "onUpdate:modelValue": ($event) => unref(form).password = $event,
                          icon: unref(mdiAsterisk),
                          autocomplete: "current-password",
                          required: "",
                          type: "password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                      ]),
                      _: 1
                    }, 8, ["help", "label"]),
                    createVNode(_sfc_main$7, { class: "flex justify-end" }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$8, {
                          modelValue: unref(form).remember,
                          "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                          label: _ctx.__("remember_me"),
                          name: "remember",
                          type: "switch"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                      ]),
                      _: 1
                    }),
                    createVNode(_sfc_main$9),
                    createVNode(_sfc_main$a, null, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$b, {
                          class: { "opacity-25": unref(form).processing },
                          disabled: unref(form).processing,
                          label: _ctx.__("login"),
                          color: "info",
                          type: "submit"
                        }, null, 8, ["class", "disabled", "label"]),
                        __props.canResetPassword ? (openBlock(), createBlock(_sfc_main$b, {
                          key: 0,
                          color: "info",
                          label: "Remind",
                          outline: "",
                          "route-name": "password.request"
                        })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                class: cardClass,
                "is-form": "",
                onSubmit: withModifiers(submit, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$3),
                  __props.status ? (openBlock(), createBlock(_sfc_main$4, {
                    key: 0,
                    color: "info"
                  }, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(__props.status), 1)
                    ]),
                    _: 1
                  })) : createCommentVNode("", true),
                  createVNode(_sfc_main$5, {
                    help: _ctx.__("please_enter", { value: _ctx.__("email") }),
                    label: _ctx.__("email"),
                    "label-for": "email"
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$6, {
                        id: "email",
                        modelValue: unref(form).email,
                        "onUpdate:modelValue": ($event) => unref(form).email = $event,
                        icon: unref(mdiAccount),
                        autocomplete: "email",
                        required: "",
                        type: "email"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                    ]),
                    _: 1
                  }, 8, ["help", "label"]),
                  createVNode(_sfc_main$5, {
                    help: _ctx.__("please_enter", { value: _ctx.__("password") }),
                    label: _ctx.__("password"),
                    "label-for": "password"
                  }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$6, {
                        id: "password",
                        modelValue: unref(form).password,
                        "onUpdate:modelValue": ($event) => unref(form).password = $event,
                        icon: unref(mdiAsterisk),
                        autocomplete: "current-password",
                        required: "",
                        type: "password"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                    ]),
                    _: 1
                  }, 8, ["help", "label"]),
                  createVNode(_sfc_main$7, { class: "flex justify-end" }, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$8, {
                        modelValue: unref(form).remember,
                        "onUpdate:modelValue": ($event) => unref(form).remember = $event,
                        label: _ctx.__("remember_me"),
                        name: "remember",
                        type: "switch"
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "label"])
                    ]),
                    _: 1
                  }),
                  createVNode(_sfc_main$9),
                  createVNode(_sfc_main$a, null, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$b, {
                        class: { "opacity-25": unref(form).processing },
                        disabled: unref(form).processing,
                        label: _ctx.__("login"),
                        color: "info",
                        type: "submit"
                      }, null, 8, ["class", "disabled", "label"]),
                      __props.canResetPassword ? (openBlock(), createBlock(_sfc_main$b, {
                        key: 0,
                        color: "info",
                        label: "Remind",
                        outline: "",
                        "route-name": "password.request"
                      })) : createCommentVNode("", true)
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
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
