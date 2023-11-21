import { unref, withCtx, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { k as _sfc_main$1 } from "../app.js";
import { mdiChevronDoubleRight } from "@mdi/js";
const _sfc_main = {
  __name: "BreadCrumb",
  __ssrInlineRender: true,
  props: {
    items: Array
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><nav class="flex bg-white dark:bg-slate-900/70 py-3 px-5 rounded-lg mb-4"><ol class="inline-flex flex-nowrap items-center"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("dashboard.index"),
        class: "inline-flex items-center hover:text-gray-600 dark:hover:text-slate-400"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.__("home"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.__("home")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><!--[-->`);
      ssrRenderList(__props.items, (item, key) => {
        _push(`<li class="inline-flex items-center">`);
        _push(ssrRenderComponent(_sfc_main$1, { path: unref(mdiChevronDoubleRight) }, null, _parent));
        _push(ssrRenderComponent(unref(Link), {
          href: item.href ?? "",
          class: "inline-flex items-center hover:text-gray-600 dark:hover:text-slate-400"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ol></nav>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/BreadCrumb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
