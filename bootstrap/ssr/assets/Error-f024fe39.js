import { withCtx, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$2 } from "./SectionFullScreen-542a7658.js";
import { _ as _sfc_main$3 } from "./CardBox-8f14b1bf.js";
import { _ as _sfc_main$1, e as _sfc_main$4, c as _sfc_main$5 } from "../app.js";
import "pinia";
import "@inertiajs/vue3";
import "ziggy-js";
import "pluralize";
/* empty css                                 */import "@mdi/js";
import "axios";
import "@tinymce/tinymce-vue";
import "primevue/dropdown/dropdown.esm.js";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "primevue/config/config.esm.js";
const _sfc_main = {
  __name: "Error",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, { bg: "pinkRed" }, {
              default: withCtx(({ cardClass }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$3, { class: cardClass }, {
                    footer: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$4, null, {
                          default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_sfc_main$5, {
                                color: "danger",
                                label: "Done",
                                to: "/dashboard"
                              }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_sfc_main$5, {
                                  color: "danger",
                                  label: "Done",
                                  to: "/dashboard"
                                })
                              ];
                            }
                          }),
                          _: 2
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$4, null, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5, {
                                color: "danger",
                                label: "Done",
                                to: "/dashboard"
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="space-y-3"${_scopeId3}><h1 class="text-2xl"${_scopeId3}> Unhandled exception </h1><p${_scopeId3}>An Error Occurred</p></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "space-y-3" }, [
                            createVNode("h1", { class: "text-2xl" }, " Unhandled exception "),
                            createVNode("p", null, "An Error Occurred")
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$3, { class: cardClass }, {
                      footer: withCtx(() => [
                        createVNode(_sfc_main$4, null, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$5, {
                              color: "danger",
                              label: "Done",
                              to: "/dashboard"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "space-y-3" }, [
                          createVNode("h1", { class: "text-2xl" }, " Unhandled exception "),
                          createVNode("p", null, "An Error Occurred")
                        ])
                      ]),
                      _: 2
                    }, 1032, ["class"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, { bg: "pinkRed" }, {
                default: withCtx(({ cardClass }) => [
                  createVNode(_sfc_main$3, { class: cardClass }, {
                    footer: withCtx(() => [
                      createVNode(_sfc_main$4, null, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$5, {
                            color: "danger",
                            label: "Done",
                            to: "/dashboard"
                          })
                        ]),
                        _: 1
                      })
                    ]),
                    default: withCtx(() => [
                      createVNode("div", { class: "space-y-3" }, [
                        createVNode("h1", { class: "text-2xl" }, " Unhandled exception "),
                        createVNode("p", null, "An Error Occurred")
                      ])
                    ]),
                    _: 2
                  }, 1032, ["class"])
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Pages/Error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
