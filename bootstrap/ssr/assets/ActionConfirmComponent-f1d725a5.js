import { useSlots, createVNode, resolveDynamicComponent, unref, useSSRContext, mergeProps, computed, withCtx, openBlock, createBlock, createCommentVNode, withModifiers, renderSlot, withDirectives, vShow, inject, isRef } from "vue";
import { ssrRenderList, ssrInterpolate, ssrRenderSlot, ssrRenderVNode, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { Link, usePage } from "@inertiajs/vue3";
import { mdiClose } from "@mdi/js";
import { s as _sfc_main$4, e as _sfc_main$6, a as _sfc_main$7 } from "../app.js";
import { _ as _sfc_main$5 } from "./CardBox-b517a69f.js";
import { a as _sfc_main$8 } from "./FormField-a416fc4e.js";
const BaseTable_vue_vue_type_style_index_0_lang = "";
const _sfc_main$3 = {
  __name: "BaseTable",
  __ssrInlineRender: true,
  props: {
    headers: Array,
    pagination: Object,
    isDraggable: Boolean
  },
  setup(__props) {
    useSlots();
    function calculatedUrl(paginationUrl) {
      if (paginationUrl !== null) {
        paginationUrl = new URL(paginationUrl);
        let paginationParams = new URLSearchParams(paginationUrl.search);
        let pageParams = new URLSearchParams(document.location.search);
        pageParams.forEach((value, key) => {
          if (key !== "page")
            paginationParams.set(key, value);
        });
        paginationUrl.search = paginationParams;
        return paginationUrl.href;
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><table class="table-auto border-collapse"><thead><tr><!--[-->`);
      ssrRenderList(__props.headers, (header, key) => {
        _push(`<th>${ssrInterpolate(header)}</th>`);
      });
      _push(`<!--]--></tr></thead>`);
      if (!__props.isDraggable) {
        _push(`<tbody>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`<tr><td class="text-center w- py-24 dark:text-slate-400" colspan="100%">${ssrInterpolate(_ctx.__("no_data"))}</td></tr>`);
        }, _push, _parent);
        _push(`</tbody>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, () => {
          _push(`<tr><td class="text-center w- py-24 dark:text-slate-400" colspan="100%">${ssrInterpolate(_ctx.__("no_data"))}</td></tr>`);
        }, _push, _parent);
      }
      _push(`</table>`);
      if (__props.pagination) {
        _push(`<div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"><div class="justify-between items-center flex md:flex-row flex-col gap-3"><div class="flex items-center justify-center"><div class="flex items-center justify-start flex-wrap"><!--[-->`);
        ssrRenderList(__props.pagination.links, (link, key) => {
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(link.url && !link.active ? unref(Link) : "p"), {
            key,
            class: [
              {
                "dark:text-slate-600 text-gray-400 cursor-not-allowed ": !link.url,
                "hover:bg-gray-100 dark:hover:bg-slate-800": link.url,
                "bg-gray-200 dark:bg-slate-800": link.active
              },
              "inline-flex justify-center items-center rounded px-3 py-1 text-sm me-3"
            ],
            href: calculatedUrl(link.url)
          }, null), _parent);
        });
        _push(`<!--]--></div></div><div class="flex-col justify-center items-center text-center"><div class="text-xsm">${ssrInterpolate(_ctx.__("result_from", {
          from: __props.pagination.from,
          to: __props.pagination.to,
          total: __props.pagination.total
        }))}</div><div class="text-xsm">${ssrInterpolate(_ctx.__("page_from", {
          current: __props.pagination.current_page,
          total: __props.pagination.last_page
        }))}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/BaseTable.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "CardBoxComponentTitle",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between mb-3" }, _attrs))}><h1 class="text-2xl">${ssrInterpolate(__props.title)}</h1>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/CardBoxComponentTitle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "CardBoxModal",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    isModal: {
      type: Boolean,
      default: true
    },
    isForm: false,
    button: {
      type: String,
      default: "info"
    },
    buttonLabel: {
      type: String,
      default: "Done"
    },
    hasCancel: Boolean,
    modelValue: {
      type: [String, Number, Boolean],
      default: null
    }
  },
  emits: ["update:modelValue", "cancel", "confirm"],
  setup(__props, { emit }) {
    const props = __props;
    const value = computed({
      get: () => props.modelValue,
      set: (value2) => emit("update:modelValue", value2)
    });
    const confirmCancel = (mode) => {
      value.value = false;
      emit(mode);
    };
    const confirm = () => confirmCancel("confirm");
    const cancel = () => {
      usePage().props.errors = {};
      confirmCancel("cancel");
    };
    if (props.isModal) {
      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && value.value) {
          cancel();
        }
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.isModal) {
        _push(ssrRenderComponent(_sfc_main$4, mergeProps({
          style: value.value ? null : { display: "none" },
          onOverlayClick: cancel
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$5, {
                style: value.value ? null : { display: "none" },
                "is-form": __props.isForm,
                class: "shadow-lg max-h-screen-menu w-11/12 md:w-4/5 lg:w-2/5 xl:w-8/12 z-50 overflow-y-auto",
                "is-modal": "is-modal"
              }, {
                footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$6, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$7, {
                            color: __props.button,
                            label: __props.buttonLabel,
                            onClick: confirm
                          }, null, _parent4, _scopeId3));
                          if (__props.hasCancel) {
                            _push4(ssrRenderComponent(_sfc_main$7, {
                              color: __props.button,
                              label: _ctx.__("cancel"),
                              outline: "",
                              onClick: cancel
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            createVNode(_sfc_main$7, {
                              color: __props.button,
                              label: __props.buttonLabel,
                              onClick: confirm
                            }, null, 8, ["color", "label"]),
                            __props.hasCancel ? (openBlock(), createBlock(_sfc_main$7, {
                              key: 0,
                              color: __props.button,
                              label: _ctx.__("cancel"),
                              outline: "",
                              onClick: cancel
                            }, null, 8, ["color", "label"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$6, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$7, {
                            color: __props.button,
                            label: __props.buttonLabel,
                            onClick: confirm
                          }, null, 8, ["color", "label"]),
                          __props.hasCancel ? (openBlock(), createBlock(_sfc_main$7, {
                            key: 0,
                            color: __props.button,
                            label: _ctx.__("cancel"),
                            outline: "",
                            onClick: cancel
                          }, null, 8, ["color", "label"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$8, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$2, { title: __props.title }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (__props.hasCancel) {
                            _push4(ssrRenderComponent(_sfc_main$7, {
                              icon: unref(mdiClose),
                              color: "whiteDark",
                              "rounded-full": "",
                              small: "",
                              onClick: cancel
                            }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            __props.hasCancel ? (openBlock(), createBlock(_sfc_main$7, {
                              key: 0,
                              icon: unref(mdiClose),
                              color: "whiteDark",
                              "rounded-full": "",
                              small: "",
                              onClick: withModifiers(cancel, ["prevent"])
                            }, null, 8, ["icon", "onClick"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="space-y-3"${_scopeId2}>`);
                    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode(_sfc_main$8),
                      createVNode(_sfc_main$2, { title: __props.title }, {
                        default: withCtx(() => [
                          __props.hasCancel ? (openBlock(), createBlock(_sfc_main$7, {
                            key: 0,
                            icon: unref(mdiClose),
                            color: "whiteDark",
                            "rounded-full": "",
                            small: "",
                            onClick: withModifiers(cancel, ["prevent"])
                          }, null, 8, ["icon", "onClick"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }, 8, ["title"]),
                      createVNode("div", { class: "space-y-3" }, [
                        renderSlot(_ctx.$slots, "default")
                      ])
                    ];
                  }
                }),
                _: 3
              }, _parent2, _scopeId));
            } else {
              return [
                withDirectives(createVNode(_sfc_main$5, {
                  "is-form": __props.isForm,
                  class: "shadow-lg max-h-screen-menu w-11/12 md:w-4/5 lg:w-2/5 xl:w-8/12 z-50 overflow-y-auto",
                  "is-modal": "is-modal"
                }, {
                  footer: withCtx(() => [
                    createVNode(_sfc_main$6, null, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$7, {
                          color: __props.button,
                          label: __props.buttonLabel,
                          onClick: confirm
                        }, null, 8, ["color", "label"]),
                        __props.hasCancel ? (openBlock(), createBlock(_sfc_main$7, {
                          key: 0,
                          color: __props.button,
                          label: _ctx.__("cancel"),
                          outline: "",
                          onClick: cancel
                        }, null, 8, ["color", "label"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode(_sfc_main$8),
                    createVNode(_sfc_main$2, { title: __props.title }, {
                      default: withCtx(() => [
                        __props.hasCancel ? (openBlock(), createBlock(_sfc_main$7, {
                          key: 0,
                          icon: unref(mdiClose),
                          color: "whiteDark",
                          "rounded-full": "",
                          small: "",
                          onClick: withModifiers(cancel, ["prevent"])
                        }, null, 8, ["icon", "onClick"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }, 8, ["title"]),
                    createVNode("div", { class: "space-y-3" }, [
                      renderSlot(_ctx.$slots, "default")
                    ])
                  ]),
                  _: 3
                }, 8, ["is-form"]), [
                  [vShow, value.value]
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(ssrRenderComponent(_sfc_main$5, mergeProps({ "is-form": __props.isForm }, _attrs), {
          footer: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$6, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$7, {
                      color: __props.button,
                      label: __props.buttonLabel,
                      onClick: confirm
                    }, null, _parent3, _scopeId2));
                    if (__props.hasCancel) {
                      _push3(ssrRenderComponent(_sfc_main$7, {
                        color: __props.button,
                        label: _ctx.__("cancel"),
                        outline: "",
                        onClick: cancel
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode(_sfc_main$7, {
                        color: __props.button,
                        label: __props.buttonLabel,
                        onClick: confirm
                      }, null, 8, ["color", "label"]),
                      __props.hasCancel ? (openBlock(), createBlock(_sfc_main$7, {
                        key: 0,
                        color: __props.button,
                        label: _ctx.__("cancel"),
                        outline: "",
                        onClick: cancel
                      }, null, 8, ["color", "label"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$6, null, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$7, {
                      color: __props.button,
                      label: __props.buttonLabel,
                      onClick: confirm
                    }, null, 8, ["color", "label"]),
                    __props.hasCancel ? (openBlock(), createBlock(_sfc_main$7, {
                      key: 0,
                      color: __props.button,
                      label: _ctx.__("cancel"),
                      outline: "",
                      onClick: cancel
                    }, null, 8, ["color", "label"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$8, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$2, { title: __props.title }, null, _parent2, _scopeId));
              _push2(`<div class="space-y-3"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              return [
                createVNode(_sfc_main$8),
                createVNode(_sfc_main$2, { title: __props.title }, null, 8, ["title"]),
                createVNode("div", { class: "space-y-3" }, [
                  renderSlot(_ctx.$slots, "default")
                ])
              ];
            }
          }),
          _: 3
        }, _parent));
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/CardBoxModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ActionConfirmComponent",
  __ssrInlineRender: true,
  emits: ["confirm"],
  setup(__props, { emit }) {
    let actionConfirm = inject("actionConfirm");
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(actionConfirm)) {
        _push(ssrRenderComponent(_sfc_main$1, mergeProps({
          "button-label": _ctx.__("continue"),
          "has-cancel": true,
          "model-value": unref(actionConfirm),
          button: "danger",
          title: _ctx.__("are_you_sure"),
          onCancel: ($event) => isRef(actionConfirm) ? actionConfirm.value = false : actionConfirm = false,
          onConfirm: ($event) => unref(emit)("confirm")
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/ActionConfirmComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main$3 as a,
  _sfc_main as b
};
