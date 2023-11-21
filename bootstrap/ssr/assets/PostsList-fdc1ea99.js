import { inject, ref, mergeProps, unref, isRef, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, withDirectives, vShow, useSSRContext, provide, reactive, toDisplayString, createCommentVNode } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$3, a as _sfc_main$b, b as _sfc_main$d } from "./ActionConfirmComponent-f1d725a5.js";
import { _ as _sfc_main$6 } from "./FormField-a416fc4e.js";
import { g as __, _ as _sfc_main$7, o as assignTranslatable } from "../app.js";
import { usePage, useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./FormWithLabelField-2c980605.js";
import { _ as _sfc_main$4 } from "./StepsComponent-202818d9.js";
import { _ as _sfc_main$8, a as _sfc_main$9 } from "./ShowMediaComponent-9a2f83fc.js";
import { _ as _sfc_main$c } from "./TableOptions-a9345eb3.js";
import { _ as _sfc_main$a } from "./CardBox-b517a69f.js";
import { Sortable } from "sortablejs-vue3";
const _sfc_main$2 = {
  __name: "CreatePost",
  __ssrInlineRender: true,
  props: {
    section: Object
  },
  setup(__props) {
    const props = __props;
    let locales = usePage().props.locales;
    let showCreatePost = inject("showCreatePost");
    let form = useForm({
      title: {},
      content: {},
      priority: null,
      link: {},
      image: null,
      section_id: props.section.id
    });
    let steps = ref([__("main_data"), __("media")]);
    let step = ref(0);
    function submit() {
      form.post(route("dashboard.posts.store"), {
        preserveScroll: true,
        preserveState: (post) => Object.keys(post.props.errors).length,
        onSuccess: () => {
          showCreatePost.value = false;
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({
        "button-label": unref(__)("create"),
        "has-cancel": true,
        hasErrors: unref(form).hasErrors,
        "is-form": true,
        "model-value": unref(showCreatePost),
        title: unref(__)("create_field", { field: "post" }),
        onCancel: ($event) => isRef(showCreatePost) ? showCreatePost.value = false : showCreatePost = false,
        onConfirm: submit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, {
              modelValue: unref(step),
              "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : step = $event,
              steps: unref(steps)
            }, null, _parent2, _scopeId));
            _push2(`<section style="${ssrRenderStyle(unref(step) === 0 ? null : { display: "none" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              label: unref(__)("title")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(locales), (locale) => {
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      errors: unref(form).errors[`title.${locale}`],
                      label: unref(__)(locale)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$7, {
                            modelValue: unref(form).title[locale],
                            "onUpdate:modelValue": ($event) => unref(form).title[locale] = $event,
                            autocomplete: `title[${locale}]`,
                            name: `title[${locale}]`,
                            required: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$7, {
                              modelValue: unref(form).title[locale],
                              "onUpdate:modelValue": ($event) => unref(form).title[locale] = $event,
                              autocomplete: `title[${locale}]`,
                              name: `title[${locale}]`,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "autocomplete", "name"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$6, {
                        errors: unref(form).errors[`title.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$7, {
                            modelValue: unref(form).title[locale],
                            "onUpdate:modelValue": ($event) => unref(form).title[locale] = $event,
                            autocomplete: `title[${locale}]`,
                            name: `title[${locale}]`,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "autocomplete", "name"])
                        ]),
                        _: 2
                      }, 1032, ["errors", "label"]);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              cols: { lg: 1 },
              label: unref(__)("content")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(locales), (locale) => {
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      errors: unref(form).errors[`content.${locale}`],
                      label: unref(__)(locale)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$7, {
                            modelValue: unref(form).content[locale],
                            "onUpdate:modelValue": ($event) => unref(form).content[locale] = $event,
                            autocomplete: `content[${locale}]`,
                            dir: locale === "ar" ? "rtl" : "ltr",
                            name: `content[${locale}]`,
                            required: "",
                            type: "editor"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$7, {
                              modelValue: unref(form).content[locale],
                              "onUpdate:modelValue": ($event) => unref(form).content[locale] = $event,
                              autocomplete: `content[${locale}]`,
                              dir: locale === "ar" ? "rtl" : "ltr",
                              name: `content[${locale}]`,
                              required: "",
                              type: "editor"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "autocomplete", "dir", "name"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$6, {
                        errors: unref(form).errors[`content.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$7, {
                            modelValue: unref(form).content[locale],
                            "onUpdate:modelValue": ($event) => unref(form).content[locale] = $event,
                            autocomplete: `content[${locale}]`,
                            dir: locale === "ar" ? "rtl" : "ltr",
                            name: `content[${locale}]`,
                            required: "",
                            type: "editor"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "autocomplete", "dir", "name"])
                        ]),
                        _: 2
                      }, 1032, ["errors", "label"]);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              label: unref(__)("link")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(locales), (locale) => {
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      errors: unref(form).errors[`link.${locale}`],
                      label: unref(__)(locale)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$7, {
                            modelValue: unref(form).link[locale],
                            "onUpdate:modelValue": ($event) => unref(form).link[locale] = $event,
                            autocomplete: `link[${locale}]`,
                            name: `link[${locale}]`,
                            required: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$7, {
                              modelValue: unref(form).link[locale],
                              "onUpdate:modelValue": ($event) => unref(form).link[locale] = $event,
                              autocomplete: `link[${locale}]`,
                              name: `link[${locale}]`,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "autocomplete", "name"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$6, {
                        errors: unref(form).errors[`link.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$7, {
                            modelValue: unref(form).link[locale],
                            "onUpdate:modelValue": ($event) => unref(form).link[locale] = $event,
                            autocomplete: `link[${locale}]`,
                            name: `link[${locale}]`,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "autocomplete", "name"])
                        ]),
                        _: 2
                      }, 1032, ["errors", "label"]);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              cols: { lg: 1 },
              label: unref(__)("priority")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    errors: unref(form).errors.priority
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$7, {
                          modelValue: unref(form).priority,
                          "onUpdate:modelValue": ($event) => unref(form).priority = $event,
                          autocomplete: "priority",
                          name: "priority",
                          required: "",
                          type: "number"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$7, {
                            modelValue: unref(form).priority,
                            "onUpdate:modelValue": ($event) => unref(form).priority = $event,
                            autocomplete: "priority",
                            name: "priority",
                            required: "",
                            type: "number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$6, {
                      errors: unref(form).errors.priority
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$7, {
                          modelValue: unref(form).priority,
                          "onUpdate:modelValue": ($event) => unref(form).priority = $event,
                          autocomplete: "priority",
                          name: "priority",
                          required: "",
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["errors"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section><section style="${ssrRenderStyle(unref(step) === 1 ? null : { display: "none" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$8, {
              modelValue: unref(form).image,
              "onUpdate:modelValue": ($event) => unref(form).image = $event,
              name: "image"
            }, null, _parent2, _scopeId));
            _push2(`</section>`);
          } else {
            return [
              createVNode(_sfc_main$4, {
                modelValue: unref(step),
                "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : step = $event,
                steps: unref(steps)
              }, null, 8, ["modelValue", "onUpdate:modelValue", "steps"]),
              withDirectives(createVNode("section", null, [
                createVNode(_sfc_main$5, {
                  label: unref(__)("title")
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$6, {
                        errors: unref(form).errors[`title.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$7, {
                            modelValue: unref(form).title[locale],
                            "onUpdate:modelValue": ($event) => unref(form).title[locale] = $event,
                            autocomplete: `title[${locale}]`,
                            name: `title[${locale}]`,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "autocomplete", "name"])
                        ]),
                        _: 2
                      }, 1032, ["errors", "label"]);
                    }), 256))
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_sfc_main$5, {
                  cols: { lg: 1 },
                  label: unref(__)("content")
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$6, {
                        errors: unref(form).errors[`content.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$7, {
                            modelValue: unref(form).content[locale],
                            "onUpdate:modelValue": ($event) => unref(form).content[locale] = $event,
                            autocomplete: `content[${locale}]`,
                            dir: locale === "ar" ? "rtl" : "ltr",
                            name: `content[${locale}]`,
                            required: "",
                            type: "editor"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "autocomplete", "dir", "name"])
                        ]),
                        _: 2
                      }, 1032, ["errors", "label"]);
                    }), 256))
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_sfc_main$5, {
                  label: unref(__)("link")
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$6, {
                        errors: unref(form).errors[`link.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$7, {
                            modelValue: unref(form).link[locale],
                            "onUpdate:modelValue": ($event) => unref(form).link[locale] = $event,
                            autocomplete: `link[${locale}]`,
                            name: `link[${locale}]`,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "autocomplete", "name"])
                        ]),
                        _: 2
                      }, 1032, ["errors", "label"]);
                    }), 256))
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_sfc_main$5, {
                  cols: { lg: 1 },
                  label: unref(__)("priority")
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$6, {
                      errors: unref(form).errors.priority
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$7, {
                          modelValue: unref(form).priority,
                          "onUpdate:modelValue": ($event) => unref(form).priority = $event,
                          autocomplete: "priority",
                          name: "priority",
                          required: "",
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["errors"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ], 512), [
                [vShow, unref(step) === 0]
              ]),
              withDirectives(createVNode("section", null, [
                createVNode(_sfc_main$8, {
                  modelValue: unref(form).image,
                  "onUpdate:modelValue": ($event) => unref(form).image = $event,
                  name: "image"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ], 512), [
                [vShow, unref(step) === 1]
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Posts/CreatePost.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "EditPost",
  __ssrInlineRender: true,
  props: {
    post: Object,
    isModal: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    let locales = usePage().props.locales;
    let showEditPost = props.isModal ? inject("showEditPost") : ref(true);
    let form = useForm({
      title: props.post.translations.title,
      content: props.post.translations.content,
      priority: props.post.priority,
      link: assignTranslatable(props.post.translations.link),
      section_id: props.post.section.id,
      image: null,
      _method: "put"
    });
    let steps = ref([__("main_data"), __("media")]);
    let step = ref(0);
    function submit() {
      form.post(route("dashboard.posts.update", props.post.id), {
        preserveScroll: true,
        preserveState: (post) => Object.keys(post.props.errors).length
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({
        "button-label": unref(__)("edit"),
        "has-cancel": true,
        hasErrors: unref(form).hasErrors,
        "is-form": true,
        "is-modal": __props.isModal,
        "model-value": unref(showEditPost),
        title: unref(__)("edit_field", { field: "post" }),
        onCancel: ($event) => isRef(showEditPost) ? showEditPost.value = false : showEditPost = false,
        onConfirm: submit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, {
              modelValue: unref(step),
              "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : step = $event,
              steps: unref(steps)
            }, null, _parent2, _scopeId));
            _push2(`<section style="${ssrRenderStyle(unref(step) === 0 ? null : { display: "none" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$5, {
              label: unref(__)("title")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(locales), (locale) => {
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      errors: unref(form).errors[`title.${locale}`],
                      label: unref(__)(locale)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$7, {
                            modelValue: unref(form).title[locale],
                            "onUpdate:modelValue": ($event) => unref(form).title[locale] = $event,
                            autocomplete: `title[${locale}]`,
                            name: `title[${locale}]`,
                            required: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$7, {
                              modelValue: unref(form).title[locale],
                              "onUpdate:modelValue": ($event) => unref(form).title[locale] = $event,
                              autocomplete: `title[${locale}]`,
                              name: `title[${locale}]`,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "autocomplete", "name"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$6, {
                        errors: unref(form).errors[`title.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$7, {
                            modelValue: unref(form).title[locale],
                            "onUpdate:modelValue": ($event) => unref(form).title[locale] = $event,
                            autocomplete: `title[${locale}]`,
                            name: `title[${locale}]`,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "autocomplete", "name"])
                        ]),
                        _: 2
                      }, 1032, ["errors", "label"]);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              cols: { lg: 1 },
              label: unref(__)("content")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(locales), (locale) => {
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      errors: unref(form).errors[`content.${locale}`],
                      label: unref(__)(locale)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$7, {
                            modelValue: unref(form).content[locale],
                            "onUpdate:modelValue": ($event) => unref(form).content[locale] = $event,
                            autocomplete: `content[${locale}]`,
                            dir: locale === "ar" ? "rtl" : "ltr",
                            name: `content[${locale}]`,
                            required: "",
                            type: "editor"
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$7, {
                              modelValue: unref(form).content[locale],
                              "onUpdate:modelValue": ($event) => unref(form).content[locale] = $event,
                              autocomplete: `content[${locale}]`,
                              dir: locale === "ar" ? "rtl" : "ltr",
                              name: `content[${locale}]`,
                              required: "",
                              type: "editor"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "autocomplete", "dir", "name"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$6, {
                        errors: unref(form).errors[`content.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$7, {
                            modelValue: unref(form).content[locale],
                            "onUpdate:modelValue": ($event) => unref(form).content[locale] = $event,
                            autocomplete: `content[${locale}]`,
                            dir: locale === "ar" ? "rtl" : "ltr",
                            name: `content[${locale}]`,
                            required: "",
                            type: "editor"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "autocomplete", "dir", "name"])
                        ]),
                        _: 2
                      }, 1032, ["errors", "label"]);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              label: unref(__)("link")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(locales), (locale) => {
                    _push3(ssrRenderComponent(_sfc_main$6, {
                      errors: unref(form).errors[`link.${locale}`],
                      label: unref(__)(locale)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$7, {
                            modelValue: unref(form).link[locale],
                            "onUpdate:modelValue": ($event) => unref(form).link[locale] = $event,
                            autocomplete: `link[${locale}]`,
                            name: `link[${locale}]`,
                            required: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$7, {
                              modelValue: unref(form).link[locale],
                              "onUpdate:modelValue": ($event) => unref(form).link[locale] = $event,
                              autocomplete: `link[${locale}]`,
                              name: `link[${locale}]`,
                              required: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "autocomplete", "name"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$6, {
                        errors: unref(form).errors[`link.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$7, {
                            modelValue: unref(form).link[locale],
                            "onUpdate:modelValue": ($event) => unref(form).link[locale] = $event,
                            autocomplete: `link[${locale}]`,
                            name: `link[${locale}]`,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "autocomplete", "name"])
                        ]),
                        _: 2
                      }, 1032, ["errors", "label"]);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, {
              cols: { lg: 1 },
              label: unref(__)("priority")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$6, {
                    errors: unref(form).errors.priority
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$7, {
                          modelValue: unref(form).priority,
                          "onUpdate:modelValue": ($event) => unref(form).priority = $event,
                          autocomplete: "priority",
                          name: "priority",
                          required: "",
                          type: "number"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$7, {
                            modelValue: unref(form).priority,
                            "onUpdate:modelValue": ($event) => unref(form).priority = $event,
                            autocomplete: "priority",
                            name: "priority",
                            required: "",
                            type: "number"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$6, {
                      errors: unref(form).errors.priority
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$7, {
                          modelValue: unref(form).priority,
                          "onUpdate:modelValue": ($event) => unref(form).priority = $event,
                          autocomplete: "priority",
                          name: "priority",
                          required: "",
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["errors"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section><section style="${ssrRenderStyle(unref(step) === 1 ? null : { display: "none" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$9, {
              items: __props.post.image
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$8, {
                    modelValue: unref(form).image,
                    "onUpdate:modelValue": ($event) => unref(form).image = $event,
                    name: "image"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$8, {
                      modelValue: unref(form).image,
                      "onUpdate:modelValue": ($event) => unref(form).image = $event,
                      name: "image"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section>`);
          } else {
            return [
              createVNode(_sfc_main$4, {
                modelValue: unref(step),
                "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : step = $event,
                steps: unref(steps)
              }, null, 8, ["modelValue", "onUpdate:modelValue", "steps"]),
              withDirectives(createVNode("section", null, [
                createVNode(_sfc_main$5, {
                  label: unref(__)("title")
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$6, {
                        errors: unref(form).errors[`title.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$7, {
                            modelValue: unref(form).title[locale],
                            "onUpdate:modelValue": ($event) => unref(form).title[locale] = $event,
                            autocomplete: `title[${locale}]`,
                            name: `title[${locale}]`,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "autocomplete", "name"])
                        ]),
                        _: 2
                      }, 1032, ["errors", "label"]);
                    }), 256))
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_sfc_main$5, {
                  cols: { lg: 1 },
                  label: unref(__)("content")
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$6, {
                        errors: unref(form).errors[`content.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$7, {
                            modelValue: unref(form).content[locale],
                            "onUpdate:modelValue": ($event) => unref(form).content[locale] = $event,
                            autocomplete: `content[${locale}]`,
                            dir: locale === "ar" ? "rtl" : "ltr",
                            name: `content[${locale}]`,
                            required: "",
                            type: "editor"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "autocomplete", "dir", "name"])
                        ]),
                        _: 2
                      }, 1032, ["errors", "label"]);
                    }), 256))
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_sfc_main$5, {
                  label: unref(__)("link")
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$6, {
                        errors: unref(form).errors[`link.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$7, {
                            modelValue: unref(form).link[locale],
                            "onUpdate:modelValue": ($event) => unref(form).link[locale] = $event,
                            autocomplete: `link[${locale}]`,
                            name: `link[${locale}]`,
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "autocomplete", "name"])
                        ]),
                        _: 2
                      }, 1032, ["errors", "label"]);
                    }), 256))
                  ]),
                  _: 1
                }, 8, ["label"]),
                createVNode(_sfc_main$5, {
                  cols: { lg: 1 },
                  label: unref(__)("priority")
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$6, {
                      errors: unref(form).errors.priority
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$7, {
                          modelValue: unref(form).priority,
                          "onUpdate:modelValue": ($event) => unref(form).priority = $event,
                          autocomplete: "priority",
                          name: "priority",
                          required: "",
                          type: "number"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["errors"])
                  ]),
                  _: 1
                }, 8, ["label"])
              ], 512), [
                [vShow, unref(step) === 0]
              ]),
              withDirectives(createVNode("section", null, [
                createVNode(_sfc_main$9, {
                  items: __props.post.image
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$8, {
                      modelValue: unref(form).image,
                      "onUpdate:modelValue": ($event) => unref(form).image = $event,
                      name: "image"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }, 8, ["items"])
              ], 512), [
                [vShow, unref(step) === 1]
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Posts/EditPost.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "PostsList",
  __ssrInlineRender: true,
  props: {
    posts: Object
  },
  setup(__props) {
    const props = __props;
    let showEditPost = ref(false);
    let actionConfirm = ref(false);
    let editedPost = ref({});
    let deletedPost = ref(null);
    provide("showEditPost", showEditPost);
    provide("actionConfirm", actionConfirm);
    let list = props.posts.map((item, key) => {
      return {
        id: item.id,
        title: item.title,
        content: item.content,
        section_id: item.section_id,
        image: { url: item.image.url },
        created_at: item.created_at
      };
    });
    let postsList = reactive(list);
    usePage().props.locales;
    function edit(post) {
      editedPost.value = props.posts.find((obj) => {
        return obj.id === post.id;
      });
      showEditPost.value = true;
    }
    function destroy(post) {
      actionConfirm.value = true;
      deletedPost = post.id;
    }
    function destroyConfirm() {
      router.delete(route("dashboard.posts.destroy", deletedPost), {
        preserveState: (post) => Object.keys(post.props.errors).length,
        preserveScroll: true
      });
    }
    function sort(array, from, to) {
      if (from !== to) {
        const item = array.splice(from, 1)[0];
        array.splice(to, 0, item);
        router.post(
          route("dashboard.posts.sort"),
          {
            "posts": array
          },
          {
            preserveState: true
          }
        );
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$a, { "has-table": "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$b, {
              headers: ["#", _ctx.__("title"), _ctx.__("content"), _ctx.__("the_image"), _ctx.__("created_at")],
              "is-draggable": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (Object.keys(unref(postsList)).length) {
                    _push3(ssrRenderComponent(unref(Sortable), {
                      list: unref(postsList),
                      class: "rtl:flex-row-reverse",
                      "item-key": "id",
                      tag: "tbody",
                      onEnd: (evt) => sort(unref(postsList), evt.oldIndex, evt.newIndex)
                    }, {
                      item: withCtx(({ element, index }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<tr class="rtl:flex-row-reverse" draggable="true"${_scopeId3}><td data-label="#"${_scopeId3}>${ssrInterpolate(index + 1)}</td><td${ssrRenderAttr("data-label", _ctx.__("title"))}${_scopeId3}>${ssrInterpolate(element.title)}</td><td${ssrRenderAttr("data-label", _ctx.__("content"))} class="prose bg-stone-50 text-start ps-2"${_scopeId3}>${element.content}</td><td class="flex"${_scopeId3}><img${ssrRenderAttr("alt", element.title)}${ssrRenderAttr("src", element.image.url)} class="max-w-[200px] mx-auto"${_scopeId3}></td><td${ssrRenderAttr("data-label", _ctx.__("created_at"))}${_scopeId3}>${ssrInterpolate(element.created_at)}</td><td${ssrRenderAttr("data-label", _ctx.__("options"))}${_scopeId3}>`);
                          _push4(ssrRenderComponent(_sfc_main$c, {
                            "has-show": false,
                            model: "posts",
                            onDestroy: ($event) => destroy(element),
                            onEdit: ($event) => edit(element)
                          }, null, _parent4, _scopeId3));
                          _push4(`</td></tr>`);
                        } else {
                          return [
                            createVNode("tr", {
                              class: "rtl:flex-row-reverse",
                              draggable: "true"
                            }, [
                              createVNode("td", { "data-label": "#" }, toDisplayString(index + 1), 1),
                              createVNode("td", {
                                "data-label": _ctx.__("title")
                              }, toDisplayString(element.title), 9, ["data-label"]),
                              createVNode("td", {
                                "data-label": _ctx.__("content"),
                                class: "prose bg-stone-50 text-start ps-2",
                                innerHTML: element.content
                              }, null, 8, ["data-label", "innerHTML"]),
                              createVNode("td", { class: "flex" }, [
                                createVNode("img", {
                                  alt: element.title,
                                  src: element.image.url,
                                  class: "max-w-[200px] mx-auto"
                                }, null, 8, ["alt", "src"])
                              ]),
                              createVNode("td", {
                                "data-label": _ctx.__("created_at")
                              }, toDisplayString(element.created_at), 9, ["data-label"]),
                              createVNode("td", {
                                "data-label": _ctx.__("options")
                              }, [
                                createVNode(_sfc_main$c, {
                                  "has-show": false,
                                  model: "posts",
                                  onDestroy: ($event) => destroy(element),
                                  onEdit: ($event) => edit(element)
                                }, null, 8, ["onDestroy", "onEdit"])
                              ], 8, ["data-label"])
                            ])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    Object.keys(unref(postsList)).length ? (openBlock(), createBlock(unref(Sortable), {
                      key: 0,
                      list: unref(postsList),
                      class: "rtl:flex-row-reverse",
                      "item-key": "id",
                      tag: "tbody",
                      onEnd: (evt) => sort(unref(postsList), evt.oldIndex, evt.newIndex)
                    }, {
                      item: withCtx(({ element, index }) => [
                        createVNode("tr", {
                          class: "rtl:flex-row-reverse",
                          draggable: "true"
                        }, [
                          createVNode("td", { "data-label": "#" }, toDisplayString(index + 1), 1),
                          createVNode("td", {
                            "data-label": _ctx.__("title")
                          }, toDisplayString(element.title), 9, ["data-label"]),
                          createVNode("td", {
                            "data-label": _ctx.__("content"),
                            class: "prose bg-stone-50 text-start ps-2",
                            innerHTML: element.content
                          }, null, 8, ["data-label", "innerHTML"]),
                          createVNode("td", { class: "flex" }, [
                            createVNode("img", {
                              alt: element.title,
                              src: element.image.url,
                              class: "max-w-[200px] mx-auto"
                            }, null, 8, ["alt", "src"])
                          ]),
                          createVNode("td", {
                            "data-label": _ctx.__("created_at")
                          }, toDisplayString(element.created_at), 9, ["data-label"]),
                          createVNode("td", {
                            "data-label": _ctx.__("options")
                          }, [
                            createVNode(_sfc_main$c, {
                              "has-show": false,
                              model: "posts",
                              onDestroy: ($event) => destroy(element),
                              onEdit: ($event) => edit(element)
                            }, null, 8, ["onDestroy", "onEdit"])
                          ], 8, ["data-label"])
                        ])
                      ]),
                      _: 1
                    }, 8, ["list", "onEnd"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$b, {
                headers: ["#", _ctx.__("title"), _ctx.__("content"), _ctx.__("the_image"), _ctx.__("created_at")],
                "is-draggable": ""
              }, {
                default: withCtx(() => [
                  Object.keys(unref(postsList)).length ? (openBlock(), createBlock(unref(Sortable), {
                    key: 0,
                    list: unref(postsList),
                    class: "rtl:flex-row-reverse",
                    "item-key": "id",
                    tag: "tbody",
                    onEnd: (evt) => sort(unref(postsList), evt.oldIndex, evt.newIndex)
                  }, {
                    item: withCtx(({ element, index }) => [
                      createVNode("tr", {
                        class: "rtl:flex-row-reverse",
                        draggable: "true"
                      }, [
                        createVNode("td", { "data-label": "#" }, toDisplayString(index + 1), 1),
                        createVNode("td", {
                          "data-label": _ctx.__("title")
                        }, toDisplayString(element.title), 9, ["data-label"]),
                        createVNode("td", {
                          "data-label": _ctx.__("content"),
                          class: "prose bg-stone-50 text-start ps-2",
                          innerHTML: element.content
                        }, null, 8, ["data-label", "innerHTML"]),
                        createVNode("td", { class: "flex" }, [
                          createVNode("img", {
                            alt: element.title,
                            src: element.image.url,
                            class: "max-w-[200px] mx-auto"
                          }, null, 8, ["alt", "src"])
                        ]),
                        createVNode("td", {
                          "data-label": _ctx.__("created_at")
                        }, toDisplayString(element.created_at), 9, ["data-label"]),
                        createVNode("td", {
                          "data-label": _ctx.__("options")
                        }, [
                          createVNode(_sfc_main$c, {
                            "has-show": false,
                            model: "posts",
                            onDestroy: ($event) => destroy(element),
                            onEdit: ($event) => edit(element)
                          }, null, 8, ["onDestroy", "onEdit"])
                        ], 8, ["data-label"])
                      ])
                    ]),
                    _: 1
                  }, 8, ["list", "onEnd"])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["headers"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(showEditPost)) {
        _push(ssrRenderComponent(_sfc_main$1, {
          post: unref(editedPost),
          "is-modal": ""
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$d, { onConfirm: destroyConfirm }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Posts/PostsList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$2 as a
};
