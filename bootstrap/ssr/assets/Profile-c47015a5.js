import { ref, withCtx, unref, createVNode, createTextVNode, toDisplayString, useSSRContext, openBlock, createBlock, createCommentVNode, withModifiers } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { mdiCheckDecagram, mdiAccount, mdiMail, mdiAsterisk, mdiFormTextboxPassword } from "@mdi/js";
import { _ as _sfc_main$7, a as _sfc_main$8 } from "./SectionTitleLineWithButton-9da2ae80.js";
import { _ as _sfc_main$2 } from "./CardBox-b517a69f.js";
import { d as _sfc_main$3, f as _sfc_main$4, e as _sfc_main$9, a as _sfc_main$a, _ as _sfc_main$d, c as _sfc_main$e } from "../app.js";
import { a as _sfc_main$b, _ as _sfc_main$c } from "./FormField-a416fc4e.js";
import { _ as _sfc_main$5 } from "./FormCheckRadio-3fbb80c8.js";
import { _ as _sfc_main$6 } from "./PillTag-1bf71746.js";
import { usePage, useForm } from "@inertiajs/vue3";
import "pinia";
import "ziggy-js";
/* empty css                                 */import "axios";
import "@tinymce/tinymce-vue";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "@fawmi/vue-google-maps";
const _sfc_main$1 = {
  __name: "UserCard",
  __ssrInlineRender: true,
  setup(__props) {
    const name = usePage().props.auth.user.name;
    const userSwitchVal = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$2, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, { type: "lg:justify-start justify-center " }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, { class: "lg:mx-12" }, null, _parent3, _scopeId2));
                  _push3(`<div class="space-y-3 text-center md:text-start lg:mx-12"${_scopeId2}><div class="flex justify-center md:block"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    modelValue: userSwitchVal.value,
                    "onUpdate:modelValue": ($event) => userSwitchVal.value = $event,
                    name: "notifications-switch",
                    type: "switch",
                    label: "Notifications",
                    "input-value": true
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><h1 class="text-2xl"${_scopeId2}> مرحبًا يا <b${_scopeId2}>${ssrInterpolate(unref(name))}</b>! </h1><div class="flex justify-center md:block"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    label: "Verified",
                    color: "info",
                    icon: unref(mdiCheckDecagram)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode(_sfc_main$4, { class: "lg:mx-12" }),
                    createVNode("div", { class: "space-y-3 text-center md:text-start lg:mx-12" }, [
                      createVNode("div", { class: "flex justify-center md:block" }, [
                        createVNode(_sfc_main$5, {
                          modelValue: userSwitchVal.value,
                          "onUpdate:modelValue": ($event) => userSwitchVal.value = $event,
                          name: "notifications-switch",
                          type: "switch",
                          label: "Notifications",
                          "input-value": true
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("h1", { class: "text-2xl" }, [
                        createTextVNode(" مرحبًا يا "),
                        createVNode("b", null, toDisplayString(unref(name)), 1),
                        createTextVNode("! ")
                      ]),
                      createVNode("div", { class: "flex justify-center md:block" }, [
                        createVNode(_sfc_main$6, {
                          label: "Verified",
                          color: "info",
                          icon: unref(mdiCheckDecagram)
                        }, null, 8, ["icon"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$3, { type: "lg:justify-start justify-center " }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$4, { class: "lg:mx-12" }),
                  createVNode("div", { class: "space-y-3 text-center md:text-start lg:mx-12" }, [
                    createVNode("div", { class: "flex justify-center md:block" }, [
                      createVNode(_sfc_main$5, {
                        modelValue: userSwitchVal.value,
                        "onUpdate:modelValue": ($event) => userSwitchVal.value = $event,
                        name: "notifications-switch",
                        type: "switch",
                        label: "Notifications",
                        "input-value": true
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("h1", { class: "text-2xl" }, [
                      createTextVNode(" مرحبًا يا "),
                      createVNode("b", null, toDisplayString(unref(name)), 1),
                      createTextVNode("! ")
                    ]),
                    createVNode("div", { class: "flex justify-center md:block" }, [
                      createVNode(_sfc_main$6, {
                        label: "Verified",
                        color: "info",
                        icon: unref(mdiCheckDecagram)
                      }, null, 8, ["icon"])
                    ])
                  ])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/UserCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Profile",
  __ssrInlineRender: true,
  setup(__props) {
    const user = usePage().props.auth.user;
    const profileForm = useForm({
      name: user.name,
      email: user.email
    });
    const passwordForm = useForm({
      current_password: "",
      password: "",
      password_confirmation: ""
    });
    const submitProfile = () => {
      profileForm.post(route("dashboard.profile.update"), {
        preserveState: (page) => Object.keys(page.props.errors).length
      });
    };
    const submitPass = () => {
      passwordForm.post(route("dashboard.profile.updatePassword"), {
        preserveState: (page) => Object.keys(page.props.errors).length
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$7, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$8, {
              icon: unref(mdiAccount),
              main: "",
              title: "الحساب الشخصي"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, { class: "mb-6" }, null, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 lg:grid-cols-2 gap-6"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              "is-form": "",
              onSubmit: submitProfile
            }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$9, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$a, {
                          color: "info",
                          label: "متابعة",
                          type: "submit"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$a, {
                            color: "info",
                            label: "متابعة",
                            type: "submit"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$9, null, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$a, {
                          color: "info",
                          label: "متابعة",
                          type: "submit"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(profileForm).hasErrors) {
                    _push3(ssrRenderComponent(_sfc_main$b, null, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    errors: unref(profileForm).errors.name,
                    label: "الإسم"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$d, {
                          modelValue: unref(profileForm).name,
                          "onUpdate:modelValue": ($event) => unref(profileForm).name = $event,
                          icon: unref(mdiAccount),
                          autocomplete: "name",
                          name: "name",
                          required: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$d, {
                            modelValue: unref(profileForm).name,
                            "onUpdate:modelValue": ($event) => unref(profileForm).name = $event,
                            icon: unref(mdiAccount),
                            autocomplete: "name",
                            name: "name",
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    errors: unref(profileForm).errors.email,
                    label: "البريد الإليكتروني"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$d, {
                          modelValue: unref(profileForm).email,
                          "onUpdate:modelValue": ($event) => unref(profileForm).email = $event,
                          icon: unref(mdiMail),
                          autocomplete: "email",
                          name: "email",
                          required: "",
                          type: "email"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$d, {
                            modelValue: unref(profileForm).email,
                            "onUpdate:modelValue": ($event) => unref(profileForm).email = $event,
                            icon: unref(mdiMail),
                            autocomplete: "email",
                            name: "email",
                            required: "",
                            type: "email"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    unref(profileForm).hasErrors ? (openBlock(), createBlock(_sfc_main$b, { key: 0 })) : createCommentVNode("", true),
                    createVNode(_sfc_main$c, {
                      errors: unref(profileForm).errors.name,
                      label: "الإسم"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$d, {
                          modelValue: unref(profileForm).name,
                          "onUpdate:modelValue": ($event) => unref(profileForm).name = $event,
                          icon: unref(mdiAccount),
                          autocomplete: "name",
                          name: "name",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                      ]),
                      _: 1
                    }, 8, ["errors"]),
                    createVNode(_sfc_main$c, {
                      errors: unref(profileForm).errors.email,
                      label: "البريد الإليكتروني"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$d, {
                          modelValue: unref(profileForm).email,
                          "onUpdate:modelValue": ($event) => unref(profileForm).email = $event,
                          icon: unref(mdiMail),
                          autocomplete: "email",
                          name: "email",
                          required: "",
                          type: "email"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                      ]),
                      _: 1
                    }, 8, ["errors"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$2, {
              "is-form": "",
              onSubmit: submitPass
            }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$9, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$a, {
                          color: "info",
                          label: "متابعة",
                          type: "submit"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$a, {
                            color: "info",
                            label: "متابعة",
                            type: "submit"
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$9, null, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$a, {
                          color: "info",
                          label: "متابعة",
                          type: "submit"
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (unref(passwordForm).hasErrors) {
                    _push3(ssrRenderComponent(_sfc_main$b, null, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    errors: unref(passwordForm).errors.current_password,
                    help: "كلمة المرور الحالية*",
                    label: "كلمة المرور الحالية"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$d, {
                          modelValue: unref(passwordForm).current_password,
                          "onUpdate:modelValue": ($event) => unref(passwordForm).current_password = $event,
                          errors: unref(passwordForm).errors.current_password,
                          icon: unref(mdiAsterisk),
                          autocomplete: "current-password",
                          name: "current_password",
                          required: "",
                          type: "password"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$d, {
                            modelValue: unref(passwordForm).current_password,
                            "onUpdate:modelValue": ($event) => unref(passwordForm).current_password = $event,
                            errors: unref(passwordForm).errors.current_password,
                            icon: unref(mdiAsterisk),
                            autocomplete: "current-password",
                            name: "current_password",
                            required: "",
                            type: "password"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "errors", "icon"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$e, null, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    errors: unref(passwordForm).errors.password,
                    help: "كلمة المرور الجديد*",
                    label: "كلمة المرور الجديد"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$d, {
                          modelValue: unref(passwordForm).password,
                          "onUpdate:modelValue": ($event) => unref(passwordForm).password = $event,
                          icon: unref(mdiFormTextboxPassword),
                          autocomplete: "new-password",
                          name: "password",
                          required: "",
                          type: "password"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$d, {
                            modelValue: unref(passwordForm).password,
                            "onUpdate:modelValue": ($event) => unref(passwordForm).password = $event,
                            icon: unref(mdiFormTextboxPassword),
                            autocomplete: "new-password",
                            name: "password",
                            required: "",
                            type: "password"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$c, {
                    errors: unref(passwordForm).errors.password_confirmation,
                    help: "تأكيد كلمة المرور الجديدة *",
                    label: "تأكيد كلمة المرور الجديدة"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$d, {
                          modelValue: unref(passwordForm).password_confirmation,
                          "onUpdate:modelValue": ($event) => unref(passwordForm).password_confirmation = $event,
                          icon: unref(mdiFormTextboxPassword),
                          autocomplete: "new-password",
                          name: "password_confirmation",
                          required: "",
                          type: "password"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$d, {
                            modelValue: unref(passwordForm).password_confirmation,
                            "onUpdate:modelValue": ($event) => unref(passwordForm).password_confirmation = $event,
                            icon: unref(mdiFormTextboxPassword),
                            autocomplete: "new-password",
                            name: "password_confirmation",
                            required: "",
                            type: "password"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    unref(passwordForm).hasErrors ? (openBlock(), createBlock(_sfc_main$b, { key: 0 })) : createCommentVNode("", true),
                    createVNode(_sfc_main$c, {
                      errors: unref(passwordForm).errors.current_password,
                      help: "كلمة المرور الحالية*",
                      label: "كلمة المرور الحالية"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$d, {
                          modelValue: unref(passwordForm).current_password,
                          "onUpdate:modelValue": ($event) => unref(passwordForm).current_password = $event,
                          errors: unref(passwordForm).errors.current_password,
                          icon: unref(mdiAsterisk),
                          autocomplete: "current-password",
                          name: "current_password",
                          required: "",
                          type: "password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "errors", "icon"])
                      ]),
                      _: 1
                    }, 8, ["errors"]),
                    createVNode(_sfc_main$e),
                    createVNode(_sfc_main$c, {
                      errors: unref(passwordForm).errors.password,
                      help: "كلمة المرور الجديد*",
                      label: "كلمة المرور الجديد"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$d, {
                          modelValue: unref(passwordForm).password,
                          "onUpdate:modelValue": ($event) => unref(passwordForm).password = $event,
                          icon: unref(mdiFormTextboxPassword),
                          autocomplete: "new-password",
                          name: "password",
                          required: "",
                          type: "password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                      ]),
                      _: 1
                    }, 8, ["errors"]),
                    createVNode(_sfc_main$c, {
                      errors: unref(passwordForm).errors.password_confirmation,
                      help: "تأكيد كلمة المرور الجديدة *",
                      label: "تأكيد كلمة المرور الجديدة"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$d, {
                          modelValue: unref(passwordForm).password_confirmation,
                          "onUpdate:modelValue": ($event) => unref(passwordForm).password_confirmation = $event,
                          icon: unref(mdiFormTextboxPassword),
                          autocomplete: "new-password",
                          name: "password_confirmation",
                          required: "",
                          type: "password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                      ]),
                      _: 1
                    }, 8, ["errors"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode(_sfc_main$8, {
                icon: unref(mdiAccount),
                main: "",
                title: "الحساب الشخصي"
              }, null, 8, ["icon"]),
              createVNode(_sfc_main$1, { class: "mb-6" }),
              createVNode("div", { class: "grid grid-cols-1 lg:grid-cols-2 gap-6" }, [
                createVNode(_sfc_main$2, {
                  "is-form": "",
                  onSubmit: withModifiers(submitProfile, ["prevent"])
                }, {
                  footer: withCtx(() => [
                    createVNode(_sfc_main$9, null, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$a, {
                          color: "info",
                          label: "متابعة",
                          type: "submit"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    unref(profileForm).hasErrors ? (openBlock(), createBlock(_sfc_main$b, { key: 0 })) : createCommentVNode("", true),
                    createVNode(_sfc_main$c, {
                      errors: unref(profileForm).errors.name,
                      label: "الإسم"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$d, {
                          modelValue: unref(profileForm).name,
                          "onUpdate:modelValue": ($event) => unref(profileForm).name = $event,
                          icon: unref(mdiAccount),
                          autocomplete: "name",
                          name: "name",
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                      ]),
                      _: 1
                    }, 8, ["errors"]),
                    createVNode(_sfc_main$c, {
                      errors: unref(profileForm).errors.email,
                      label: "البريد الإليكتروني"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$d, {
                          modelValue: unref(profileForm).email,
                          "onUpdate:modelValue": ($event) => unref(profileForm).email = $event,
                          icon: unref(mdiMail),
                          autocomplete: "email",
                          name: "email",
                          required: "",
                          type: "email"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                      ]),
                      _: 1
                    }, 8, ["errors"])
                  ]),
                  _: 1
                }, 8, ["onSubmit"]),
                createVNode(_sfc_main$2, {
                  "is-form": "",
                  onSubmit: withModifiers(submitPass, ["prevent"])
                }, {
                  footer: withCtx(() => [
                    createVNode(_sfc_main$9, null, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$a, {
                          color: "info",
                          label: "متابعة",
                          type: "submit"
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    unref(passwordForm).hasErrors ? (openBlock(), createBlock(_sfc_main$b, { key: 0 })) : createCommentVNode("", true),
                    createVNode(_sfc_main$c, {
                      errors: unref(passwordForm).errors.current_password,
                      help: "كلمة المرور الحالية*",
                      label: "كلمة المرور الحالية"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$d, {
                          modelValue: unref(passwordForm).current_password,
                          "onUpdate:modelValue": ($event) => unref(passwordForm).current_password = $event,
                          errors: unref(passwordForm).errors.current_password,
                          icon: unref(mdiAsterisk),
                          autocomplete: "current-password",
                          name: "current_password",
                          required: "",
                          type: "password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "errors", "icon"])
                      ]),
                      _: 1
                    }, 8, ["errors"]),
                    createVNode(_sfc_main$e),
                    createVNode(_sfc_main$c, {
                      errors: unref(passwordForm).errors.password,
                      help: "كلمة المرور الجديد*",
                      label: "كلمة المرور الجديد"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$d, {
                          modelValue: unref(passwordForm).password,
                          "onUpdate:modelValue": ($event) => unref(passwordForm).password = $event,
                          icon: unref(mdiFormTextboxPassword),
                          autocomplete: "new-password",
                          name: "password",
                          required: "",
                          type: "password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                      ]),
                      _: 1
                    }, 8, ["errors"]),
                    createVNode(_sfc_main$c, {
                      errors: unref(passwordForm).errors.password_confirmation,
                      help: "تأكيد كلمة المرور الجديدة *",
                      label: "تأكيد كلمة المرور الجديدة"
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$d, {
                          modelValue: unref(passwordForm).password_confirmation,
                          "onUpdate:modelValue": ($event) => unref(passwordForm).password_confirmation = $event,
                          icon: unref(mdiFormTextboxPassword),
                          autocomplete: "new-password",
                          name: "password_confirmation",
                          required: "",
                          type: "password"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                      ]),
                      _: 1
                    }, 8, ["errors"])
                  ]),
                  _: 1
                }, 8, ["onSubmit"])
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Pages/Auth/Profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
