import { mergeProps, useSSRContext, computed, withCtx, createVNode, openBlock, createBlock, createCommentVNode, unref, withModifiers, renderSlot, withDirectives, vShow } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
import { mdiClose } from "@mdi/js";
import { x as _sfc_main$2, e as _sfc_main$4, c as _sfc_main$5 } from "../app.js";
import { _ as _sfc_main$3 } from "./CardBox-8f14b1bf.js";
import { _ as _sfc_main$6 } from "./FormValidationErrors-94aef0ec.js";
import { usePage } from "@inertiajs/vue3";
const _sfc_main$1 = {
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/CardBoxComponentTitle.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
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
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emit = __emit;
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
        _push(ssrRenderComponent(_sfc_main$2, mergeProps({
          style: value.value ? null : { display: "none" },
          onOverlayClick: cancel
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$3, {
                style: value.value ? null : { display: "none" },
                "is-form": __props.isForm,
                class: "shadow-lg max-h-screen-menu w-11/12 md:w-4/5 lg:w-2/5 xl:w-8/12 z-50 overflow-y-auto",
                "is-modal": "is-modal"
              }, {
                footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$4, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$5, {
                            color: __props.button,
                            label: __props.buttonLabel,
                            onClick: confirm
                          }, null, _parent4, _scopeId3));
                          if (__props.hasCancel) {
                            _push4(ssrRenderComponent(_sfc_main$5, {
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
                            createVNode(_sfc_main$5, {
                              color: __props.button,
                              label: __props.buttonLabel,
                              onClick: confirm
                            }, null, 8, ["color", "label"]),
                            __props.hasCancel ? (openBlock(), createBlock(_sfc_main$5, {
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
                      createVNode(_sfc_main$4, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$5, {
                            color: __props.button,
                            label: __props.buttonLabel,
                            onClick: confirm
                          }, null, 8, ["color", "label"]),
                          __props.hasCancel ? (openBlock(), createBlock(_sfc_main$5, {
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
                    _push3(ssrRenderComponent(_sfc_main$6, null, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$1, { title: __props.title }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (__props.hasCancel) {
                            _push4(ssrRenderComponent(_sfc_main$5, {
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
                            __props.hasCancel ? (openBlock(), createBlock(_sfc_main$5, {
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
                      createVNode(_sfc_main$6),
                      createVNode(_sfc_main$1, { title: __props.title }, {
                        default: withCtx(() => [
                          __props.hasCancel ? (openBlock(), createBlock(_sfc_main$5, {
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
                withDirectives(createVNode(_sfc_main$3, {
                  "is-form": __props.isForm,
                  class: "shadow-lg max-h-screen-menu w-11/12 md:w-4/5 lg:w-2/5 xl:w-8/12 z-50 overflow-y-auto",
                  "is-modal": "is-modal"
                }, {
                  footer: withCtx(() => [
                    createVNode(_sfc_main$4, null, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$5, {
                          color: __props.button,
                          label: __props.buttonLabel,
                          onClick: confirm
                        }, null, 8, ["color", "label"]),
                        __props.hasCancel ? (openBlock(), createBlock(_sfc_main$5, {
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
                    createVNode(_sfc_main$6),
                    createVNode(_sfc_main$1, { title: __props.title }, {
                      default: withCtx(() => [
                        __props.hasCancel ? (openBlock(), createBlock(_sfc_main$5, {
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
        _push(ssrRenderComponent(_sfc_main$3, mergeProps({ "is-form": __props.isForm }, _attrs), {
          footer: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$4, null, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      color: __props.button,
                      label: __props.buttonLabel,
                      onClick: confirm
                    }, null, _parent3, _scopeId2));
                    if (__props.hasCancel) {
                      _push3(ssrRenderComponent(_sfc_main$5, {
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
                      createVNode(_sfc_main$5, {
                        color: __props.button,
                        label: __props.buttonLabel,
                        onClick: confirm
                      }, null, 8, ["color", "label"]),
                      __props.hasCancel ? (openBlock(), createBlock(_sfc_main$5, {
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
                createVNode(_sfc_main$4, null, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$5, {
                      color: __props.button,
                      label: __props.buttonLabel,
                      onClick: confirm
                    }, null, 8, ["color", "label"]),
                    __props.hasCancel ? (openBlock(), createBlock(_sfc_main$5, {
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
              _push2(ssrRenderComponent(_sfc_main$6, null, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$1, { title: __props.title }, null, _parent2, _scopeId));
              _push2(`<div class="space-y-3"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
            } else {
              return [
                createVNode(_sfc_main$6),
                createVNode(_sfc_main$1, { title: __props.title }, null, 8, ["title"]),
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/CardBoxModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
