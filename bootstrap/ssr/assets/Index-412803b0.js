import { ref, unref, withCtx, isRef, openBlock, createBlock, createCommentVNode, useSSRContext, computed, createVNode } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { _ as _sfc_main$6 } from "./SectionMain-10700a79.js";
import { useForm, usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$7 } from "./BreadCrumb-4683e004.js";
import { _ as _sfc_main$8 } from "./ModelList-e7955b96.js";
import { mdiLockAlertOutline, mdiPlusCircle } from "@mdi/js";
import { m as modelResolver, c as _sfc_main$3 } from "../app.js";
import { _ as _sfc_main$2 } from "./SectionTitleLineWithButton-20201868.js";
import { _ as _sfc_main$5 } from "./ModelData-c2931371.js";
import { _ as _sfc_main$4 } from "./FormField-df0fbba2.js";
import "pinia";
import "ziggy-js";
import "pluralize";
/* empty css                                 */import "axios";
import "@tinymce/tinymce-vue";
import "primevue/dropdown/dropdown.esm.js";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "primevue/config/config.esm.js";
const _sfc_main$1 = {
  __name: "ModelDynamicList",
  __ssrInlineRender: true,
  props: {
    data: Object,
    addonData: {
      type: Object,
      default: {}
    },
    model: String,
    hasPagination: Boolean,
    hasSearch: Boolean,
    hasCreate: {
      type: Boolean,
      default: Boolean
    }
  },
  setup(__props) {
    let props = __props;
    let showCreate = ref(false);
    let formFields = props.data.fields.reduce((result, field) => {
      result[field.name] = field.value;
      return result;
    }, {});
    let form = useForm(formFields);
    console.log(form);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$2, {
        icon: unref(mdiLockAlertOutline),
        title: _ctx.__(unref(modelResolver)(__props.model)),
        main: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.can(`${unref(modelResolver)(__props.model)}.create`)) {
              _push2(ssrRenderComponent(_sfc_main$3, {
                icon: unref(mdiPlusCircle),
                color: "success",
                onClick: ($event) => isRef(showCreate) ? showCreate.value = true : showCreate = true
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.can(`${unref(modelResolver)(__props.model)}.create`) ? (openBlock(), createBlock(_sfc_main$3, {
                key: 0,
                icon: unref(mdiPlusCircle),
                color: "success",
                onClick: ($event) => isRef(showCreate) ? showCreate.value = true : showCreate = true
              }, null, 8, ["icon", "onClick"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(_ctx.fields, (field, key) => {
        _push(ssrRenderComponent(_sfc_main$4, {
          errors: unref(form).errors.name,
          label: _ctx.__("name"),
          "label-for": "name"
        }, null, _parent));
      });
      _push(`<!--]-->`);
      ssrRenderSlot(_ctx.$slots, "create", {}, () => {
        if (unref(showCreate)) {
          _push(ssrRenderComponent(_sfc_main$5, {
            model: __props.model,
            show: unref(showCreate),
            operation: "create",
            onCancel: ($event) => isRef(showCreate) ? showCreate.value = false : showCreate = false
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Models/ModelDynamicList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    let model = "employee";
    let data = computed(() => usePage().props.data);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$6, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$7, {
              items: [{ name: _ctx.__(`${_ctx.modelResolver(unref(model))}`), href: _ctx.route(`dashboard.${_ctx.modelResolver(unref(model))}.index`) }]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, {
              data: unref(data),
              model: unref(model),
              "has-pagination": "",
              "has-search": ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$7, {
                items: [{ name: _ctx.__(`${_ctx.modelResolver(unref(model))}`), href: _ctx.route(`dashboard.${_ctx.modelResolver(unref(model))}.index`) }]
              }, null, 8, ["items"]),
              createVNode(_sfc_main$8, {
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
      _push(ssrRenderComponent(_sfc_main$1, { data: [{ name: "title", value: "ali" }, { name: "price", value: 159 }] }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Pages/Employees/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
