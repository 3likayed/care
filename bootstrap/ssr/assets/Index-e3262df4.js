import { computed, withCtx, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./SectionMain-10700a79.js";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./BreadCrumb-4683e004.js";
import { _ as _sfc_main$3 } from "./ModelList-e7955b96.js";
import "../app.js";
import "pinia";
import "ziggy-js";
import "pluralize";
/* empty css                                 */import "@mdi/js";
import "axios";
import "@tinymce/tinymce-vue";
import "primevue/dropdown/dropdown.esm.js";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "primevue/config/config.esm.js";
import "./ModelData-c2931371.js";
import "./SectionTitleLineWithButton-20201868.js";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    let model = "patient";
    let data = computed(() => usePage().props.data);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              items: [{ name: _ctx.__(`${_ctx.modelResolver(unref(model))}`), href: _ctx.route(`dashboard.${_ctx.modelResolver(unref(model))}.index`) }]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              data: unref(data),
              model: unref(model),
              "has-pagination": "",
              "has-search": ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                items: [{ name: _ctx.__(`${_ctx.modelResolver(unref(model))}`), href: _ctx.route(`dashboard.${_ctx.modelResolver(unref(model))}.index`) }]
              }, null, 8, ["items"]),
              createVNode(_sfc_main$3, {
                data: unref(data),
                model: unref(model),
                "has-pagination": "",
                "has-search": ""
              }, null, 8, ["data", "model"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Pages/Patients/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
