import { ref, reactive, watch, withCtx, unref, createVNode, isRef, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { _ as _sfc_main$5, a as _sfc_main$6 } from "./BaseTable-1d3c5358.js";
import { _ as _sfc_main$4 } from "./CardBox-8f14b1bf.js";
import { _ as _sfc_main$1 } from "./FormField-df0fbba2.js";
import { a as _sfc_main$2, c as _sfc_main$3 } from "../app.js";
import { S as Search } from "./index-45bef440.js";
import { M as Model } from "./index-d5896b37.js";
import { debounce } from "lodash";
import { mdiCalendarToday } from "@mdi/js";
import { Link } from "@inertiajs/vue3";
import "moment/moment.js";
import "./ModelData-c2931371.js";
import "./CardBoxModal-a656ae9f.js";
import "./FormValidationErrors-94aef0ec.js";
import "pinia";
import "ziggy-js";
import "pluralize";
/* empty css                                 */import "axios";
import "@tinymce/tinymce-vue";
import "primevue/dropdown/dropdown.esm.js";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "primevue/config/config.esm.js";
const _sfc_main = {
  __name: "ReservationList",
  __ssrInlineRender: true,
  props: {
    data: Object,
    pagination: Object | Boolean,
    hasSearch: Boolean
  },
  setup(__props) {
    let daysInterval = ref(null);
    let model = "reservation";
    let search = reactive(Search.getParameters());
    watch(search, debounce(function(value) {
      Search.start(value, model);
    }, 500));
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      if (__props.hasSearch) {
        _push(`<div class="grid md:grid-cols-3 w-full gap-x-5">`);
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
        _push(ssrRenderComponent(_sfc_main$1, {
          label: _ctx.__("start")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                modelValue: unref(search).start,
                "onUpdate:modelValue": ($event) => unref(search).start = $event,
                autocomplete: "start",
                name: "start",
                type: "date"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$2, {
                  modelValue: unref(search).start,
                  "onUpdate:modelValue": ($event) => unref(search).start = $event,
                  autocomplete: "start",
                  name: "start",
                  type: "date"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_sfc_main$1, {
          label: _ctx.__("end")
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                modelValue: unref(search).end,
                "onUpdate:modelValue": ($event) => unref(search).end = $event,
                autocomplete: "end",
                name: "end",
                type: "date"
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$2, {
                  modelValue: unref(search).end,
                  "onUpdate:modelValue": ($event) => unref(search).end = $event,
                  autocomplete: "end",
                  name: "end",
                  type: "date"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<div class="col-span-full">`);
        _push(ssrRenderComponent(_sfc_main$1, {
          label: _ctx.__("days"),
          "class-addon": "grid md:grid-cols-3 gap-5"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$2, {
                modelValue: unref(daysInterval),
                "onUpdate:modelValue": ($event) => isRef(daysInterval) ? daysInterval.value = $event : daysInterval = $event,
                autocomplete: "search",
                name: "search"
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                icon: unref(mdiCalendarToday),
                label: _ctx.__("next"),
                color: "success",
                onClick: ($event) => [unref(search).start, unref(search).end] = unref(Search).dateInterval({ interval: unref(daysInterval) })
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_sfc_main$3, {
                icon: unref(mdiCalendarToday),
                label: _ctx.__("previous"),
                color: "danger",
                onClick: ($event) => [unref(search).start, unref(search).end] = unref(Search).dateInterval({ interval: unref(daysInterval), mode: -1 })
              }, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_sfc_main$2, {
                  modelValue: unref(daysInterval),
                  "onUpdate:modelValue": ($event) => isRef(daysInterval) ? daysInterval.value = $event : daysInterval = $event,
                  autocomplete: "search",
                  name: "search"
                }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                createVNode(_sfc_main$3, {
                  icon: unref(mdiCalendarToday),
                  label: _ctx.__("next"),
                  color: "success",
                  onClick: ($event) => [unref(search).start, unref(search).end] = unref(Search).dateInterval({ interval: unref(daysInterval) })
                }, null, 8, ["icon", "label", "onClick"]),
                createVNode(_sfc_main$3, {
                  icon: unref(mdiCalendarToday),
                  label: _ctx.__("previous"),
                  color: "danger",
                  onClick: ($event) => [unref(search).start, unref(search).end] = unref(Search).dateInterval({ interval: unref(daysInterval), mode: -1 })
                }, null, 8, ["icon", "label", "onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_sfc_main$4, { "has-table": "" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$5, {
              headers: ["#", _ctx.__("patient"), _ctx.__("reservation_type"), _ctx.__("price"), _ctx.__("date"), _ctx.__("created_at")],
              pagination: __props.pagination
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(__props.data, (item, key) => {
                    _push3(`<tr class="rtl:flex-row-reverse"${_scopeId2}><td data-label="# "${_scopeId2}>${ssrInterpolate(key + 1)}</td><td${ssrRenderAttr("data-label", _ctx.__("patient"))} class="border-b-0 before:hidden justify-center mx-auto"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Link), {
                      href: unref(Model).showLink("patient", item.patient.id)
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(item.patient.name)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.patient.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                    _push3(`</td><td${ssrRenderAttr("data-label", _ctx.__("reservation_type"))}${_scopeId2}>${ssrInterpolate(item.reservation_type.name)}</td><td${ssrRenderAttr("data-label", _ctx.__("price"))}${_scopeId2}>${ssrInterpolate(item.price)}</td><td${ssrRenderAttr("data-label", _ctx.__("date"))}${_scopeId2}>${ssrInterpolate(item.date)}</td><td${ssrRenderAttr("data-label", _ctx.__("created_at"))}${_scopeId2}>${ssrInterpolate(item.created_at)}</td><td${ssrRenderAttr("data-label", _ctx.__("options"))}${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$6, {
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
                          "data-label": _ctx.__("patient"),
                          class: "border-b-0 before:hidden justify-center mx-auto"
                        }, [
                          createVNode(unref(Link), {
                            href: unref(Model).showLink("patient", item.patient.id)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(item.patient.name), 1)
                            ]),
                            _: 2
                          }, 1032, ["href"])
                        ], 8, ["data-label"]),
                        createVNode("td", {
                          "data-label": _ctx.__("reservation_type")
                        }, toDisplayString(item.reservation_type.name), 9, ["data-label"]),
                        createVNode("td", {
                          "data-label": _ctx.__("price")
                        }, toDisplayString(item.price), 9, ["data-label"]),
                        createVNode("td", {
                          "data-label": _ctx.__("date")
                        }, toDisplayString(item.date), 9, ["data-label"]),
                        createVNode("td", {
                          "data-label": _ctx.__("created_at")
                        }, toDisplayString(item.created_at), 9, ["data-label"]),
                        createVNode("td", {
                          "data-label": _ctx.__("options")
                        }, [
                          createVNode(_sfc_main$6, {
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
              createVNode(_sfc_main$5, {
                headers: ["#", _ctx.__("patient"), _ctx.__("reservation_type"), _ctx.__("price"), _ctx.__("date"), _ctx.__("created_at")],
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
                        "data-label": _ctx.__("patient"),
                        class: "border-b-0 before:hidden justify-center mx-auto"
                      }, [
                        createVNode(unref(Link), {
                          href: unref(Model).showLink("patient", item.patient.id)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.patient.name), 1)
                          ]),
                          _: 2
                        }, 1032, ["href"])
                      ], 8, ["data-label"]),
                      createVNode("td", {
                        "data-label": _ctx.__("reservation_type")
                      }, toDisplayString(item.reservation_type.name), 9, ["data-label"]),
                      createVNode("td", {
                        "data-label": _ctx.__("price")
                      }, toDisplayString(item.price), 9, ["data-label"]),
                      createVNode("td", {
                        "data-label": _ctx.__("date")
                      }, toDisplayString(item.date), 9, ["data-label"]),
                      createVNode("td", {
                        "data-label": _ctx.__("created_at")
                      }, toDisplayString(item.created_at), 9, ["data-label"]),
                      createVNode("td", {
                        "data-label": _ctx.__("options")
                      }, [
                        createVNode(_sfc_main$6, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Models/Reservation/ReservationList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
