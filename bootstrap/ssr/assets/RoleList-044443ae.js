import { ref, mergeProps, withCtx, unref, openBlock, createBlock, Fragment, renderList, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$2, a as _sfc_main$3 } from "./BaseTable-1d3c5358.js";
import { _ as _sfc_main$1 } from "./CardBox-8f14b1bf.js";
import "@mdi/js";
import "../app.js";
import "pinia";
import "@inertiajs/vue3";
import "ziggy-js";
import "pluralize";
/* empty css                                 */import "axios";
import "@tinymce/tinymce-vue";
import "primevue/dropdown/dropdown.esm.js";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "primevue/config/config.esm.js";
import "moment/moment.js";
import "./index-d5896b37.js";
import "./ModelData-c2931371.js";
import "./CardBoxModal-a656ae9f.js";
import "./FormValidationErrors-94aef0ec.js";
const _sfc_main = {
  __name: "RoleList",
  __ssrInlineRender: true,
  props: {
    data: Object,
    hasPagination: Boolean,
    hasSearch: Boolean
  },
  setup(__props) {
    ref(false);
    let model = "Role";
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, mergeProps({ "has-table": "" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              headers: ["#", _ctx.__("name"), _ctx.__("created_at")]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.data, (item, key) => {
                    _push3(`<tr class="rtl:flex-row-reverse"${_scopeId2}><td data-label="# "${_scopeId2}>${ssrInterpolate(key + 1)}</td><td${ssrRenderAttr("data-label", _ctx.__("name"))} class="border-b-0 lg:w-6 before:hidden w-24 mx-auto"${_scopeId2}>${ssrInterpolate(item.name)}</td><td${ssrRenderAttr("data-label", _ctx.__("created_at"))}${_scopeId2}>${ssrInterpolate(item.created_at)}</td><td${ssrRenderAttr("data-label", _ctx.__("options"))}${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      data: item,
                      "has-show": false,
                      model: unref(model)
                    }, null, _parent3, _scopeId2));
                    _push3(`</td></tr>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(__props.data, (item, key) => {
                      return openBlock(), createBlock("tr", { class: "rtl:flex-row-reverse" }, [
                        createVNode("td", { "data-label": "# " }, toDisplayString(key + 1), 1),
                        createVNode("td", {
                          "data-label": _ctx.__("name"),
                          class: "border-b-0 lg:w-6 before:hidden w-24 mx-auto"
                        }, toDisplayString(item.name), 9, ["data-label"]),
                        createVNode("td", {
                          "data-label": _ctx.__("created_at")
                        }, toDisplayString(item.created_at), 9, ["data-label"]),
                        createVNode("td", {
                          "data-label": _ctx.__("options")
                        }, [
                          createVNode(_sfc_main$3, {
                            data: item,
                            "has-show": false,
                            model: unref(model)
                          }, null, 8, ["data", "model"])
                        ], 8, ["data-label"])
                      ]);
                    }), 256))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                headers: ["#", _ctx.__("name"), _ctx.__("created_at")]
              }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(__props.data, (item, key) => {
                    return openBlock(), createBlock("tr", { class: "rtl:flex-row-reverse" }, [
                      createVNode("td", { "data-label": "# " }, toDisplayString(key + 1), 1),
                      createVNode("td", {
                        "data-label": _ctx.__("name"),
                        class: "border-b-0 lg:w-6 before:hidden w-24 mx-auto"
                      }, toDisplayString(item.name), 9, ["data-label"]),
                      createVNode("td", {
                        "data-label": _ctx.__("created_at")
                      }, toDisplayString(item.created_at), 9, ["data-label"]),
                      createVNode("td", {
                        "data-label": _ctx.__("options")
                      }, [
                        createVNode(_sfc_main$3, {
                          data: item,
                          "has-show": false,
                          model: unref(model)
                        }, null, 8, ["data", "model"])
                      ], 8, ["data-label"])
                    ]);
                  }), 256))
                ]),
                _: 1
              }, 8, ["headers"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Models/Role/RolesList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
