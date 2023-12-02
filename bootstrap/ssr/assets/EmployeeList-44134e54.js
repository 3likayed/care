import { reactive, watch, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$4, a as _sfc_main$5 } from "./BaseTable-1d3c5358.js";
import { _ as _sfc_main$3 } from "./CardBox-8f14b1bf.js";
import { _ as _sfc_main$1 } from "./FormField-df0fbba2.js";
import { a as _sfc_main$2 } from "../app.js";
import { S as Search } from "./index-45bef440.js";
import "@inertiajs/vue3";
import "ziggy-js";
import "pluralize";
import { debounce } from "lodash";
import "@mdi/js";
import "moment/moment.js";
import "./index-d5896b37.js";
import "./ModelData-c2931371.js";
import "./CardBoxModal-a656ae9f.js";
import "./FormValidationErrors-94aef0ec.js";
import "pinia";
/* empty css                                 */import "axios";
import "@tinymce/tinymce-vue";
import "primevue/dropdown/dropdown.esm.js";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "primevue/config/config.esm.js";
const _sfc_main = {
  __name: "EmployeeList",
  __ssrInlineRender: true,
  props: {
    data: Object,
    pagination: Object | Boolean,
    hasSearch: Boolean
  },
  setup(__props) {
    let model = "employee";
    let search = reactive(Search.getParameters());
    watch(search, debounce(function(value) {
      Search.start(value, model);
    }, 500));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (__props.hasSearch) {
        _push(`<div class="">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          label: _ctx.__("search")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                modelValue: unref(search).search,
                "onUpdate:modelValue": ($event) => unref(search).search = $event,
                autocomplete: "search",
                name: "search"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$2, {
                  modelValue: unref(search).search,
                  "onUpdate:modelValue": ($event) => unref(search).search = $event,
                  autocomplete: "search",
                  name: "search"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$3, { "has-table": "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$4, {
              headers: ["#", _ctx.__("name"), _ctx.__("phone"), _ctx.__("address"), _ctx.__("created_at")],
              pagination: __props.pagination
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.data, (item, key) => {
                    _push3(`<tr class="rtl:flex-row-reverse"${_scopeId2}><td data-label="# "${_scopeId2}>${ssrInterpolate(key + 1)}</td><td${ssrRenderAttr("data-label", _ctx.__("name"))} class="border-b-0 before:hidden justify-center mx-auto"${_scopeId2}>${ssrInterpolate(item.name)}</td><td${ssrRenderAttr("data-label", _ctx.__("phone"))} class=""${_scopeId2}><ul class="list-decimal lg:ms-2 space-y-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(item.phone, (phone, key2) => {
                      _push3(`<li class="w-min"${_scopeId2}>${ssrInterpolate(phone)}</li>`);
                    });
                    _push3(`<!--]--></ul></td><td${ssrRenderAttr("data-label", _ctx.__("phone"))}${_scopeId2}><ul class="list-decimal lg:ms-2 space-y-2"${_scopeId2}><!--[-->`);
                    ssrRenderList(item.address, (address, key2) => {
                      _push3(`<li${_scopeId2}>${ssrInterpolate(address)}</li>`);
                    });
                    _push3(`<!--]--></ul></td><td${ssrRenderAttr("data-label", _ctx.__("created_at"))}${_scopeId2}>${ssrInterpolate(item.created_at)}</td><td${ssrRenderAttr("data-label", _ctx.__("options"))}${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      data: item,
                      model: unref(model)
                    }, null, _parent3, _scopeId2));
                    _push3(`</td></tr>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.data, (item, key) => {
                      return openBlock(), createBlock("tr", {
                        key,
                        class: "rtl:flex-row-reverse"
                      }, [
                        createVNode("td", { "data-label": "# " }, toDisplayString(key + 1), 1),
                        createVNode("td", {
                          "data-label": _ctx.__("name"),
                          class: "border-b-0 before:hidden justify-center mx-auto"
                        }, toDisplayString(item.name), 9, ["data-label"]),
                        createVNode("td", {
                          "data-label": _ctx.__("phone"),
                          class: ""
                        }, [
                          createVNode("ul", { class: "list-decimal lg:ms-2 space-y-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.phone, (phone, key2) => {
                              return openBlock(), createBlock("li", { class: "w-min" }, toDisplayString(phone), 1);
                            }), 256))
                          ])
                        ], 8, ["data-label"]),
                        createVNode("td", {
                          "data-label": _ctx.__("phone")
                        }, [
                          createVNode("ul", { class: "list-decimal lg:ms-2 space-y-2" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item.address, (address, key2) => {
                              return openBlock(), createBlock("li", null, toDisplayString(address), 1);
                            }), 256))
                          ])
                        ], 8, ["data-label"]),
                        createVNode("td", {
                          "data-label": _ctx.__("created_at")
                        }, toDisplayString(item.created_at), 9, ["data-label"]),
                        createVNode("td", {
                          "data-label": _ctx.__("options")
                        }, [
                          createVNode(_sfc_main$5, {
                            data: item,
                            model: unref(model)
                          }, null, 8, ["data", "model"])
                        ], 8, ["data-label"])
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$4, {
                headers: ["#", _ctx.__("name"), _ctx.__("phone"), _ctx.__("address"), _ctx.__("created_at")],
                pagination: __props.pagination
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.data, (item, key) => {
                    return openBlock(), createBlock("tr", {
                      key,
                      class: "rtl:flex-row-reverse"
                    }, [
                      createVNode("td", { "data-label": "# " }, toDisplayString(key + 1), 1),
                      createVNode("td", {
                        "data-label": _ctx.__("name"),
                        class: "border-b-0 before:hidden justify-center mx-auto"
                      }, toDisplayString(item.name), 9, ["data-label"]),
                      createVNode("td", {
                        "data-label": _ctx.__("phone"),
                        class: ""
                      }, [
                        createVNode("ul", { class: "list-decimal lg:ms-2 space-y-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(item.phone, (phone, key2) => {
                            return openBlock(), createBlock("li", { class: "w-min" }, toDisplayString(phone), 1);
                          }), 256))
                        ])
                      ], 8, ["data-label"]),
                      createVNode("td", {
                        "data-label": _ctx.__("phone")
                      }, [
                        createVNode("ul", { class: "list-decimal lg:ms-2 space-y-2" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(item.address, (address, key2) => {
                            return openBlock(), createBlock("li", null, toDisplayString(address), 1);
                          }), 256))
                        ])
                      ], 8, ["data-label"]),
                      createVNode("td", {
                        "data-label": _ctx.__("created_at")
                      }, toDisplayString(item.created_at), 9, ["data-label"]),
                      createVNode("td", {
                        "data-label": _ctx.__("options")
                      }, [
                        createVNode(_sfc_main$5, {
                          data: item,
                          model: unref(model)
                        }, null, 8, ["data", "model"])
                      ], 8, ["data-label"])
                    ]);
                  }), 128))
                ]),
                _: 1
              }, 8, ["headers", "pagination"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Models/Employee/EmployeeList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
