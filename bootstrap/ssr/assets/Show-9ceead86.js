import { ref, provide, withCtx, unref, isRef, createVNode, openBlock, createBlock, createCommentVNode, withDirectives, vShow, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$1 } from "./SectionMain-10700a79.js";
import { g as __ } from "../app.js";
import { _ as _sfc_main$2 } from "./BreadCrumb-4683e004.js";
import { _ as _sfc_main$4 } from "./StepsComponent-8cf750bb.js";
import { _ as _sfc_main$3 } from "./CardBox-8f14b1bf.js";
import { _ as _sfc_main$5 } from "./ModelData-c2931371.js";
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
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  setup(__props) {
    let steps = ref([__("data"), __("reservations")]);
    let step = ref(0);
    let data = usePage().props.data;
    let model = "patient";
    let breadcrumbItems = [{ name: __(modelResolver(model)), href: route(`dashboard.${modelResolver(model)}.index`) }];
    breadcrumbItems.push({ name: data.name, href: route(`dashboard.${modelResolver(model)}.show`, data.id) });
    let showCreateSection = ref(false);
    provide("showCreateSection", showCreateSection);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$1, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, { items: unref(breadcrumbItems) }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, { class: "mb-4" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    modelValue: unref(step),
                    "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : step = $event,
                    steps: unref(steps)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4, {
                      modelValue: unref(step),
                      "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : step = $event,
                      steps: unref(steps)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "steps"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (unref(step) === 0) {
              _push2(`<section${_scopeId}>`);
              _push2(ssrRenderComponent(_sfc_main$5, {
                data: unref(data),
                "is-modal": false,
                model: unref(model),
                operation: "edit"
              }, null, _parent2, _scopeId));
              _push2(`</section>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<section style="${ssrRenderStyle(unref(step) === 1 ? null : { display: "none" })}"${_scopeId}> reservations </section>`);
          } else {
            return [
              createVNode(_sfc_main$2, { items: unref(breadcrumbItems) }, null, 8, ["items"]),
              createVNode(_sfc_main$3, { class: "mb-4" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$4, {
                    modelValue: unref(step),
                    "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : step = $event,
                    steps: unref(steps)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "steps"])
                ]),
                _: 1
              }),
              unref(step) === 0 ? (openBlock(), createBlock("section", { key: 0 }, [
                createVNode(_sfc_main$5, {
                  data: unref(data),
                  "is-modal": false,
                  model: unref(model),
                  operation: "edit"
                }, null, 8, ["data", "model"])
              ])) : createCommentVNode("", true),
              withDirectives(createVNode("section", null, " reservations ", 512), [
                [vShow, unref(step) === 1]
              ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Pages/Employees/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
