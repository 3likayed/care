import { ref, provide, withCtx, unref, isRef, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent } from "vue/server-renderer";
import { _ as _sfc_main$1, a as _sfc_main$3 } from "./SectionTitleLineWithButton-9da2ae80.js";
import { mdiAccountStarOutline, mdiPlusCircle } from "@mdi/js";
import { a as _sfc_main$4 } from "../app.js";
import { _ as _sfc_main$5, a as _sfc_main$6 } from "./PostsList-fdc1ea99.js";
import { usePage } from "@inertiajs/vue3";
import { _ as _sfc_main$2 } from "./BreadCrumb-4683e004.js";
import "pinia";
import "ziggy-js";
/* empty css                                 */import "axios";
import "@tinymce/tinymce-vue";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "@fawmi/vue-google-maps";
import "./ActionConfirmComponent-f1d725a5.js";
import "./CardBox-b517a69f.js";
import "./FormField-a416fc4e.js";
import "./FormWithLabelField-2c980605.js";
import "./StepsComponent-202818d9.js";
import "./ShowMediaComponent-9a2f83fc.js";
import "chart.js/helpers";
import "./TableOptions-a9345eb3.js";
import "sortablejs-vue3";
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    let posts = usePage().props.posts.data;
    let showCreatePost = ref(false);
    provide("showCreatePost", showCreatePost);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$2, {
              items: [{ name: _ctx.__("posts"), href: _ctx.route("dashboard.posts.index") }]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$3, {
              icon: unref(mdiAccountStarOutline),
              title: _ctx.__("posts"),
              main: ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$4, {
                    icon: unref(mdiPlusCircle),
                    color: "success",
                    onClick: ($event) => isRef(showCreatePost) ? showCreatePost.value = true : showCreatePost = true
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$4, {
                      icon: unref(mdiPlusCircle),
                      color: "success",
                      onClick: ($event) => isRef(showCreatePost) ? showCreatePost.value = true : showCreatePost = true
                    }, null, 8, ["icon", "onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$5, { posts: unref(posts) }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$2, {
                items: [{ name: _ctx.__("posts"), href: _ctx.route("dashboard.posts.index") }]
              }, null, 8, ["items"]),
              createVNode(_sfc_main$3, {
                icon: unref(mdiAccountStarOutline),
                title: _ctx.__("posts"),
                main: ""
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$4, {
                    icon: unref(mdiPlusCircle),
                    color: "success",
                    onClick: ($event) => isRef(showCreatePost) ? showCreatePost.value = true : showCreatePost = true
                  }, null, 8, ["icon", "onClick"])
                ]),
                _: 1
              }, 8, ["icon", "title"]),
              createVNode(_sfc_main$5, { posts: unref(posts) }, null, 8, ["posts"])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(showCreatePost)) {
        _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Pages/Posts/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
