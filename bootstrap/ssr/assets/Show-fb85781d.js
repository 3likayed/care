import { ref, provide, withCtx, unref, isRef, createVNode, openBlock, createBlock, createCommentVNode, withDirectives, vShow, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderStyle } from "vue/server-renderer";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$1, a as _sfc_main$6 } from "./SectionTitleLineWithButton-9da2ae80.js";
import { g as __, a as _sfc_main$7 } from "../app.js";
import { _ as _sfc_main$2 } from "./BreadCrumb-4683e004.js";
import { _ as _sfc_main$5 } from "./EditPage-45435585.js";
import { _ as _sfc_main$4 } from "./StepsComponent-202818d9.js";
import { _ as _sfc_main$3 } from "./CardBox-b517a69f.js";
import { _ as _sfc_main$8, a as _sfc_main$9 } from "./CreateSection-c522f6a2.js";
import { mdiAccountStarOutline, mdiPlusCircle } from "@mdi/js";
import "pinia";
import "ziggy-js";
/* empty css                                 */import "axios";
import "@tinymce/tinymce-vue";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "@fawmi/vue-google-maps";
import "./ActionConfirmComponent-f1d725a5.js";
import "./FormField-a416fc4e.js";
import "./FormWithLabelField-2c980605.js";
import "./MetaDataComponent-cac40315.js";
import "./ShowMediaComponent-9a2f83fc.js";
import "chart.js/helpers";
import "./TableOptions-a9345eb3.js";
import "./EditSection-f34775e9.js";
import "sortablejs-vue3";
const _sfc_main = {
  __name: "Show",
  __ssrInlineRender: true,
  setup(__props) {
    let steps = ref([__("data"), __("sections")]);
    let step = ref(0);
    let page = usePage().props.page.data;
    let breadcrumbItems = [{ name: __("pages"), href: route("dashboard.pages.index") }];
    breadcrumbItems.push({ name: page.title, href: route("dashboard.pages.show", page.id) });
    let showCreateSection = ref(false);
    provide("showCreateSection", showCreateSection);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
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
              _push2(ssrRenderComponent(_sfc_main$5, { "edited-page": unref(page) }, null, _parent2, _scopeId));
              _push2(`</section>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<section style="${ssrRenderStyle(unref(step) === 1 ? null : { display: "none" })}"${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$6, {
              icon: unref(mdiAccountStarOutline),
              title: unref(__)("sections"),
              main: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$7, {
                    icon: unref(mdiPlusCircle),
                    color: "success",
                    onClick: ($event) => isRef(showCreateSection) ? showCreateSection.value = true : showCreateSection = true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$7, {
                      icon: unref(mdiPlusCircle),
                      color: "success",
                      onClick: ($event) => isRef(showCreateSection) ? showCreateSection.value = true : showCreateSection = true
                    }, null, 8, ["icon", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, {
              "page-id": unref(page).id,
              sections: unref(page).sections
            }, null, _parent2, _scopeId));
            _push2(`</section>`);
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
                createVNode(_sfc_main$5, { "edited-page": unref(page) }, null, 8, ["edited-page"])
              ])) : createCommentVNode("", true),
              withDirectives(createVNode("section", null, [
                createVNode(_sfc_main$6, {
                  icon: unref(mdiAccountStarOutline),
                  title: unref(__)("sections"),
                  main: ""
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$7, {
                      icon: unref(mdiPlusCircle),
                      color: "success",
                      onClick: ($event) => isRef(showCreateSection) ? showCreateSection.value = true : showCreateSection = true
                    }, null, 8, ["icon", "onClick"])
                  ]),
                  _: 1
                }, 8, ["icon", "title"]),
                createVNode(_sfc_main$8, {
                  "page-id": unref(page).id,
                  sections: unref(page).sections
                }, null, 8, ["page-id", "sections"])
              ], 512), [
                [vShow, unref(step) === 1]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(showCreateSection)) {
        _push(ssrRenderComponent(_sfc_main$9, { page: unref(page) }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Pages/Posts/Show.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
