import { inject, mergeProps, unref, isRef, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, ref, provide, reactive, toDisplayString, createCommentVNode } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$3, a as _sfc_main$8, b as _sfc_main$a } from "./ActionConfirmComponent-f1d725a5.js";
import { _ as _sfc_main$5 } from "./FormField-a416fc4e.js";
import { g as __, _ as _sfc_main$6, o as assignTranslatable } from "../app.js";
import { usePage, useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$4 } from "./FormWithLabelField-2c980605.js";
import { _ as _sfc_main$9 } from "./TableOptions-a9345eb3.js";
import { _ as _sfc_main$7 } from "./CardBox-b517a69f.js";
import { Sortable } from "sortablejs-vue3";
const _sfc_main$2 = {
  __name: "CreateNavigation",
  __ssrInlineRender: true,
  props: {
    navigation: Object
  },
  setup(__props) {
    var _a;
    const props = __props;
    let locales = usePage().props.locales;
    let showCreateNavigation = inject("showCreateNavigation");
    let form = useForm({
      title: {},
      link: {},
      type: null,
      navigation_id: (_a = props.navigation) == null ? void 0 : _a.id
    });
    let navigationTypes = usePage().props.navigation_types;
    function submit() {
      form.post(route("dashboard.navigations.store"), {
        preserveScroll: true,
        preserveState: (navigation) => Object.keys(navigation.props.errors).length,
        onSuccess: () => {
          showCreateNavigation.value = false;
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({
        "button-label": unref(__)("create"),
        "has-cancel": true,
        hasErrors: unref(form).hasErrors,
        "is-form": true,
        "model-value": unref(showCreateNavigation),
        title: unref(__)("create_field", { field: "navigation" }),
        onCancel: ($event) => isRef(showCreateNavigation) ? showCreateNavigation.value = false : showCreateNavigation = false,
        onConfirm: submit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              label: unref(__)("title")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(locales), (locale) => {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      errors: unref(form).errors[`title.${locale}`],
                      label: unref(__)(locale)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$6, {
                            modelValue: unref(form).title[locale],
                            "onUpdate:modelValue": ($event) => unref(form).title[locale] = $event,
                            autocomplete: `title[${locale}]`,
                            name: `title[${locale}]`,
                            required: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$6, {
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
                      return openBlock(), createBlock(_sfc_main$5, {
                        errors: unref(form).errors[`title.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
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
            _push2(ssrRenderComponent(_sfc_main$4, {
              label: unref(__)("link")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(locales), (locale) => {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      errors: unref(form).errors[`link.${locale}`],
                      label: unref(__)(locale)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$6, {
                            modelValue: unref(form).link[locale],
                            "onUpdate:modelValue": ($event) => unref(form).link[locale] = $event,
                            autocomplete: `link[${locale}]`,
                            name: `link[${locale}]`,
                            required: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$6, {
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
                      return openBlock(), createBlock(_sfc_main$5, {
                        errors: unref(form).errors[`link.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
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
            _push2(ssrRenderComponent(_sfc_main$4, {
              cols: { lg: 1 },
              label: unref(__)("type")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    errors: unref(form).errors["type"]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$6, {
                          modelValue: unref(form).type,
                          "onUpdate:modelValue": ($event) => unref(form).type = $event,
                          options: unref(navigationTypes),
                          autocomplete: "type",
                          name: "type",
                          required: "",
                          type: "select"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$6, {
                            modelValue: unref(form).type,
                            "onUpdate:modelValue": ($event) => unref(form).type = $event,
                            options: unref(navigationTypes),
                            autocomplete: "type",
                            name: "type",
                            required: "",
                            type: "select"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5, {
                      errors: unref(form).errors["type"]
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$6, {
                          modelValue: unref(form).type,
                          "onUpdate:modelValue": ($event) => unref(form).type = $event,
                          options: unref(navigationTypes),
                          autocomplete: "type",
                          name: "type",
                          required: "",
                          type: "select"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      _: 1
                    }, 8, ["errors"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section>`);
          } else {
            return [
              createVNode("section", null, [
                createVNode(_sfc_main$4, {
                  label: unref(__)("title")
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$5, {
                        errors: unref(form).errors[`title.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
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
                createVNode(_sfc_main$4, {
                  label: unref(__)("link")
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$5, {
                        errors: unref(form).errors[`link.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
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
                createVNode(_sfc_main$4, {
                  cols: { lg: 1 },
                  label: unref(__)("type")
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$5, {
                      errors: unref(form).errors["type"]
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$6, {
                          modelValue: unref(form).type,
                          "onUpdate:modelValue": ($event) => unref(form).type = $event,
                          options: unref(navigationTypes),
                          autocomplete: "type",
                          name: "type",
                          required: "",
                          type: "select"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      _: 1
                    }, 8, ["errors"])
                  ]),
                  _: 1
                }, 8, ["label"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Navigations/CreateNavigation.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "EditNavigation",
  __ssrInlineRender: true,
  props: {
    navigation: Object,
    isModal: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    let locales = usePage().props.locales;
    let showEditNavigation = props.isModal ? inject("showEditNavigation") : ref(true);
    let form = useForm({
      title: props.navigation.translations.title,
      type: props.navigation.type,
      link: assignTranslatable(props.navigation.translations.link)
    });
    let navigationTypes = usePage().props.navigation_types;
    function submit() {
      form.put(route("dashboard.navigations.update", props.navigation.id), {
        preserveScroll: true,
        preserveState: (navigation) => Object.keys(navigation.props.errors).length
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$3, mergeProps({
        "button-label": unref(__)("edit"),
        "has-cancel": true,
        hasErrors: unref(form).hasErrors,
        "is-form": true,
        "is-modal": __props.isModal,
        "model-value": unref(showEditNavigation),
        title: unref(__)("edit_field", { field: "navigation" }),
        onCancel: ($event) => isRef(showEditNavigation) ? showEditNavigation.value = false : showEditNavigation = false,
        onConfirm: submit
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<section${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$4, {
              label: unref(__)("title")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(locales), (locale) => {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      errors: unref(form).errors[`title.${locale}`],
                      label: unref(__)(locale)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$6, {
                            modelValue: unref(form).title[locale],
                            "onUpdate:modelValue": ($event) => unref(form).title[locale] = $event,
                            autocomplete: `title[${locale}]`,
                            name: `title[${locale}]`,
                            required: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$6, {
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
                      return openBlock(), createBlock(_sfc_main$5, {
                        errors: unref(form).errors[`title.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
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
            _push2(ssrRenderComponent(_sfc_main$4, {
              label: unref(__)("link")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(locales), (locale) => {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      errors: unref(form).errors[`link.${locale}`],
                      label: unref(__)(locale)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$6, {
                            modelValue: unref(form).link[locale],
                            "onUpdate:modelValue": ($event) => unref(form).link[locale] = $event,
                            autocomplete: `link[${locale}]`,
                            name: `link[${locale}]`,
                            required: ""
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$6, {
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
                      return openBlock(), createBlock(_sfc_main$5, {
                        errors: unref(form).errors[`link.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
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
            _push2(ssrRenderComponent(_sfc_main$4, {
              cols: { lg: 1 },
              label: unref(__)("type")
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$5, {
                    errors: unref(form).errors["type"]
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$6, {
                          modelValue: unref(form).type,
                          "onUpdate:modelValue": ($event) => unref(form).type = $event,
                          options: unref(navigationTypes),
                          autocomplete: "type",
                          name: "type",
                          required: "",
                          type: "select"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$6, {
                            modelValue: unref(form).type,
                            "onUpdate:modelValue": ($event) => unref(form).type = $event,
                            options: unref(navigationTypes),
                            autocomplete: "type",
                            name: "type",
                            required: "",
                            type: "select"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$5, {
                      errors: unref(form).errors["type"]
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$6, {
                          modelValue: unref(form).type,
                          "onUpdate:modelValue": ($event) => unref(form).type = $event,
                          options: unref(navigationTypes),
                          autocomplete: "type",
                          name: "type",
                          required: "",
                          type: "select"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      _: 1
                    }, 8, ["errors"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</section>`);
          } else {
            return [
              createVNode("section", null, [
                createVNode(_sfc_main$4, {
                  label: unref(__)("title")
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$5, {
                        errors: unref(form).errors[`title.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
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
                createVNode(_sfc_main$4, {
                  label: unref(__)("link")
                }, {
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                      return openBlock(), createBlock(_sfc_main$5, {
                        errors: unref(form).errors[`link.${locale}`],
                        label: unref(__)(locale)
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$6, {
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
                createVNode(_sfc_main$4, {
                  cols: { lg: 1 },
                  label: unref(__)("type")
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$5, {
                      errors: unref(form).errors["type"]
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$6, {
                          modelValue: unref(form).type,
                          "onUpdate:modelValue": ($event) => unref(form).type = $event,
                          options: unref(navigationTypes),
                          autocomplete: "type",
                          name: "type",
                          required: "",
                          type: "select"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                      ]),
                      _: 1
                    }, 8, ["errors"])
                  ]),
                  _: 1
                }, 8, ["label"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Navigations/EditNavigation.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "NavigationsList",
  __ssrInlineRender: true,
  props: {
    navigations: Object,
    pageId: Number
  },
  setup(__props) {
    const props = __props;
    let showEditNavigation = ref(false);
    let actionConfirm = ref(false);
    let editedNavigation = ref({});
    let deletedNavigation = ref(null);
    provide("showEditNavigation", showEditNavigation);
    provide("actionConfirm", actionConfirm);
    let list = props.navigations.map((item, key) => {
      return {
        id: item.id,
        title: item.title,
        type: item.type,
        page_id: item.page_id,
        link: item.link,
        created_at: item.created_at
      };
    });
    let navigationsList = reactive(list);
    usePage().props.locales;
    function edit(navigation) {
      editedNavigation.value = props.navigations.find((obj) => {
        return obj.id === navigation.id;
      });
      showEditNavigation.value = true;
    }
    function destroy(navigation) {
      actionConfirm.value = true;
      deletedNavigation = navigation.id;
    }
    function destroyConfirm() {
      router.delete(route("dashboard.navigations.destroy", deletedNavigation), {
        preserveState: (navigation) => Object.keys(navigation.props.errors).length,
        preserveScroll: true
      });
    }
    function sort(array, from, to) {
      if (from !== to) {
        const item = array.splice(from, 1)[0];
        array.splice(to, 0, item);
        router.post(
          route("dashboard.navigations.sort"),
          {
            "navigations": array
          },
          {
            preserveState: true
          }
        );
      }
    }
    function show(navigation) {
      router.visit(route("dashboard.navigations.show", navigation));
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$7, { "has-table": "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$8, {
              headers: ["#", _ctx.__("title"), _ctx.__("type"), _ctx.__("link"), _ctx.__("created_at")],
              "is-draggable": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (Object.keys(unref(navigationsList)).length) {
                    _push3(ssrRenderComponent(unref(Sortable), {
                      list: unref(navigationsList),
                      class: "rtl:flex-row-reverse",
                      "item-key": "id",
                      tag: "tbody",
                      onEnd: (evt) => sort(unref(navigationsList), evt.oldIndex, evt.newIndex)
                    }, {
                      item: withCtx(({ element, index }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<tr class="rtl:flex-row-reverse" draggable="true"${_scopeId3}><td data-label="#"${_scopeId3}>${ssrInterpolate(index + 1)}</td><td${ssrRenderAttr("data-label", _ctx.__("title"))}${_scopeId3}>${ssrInterpolate(element.title)}</td><td${ssrRenderAttr("data-label", _ctx.__("type"))}${_scopeId3}>${ssrInterpolate(element.type)}</td><td${_scopeId3}>`);
                          if (element.link) {
                            _push4(`<a${ssrRenderAttr("href", element.link)}${_scopeId3}>${ssrInterpolate(element.link)}</a>`);
                          } else {
                            _push4(`<p${_scopeId3}>${ssrInterpolate(_ctx.__("no_data"))}</p>`);
                          }
                          _push4(`</td><td${ssrRenderAttr("data-label", _ctx.__("created_at"))}${_scopeId3}>${ssrInterpolate(element.created_at)}</td><td${ssrRenderAttr("data-label", _ctx.__("options"))}${_scopeId3}>`);
                          _push4(ssrRenderComponent(_sfc_main$9, {
                            model: "navigations",
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
                                "data-label": _ctx.__("type")
                              }, toDisplayString(element.type), 9, ["data-label"]),
                              createVNode("td", null, [
                                element.link ? (openBlock(), createBlock("a", {
                                  key: 0,
                                  href: element.link
                                }, toDisplayString(element.link), 9, ["href"])) : (openBlock(), createBlock("p", { key: 1 }, toDisplayString(_ctx.__("no_data")), 1))
                              ]),
                              createVNode("td", {
                                "data-label": _ctx.__("created_at")
                              }, toDisplayString(element.created_at), 9, ["data-label"]),
                              createVNode("td", {
                                "data-label": _ctx.__("options")
                              }, [
                                createVNode(_sfc_main$9, {
                                  model: "navigations",
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
                    Object.keys(unref(navigationsList)).length ? (openBlock(), createBlock(unref(Sortable), {
                      key: 0,
                      list: unref(navigationsList),
                      class: "rtl:flex-row-reverse",
                      "item-key": "id",
                      tag: "tbody",
                      onEnd: (evt) => sort(unref(navigationsList), evt.oldIndex, evt.newIndex)
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
                            "data-label": _ctx.__("type")
                          }, toDisplayString(element.type), 9, ["data-label"]),
                          createVNode("td", null, [
                            element.link ? (openBlock(), createBlock("a", {
                              key: 0,
                              href: element.link
                            }, toDisplayString(element.link), 9, ["href"])) : (openBlock(), createBlock("p", { key: 1 }, toDisplayString(_ctx.__("no_data")), 1))
                          ]),
                          createVNode("td", {
                            "data-label": _ctx.__("created_at")
                          }, toDisplayString(element.created_at), 9, ["data-label"]),
                          createVNode("td", {
                            "data-label": _ctx.__("options")
                          }, [
                            createVNode(_sfc_main$9, {
                              model: "navigations",
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
              createVNode(_sfc_main$8, {
                headers: ["#", _ctx.__("title"), _ctx.__("type"), _ctx.__("link"), _ctx.__("created_at")],
                "is-draggable": ""
              }, {
                default: withCtx(() => [
                  Object.keys(unref(navigationsList)).length ? (openBlock(), createBlock(unref(Sortable), {
                    key: 0,
                    list: unref(navigationsList),
                    class: "rtl:flex-row-reverse",
                    "item-key": "id",
                    tag: "tbody",
                    onEnd: (evt) => sort(unref(navigationsList), evt.oldIndex, evt.newIndex)
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
                          "data-label": _ctx.__("type")
                        }, toDisplayString(element.type), 9, ["data-label"]),
                        createVNode("td", null, [
                          element.link ? (openBlock(), createBlock("a", {
                            key: 0,
                            href: element.link
                          }, toDisplayString(element.link), 9, ["href"])) : (openBlock(), createBlock("p", { key: 1 }, toDisplayString(_ctx.__("no_data")), 1))
                        ]),
                        createVNode("td", {
                          "data-label": _ctx.__("created_at")
                        }, toDisplayString(element.created_at), 9, ["data-label"]),
                        createVNode("td", {
                          "data-label": _ctx.__("options")
                        }, [
                          createVNode(_sfc_main$9, {
                            model: "navigations",
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
      if (unref(showEditNavigation)) {
        _push(ssrRenderComponent(_sfc_main$1, {
          navigation: unref(editedNavigation),
          "is-modal": ""
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$a, { onConfirm: destroyConfirm }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Navigations/NavigationsList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _,
  _sfc_main$2 as a,
  _sfc_main$1 as b
};
