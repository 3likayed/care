import { ref, provide, computed, reactive, watch, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$3 } from "./SectionTitleLineWithButton-9da2ae80.js";
import { mdiAccountStarOutline } from "@mdi/js";
import { usePage, router } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./BreadCrumb-4683e004.js";
import { a as _sfc_main$7, b as _sfc_main$8 } from "./ActionConfirmComponent-f1d725a5.js";
import { _ as _sfc_main$6 } from "./CardBox-b517a69f.js";
import { g as __, _ as _sfc_main$5 } from "../app.js";
import { _ as _sfc_main$4 } from "./FormField-a416fc4e.js";
import { debounce } from "lodash";
import "pinia";
import "ziggy-js";
/* empty css                                 */import "axios";
import "@tinymce/tinymce-vue";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "@fawmi/vue-google-maps";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    let actionConfirm = ref(false);
    let deletedContacts = ref(null);
    provide("actionConfirm", actionConfirm);
    let contacts = computed(() => usePage().props.contacts.data);
    let pagination = computed(() => usePage().props.contacts.meta);
    usePage().props.locales;
    function destroyConfirm() {
      router.delete(route("dashboard.contacts.destroy", deletedContacts), {
        preserveState: (contact) => Object.keys(contact.props.errors).length,
        preserveScroll: true
      });
    }
    let params = new URLSearchParams(document.location.search);
    let parameters = reactive({
      search: params.get("search"),
      startDate: params.get("startDate"),
      endDate: params.get("endDate")
    });
    watch(parameters, debounce(function(value) {
      let data = {};
      value.search ? data.search = value.search : "";
      value.startDate ? data.startDate = value.startDate : "";
      value.endDate ? data.endDate = value.endDate : "";
      router.visit(route("dashboard.contacts.index"), {
        replace: true,
        preserveState: true,
        data
      });
    }, 500));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              items: [{ name: unref(__)("contacts"), href: _ctx.route("dashboard.contacts.index") }]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              icon: unref(mdiAccountStarOutline),
              title: unref(__)("contacts"),
              class: "flex-wrap",
              main: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="grid grid-cols-2 md:grid-cols-3 w-full md:w-fit gap-x-5"${_scopeId2}><div class="col-span-2 md:col-span-1"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    label: unref(__)("search")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$5, {
                          modelValue: unref(parameters).search,
                          "onUpdate:modelValue": ($event) => unref(parameters).search = $event,
                          autocomplete: "search",
                          name: "search"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$5, {
                            modelValue: unref(parameters).search,
                            "onUpdate:modelValue": ($event) => unref(parameters).search = $event,
                            autocomplete: "search",
                            name: "search"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    label: unref(__)("start")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$5, {
                          modelValue: unref(parameters).startDate,
                          "onUpdate:modelValue": ($event) => unref(parameters).startDate = $event,
                          autocomplete: "startDate",
                          name: "startDate",
                          type: "date"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$5, {
                            modelValue: unref(parameters).startDate,
                            "onUpdate:modelValue": ($event) => unref(parameters).startDate = $event,
                            autocomplete: "startDate",
                            name: "startDate",
                            type: "date"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    label: unref(__)("end")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$5, {
                          modelValue: unref(parameters).endDate,
                          "onUpdate:modelValue": ($event) => unref(parameters).endDate = $event,
                          autocomplete: "endDate",
                          name: "endDate",
                          type: "date"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$5, {
                            modelValue: unref(parameters).endDate,
                            "onUpdate:modelValue": ($event) => unref(parameters).endDate = $event,
                            autocomplete: "endDate",
                            name: "endDate",
                            type: "date"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "grid grid-cols-2 md:grid-cols-3 w-full md:w-fit gap-x-5" }, [
                      createVNode("div", { class: "col-span-2 md:col-span-1" }, [
                        createVNode(_sfc_main$4, {
                          label: unref(__)("search")
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$5, {
                              modelValue: unref(parameters).search,
                              "onUpdate:modelValue": ($event) => unref(parameters).search = $event,
                              autocomplete: "search",
                              name: "search"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          _: 1
                        }, 8, ["label"])
                      ]),
                      createVNode(_sfc_main$4, {
                        label: unref(__)("start")
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$5, {
                            modelValue: unref(parameters).startDate,
                            "onUpdate:modelValue": ($event) => unref(parameters).startDate = $event,
                            autocomplete: "startDate",
                            name: "startDate",
                            type: "date"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      createVNode(_sfc_main$4, {
                        label: unref(__)("end")
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$5, {
                            modelValue: unref(parameters).endDate,
                            "onUpdate:modelValue": ($event) => unref(parameters).endDate = $event,
                            autocomplete: "endDate",
                            name: "endDate",
                            type: "date"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$6, { "has-table": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, {
                    headers: ["#", unref(__)("name"), unref(__)("subject"), unref(__)("email"), unref(__)("created_at")],
                    pagination: unref(pagination)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(contacts), (contact, key) => {
                          _push4(`<tr class="rtl:flex-row-reverse"${_scopeId3}><td data-label="# "${_scopeId3}>${ssrInterpolate(key + 1)}</td><td${ssrRenderAttr("data-label", unref(__)("name"))}${_scopeId3}>${ssrInterpolate(contact.name)}</td><td${ssrRenderAttr("data-label", unref(__)("message"))} class="max-w-full"${_scopeId3}>${ssrInterpolate(contact.subject)}</td><td${ssrRenderAttr("data-label", unref(__)("email"))}${_scopeId3}><a${ssrRenderAttr("href", "mailto:" + contact.email)}${_scopeId3}>${ssrInterpolate(contact.email)}</a></td><td${ssrRenderAttr("data-label", unref(__)("created_at"))}${_scopeId3}>${ssrInterpolate(contact.created_at)}</td></tr>`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(contacts), (contact, key) => {
                            return openBlock(), createBlock("tr", {
                              key,
                              class: "rtl:flex-row-reverse"
                            }, [
                              createVNode("td", { "data-label": "# " }, toDisplayString(key + 1), 1),
                              createVNode("td", {
                                "data-label": unref(__)("name")
                              }, toDisplayString(contact.name), 9, ["data-label"]),
                              createVNode("td", {
                                "data-label": unref(__)("message"),
                                class: "max-w-full"
                              }, toDisplayString(contact.subject), 9, ["data-label"]),
                              createVNode("td", {
                                "data-label": unref(__)("email")
                              }, [
                                createVNode("a", {
                                  href: "mailto:" + contact.email
                                }, toDisplayString(contact.email), 9, ["href"])
                              ], 8, ["data-label"]),
                              createVNode("td", {
                                "data-label": unref(__)("created_at")
                              }, toDisplayString(contact.created_at), 9, ["data-label"])
                            ]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$7, {
                      headers: ["#", unref(__)("name"), unref(__)("subject"), unref(__)("email"), unref(__)("created_at")],
                      pagination: unref(pagination)
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(contacts), (contact, key) => {
                          return openBlock(), createBlock("tr", {
                            key,
                            class: "rtl:flex-row-reverse"
                          }, [
                            createVNode("td", { "data-label": "# " }, toDisplayString(key + 1), 1),
                            createVNode("td", {
                              "data-label": unref(__)("name")
                            }, toDisplayString(contact.name), 9, ["data-label"]),
                            createVNode("td", {
                              "data-label": unref(__)("message"),
                              class: "max-w-full"
                            }, toDisplayString(contact.subject), 9, ["data-label"]),
                            createVNode("td", {
                              "data-label": unref(__)("email")
                            }, [
                              createVNode("a", {
                                href: "mailto:" + contact.email
                              }, toDisplayString(contact.email), 9, ["href"])
                            ], 8, ["data-label"]),
                            createVNode("td", {
                              "data-label": unref(__)("created_at")
                            }, toDisplayString(contact.created_at), 9, ["data-label"])
                          ]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["headers", "pagination"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, { onConfirm: destroyConfirm }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                items: [{ name: unref(__)("contacts"), href: _ctx.route("dashboard.contacts.index") }]
              }, null, 8, ["items"]),
              createVNode(_sfc_main$3, {
                icon: unref(mdiAccountStarOutline),
                title: unref(__)("contacts"),
                class: "flex-wrap",
                main: ""
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "grid grid-cols-2 md:grid-cols-3 w-full md:w-fit gap-x-5" }, [
                    createVNode("div", { class: "col-span-2 md:col-span-1" }, [
                      createVNode(_sfc_main$4, {
                        label: unref(__)("search")
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$5, {
                            modelValue: unref(parameters).search,
                            "onUpdate:modelValue": ($event) => unref(parameters).search = $event,
                            autocomplete: "search",
                            name: "search"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ]),
                    createVNode(_sfc_main$4, {
                      label: unref(__)("start")
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$5, {
                          modelValue: unref(parameters).startDate,
                          "onUpdate:modelValue": ($event) => unref(parameters).startDate = $event,
                          autocomplete: "startDate",
                          name: "startDate",
                          type: "date"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_sfc_main$4, {
                      label: unref(__)("end")
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$5, {
                          modelValue: unref(parameters).endDate,
                          "onUpdate:modelValue": ($event) => unref(parameters).endDate = $event,
                          autocomplete: "endDate",
                          name: "endDate",
                          type: "date"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ])
                ]),
                _: 1
              }, 8, ["icon", "title"]),
              createVNode(_sfc_main$6, { "has-table": "" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$7, {
                    headers: ["#", unref(__)("name"), unref(__)("subject"), unref(__)("email"), unref(__)("created_at")],
                    pagination: unref(pagination)
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(contacts), (contact, key) => {
                        return openBlock(), createBlock("tr", {
                          key,
                          class: "rtl:flex-row-reverse"
                        }, [
                          createVNode("td", { "data-label": "# " }, toDisplayString(key + 1), 1),
                          createVNode("td", {
                            "data-label": unref(__)("name")
                          }, toDisplayString(contact.name), 9, ["data-label"]),
                          createVNode("td", {
                            "data-label": unref(__)("message"),
                            class: "max-w-full"
                          }, toDisplayString(contact.subject), 9, ["data-label"]),
                          createVNode("td", {
                            "data-label": unref(__)("email")
                          }, [
                            createVNode("a", {
                              href: "mailto:" + contact.email
                            }, toDisplayString(contact.email), 9, ["href"])
                          ], 8, ["data-label"]),
                          createVNode("td", {
                            "data-label": unref(__)("created_at")
                          }, toDisplayString(contact.created_at), 9, ["data-label"])
                        ]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["headers", "pagination"])
                ]),
                _: 1
              }),
              createVNode(_sfc_main$8, { onConfirm: destroyConfirm })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Pages/Contacts/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
