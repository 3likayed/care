import { ref, provide, reactive, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, useSSRContext, inject, mergeProps, isRef, Fragment, renderList, withDirectives, vShow } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$4 } from "./TableOptions-a9345eb3.js";
import { a as _sfc_main$3, b as _sfc_main$6, _ as _sfc_main$7 } from "./ActionConfirmComponent-f1d725a5.js";
import { _ as _sfc_main$2 } from "./CardBox-b517a69f.js";
import { usePage, router, useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$5 } from "./EditSection-f34775e9.js";
import { Sortable } from "sortablejs-vue3";
import { _ as _sfc_main$a } from "./FormField-a416fc4e.js";
import { g as __, _ as _sfc_main$b } from "../app.js";
import { _ as _sfc_main$9 } from "./FormWithLabelField-2c980605.js";
import { _ as _sfc_main$8 } from "./StepsComponent-202818d9.js";
import { _ as _sfc_main$c } from "./ShowMediaComponent-9a2f83fc.js";
const _sfc_main$1 = {
  __name: "SectionsList",
  __ssrInlineRender: true,
  props: {
    sections: Object,
    pageId: Number
  },
  setup(__props) {
    const props = __props;
    let showEditSection = ref(false);
    let actionConfirm = ref(false);
    let editedSection = ref({});
    let deletedSection = ref(null);
    provide("showEditSection", showEditSection);
    provide("actionConfirm", actionConfirm);
    let list = props.sections.map((item, key) => {
      return {
        id: item.id,
        title: item.title,
        content: item.content,
        page_id: item.page_id,
        image: { url: item.image.url },
        created_at: item.created_at
      };
    });
    let sectionsList = reactive(list);
    usePage().props.locales;
    function edit(section) {
      editedSection.value = props.sections.find((obj) => {
        return obj.id === section.id;
      });
      showEditSection.value = true;
    }
    function destroy(section) {
      actionConfirm.value = true;
      deletedSection = section.id;
    }
    function destroyConfirm() {
      router.delete(route("dashboard.sections.destroy", deletedSection), {
        preserveState: (section) => Object.keys(section.props.errors).length,
        preserveScroll: true
      });
    }
    function sort(array, from, to) {
      if (from !== to) {
        const item = array.splice(from, 1)[0];
        array.splice(to, 0, item);
        router.post(
          route("dashboard.sections.sort"),
          {
            "sections": array
          },
          {
            preserveState: true
          }
        );
      }
    }
    function show(section) {
      router.visit(route("dashboard.sections.show", section));
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, { "has-table": "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$3, {
              headers: ["#", _ctx.__("title"), _ctx.__("content"), _ctx.__("the_image"), _ctx.__("created_at")],
              "is-draggable": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (Object.keys(unref(sectionsList)).length) {
                    _push3(ssrRenderComponent(unref(Sortable), {
                      list: unref(sectionsList),
                      class: "rtl:flex-row-reverse",
                      "item-key": "id",
                      tag: "tbody",
                      onEnd: (evt) => sort(unref(sectionsList), evt.oldIndex, evt.newIndex)
                    }, {
                      item: withCtx(({ element, index }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<tr class="rtl:flex-row-reverse" draggable="true"${_scopeId3}><td data-label="#"${_scopeId3}>${ssrInterpolate(index + 1)}</td><td${ssrRenderAttr("data-label", _ctx.__("title"))}${_scopeId3}>${ssrInterpolate(element.title)}</td><td${ssrRenderAttr("data-label", _ctx.__("content"))} class="prose bg-stone-50 text-start ps-2"${_scopeId3}>${element.content}</td><td class="flex"${_scopeId3}><img${ssrRenderAttr("alt", element.title)}${ssrRenderAttr("src", element.image.url)} class="max-w-[200px] mx-auto"${_scopeId3}></td><td${ssrRenderAttr("data-label", _ctx.__("created_at"))}${_scopeId3}>${ssrInterpolate(element.created_at)}</td><td${ssrRenderAttr("data-label", _ctx.__("options"))}${_scopeId3}>`);
                          _push4(ssrRenderComponent(_sfc_main$4, {
                            model: "sections",
                            onDestroy: ($event) => destroy(element),
                            onEdit: ($event) => edit(element),
                            onShow: ($event) => show(element)
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
                                createVNode(_sfc_main$4, {
                                  model: "sections",
                                  onDestroy: ($event) => destroy(element),
                                  onEdit: ($event) => edit(element),
                                  onShow: ($event) => show(element)
                                }, null, 8, ["onDestroy", "onEdit", "onShow"])
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
                    Object.keys(unref(sectionsList)).length ? (openBlock(), createBlock(unref(Sortable), {
                      key: 0,
                      list: unref(sectionsList),
                      class: "rtl:flex-row-reverse",
                      "item-key": "id",
                      tag: "tbody",
                      onEnd: (evt) => sort(unref(sectionsList), evt.oldIndex, evt.newIndex)
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
                            createVNode(_sfc_main$4, {
                              model: "sections",
                              onDestroy: ($event) => destroy(element),
                              onEdit: ($event) => edit(element),
                              onShow: ($event) => show(element)
                            }, null, 8, ["onDestroy", "onEdit", "onShow"])
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
              createVNode(_sfc_main$3, {
                headers: ["#", _ctx.__("title"), _ctx.__("content"), _ctx.__("the_image"), _ctx.__("created_at")],
                "is-draggable": ""
              }, {
                default: withCtx(() => [
                  Object.keys(unref(sectionsList)).length ? (openBlock(), createBlock(unref(Sortable), {
                    key: 0,
                    list: unref(sectionsList),
                    class: "rtl:flex-row-reverse",
                    "item-key": "id",
                    tag: "tbody",
                    onEnd: (evt) => sort(unref(sectionsList), evt.oldIndex, evt.newIndex)
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
                          createVNode(_sfc_main$4, {
                            model: "sections",
                            onDestroy: ($event) => destroy(element),
                            onEdit: ($event) => edit(element),
                            onShow: ($event) => show(element)
                          }, null, 8, ["onDestroy", "onEdit", "onShow"])
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
      if (unref(showEditSection)) {
        _push(ssrRenderComponent(_sfc_main$5, {
          section: unref(editedSection),
          "is-modal": ""
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$6, { onConfirm: destroyConfirm }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sections/SectionsList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "CreateSection",
  __ssrInlineRender: true,
  props: {
    page: Object
  },
  setup(__props) {
    const props = __props;
    let locales = usePage().props.locales;
    let showCreateSection = inject("showCreateSection");
    let form = useForm({
      title: {},
      content: {},
      type: null,
      page_id: props.page.id,
      image: null
    });
    let steps = ref([__("main_data"), __("media")]);
    let step = ref(0);
    let sectionTypes = usePage().props.section_types;
    function submit() {
      form.post(route("dashboard.sections.store"), {
        preserveScroll: true,
        preserveState: (page) => Object.keys(page.props.errors).length,
        onSuccess: () => {
          showCreateSection.value = false;
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$7, mergeProps({
        "button-label": unref(__)("create"),
        "has-cancel": true,
        hasErrors: unref(form).hasErrors,
        "is-form": true,
        "model-value": unref(showCreateSection),
        title: unref(__)("create_field", { field: "section" }),
        onCancel: ($event) => isRef(showCreateSection) ? showCreateSection.value = false : showCreateSection = false,
        onConfirm: submit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$8, {
              modelValue: unref(step),
              "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : step = $event,
              steps: unref(steps)
            }, null, _parent2, _scopeId));
            _push2(`<section style="${ssrRenderStyle(unref(step) === 0 ? null : { display: "none" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$9, {
              label: unref(__)("title")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(locales), (locale) => {
                    _push3(ssrRenderComponent(_sfc_main$a, {
                      errors: unref(form).errors[`title.${locale}`],
                      label: unref(__)(locale)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$b, {
                            modelValue: unref(form).title[locale],
                            "onUpdate:modelValue": ($event) => unref(form).title[locale] = $event,
                            autocomplete: `title[${locale}]`,
                            name: `title[${locale}]`,
                            required: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$b, {
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
                      return openBlock(), createBlock(_sfc_main$a, {
                        errors: unref(form).errors[`title.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$b, {
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
            _push2(ssrRenderComponent(_sfc_main$9, {
              cols: { lg: 1 },
              label: unref(__)("content")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(locales), (locale) => {
                    _push3(ssrRenderComponent(_sfc_main$a, {
                      errors: unref(form).errors[`content.${locale}`],
                      label: unref(__)(locale)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$b, {
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
                            createVNode(_sfc_main$b, {
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
                      return openBlock(), createBlock(_sfc_main$a, {
                        errors: unref(form).errors[`content.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$b, {
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
            _push2(ssrRenderComponent(_sfc_main$9, {
              label: unref(__)("type")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$a, {
                    errors: unref(form).errors["type"]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$b, {
                          modelValue: unref(form).type,
                          "onUpdate:modelValue": ($event) => unref(form).type = $event,
                          autocomplete: "type",
                          name: "type",
                          type: "select",
                          options: unref(sectionTypes),
                          required: ""
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$b, {
                            modelValue: unref(form).type,
                            "onUpdate:modelValue": ($event) => unref(form).type = $event,
                            autocomplete: "type",
                            name: "type",
                            type: "select",
                            options: unref(sectionTypes),
                            required: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$a, {
                      errors: unref(form).errors["type"]
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$b, {
                          modelValue: unref(form).type,
                          "onUpdate:modelValue": ($event) => unref(form).type = $event,
                          autocomplete: "type",
                          name: "type",
                          type: "select",
                          options: unref(sectionTypes),
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      _: 1
                    }, 8, ["errors"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section><section style="${ssrRenderStyle(unref(step) === 1 ? null : { display: "none" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$c, {
              modelValue: unref(form).image,
              "onUpdate:modelValue": ($event) => unref(form).image = $event,
              name: "image"
            }, null, _parent2, _scopeId));
            _push2(`</section>`);
          } else {
            return [
              createVNode(_sfc_main$8, {
                modelValue: unref(step),
                "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : step = $event,
                steps: unref(steps)
              }, null, 8, ["modelValue", "onUpdate:modelValue", "steps"]),
              withDirectives(createVNode("section", null, [
                createVNode(_sfc_main$9, {
                  label: unref(__)("title")
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$a, {
                        errors: unref(form).errors[`title.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$b, {
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
                createVNode(_sfc_main$9, {
                  cols: { lg: 1 },
                  label: unref(__)("content")
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$a, {
                        errors: unref(form).errors[`content.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$b, {
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
                createVNode(_sfc_main$9, {
                  label: unref(__)("type")
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$a, {
                      errors: unref(form).errors["type"]
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$b, {
                          modelValue: unref(form).type,
                          "onUpdate:modelValue": ($event) => unref(form).type = $event,
                          autocomplete: "type",
                          name: "type",
                          type: "select",
                          options: unref(sectionTypes),
                          required: ""
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
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
                createVNode(_sfc_main$c, {
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sections/CreateSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
