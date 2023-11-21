import { ref, computed, watch, mergeProps, useSSRContext, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, createTextVNode, createCommentVNode, toDisplayString, reactive, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { _ as _sfc_main$4 } from "./FormWithLabelField-2c980605.js";
import { usePage } from "@inertiajs/vue3";
import { a as _sfc_main$3, g as __ } from "../app.js";
import { mdiUpload, mdiTrashCanOutline, mdiCheckCircleOutline } from "@mdi/js";
import { isArray } from "chart.js/helpers";
const _sfc_main$2 = {
  __name: "FormFilePicker",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: [Object, File, Array],
      default: null
    },
    label: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: mdiUpload
    },
    accept: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: "info"
    },
    isRoundIcon: Boolean,
    name: String,
    isMultiple: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const root = ref(null);
    const files = ref(props.modelValue);
    const showFilename = computed(() => !props.isRoundIcon && files.value);
    const computedValue = computed(() => props.modelValue);
    watch(computedValue, (value) => {
      files.value = value;
      if (!value) {
        root.value.input.value = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex max-w-full justify-between gap-2 relative" }, _attrs))}><label class="self-center">`);
      _push(ssrRenderComponent(_sfc_main$3, {
        class: { "w-12 h-12": __props.isRoundIcon },
        color: __props.color,
        icon: __props.icon,
        "icon-size": __props.isRoundIcon ? 24 : void 0,
        label: __props.isRoundIcon ? null : __props.label,
        "rounded-full": __props.isRoundIcon,
        as: "a"
      }, null, _parent));
      _push(`<input${ssrRenderAttr("accept", __props.accept)}${ssrIncludeBooleanAttr(__props.isMultiple) ? " multiple" : ""} class="absolute top-0 start-0 w-full h-full opacity-0 outline-none cursor-pointer -z-1" type="file"${ssrRenderAttr("name", __props.name)}></label>`);
      if (showFilename.value && files.value.length) {
        _push(`<div class="overflow-x-auto px-4 py-2 bg-gray-100 dark:bg-slate-800 border-gray-200 dark:border-slate-700 border rounded"><!--[-->`);
        ssrRenderList(files.value, (file, key) => {
          _push(`<div class="flex justify-start"><div class="max-w-fit"><span>${ssrInterpolate(key + 1)}</span></div><div><span>-${ssrInterpolate(file.name)}</span></div></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/FormFilePicker.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "UploadMediaComponent",
  __ssrInlineRender: true,
  props: {
    modelValue: {
      type: [Object, File, Array, FileList],
      default: null
    },
    type: {
      type: String,
      default: "image"
    },
    errors: String,
    name: String,
    label: String,
    isMultiple: Boolean,
    actions: Object
  },
  emits: ["update:modelValue", "action"],
  setup(__props, { emit }) {
    const props = __props;
    usePage().props.locales;
    function handleAction(key) {
      emit("action", key);
    }
    const computedValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      }
    });
    let url = URL;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$4, mergeProps({
        cols: { lg: 1 },
        errors: _ctx.$page.props.errors[__props.name],
        label: __props.label ?? unref(__)("add_image")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="grid grid-cols-1 xl:grid-cols-2 justify-items-center items-center gap-10"${_scopeId}><!--[-->`);
            ssrRenderList(computedValue.value, (file, key) => {
              _push2(`<div class="my-auto"${_scopeId}>`);
              if (__props.type === "image") {
                _push2(`<img${ssrRenderAttr("alt", file.name)}${ssrRenderAttr("src", unref(url).createObjectURL(file))} class="h-auto rounded-lg self-center"${_scopeId}>`);
              } else if (__props.type === "video") {
                _push2(`<video class="h-auto rounded-lg self-center" controls${_scopeId}><source${ssrRenderAttr("src", unref(url).createObjectURL(file))} type="video/mp4"${_scopeId}> Your browser does not support the video tag. </video>`);
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.$page.props.errors[__props.name + "." + key]) {
                _push2(`<div class="text-xs text-red-500 dark:text-red-400 mt-1"${_scopeId}>${ssrInterpolate(_ctx.$page.props.errors[__props.name + "." + key])}</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="flex gap-5 items-center"${_scopeId}><p class="${ssrRenderClass([{ "w-3/4": __props.actions, "w-full": !__props.actions }, "mt-2 text-sm text-center break-all text-gray-500 dark:text-gray-400"])}"${_scopeId}>${ssrInterpolate(file.name)}</p>`);
              if (__props.actions) {
                _push2(`<div class="flex gap-2 justify-end w-1/4"${_scopeId}><!--[-->`);
                ssrRenderList(__props.actions, (action, actionKey) => {
                  _push2(ssrRenderComponent(_sfc_main$3, {
                    key: actionKey,
                    color: action.color,
                    icon: action.icon,
                    onClick: ($event) => handleAction(actionKey)
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(_sfc_main$2, {
              modelValue: computedValue.value,
              "onUpdate:modelValue": ($event) => computedValue.value = $event,
              accept: __props.type === "image" ? "image/*" : __props.type === "video" ? "video/*" : "",
              "is-multiple": __props.isMultiple,
              label: unref(__)("select"),
              name: __props.name
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode("div", { class: "grid grid-cols-1 xl:grid-cols-2 justify-items-center items-center gap-10" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(computedValue.value, (file, key) => {
                  return openBlock(), createBlock("div", {
                    key,
                    class: "my-auto"
                  }, [
                    __props.type === "image" ? (openBlock(), createBlock("img", {
                      key: 0,
                      alt: file.name,
                      src: unref(url).createObjectURL(file),
                      class: "h-auto rounded-lg self-center"
                    }, null, 8, ["alt", "src"])) : __props.type === "video" ? (openBlock(), createBlock("video", {
                      key: 1,
                      class: "h-auto rounded-lg self-center",
                      controls: ""
                    }, [
                      createVNode("source", {
                        src: unref(url).createObjectURL(file),
                        type: "video/mp4"
                      }, null, 8, ["src"]),
                      createTextVNode(" Your browser does not support the video tag. ")
                    ])) : createCommentVNode("", true),
                    _ctx.$page.props.errors[__props.name + "." + key] ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "text-xs text-red-500 dark:text-red-400 mt-1"
                    }, toDisplayString(_ctx.$page.props.errors[__props.name + "." + key]), 1)) : createCommentVNode("", true),
                    createVNode("div", { class: "flex gap-5 items-center" }, [
                      createVNode("p", {
                        class: [{ "w-3/4": __props.actions, "w-full": !__props.actions }, "mt-2 text-sm text-center break-all text-gray-500 dark:text-gray-400"]
                      }, toDisplayString(file.name), 3),
                      __props.actions ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "flex gap-2 justify-end w-1/4"
                      }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(__props.actions, (action, actionKey) => {
                          return openBlock(), createBlock(_sfc_main$3, {
                            key: actionKey,
                            color: action.color,
                            icon: action.icon,
                            onClick: ($event) => handleAction(actionKey)
                          }, null, 8, ["color", "icon", "onClick"]);
                        }), 128))
                      ])) : createCommentVNode("", true)
                    ])
                  ]);
                }), 128))
              ]),
              createVNode(_sfc_main$2, {
                modelValue: computedValue.value,
                "onUpdate:modelValue": ($event) => computedValue.value = $event,
                accept: __props.type === "image" ? "image/*" : __props.type === "video" ? "video/*" : "",
                "is-multiple": __props.isMultiple,
                label: unref(__)("select"),
                name: __props.name
              }, null, 8, ["modelValue", "onUpdate:modelValue", "accept", "is-multiple", "label", "name"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/UploadMediaComponent.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "ShowMediaComponent",
  __ssrInlineRender: true,
  props: {
    items: Object | Array,
    hasDelete: {
      type: Boolean,
      default: false
    },
    hasPrimary: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "image"
    },
    label: String
  },
  emits: ["destroy", "primary"],
  setup(__props, { emit }) {
    const props = __props;
    let media = isArray(props.items) ? props.items : [props.items];
    reactive({ status: null, message: null });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$4, mergeProps({
        cols: { lg: 1 },
        label: __props.label ?? unref(__)("the_image")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex flex-wrap justify-between gap-5"${_scopeId}>`);
            if (unref(media).length) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(media), (item, key) => {
                _push2(`<div class="md:basis-5/12"${_scopeId}><div class="grid my-auto content-between items-start h-full"${_scopeId}><div class="flex items-stretch h-full"${_scopeId}>`);
                if (__props.type === "image") {
                  _push2(`<img${ssrRenderAttr("alt", item.name)}${ssrRenderAttr("src", item.url)} class="h-auto rounded-lg self-center"${_scopeId}>`);
                } else if (__props.type === "video") {
                  _push2(`<video class="h-auto rounded-lg self-center" controls${_scopeId}><source${ssrRenderAttr("src", item.url)} type="video/mp4"${_scopeId}> Your browser does not support the video tag. </video>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div><div class="flex gap-5 justify-self-center items-center w-full"${_scopeId}><p class="mt-2 w-3/4 text-sm text-center break-all text-gray-500 dark:text-gray-400"${_scopeId}>${ssrInterpolate(item.name)}</p><div class="flex gap-1 items-end"${_scopeId}>`);
                if (__props.hasDelete) {
                  _push2(ssrRenderComponent(_sfc_main$3, {
                    icon: unref(mdiTrashCanOutline),
                    color: "danger",
                    onClick: ($event) => unref(emit)("destroy", item.id, key)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                if (__props.hasPrimary) {
                  _push2(ssrRenderComponent(_sfc_main$3, {
                    disabled: item.primary,
                    icon: unref(mdiCheckCircleOutline),
                    color: "success",
                    onClick: ($event) => unref(emit)("primary", item.id, key)
                  }, null, _parent2, _scopeId));
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div></div></div></div>`);
              });
              _push2(`<!--]-->`);
            } else {
              _push2(`<div${_scopeId}>${ssrInterpolate(unref(__)("no_data"))}</div>`);
            }
            _push2(`</div><div class="m-1 lg:m-2"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "flex flex-wrap justify-between gap-5" }, [
                unref(media).length ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(unref(media), (item, key) => {
                  return openBlock(), createBlock("div", {
                    key,
                    class: "md:basis-5/12"
                  }, [
                    createVNode("div", { class: "grid my-auto content-between items-start h-full" }, [
                      createVNode("div", { class: "flex items-stretch h-full" }, [
                        __props.type === "image" ? (openBlock(), createBlock("img", {
                          key: 0,
                          alt: item.name,
                          src: item.url,
                          class: "h-auto rounded-lg self-center"
                        }, null, 8, ["alt", "src"])) : __props.type === "video" ? (openBlock(), createBlock("video", {
                          key: 1,
                          class: "h-auto rounded-lg self-center",
                          controls: ""
                        }, [
                          createVNode("source", {
                            src: item.url,
                            type: "video/mp4"
                          }, null, 8, ["src"]),
                          createTextVNode(" Your browser does not support the video tag. ")
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "flex gap-5 justify-self-center items-center w-full" }, [
                        createVNode("p", { class: "mt-2 w-3/4 text-sm text-center break-all text-gray-500 dark:text-gray-400" }, toDisplayString(item.name), 1),
                        createVNode("div", { class: "flex gap-1 items-end" }, [
                          __props.hasDelete ? (openBlock(), createBlock(_sfc_main$3, {
                            key: 0,
                            icon: unref(mdiTrashCanOutline),
                            color: "danger",
                            onClick: ($event) => unref(emit)("destroy", item.id, key)
                          }, null, 8, ["icon", "onClick"])) : createCommentVNode("", true),
                          __props.hasPrimary ? (openBlock(), createBlock(_sfc_main$3, {
                            key: 1,
                            disabled: item.primary,
                            icon: unref(mdiCheckCircleOutline),
                            color: "success",
                            onClick: ($event) => unref(emit)("primary", item.id, key)
                          }, null, 8, ["disabled", "icon", "onClick"])) : createCommentVNode("", true)
                        ])
                      ])
                    ])
                  ]);
                }), 128)) : (openBlock(), createBlock("div", { key: 1 }, toDisplayString(unref(__)("no_data")), 1))
              ]),
              createVNode("div", { class: "m-1 lg:m-2" }, [
                renderSlot(_ctx.$slots, "default")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/ShowMediaComponent.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main$1 as _,
  _sfc_main as a
};
