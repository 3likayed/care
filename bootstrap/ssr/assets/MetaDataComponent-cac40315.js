import { computed, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./FormField-a416fc4e.js";
import { _ as _sfc_main$1 } from "./FormWithLabelField-2c980605.js";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "../app.js";
const _sfc_main = {
  __name: "MetaDataComponent",
  __ssrInlineRender: true,
  props: {
    modelValue: Object
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    let locales = usePage().props.locales;
    const computedValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, {
        label: _ctx.__("title")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(locales), (locale) => {
              _push2(ssrRenderComponent(_sfc_main$2, {
                errors: computedValue.value.errors[`meta.title.${locale}`],
                label: _ctx.__(locale)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      modelValue: computedValue.value.meta.title[locale],
                      "onUpdate:modelValue": ($event) => computedValue.value.meta.title[locale] = $event,
                      autocomplete: "title",
                      name: "title",
                      required: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$3, {
                        modelValue: computedValue.value.meta.title[locale],
                        "onUpdate:modelValue": ($event) => computedValue.value.meta.title[locale] = $event,
                        autocomplete: "title",
                        name: "title",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                return openBlock(), createBlock(_sfc_main$2, {
                  errors: computedValue.value.errors[`meta.title.${locale}`],
                  label: _ctx.__(locale)
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$3, {
                      modelValue: computedValue.value.meta.title[locale],
                      "onUpdate:modelValue": ($event) => computedValue.value.meta.title[locale] = $event,
                      autocomplete: "title",
                      name: "title",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["errors", "label"]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        label: _ctx.__("slug")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(locales), (locale) => {
              _push2(ssrRenderComponent(_sfc_main$2, {
                errors: computedValue.value.errors[`meta.slug.${locale}`],
                label: _ctx.__(locale)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      modelValue: computedValue.value.meta.slug[locale],
                      "onUpdate:modelValue": ($event) => computedValue.value.meta.slug[locale] = $event,
                      autocomplete: "slug",
                      name: "slug",
                      required: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$3, {
                        modelValue: computedValue.value.meta.slug[locale],
                        "onUpdate:modelValue": ($event) => computedValue.value.meta.slug[locale] = $event,
                        autocomplete: "slug",
                        name: "slug",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                return openBlock(), createBlock(_sfc_main$2, {
                  errors: computedValue.value.errors[`meta.slug.${locale}`],
                  label: _ctx.__(locale)
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$3, {
                      modelValue: computedValue.value.meta.slug[locale],
                      "onUpdate:modelValue": ($event) => computedValue.value.meta.slug[locale] = $event,
                      autocomplete: "slug",
                      name: "slug",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["errors", "label"]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        label: _ctx.__("keywords")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(locales), (locale) => {
              _push2(ssrRenderComponent(_sfc_main$2, {
                errors: computedValue.value.errors[`meta.keywords.${locale}`],
                label: _ctx.__(locale)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      modelValue: computedValue.value.meta.keywords[locale],
                      "onUpdate:modelValue": ($event) => computedValue.value.meta.keywords[locale] = $event,
                      autocomplete: "keywords",
                      name: "keywords",
                      required: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$3, {
                        modelValue: computedValue.value.meta.keywords[locale],
                        "onUpdate:modelValue": ($event) => computedValue.value.meta.keywords[locale] = $event,
                        autocomplete: "keywords",
                        name: "keywords",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                return openBlock(), createBlock(_sfc_main$2, {
                  errors: computedValue.value.errors[`meta.keywords.${locale}`],
                  label: _ctx.__(locale)
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$3, {
                      modelValue: computedValue.value.meta.keywords[locale],
                      "onUpdate:modelValue": ($event) => computedValue.value.meta.keywords[locale] = $event,
                      autocomplete: "keywords",
                      name: "keywords",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["errors", "label"]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$1, {
        cols: { lg: 1 },
        label: _ctx.__("description")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(locales), (locale) => {
              _push2(ssrRenderComponent(_sfc_main$2, {
                errors: computedValue.value.errors[`meta.description.${locale}`],
                label: _ctx.__(locale)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      modelValue: computedValue.value.meta.description[locale],
                      "onUpdate:modelValue": ($event) => computedValue.value.meta.description[locale] = $event,
                      autocomplete: "description",
                      name: "description",
                      required: "",
                      type: "textarea"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$3, {
                        modelValue: computedValue.value.meta.description[locale],
                        "onUpdate:modelValue": ($event) => computedValue.value.meta.description[locale] = $event,
                        autocomplete: "description",
                        name: "description",
                        required: "",
                        type: "textarea"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                return openBlock(), createBlock(_sfc_main$2, {
                  errors: computedValue.value.errors[`meta.description.${locale}`],
                  label: _ctx.__(locale)
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$3, {
                      modelValue: computedValue.value.meta.description[locale],
                      "onUpdate:modelValue": ($event) => computedValue.value.meta.description[locale] = $event,
                      autocomplete: "description",
                      name: "description",
                      required: "",
                      type: "textarea"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["errors", "label"]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/MetaDataComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
