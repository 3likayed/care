import { inject, ref, mergeProps, unref, isRef, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, withDirectives, vShow, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./ActionConfirmComponent-f1d725a5.js";
import { _ as _sfc_main$4 } from "./FormField-a416fc4e.js";
import { g as __, _ as _sfc_main$5 } from "../app.js";
import { usePage, useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./FormWithLabelField-2c980605.js";
import { _ as _sfc_main$2 } from "./StepsComponent-202818d9.js";
import { a as _sfc_main$6, _ as _sfc_main$7 } from "./ShowMediaComponent-9a2f83fc.js";
const _sfc_main = {
  __name: "EditSection",
  __ssrInlineRender: true,
  props: {
    section: Object,
    isModal: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    let locales = usePage().props.locales;
    let showEditSection = props.isModal ? inject("showEditSection") : ref(true);
    let form = useForm({
      title: props.section.translations.title,
      content: props.section.translations.content,
      page_id: props.section.page.id,
      type: props.section.type,
      image: null,
      _method: "put",
      meta: props.section.meta
    });
    let steps = ref([__("main_data"), __("media")]);
    let step = ref(0);
    let sectionTypes = usePage().props.section_types;
    console.log(sectionTypes);
    function submit() {
      form.post(route("dashboard.sections.update", props.section.id), {
        preserveScroll: true,
        preserveState: (section) => Object.keys(section.props.errors).length
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({
        "button-label": unref(__)("edit"),
        "has-cancel": true,
        hasErrors: unref(form).hasErrors,
        "is-form": true,
        "is-modal": __props.isModal,
        "model-value": unref(showEditSection),
        title: unref(__)("edit_field", { field: "section" }),
        onCancel: ($event) => isRef(showEditSection) ? showEditSection.value = false : showEditSection = false,
        onConfirm: submit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              modelValue: unref(step),
              "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : step = $event,
              steps: unref(steps)
            }, null, _parent2, _scopeId));
            _push2(`<section style="${ssrRenderStyle(unref(step) === 0 ? null : { display: "none" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, {
              label: unref(__)("title")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(locales), (locale) => {
                    _push3(ssrRenderComponent(_sfc_main$4, {
                      errors: unref(form).errors[`title.${locale}`],
                      label: unref(__)(locale)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$5, {
                            modelValue: unref(form).title[locale],
                            "onUpdate:modelValue": ($event) => unref(form).title[locale] = $event,
                            autocomplete: `title[${locale}]`,
                            name: `title[${locale}]`,
                            required: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$5, {
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
                      return openBlock(), createBlock(_sfc_main$4, {
                        errors: unref(form).errors[`title.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$5, {
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
            _push2(ssrRenderComponent(_sfc_main$3, {
              cols: { lg: 1 },
              label: unref(__)("content")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(locales), (locale) => {
                    _push3(ssrRenderComponent(_sfc_main$4, {
                      errors: unref(form).errors[`content.${locale}`],
                      label: unref(__)(locale)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$5, {
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
                            createVNode(_sfc_main$5, {
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
                      return openBlock(), createBlock(_sfc_main$4, {
                        errors: unref(form).errors[`content.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$5, {
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
            _push2(ssrRenderComponent(_sfc_main$3, {
              label: unref(__)("type")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    errors: unref(form).errors["type"]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$5, {
                          type: "select",
                          options: _ctx.$page.props.section_types,
                          modelValue: unref(form).type,
                          "onUpdate:modelValue": ($event) => unref(form).type = $event,
                          autocomplete: "type",
                          name: "type",
                          required: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$5, {
                            type: "select",
                            options: _ctx.$page.props.section_types,
                            modelValue: unref(form).type,
                            "onUpdate:modelValue": ($event) => unref(form).type = $event,
                            autocomplete: "type",
                            name: "type",
                            required: ""
                          }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4, {
                      errors: unref(form).errors["type"]
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$5, {
                          type: "select",
                          options: _ctx.$page.props.section_types,
                          modelValue: unref(form).type,
                          "onUpdate:modelValue": ($event) => unref(form).type = $event,
                          autocomplete: "type",
                          name: "type",
                          required: ""
                        }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["errors"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section><section style="${ssrRenderStyle(unref(step) === 1 ? null : { display: "none" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              items: __props.section.image
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, {
                    modelValue: unref(form).image,
                    "onUpdate:modelValue": ($event) => unref(form).image = $event,
                    name: "image"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$7, {
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
              createVNode(_sfc_main$2, {
                modelValue: unref(step),
                "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : step = $event,
                steps: unref(steps)
              }, null, 8, ["modelValue", "onUpdate:modelValue", "steps"]),
              withDirectives(createVNode("section", null, [
                createVNode(_sfc_main$3, {
                  label: unref(__)("title")
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$4, {
                        errors: unref(form).errors[`title.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$5, {
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
                createVNode(_sfc_main$3, {
                  cols: { lg: 1 },
                  label: unref(__)("content")
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$4, {
                        errors: unref(form).errors[`content.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$5, {
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
                createVNode(_sfc_main$3, {
                  label: unref(__)("type")
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$4, {
                      errors: unref(form).errors["type"]
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$5, {
                          type: "select",
                          options: _ctx.$page.props.section_types,
                          modelValue: unref(form).type,
                          "onUpdate:modelValue": ($event) => unref(form).type = $event,
                          autocomplete: "type",
                          name: "type",
                          required: ""
                        }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
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
                createVNode(_sfc_main$6, {
                  items: __props.section.image
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$7, {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sections/EditSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
