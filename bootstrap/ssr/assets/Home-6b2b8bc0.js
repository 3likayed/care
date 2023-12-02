import { ref, computed, watch, onMounted, useSSRContext, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { Head } from "@inertiajs/vue3";
import { d as _sfc_main$6, c as _sfc_main$7, k as _sfc_main$8, l as useMainStore } from "../app.js";
import { _ as _sfc_main$b } from "./SectionTitleLineWithButton-20201868.js";
import { _ as _sfc_main$9 } from "./SectionMain-10700a79.js";
import { mdiChevronUp, mdiChevronDown, mdiAlertCircleOutline, mdiCog, mdiChartTimelineVariant, mdiPostOutline, mdiChartLineStacked, mdiAccountStarOutline, mdiMessageOutline } from "@mdi/js";
import { _ as _sfc_main$5 } from "./CardBox-8f14b1bf.js";
import numeral from "numeral";
import { _ as _sfc_main$4 } from "./PillTag-36c661d1.js";
import { _ as _sfc_main$a } from "./BreadCrumb-4683e004.js";
import "pinia";
import "ziggy-js";
import "pluralize";
/* empty css                                 */import "axios";
import "@tinymce/tinymce-vue";
import "primevue/dropdown/dropdown.esm.js";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "primevue/config/config.esm.js";
const chartColors = {
  default: {
    primary: "#00D1B2",
    info: "#209CEE",
    danger: "#FF3860"
  }
};
const randomChartData = (n) => {
  const data = [];
  for (let i = 0; i < n; i++) {
    data.push(Math.round(Math.random() * 200));
  }
  return data;
};
const datasetObject = (color, points) => {
  return {
    fill: false,
    borderColor: chartColors.default[color],
    borderWidth: 2,
    borderDash: [],
    borderDashOffset: 0,
    pointBackgroundColor: chartColors.default[color],
    pointBorderColor: "rgba(255,255,255,0)",
    pointHoverBackgroundColor: chartColors.default[color],
    pointBorderWidth: 20,
    pointHoverRadius: 4,
    pointHoverBorderWidth: 15,
    pointRadius: 4,
    data: randomChartData(points),
    tension: 0.5,
    cubicInterpolationMode: "default"
  };
};
const sampleChartData = (points = 9) => {
  const labels = [];
  for (let i = 1; i <= points; i++) {
    labels.push(`0${i}`);
  }
  return {
    labels,
    datasets: [
      datasetObject("primary", points),
      datasetObject("info", points),
      datasetObject("danger", points)
    ]
  };
};
const _sfc_main$3 = {
  __name: "NumberDynamic",
  __ssrInlineRender: true,
  props: {
    prefix: {
      type: String,
      default: null
    },
    suffix: {
      type: String,
      default: null
    },
    value: {
      type: Number,
      default: 0
    },
    duration: {
      type: Number,
      default: 500
    }
  },
  setup(__props) {
    const props = __props;
    const newValue = ref(0);
    const newValueFormatted = computed(
      () => newValue.value < 1e3 ? newValue.value : numeral(newValue.value).format("0,0")
    );
    const value = computed(() => props.value);
    const grow = (m) => {
      const v = Math.ceil(newValue.value + m);
      if (v > value.value) {
        newValue.value = value.value;
        return false;
      }
      newValue.value = v;
      setTimeout(() => {
        grow(m);
      }, 25);
    };
    const growInit = () => {
      newValue.value = 0;
      grow(props.value / (props.duration / 25));
    };
    watch(value, () => {
      growInit();
    });
    onMounted(() => {
      growInit();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}>${ssrInterpolate(__props.prefix)}${ssrInterpolate(newValueFormatted.value)}${ssrInterpolate(__props.suffix)}</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/NumberDynamic.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "PillTagTrend",
  __ssrInlineRender: true,
  props: {
    trend: {
      type: String,
      required: true
    },
    trendType: {
      type: String,
      default: null
    },
    small: Boolean
  },
  setup(__props) {
    const props = __props;
    const trendStyle = computed(() => {
      if (props.trendType === "up") {
        return {
          icon: mdiChevronUp,
          style: "success"
        };
      }
      if (props.trendType === "down") {
        return {
          icon: mdiChevronDown,
          style: "danger"
        };
      }
      if (props.trendType === "alert") {
        return {
          icon: mdiAlertCircleOutline,
          style: "warning"
        };
      }
      return {
        style: "info"
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$4, mergeProps({
        color: trendStyle.value.style,
        icon: trendStyle.value.icon,
        label: __props.trend,
        small: __props.small
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/PillTagTrend.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "CardBoxWidget",
  __ssrInlineRender: true,
  props: {
    number: {
      type: Number,
      default: 0
    },
    icon: {
      type: String,
      default: null
    },
    prefix: {
      type: String,
      default: null
    },
    suffix: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: null
    },
    trend: {
      type: String,
      default: null
    },
    trendType: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$5, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.trend) {
              _push2(ssrRenderComponent(_sfc_main$6, {
                class: "mb-3",
                mobile: ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$2, {
                      trend: __props.trend,
                      "trend-type": __props.trendType,
                      small: ""
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$7, {
                      icon: unref(mdiCog),
                      color: "lightDark",
                      "icon-h": "h-4",
                      "icon-w": "w-4",
                      small: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$2, {
                        trend: __props.trend,
                        "trend-type": __props.trendType,
                        small: ""
                      }, null, 8, ["trend", "trend-type"]),
                      createVNode(_sfc_main$7, {
                        icon: unref(mdiCog),
                        color: "lightDark",
                        "icon-h": "h-4",
                        "icon-w": "w-4",
                        small: ""
                      }, null, 8, ["icon"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(_sfc_main$6, { mobile: "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}><h3 class="text-lg leading-tight text-gray-500 dark:text-slate-400"${_scopeId2}>${ssrInterpolate(__props.label)}</h3><h1 class="text-3xl leading-tight font-semibold"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, {
                    prefix: __props.prefix,
                    suffix: __props.suffix,
                    value: __props.number
                  }, null, _parent3, _scopeId2));
                  _push3(`</h1></div>`);
                  if (__props.icon) {
                    _push3(ssrRenderComponent(_sfc_main$8, {
                      class: __props.color,
                      path: __props.icon,
                      h: "h-16",
                      size: "48",
                      w: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("h3", { class: "text-lg leading-tight text-gray-500 dark:text-slate-400" }, toDisplayString(__props.label), 1),
                      createVNode("h1", { class: "text-3xl leading-tight font-semibold" }, [
                        createVNode(_sfc_main$3, {
                          prefix: __props.prefix,
                          suffix: __props.suffix,
                          value: __props.number
                        }, null, 8, ["prefix", "suffix", "value"])
                      ])
                    ]),
                    __props.icon ? (openBlock(), createBlock(_sfc_main$8, {
                      key: 0,
                      class: __props.color,
                      path: __props.icon,
                      h: "h-16",
                      size: "48",
                      w: ""
                    }, null, 8, ["class", "path"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              __props.trend ? (openBlock(), createBlock(_sfc_main$6, {
                key: 0,
                class: "mb-3",
                mobile: ""
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$2, {
                    trend: __props.trend,
                    "trend-type": __props.trendType,
                    small: ""
                  }, null, 8, ["trend", "trend-type"]),
                  createVNode(_sfc_main$7, {
                    icon: unref(mdiCog),
                    color: "lightDark",
                    "icon-h": "h-4",
                    "icon-w": "w-4",
                    small: ""
                  }, null, 8, ["icon"])
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(_sfc_main$6, { mobile: "" }, {
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("h3", { class: "text-lg leading-tight text-gray-500 dark:text-slate-400" }, toDisplayString(__props.label), 1),
                    createVNode("h1", { class: "text-3xl leading-tight font-semibold" }, [
                      createVNode(_sfc_main$3, {
                        prefix: __props.prefix,
                        suffix: __props.suffix,
                        value: __props.number
                      }, null, 8, ["prefix", "suffix", "value"])
                    ])
                  ]),
                  __props.icon ? (openBlock(), createBlock(_sfc_main$8, {
                    key: 0,
                    class: __props.color,
                    path: __props.icon,
                    h: "h-16",
                    size: "48",
                    w: ""
                  }, null, 8, ["class", "path"])) : createCommentVNode("", true)
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/CardBoxWidget.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    const chartData = ref(null);
    const fillChartData = () => {
      chartData.value = sampleChartData();
    };
    onMounted(() => {
      fillChartData();
    });
    const mainStore = useMainStore();
    computed(() => mainStore.clients.slice(0, 4));
    computed(() => mainStore.history);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(Head), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<title${_scopeId}>Dashboard</title>`);
          } else {
            return [
              createVNode("title", null, "Dashboard")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$9, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$a, null, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$b, {
              icon: unref(mdiChartTimelineVariant),
              main: "",
              title: "Overview"
            }, null, _parent2, _scopeId));
            _push2(`<div class="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6"${_scopeId}>`);
            if (_ctx.can("pages.show")) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                icon: unref(mdiPostOutline),
                label: _ctx.__("pages"),
                number: _ctx.$page.props.data.pages_count,
                color: "text-emerald-500"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.can("sections.show")) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                icon: unref(mdiChartLineStacked),
                label: _ctx.__("sections"),
                number: _ctx.$page.props.data.sections_count,
                color: "text-blue-300"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.can("employees.show")) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                icon: unref(mdiAccountStarOutline),
                label: _ctx.__("data"),
                number: _ctx.$page.props.data.employees_count,
                color: "text-red-500"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.can("contacts.show")) {
              _push2(ssrRenderComponent(_sfc_main$1, {
                icon: unref(mdiMessageOutline),
                label: _ctx.__("contacts"),
                number: _ctx.$page.props.data.contacts_count,
                color: "text-blue-500"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode(_sfc_main$a),
              createVNode(_sfc_main$b, {
                icon: unref(mdiChartTimelineVariant),
                main: "",
                title: "Overview"
              }, null, 8, ["icon"]),
              createVNode("div", { class: "grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6" }, [
                _ctx.can("pages.show") ? (openBlock(), createBlock(_sfc_main$1, {
                  key: 0,
                  icon: unref(mdiPostOutline),
                  label: _ctx.__("pages"),
                  number: _ctx.$page.props.data.pages_count,
                  color: "text-emerald-500"
                }, null, 8, ["icon", "label", "number"])) : createCommentVNode("", true),
                _ctx.can("sections.show") ? (openBlock(), createBlock(_sfc_main$1, {
                  key: 1,
                  icon: unref(mdiChartLineStacked),
                  label: _ctx.__("sections"),
                  number: _ctx.$page.props.data.sections_count,
                  color: "text-blue-300"
                }, null, 8, ["icon", "label", "number"])) : createCommentVNode("", true),
                _ctx.can("employees.show") ? (openBlock(), createBlock(_sfc_main$1, {
                  key: 2,
                  icon: unref(mdiAccountStarOutline),
                  label: _ctx.__("data"),
                  number: _ctx.$page.props.data.employees_count,
                  color: "text-red-500"
                }, null, 8, ["icon", "label", "number"])) : createCommentVNode("", true),
                _ctx.can("contacts.show") ? (openBlock(), createBlock(_sfc_main$1, {
                  key: 3,
                  icon: unref(mdiMessageOutline),
                  label: _ctx.__("contacts"),
                  number: _ctx.$page.props.data.contacts_count,
                  color: "text-blue-500"
                }, null, 8, ["icon", "label", "number"])) : createCommentVNode("", true)
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
