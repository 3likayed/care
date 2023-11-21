import { defineStore, createPinia } from "pinia";
import { computed, mergeProps, useSSRContext, defineComponent, h, createVNode, resolveDynamicComponent, withCtx, openBlock, createBlock, createCommentVNode, toDisplayString, ref, onMounted, onBeforeUnmount, unref, renderSlot, withModifiers, watch, createApp } from "vue";
import { usePage, Link, router, Head, createInertiaApp } from "@inertiajs/vue3";
import ziggyRoute from "ziggy-js";
/* empty css                                        */import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot, ssrRenderComponent, ssrRenderVNode, ssrRenderClass, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList, ssrRenderDynamicModel, ssrRenderSlotInner } from "vue/server-renderer";
import { mdiMonitor, mdiViewList, mdiAccountStarOutline, mdiLockAlertOutline, mdiMessageOutline, mdiCogOutline, mdiPostOutline, mdiTable, mdiThemeLightDark, mdiLogout, mdiChevronUp, mdiChevronDown, mdiClose, mdiDotsVertical, mdiMinus, mdiPlus, mdiBackburger, mdiForwardburger, mdiMenu } from "@mdi/js";
import axios from "axios";
import Editor from "@tinymce/tinymce-vue";
import Swal from "sweetalert2";
/* empty css                             */import { r as resolvePageComponent } from "./assets/laravel-vite-plugin-af3ef812.js";
import VueGoogleMaps from "@fawmi/vue-google-maps";
const main = "";
const basic = {
  aside: "bg-gray-800",
  asideScrollbars: "aside-scrollbars-gray",
  asideBrand: "bg-gray-900 text-white",
  asideMenuItem: "text-gray-300 hover:text-white  dark:text-slate-300 dark:hover:text-white",
  asideMenuItemActive: "font-bold text-white underline ",
  asideMenuDropdown: "bg-gray-700/50",
  navBarItemLabel: "text-black",
  navBarItemLabelHover: "hover:text-blue-500",
  navBarItemLabelActiveColor: "text-blue-600",
  overlay: "from-gray-700 via-gray-900 to-gray-700"
};
const white = {
  aside: "bg-white",
  asideScrollbars: "aside-scrollbars-light",
  asideBrand: "",
  asideMenuItem: "text-blue-600 hover:text-black dark:text-white",
  asideMenuItemActive: "font-bold text-black dark:text-white",
  asideMenuDropdown: "bg-gray-100/75",
  navBarItemLabel: "text-blue-600",
  navBarItemLabelHover: "hover:text-black",
  navBarItemLabelActiveColor: "text-black",
  overlay: "from-white via-gray-100 to-white"
};
const styles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  basic,
  white
}, Symbol.toStringTag, { value: "Module" }));
const darkModeKey = "darkMode";
const styleKey = "style";
const containerMaxW = "xl:max-w-6xl xl:mx-auto";
const containerFluidMaxW = "xl:max-w-7xl xl:mx-auto";
const useStyleStore = defineStore("style", {
  state: () => ({
    /* Styles */
    asideStyle: "",
    asideScrollbarsStyle: "",
    asideBrandStyle: "",
    asideMenuItemStyle: "",
    asideMenuItemActiveStyle: "bg-white",
    asideMenuDropdownStyle: "",
    navBarItemLabelStyle: "",
    navBarItemLabelHoverStyle: "",
    navBarItemLabelActiveColorStyle: "",
    overlayStyle: "",
    /* Dark mode */
    darkMode: false
  }),
  actions: {
    setStyle(payload) {
      if (!styles[payload]) {
        return;
      }
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(styleKey, payload);
      }
      const style = styles[payload];
      for (const key in style) {
        this[`${key}Style`] = style[key];
      }
    },
    setDarkMode(payload = null) {
      this.darkMode = payload !== null ? payload : !this.darkMode;
      if (typeof localStorage !== "undefined") {
        localStorage.setItem(darkModeKey, this.darkMode ? "1" : "0");
      }
      if (typeof document !== "undefined") {
        document.body.classList[this.darkMode ? "add" : "remove"](
          "dark-scrollbars"
        );
        document.documentElement.classList[this.darkMode ? "add" : "remove"](
          "dark-scrollbars-compat"
        );
      }
    }
  }
});
function __(key, replace = {}) {
  var translation = usePage().props.language[key] ? usePage().props.language[key] : key;
  Object.keys(replace).forEach(function(key2) {
    translation = translation.replace(":" + key2, __(replace[key2]));
  });
  return String(translation);
}
function tinyMcConfig(dir) {
  return {
    plugins: [
      "advlist",
      "autolink",
      "lists",
      "link",
      "image",
      "charmap",
      "preview",
      "anchor",
      "searchreplace",
      "visualblocks",
      "code",
      "fullscreen",
      "insertdatetime",
      "media",
      "table",
      "help",
      "wordcount",
      "emoticons"
    ],
    toolbar: "undo redo | blocks | bold italic backcolor color emoticons | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
    content_style: "@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap'); body { font-family:Almarai,Arial,sans-serif; font-size:16px }",
    skin: "snow",
    icons: "thin",
    directionality: dir
  };
}
function route$1(name, params, absolute, config = usePage().props.ziggy) {
  return ziggyRoute(name, params, absolute, config);
}
function can(permission) {
  var _a;
  return permission ? (_a = usePage().props.auth.permissions) == null ? void 0 : _a.includes(permission) : true;
}
const localesObject = () => {
  let locales = usePage().props.locales;
  locales = locales.reduce((acc, curr) => (acc[curr] = null, acc), {});
  return locales;
};
const localesObjectOfObjects = (value = {}) => {
  let locales = usePage().props.locales;
  locales = locales.reduce((acc, curr) => (acc[curr] = value, acc), {});
  return locales;
};
function assignTranslatable(value) {
  if (value && value.constructor.name === "Object") {
    return value;
  }
  return localesObjectOfObjects(null);
}
const assignMeta = (meta) => {
  return {
    title: !Array.isArray(meta == null ? void 0 : meta.title) ? (meta == null ? void 0 : meta.title) ?? {} : {},
    description: !Array.isArray(meta == null ? void 0 : meta.description) ? (meta == null ? void 0 : meta.description) ?? {} : {},
    keywords: !Array.isArray(meta == null ? void 0 : meta.keywords) ? (meta == null ? void 0 : meta.keywords) ?? {} : {},
    slug: !Array.isArray(meta == null ? void 0 : meta.slug) ? (meta == null ? void 0 : meta.slug) ?? {} : {}
  };
};
const Globals = {
  methods: {
    __,
    tinyMcConfig,
    can,
    route: route$1,
    localesObject,
    assignTranslatable
  }
};
const menuAside = [
  {
    route: "dashboard.index",
    icon: mdiMonitor,
    label: "home"
  },
  {
    label: "management",
    icon: mdiViewList,
    menu: [
      {
        route: "dashboard.employees.index",
        label: "data",
        permission: "employees.show",
        components: ["Employees/Index"],
        icon: mdiAccountStarOutline
      },
      {
        route: "dashboard.roles.index",
        label: "roles",
        permission: "roles.show",
        components: ["Roles/Index"],
        icon: mdiLockAlertOutline
      },
      {
        route: "dashboard.contacts.index",
        label: "contacts",
        permission: "contacts.show",
        components: ["Contacts/Index"],
        icon: mdiMessageOutline
      },
      {
        route: "dashboard.settings.edit",
        label: "settings",
        permission: "settings.edit",
        components: ["Settings/Index"],
        icon: mdiCogOutline
      }
    ]
  },
  {
    label: "categories_items",
    icon: mdiViewList,
    menu: [
      {
        route: "dashboard.pages.index",
        label: "pages",
        components: ["Pages/Index", "Pages/Show"],
        permission: "pages.show",
        icon: mdiPostOutline
      },
      {
        route: "dashboard.navigations.index",
        label: "navigations",
        components: ["Navigations/Index", "Navigations/Show"],
        permission: "navigations.show",
        icon: mdiPostOutline
      }
    ]
  },
  {
    route: "dashboard.profile.edit",
    label: "profile",
    components: ["Auth/Profile"],
    icon: mdiTable
  }
];
const menuNavBar = [
  /*{
    icon: mdiMenu,
    label: "Sample menu",
    menu: [
      {
        icon: mdiClockOutline,
        label: "Item One",
      },
      {
        icon: mdiCloud,
        label: "Item Two",
      },
      {
        isDivider: true,
      },
      {
        icon: mdiCrop,
        label: "Item Last",
      },
    ],
  },*/
  /* {
     isCurrentUser: true,
     menu: [
       {
         icon: mdiAccount,
         label: "My Profile",
         to: "/profile",
       },
       {
         icon: mdiCogOutline,
         label: "Settings",
       },
       {
         icon: mdiEmail,
         label: "Messages",
       },
       {
         isDivider: true,
       },
       {
         icon: mdiLogout,
         label: "Log Out",
         isLogout: true,
       },
     ],
   },*/
  {
    icon: mdiThemeLightDark,
    label: "light_dark",
    isDesktopNoLabel: true,
    isToggleLightDark: true
  },
  {
    icon: mdiLogout,
    label: "logout",
    isDesktopNoLabel: true,
    isLogout: true
  }
];
const _sfc_main$m = {
  __name: "BaseIcon",
  __ssrInlineRender: true,
  props: {
    path: {
      type: String,
      required: true
    },
    w: {
      type: String,
      default: "w-6"
    },
    h: {
      type: String,
      default: "h-6"
    },
    size: {
      type: [String, Number],
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const spanClass = computed(
      () => `inline-flex justify-center items-center ${props.w} ${props.h}`
    );
    const iconSize = computed(() => props.size ?? 16);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({ class: spanClass.value }, _attrs))}><svg viewBox="0 0 24 24"${ssrRenderAttr("width", iconSize.value)}${ssrRenderAttr("height", iconSize.value)} class="inline-block"><path fill="currentColor"${ssrRenderAttr("d", __props.path)}></path></svg>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</span>`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/BaseIcon.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const useMainStore = defineStore("main", {
  state: () => ({
    /* User */
    userName: null,
    userEmail: null,
    userAvatar: null,
    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,
    /* Sample data (commonly used) */
    clients: [],
    history: []
  }),
  actions: {
    setUser(payload) {
      if (payload.name) {
        this.userName = payload.name;
      }
      if (payload.email) {
        this.userEmail = payload.email;
      }
      if (payload.avatar) {
        this.userAvatar = payload.avatar;
      }
    },
    fetch(sampleDataKey) {
      axios.get(`data-sources/${sampleDataKey}.json`).then((r) => {
        if (r.data && r.data.data) {
          this[sampleDataKey] = r.data.data;
        }
      }).catch((error) => {
        alert(error.message);
      });
    }
  }
});
const _sfc_main$l = {
  __name: "FormControlIcon",
  __ssrInlineRender: true,
  props: {
    icon: {
      type: String,
      default: null
    },
    h: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$m, mergeProps({
        path: __props.icon,
        w: "w-10",
        h: __props.h,
        class: "absolute top-0 start-0 z-10 pointer-events-none text-gray-500 dark:text-slate-400"
      }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/FormControlIcon.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const _sfc_main$k = defineComponent({
  name: "BaseButtons",
  props: {
    noWrap: Boolean,
    type: {
      type: String,
      default: "justify-end"
    },
    classAddon: {
      type: String,
      default: "me-3 lg:last:me-0 mb-3"
    },
    mb: {
      type: String,
      default: "-mb-3"
    }
  },
  render() {
    const hasSlot = this.$slots && this.$slots.default;
    const parentClass = [
      "flex",
      "items-center",
      this.type,
      this.noWrap ? "flex-nowrap" : "flex-wrap"
    ];
    if (this.mb) {
      parentClass.push(this.mb);
    }
    return h(
      "div",
      { class: parentClass },
      hasSlot ? this.$slots.default().map((element) => {
        if (element && element.children && typeof element.children === "object") {
          return h(
            element,
            {},
            element.children.map((child) => {
              return h(child, { class: [this.classAddon] });
            })
          );
        }
        return h(element, { class: [this.classAddon] });
      }) : null
    );
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/BaseButtons.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const gradientBgBase = "bg-gradient-to-tr";
const gradientBgPurplePink = `${gradientBgBase} from-purple-400 via-pink-500 to-red-500`;
const gradientBgDark = `${gradientBgBase} from-slate-700 via-slate-900 to-slate-800`;
const gradientBgPinkRed = `${gradientBgBase} from-pink-400 via-red-500 to-yellow-500`;
const colorsBgLight = {
  white: "bg-white text-black",
  light: "bg-white text-black dark:bg-slate-900/70 dark:text-white",
  contrast: "bg-gray-800 text-white dark:bg-white dark:text-black",
  success: "bg-emerald-500 border-emerald-500 text-white",
  danger: "bg-red-500 border-red-500 text-white",
  warning: "bg-yellow-500 border-yellow-500 text-white",
  info: "bg-blue-500 border-blue-500 text-white"
};
const colorsText = {
  white: "text-black dark:text-slate-100",
  light: "text-gray-700 dark:text-slate-400",
  contrast: "dark:text-white",
  success: "text-emerald-500",
  danger: "text-red-500",
  warning: "text-yellow-500",
  info: "text-blue-500"
};
const colorsOutline = {
  white: [colorsText.white, "border-gray-100"],
  light: [colorsText.light, "border-gray-100"],
  contrast: [colorsText.contrast, "border-gray-900 dark:border-slate-100"],
  success: [colorsText.success, "border-emerald-500"],
  danger: [colorsText.danger, "border-red-500"],
  warning: [colorsText.warning, "border-yellow-500"],
  info: [colorsText.info, "border-blue-500"]
};
const getButtonColor = (color, isOutlined, hasHover, isActive = false) => {
  const colors = {
    ring: {
      white: "ring-gray-200 dark:ring-gray-500",
      whiteDark: "ring-gray-200 dark:ring-gray-500",
      lightDark: "ring-gray-200 dark:ring-gray-500",
      contrast: "ring-gray-300 dark:ring-gray-400",
      success: "ring-emerald-300 dark:ring-emerald-700",
      danger: "ring-red-300 dark:ring-red-700",
      warning: "ring-yellow-300 dark:ring-yellow-700",
      info: "ring-blue-300 dark:ring-blue-700"
    },
    active: {
      white: "bg-gray-100",
      whiteDark: "bg-gray-100 dark:bg-slate-800",
      lightDark: "bg-gray-200 dark:bg-slate-700",
      contrast: "bg-gray-700 text-white dark:bg-slate-100 dark:text-black",
      success: "bg-emerald-700 dark:bg-emerald-600",
      danger: "bg-red-700 dark:bg-red-600",
      warning: "bg-yellow-700 dark:bg-yellow-600",
      info: "bg-blue-700 dark:bg-blue-600"
    },
    bg: {
      white: "bg-white text-black",
      whiteDark: "bg-white text-black dark:bg-slate-900 dark:text-white",
      lightDark: "bg-gray-100 text-black dark:bg-slate-800 dark:text-white",
      contrast: "bg-gray-800 text-white dark:bg-white dark:text-black",
      success: "bg-emerald-600 dark:bg-emerald-500 text-white",
      danger: "bg-red-600 dark:bg-red-500 text-white",
      warning: "bg-yellow-600 dark:bg-yellow-500 text-white",
      info: "bg-blue-600 dark:bg-blue-500 text-white"
    },
    bgHover: {
      white: "hover:bg-gray-100",
      whiteDark: "hover:bg-gray-100 hover:dark:bg-slate-800",
      lightDark: "hover:bg-gray-200 hover:dark:bg-slate-700",
      contrast: "hover:bg-gray-700 hover:dark:bg-slate-100",
      success: "hover:bg-emerald-700 hover:border-emerald-700 hover:dark:bg-emerald-600 hover:dark:border-emerald-600",
      danger: "hover:bg-red-700 hover:border-red-700 hover:dark:bg-red-600 hover:dark:border-red-600",
      warning: "hover:bg-yellow-700 hover:border-yellow-700 hover:dark:bg-yellow-600 hover:dark:border-yellow-600",
      info: "hover:bg-blue-700 hover:border-blue-700 hover:dark:bg-blue-600 hover:dark:border-blue-600"
    },
    borders: {
      white: "border-white",
      whiteDark: "border-white dark:border-slate-900",
      lightDark: "border-gray-100 dark:border-slate-800",
      contrast: "border-gray-800 dark:border-white",
      success: "border-emerald-600 dark:border-emerald-500",
      danger: "border-red-600 dark:border-red-500",
      warning: "border-yellow-600 dark:border-yellow-500",
      info: "border-blue-600 dark:border-blue-500"
    },
    text: {
      contrast: "dark:text-slate-100",
      success: "text-emerald-600 dark:text-emerald-500",
      danger: "text-red-600 dark:text-red-500",
      warning: "text-yellow-600 dark:text-yellow-500",
      info: "text-blue-600 dark:text-blue-500"
    },
    outlineHover: {
      contrast: "hover:bg-gray-800 hover:text-gray-100 hover:dark:bg-slate-100 hover:dark:text-black",
      success: "hover:bg-emerald-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-emerald-600",
      danger: "hover:bg-red-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-red-600",
      warning: "hover:bg-yellow-600 hover:text-white hover:text-white hover:dark:text-white hover:dark:border-yellow-600",
      info: "hover:bg-blue-600 hover:text-white hover:dark:text-white hover:dark:border-blue-600"
    }
  };
  if (!colors.bg[color]) {
    return color;
  }
  const isOutlinedProcessed = isOutlined && ["white", "whiteDark", "lightDark"].indexOf(color) < 0;
  const base = [colors.borders[color], colors.ring[color]];
  if (isActive) {
    base.push(colors.active[color]);
  } else {
    base.push(isOutlinedProcessed ? colors.text[color] : colors.bg[color]);
  }
  if (hasHover) {
    base.push(
      isOutlinedProcessed ? colors.outlineHover[color] : colors.bgHover[color]
    );
  }
  return base;
};
const _sfc_main$j = {
  __name: "BaseButton",
  __ssrInlineRender: true,
  props: {
    label: {
      type: [String, Number],
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    iconSize: {
      type: [String, Number],
      default: null
    },
    href: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: null
    },
    routeName: {
      type: String,
      default: null
    },
    type: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: "white"
    },
    as: {
      type: String,
      default: null
    },
    small: Boolean,
    outline: Boolean,
    active: Boolean,
    disabled: Boolean,
    roundedFull: Boolean
  },
  setup(__props) {
    const props = __props;
    const is = computed(() => {
      if (props.as) {
        return props.as;
      }
      if (props.routeName) {
        return Link;
      }
      if (props.href) {
        return "a";
      }
      return "button";
    });
    const computedType = computed(() => {
      if (is.value === "button") {
        return props.type ?? "button";
      }
      return null;
    });
    const labelClass = computed(
      () => props.small && props.icon ? "px-1" : "px-2"
    );
    const componentClass = computed(() => {
      const base = [
        "inline-flex",
        "justify-center",
        "items-center",
        "whitespace-nowrap",
        "focus:outline-none",
        "transition-colors",
        "focus:ring",
        "duration-150",
        "border",
        props.disabled ? "cursor-not-allowed" : "cursor-pointer",
        props.roundedFull ? "rounded-full" : "rounded",
        getButtonColor(props.color, props.outline, !props.disabled, props.active)
      ];
      if (!props.label && props.icon) {
        base.push("p-1");
      } else if (props.small) {
        base.push("text-sm", props.roundedFull ? "px-3 py-1" : "p-1");
      } else {
        base.push("py-2", props.roundedFull ? "px-6" : "px-3");
      }
      if (props.disabled) {
        base.push(props.outline ? "opacity-50" : "opacity-70");
      }
      return base;
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(is.value), mergeProps({
        class: componentClass.value,
        disabled: __props.disabled,
        href: __props.routeName ? _ctx.route(`dashboard.${__props.routeName}`) : __props.href,
        target: __props.target,
        type: computedType.value
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (__props.icon) {
              _push2(ssrRenderComponent(_sfc_main$m, {
                path: __props.icon,
                size: __props.iconSize
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (__props.label) {
              _push2(`<span class="${ssrRenderClass(labelClass.value)}"${_scopeId}>${ssrInterpolate(__props.label)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.icon ? (openBlock(), createBlock(_sfc_main$m, {
                key: 0,
                path: __props.icon,
                size: __props.iconSize
              }, null, 8, ["path", "size"])) : createCommentVNode("", true),
              __props.label ? (openBlock(), createBlock("span", {
                key: 1,
                class: labelClass.value
              }, toDisplayString(__props.label), 3)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
};
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/BaseButton.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = {
  __name: "FormControl",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      default: null
    },
    id: {
      type: String,
      default: null
    },
    autocomplete: {
      type: String,
      default: null
    },
    errors: {
      type: String,
      default: null
    },
    maxlength: {
      type: String,
      default: null
    },
    placeholder: {
      type: String,
      default: null
    },
    inputmode: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    options: {
      type: Array,
      default: null
    },
    isDisabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: [String, Number, Boolean, Array, Object],
      default: ""
    },
    actions: Array | Object,
    required: Boolean,
    borderless: Boolean,
    transparent: Boolean,
    ctrlKFocus: Boolean,
    otherLabels: Array,
    dir: String,
    multiple: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "setRef", "action"],
  setup(__props, { emit }) {
    const props = __props;
    const computedValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      }
    });
    const inputElClass = computed(() => {
      const base = [
        "px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full",
        "dark:placeholder-gray-400",
        computedType.value === "textarea" ? "h-24" : computedType.value === "select" && props.multiple ? "" : "h-12",
        props.borderless ? "border-0" : "border",
        props.transparent ? "bg-transparent" : props.isDisabled ? "bg-gray-100 dark:bg-slate-700" : "bg-white dark:bg-slate-800"
      ];
      if (props.icon) {
        base.push("ps-8");
      }
      return base;
    });
    const computedType = computed(() => props.options ? "select" : props.type);
    const controlIconH = computed(
      () => props.type === "textarea" ? "h-full" : "h-12"
    );
    const mainStore = useMainStore();
    const selectEl = ref(null);
    const textareaEl = ref(null);
    const inputEl = ref(null);
    onMounted(() => {
      if (selectEl.value) {
        emit("setRef", selectEl.value);
      } else if (textareaEl.value) {
        emit("setRef", textareaEl.value);
      } else {
        emit("setRef", inputEl.value);
      }
    });
    if (props.ctrlKFocus) {
      const fieldFocusHook = (e) => {
        if (e.ctrlKey && e.key === "k") {
          e.preventDefault();
          inputEl.value.focus();
        } else if (e.key === "Escape") {
          inputEl.value.blur();
        }
      };
      onMounted(() => {
        if (!mainStore.isFieldFocusRegistered) {
          window.addEventListener("keydown", fieldFocusHook);
          mainStore.isFieldFocusRegistered = true;
        }
      });
      onBeforeUnmount(() => {
        window.removeEventListener("keydown", fieldFocusHook);
        mainStore.isFieldFocusRegistered = false;
      });
    }
    function doAction(action, key) {
      emit("action", action, key);
    }
    if (computedType.value === "editor")
      ;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [{ "flex gap-2": __props.actions }, "relative"]
      }, _attrs))}>`);
      if (computedType.value === "select") {
        _push(`<select${ssrRenderAttr("id", __props.id)} class="${ssrRenderClass([inputElClass.value, "text-sm"])}"${ssrIncludeBooleanAttr(__props.isDisabled) ? " disabled" : ""}${ssrRenderAttr("size", __props.multiple ? 8 : "")}${ssrIncludeBooleanAttr(__props.multiple) ? " multiple" : ""}${ssrRenderAttr("name", __props.name)}>`);
        if (!__props.multiple) {
          _push(`<option${ssrRenderAttr("value", null)}>${ssrInterpolate(_ctx.__("without"))}</option>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--[-->`);
        ssrRenderList(__props.options, (option) => {
          _push(`<option${ssrRenderAttr("value", option.value ?? option)}>${ssrInterpolate(option.label ?? (option.value ?? option))} <!--[-->`);
          ssrRenderList(__props.otherLabels, (label) => {
            _push(`<span>${ssrInterpolate(option[label])}</span>`);
          });
          _push(`<!--]--></option>`);
        });
        _push(`<!--]--></select>`);
      } else if (computedType.value === "textarea") {
        _push(`<textarea${ssrRenderAttr("id", __props.id)} class="${ssrRenderClass(inputElClass.value)}"${ssrIncludeBooleanAttr(__props.isDisabled) ? " disabled" : ""}${ssrRenderAttr("maxlength", __props.maxlength)}${ssrRenderAttr("name", __props.name)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}>${ssrInterpolate(computedValue.value)}</textarea>`);
      } else if (computedType.value === "editor") {
        _push(ssrRenderComponent(unref(Editor), {
          modelValue: computedValue.value,
          "onUpdate:modelValue": ($event) => computedValue.value = $event,
          init: unref(tinyMcConfig)(__props.dir),
          "api-key": "jf9lzhq7i42i1hk22z9opddy9lu5ajwu1id9svetvkchydwv",
          class: "px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full"
        }, null, _parent));
      } else {
        _push(`<input${ssrRenderAttr("id", __props.id)}${ssrRenderDynamicModel(computedType.value, computedValue.value, null)}${ssrRenderAttr("autocomplete", __props.autocomplete)} class="${ssrRenderClass(inputElClass.value)}"${ssrIncludeBooleanAttr(__props.isDisabled) ? " disabled" : ""}${ssrRenderAttr("inputmode", __props.inputmode)}${ssrRenderAttr("maxlength", __props.maxlength)}${ssrRenderAttr("name", __props.name)}${ssrRenderAttr("placeholder", __props.placeholder)}${ssrIncludeBooleanAttr(__props.required) ? " required" : ""}${ssrRenderAttr("type", computedType.value)}>`);
      }
      if (__props.icon) {
        _push(ssrRenderComponent(_sfc_main$l, {
          h: controlIconH.value,
          icon: __props.icon
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(__props.actions, (action, key) => {
        _push(ssrRenderComponent(_sfc_main$k, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_sfc_main$j, {
                key,
                color: action.color,
                icon: action.icon,
                label: action.label,
                onClick: ($event) => doAction(key, action.key)
              }, null, _parent2, _scopeId));
            } else {
              return [
                (openBlock(), createBlock(_sfc_main$j, {
                  key,
                  color: action.color,
                  icon: action.icon,
                  label: action.label,
                  onClick: ($event) => doAction(key, action.key)
                }, null, 8, ["color", "icon", "label", "onClick"]))
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      if (__props.errors) {
        _push(`<div class="text-xs text-red-500 dark:text-red-400 mt-1">${ssrInterpolate(__props.errors)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/FormControl.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = {
  __name: "UserAvatar",
  __ssrInlineRender: true,
  props: {
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      default: null
    },
    api: {
      type: String,
      default: "avataaars"
    }
  },
  setup(__props) {
    const props = __props;
    const avatar = computed(
      () => props.avatar ?? `https://avatars.dicebear.com/api/${props.api}/${props.username.replace(
        /[^a-z0-9]+/i,
        "-"
      )}.svg`
    );
    const username = computed(() => props.username);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-12 h-12 me-6" }, _attrs))}><img${ssrRenderAttr("src", avatar.value)}${ssrRenderAttr("alt", username.value)} class="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/UserAvatar.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const _sfc_main$g = {
  __name: "UserAvatarCurrentUser",
  __ssrInlineRender: true,
  setup(__props) {
    const userName = computed(() => usePage().props.auth.user.name);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$h, mergeProps({
        username: userName.value,
        api: "initials"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/UserAvatarCurrentUser.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = {
  __name: "BaseDivider",
  __ssrInlineRender: true,
  props: {
    navBar: Boolean
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<hr${ssrRenderAttrs(mergeProps({
        class: [
          props.navBar ? "hidden lg:block lg:my-0.5 dark:border-slate-700" : "my-6 -mx-6 dark:border-slate-800",
          "border-t border-gray-100"
        ]
      }, _attrs))}>`);
    };
  }
};
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/BaseDivider.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = {
  __name: "NavBarItem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  emits: ["menu-click"],
  setup(__props, { emit }) {
    const props = __props;
    const itemHref = computed(
      () => props.item.route ? route(props.item.route) : props.item.href
    );
    const is = computed(() => {
      if (props.item.href) {
        return "a";
      }
      if (props.item.route) {
        return Link;
      }
      return "div";
    });
    const styleStore2 = useStyleStore();
    const componentClass = computed(() => {
      const base = [
        isDropdownActive.value ? `${styleStore2.navBarItemLabelActiveColorStyle} dark:text-slate-400` : `${styleStore2.navBarItemLabelStyle} dark:text-white dark:hover:text-slate-400 ${styleStore2.navBarItemLabelHoverStyle}`,
        props.item.menu ? "lg:py-2 lg:px-3" : "py-2 px-3"
      ];
      if (props.item.isDesktopNoLabel) {
        base.push("lg:w-16", "lg:justify-center");
      }
      return base;
    });
    const itemLabel = computed(
      () => props.item.isCurrentUser ? usePage().props.auth.user.name : __(props.item.label)
    );
    const isDropdownActive = ref(false);
    const menuClick = (event) => {
      emit("menu-click", event, props.item);
      if (props.item.menu) {
        isDropdownActive.value = !isDropdownActive.value;
      }
    };
    const menuClickDropdown = (event, item) => {
      emit("menu-click", event, item);
    };
    const root = ref(null);
    const forceClose = (event) => {
      if (root.value && !root.value.contains(event.target)) {
        isDropdownActive.value = false;
      }
    };
    onMounted(() => {
      if (props.item.menu) {
        window.addEventListener("click", forceClose);
      }
    });
    onBeforeUnmount(() => {
      if (props.item.menu) {
        window.removeEventListener("click", forceClose);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.item.isDivider) {
        _push(ssrRenderComponent(_sfc_main$f, mergeProps({ "nav-bar": "" }, _attrs), null, _parent));
      } else {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(is.value), mergeProps({
          ref_key: "root",
          ref: root,
          class: ["block lg:flex items-center relative cursor-pointer", componentClass.value],
          href: itemHref.value,
          target: __props.item.target ?? null,
          onClick: menuClick
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([{
                "bg-gray-100 dark:bg-slate-900 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0": __props.item.menu
              }, "flex items-center"])}"${_scopeId}>`);
              if (__props.item.isCurrentUser) {
                _push2(ssrRenderComponent(_sfc_main$g, { class: "w-6 h-6 ms-3 inline-flex" }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (__props.item.icon) {
                _push2(ssrRenderComponent(_sfc_main$m, {
                  title: itemLabel.value,
                  too: "",
                  path: __props.item.icon,
                  class: "transition-colors"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="${ssrRenderClass([{ "lg:hidden": __props.item.isDesktopNoLabel && __props.item.icon }, "px-2 transition-colors"])}"${_scopeId}>${ssrInterpolate(itemLabel.value)}</span>`);
              if (__props.item.menu) {
                _push2(ssrRenderComponent(_sfc_main$m, {
                  path: isDropdownActive.value ? unref(mdiChevronUp) : unref(mdiChevronDown),
                  class: "hidden lg:inline-flex transition-colors"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (__props.item.menu) {
                _push2(`<div class="${ssrRenderClass([{ "lg:hidden": !isDropdownActive.value }, "text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:start-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-900 dark:border-slate-700"])}"${_scopeId}>`);
                _push2(ssrRenderComponent(_sfc_main$d, {
                  menu: __props.item.menu,
                  onMenuClick: menuClickDropdown
                }, null, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("div", {
                  class: ["flex items-center", {
                    "bg-gray-100 dark:bg-slate-900 lg:bg-transparent lg:dark:bg-transparent p-3 lg:p-0": __props.item.menu
                  }]
                }, [
                  __props.item.isCurrentUser ? (openBlock(), createBlock(_sfc_main$g, {
                    key: 0,
                    class: "w-6 h-6 ms-3 inline-flex"
                  })) : createCommentVNode("", true),
                  __props.item.icon ? (openBlock(), createBlock(_sfc_main$m, {
                    key: 1,
                    title: itemLabel.value,
                    too: "",
                    path: __props.item.icon,
                    class: "transition-colors"
                  }, null, 8, ["title", "path"])) : createCommentVNode("", true),
                  createVNode("span", {
                    class: ["px-2 transition-colors", { "lg:hidden": __props.item.isDesktopNoLabel && __props.item.icon }]
                  }, toDisplayString(itemLabel.value), 3),
                  __props.item.menu ? (openBlock(), createBlock(_sfc_main$m, {
                    key: 2,
                    path: isDropdownActive.value ? unref(mdiChevronUp) : unref(mdiChevronDown),
                    class: "hidden lg:inline-flex transition-colors"
                  }, null, 8, ["path"])) : createCommentVNode("", true)
                ], 2),
                __props.item.menu ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: ["text-sm border-b border-gray-100 lg:border lg:bg-white lg:absolute lg:top-full lg:start-0 lg:min-w-full lg:z-20 lg:rounded-lg lg:shadow-lg lg:dark:bg-slate-900 dark:border-slate-700", { "lg:hidden": !isDropdownActive.value }]
                }, [
                  createVNode(_sfc_main$d, {
                    menu: __props.item.menu,
                    onMenuClick: menuClickDropdown
                  }, null, 8, ["menu"])
                ], 2)) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }), _parent);
      }
    };
  }
};
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/NavBarItem.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = {
  __name: "NavBarMenuList",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Array,
      default: () => []
    }
  },
  emits: ["menu-click"],
  setup(__props, { emit }) {
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(__props.menu, (item, index) => {
        _push(ssrRenderComponent(_sfc_main$e, {
          key: index,
          item,
          onMenuClick: menuClick
        }, null, _parent));
      });
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/NavBarMenuList.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const _sfc_main$c = {
  __name: "NavBarItemPlain",
  __ssrInlineRender: true,
  props: {
    display: {
      type: String,
      default: "flex"
    },
    useMargin: Boolean
  },
  setup(__props) {
    const styleStore2 = useStyleStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [[
          __props.display,
          unref(styleStore2).navBarItemLabelStyle,
          unref(styleStore2).navBarItemLabelHoverStyle,
          __props.useMargin ? "my-2 mx-3" : "py-2 px-3"
        ], "items-center cursor-pointer dark:text-white dark:hover:text-slate-400"]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/NavBarItemPlain.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = {
  __name: "NavBar",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  emits: ["menu-click"],
  setup(__props, { emit }) {
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    const isMenuNavBarActive = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({ class: "top-0 inset-x-0 fixed bg-gray-50 h-14 z-30 transition-position w-screen lg:w-auto dark:bg-slate-900" }, _attrs))}><div class="${ssrRenderClass([unref(containerMaxW), "flex lg:items-stretch"])}"><div class="flex flex-1 items-stretch h-14">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="flex-none items-stretch flex h-14 lg:hidden">`);
      _push(ssrRenderComponent(_sfc_main$c, {
        onClick: ($event) => isMenuNavBarActive.value = !isMenuNavBarActive.value
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$m, {
              path: isMenuNavBarActive.value ? unref(mdiClose) : unref(mdiDotsVertical),
              size: "24"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$m, {
                path: isMenuNavBarActive.value ? unref(mdiClose) : unref(mdiDotsVertical),
                size: "24"
              }, null, 8, ["path"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="${ssrRenderClass([[isMenuNavBarActive.value ? "block" : "hidden"], "max-h-screen-menu overflow-y-auto lg:overflow-visible absolute w-screen top-14 start-0 bg-white dark:bg-slate-900 shadow-lg lg:w-auto lg:flex lg:static lg:shadow-none"])}">`);
      _push(ssrRenderComponent(_sfc_main$d, {
        menu: __props.menu,
        onMenuClick: menuClick
      }, null, _parent));
      _push(`</div></div></nav>`);
    };
  }
};
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/NavBar.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = {
  __name: "AsideMenuItem",
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    isDropdownList: Boolean
  },
  emits: ["menu-click"],
  setup(__props, { emit }) {
    const props = __props;
    const styleStore2 = useStyleStore();
    const hasColor = computed(() => props.item && props.item.color);
    const asideMenuItemActiveStyle = computed(
      () => hasColor.value ? "" : styleStore2.asideMenuItemActiveStyle
    );
    const hasDropdown = computed(() => !!props.item.menu);
    const dropDownActive = () => {
      if (hasDropdown.value) {
        for (let i in props.item.menu) {
          if (props.item.menu[i].components.includes(usePage().component))
            return true;
        }
      }
      return false;
    };
    const isDropdownActive = ref(dropDownActive());
    const componentClass = computed(() => [
      props.isDropdownList ? "py-3 ps-10 text-sm" : "py-3 ps-5",
      hasColor.value ? getButtonColor(props.item.color, false, true) : styleStore2.asideMenuItemStyle
    ]);
    const itemHref = computed(
      () => props.item.route ? route(props.item.route) : props.item.href
    );
    const activeInactiveStyle = computed(
      () => {
        var _a;
        return ((_a = props.item.components) == null ? void 0 : _a.includes(usePage().component)) || isDropdownActive.value ? styleStore2.asideMenuItemActiveStyle : "";
      }
    );
    const canSee = computed(() => {
      if (hasDropdown.value) {
        for (let i in props.item.menu) {
          if (can(props.item.menu[i].permission))
            return true;
        }
      } else {
        return can(props.item.permission);
      }
    });
    const menuClick = (event) => {
      emit("menu-click", event, props.item);
      if (hasDropdown.value) {
        isDropdownActive.value = !isDropdownActive.value;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      if (canSee.value) {
        _push(`<li${ssrRenderAttrs(_attrs)}>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(__props.item.route ? unref(Link) : "a"), {
          class: [[componentClass.value, activeInactiveStyle.value], "flex cursor-pointer px-2"],
          href: itemHref.value,
          "preserve-state": true,
          target: __props.item.target ?? null,
          to: __props.item.to ?? null,
          onClick: menuClick
        }, {
          default: withCtx((vSlot, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (__props.item.icon) {
                _push2(ssrRenderComponent(_sfc_main$m, {
                  path: __props.item.icon,
                  size: 18,
                  class: "flex-none pe-2"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              _push2(`<span class="grow text-ellipsis line-clamp-1"${_scopeId}>${ssrInterpolate(_ctx.__(__props.item.label))}</span>`);
              if (hasDropdown.value) {
                _push2(ssrRenderComponent(_sfc_main$m, {
                  class: [[vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""], "flex-none"],
                  path: activeInactiveStyle.value ? unref(mdiMinus) : unref(mdiPlus),
                  w: "w-12"
                }, null, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                __props.item.icon ? (openBlock(), createBlock(_sfc_main$m, {
                  key: 0,
                  path: __props.item.icon,
                  size: 18,
                  class: "flex-none pe-2"
                }, null, 8, ["path"])) : createCommentVNode("", true),
                createVNode("span", { class: "grow text-ellipsis line-clamp-1" }, toDisplayString(_ctx.__(__props.item.label)), 1),
                hasDropdown.value ? (openBlock(), createBlock(_sfc_main$m, {
                  key: 1,
                  class: [[vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle.value : ""], "flex-none"],
                  path: activeInactiveStyle.value ? unref(mdiMinus) : unref(mdiPlus),
                  w: "w-12"
                }, null, 8, ["class", "path"])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }), _parent);
        if (hasDropdown.value) {
          _push(ssrRenderComponent(_sfc_main$9, {
            class: [
              unref(styleStore2).asideMenuDropdownStyle,
              isDropdownActive.value ? "block dark:bg-slate-800/50" : "hidden"
            ],
            "is-dropdown-list": hasDropdown.value,
            menu: __props.item.menu
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/AsideMenuItem.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = {
  __name: "AsideMenuList",
  __ssrInlineRender: true,
  props: {
    isDropdownList: Boolean,
    menu: {
      type: Array,
      required: true
    }
  },
  emits: ["menu-click"],
  setup(__props, { emit }) {
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(_attrs)}><!--[-->`);
      ssrRenderList(__props.menu, (item, index) => {
        _push(ssrRenderComponent(_sfc_main$a, {
          key: index,
          item,
          "is-dropdown-list": __props.isDropdownList,
          onMenuClick: menuClick
        }, null, _parent));
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/AsideMenuList.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = {
  __name: "AsideMenuLayer",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Array,
      required: true
    }
  },
  emits: ["menu-click", "aside-lg-close-click"],
  setup(__props, { emit }) {
    const styleStore2 = useStyleStore();
    const logoutItem = computed(() => ({
      label: __("logout"),
      icon: mdiLogout,
      color: "info",
      isLogout: true
    }));
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({
        id: "aside",
        class: "lg:pb-2 lg:pt-16 lg:pe-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden"
      }, _attrs))}><div class="${ssrRenderClass([unref(styleStore2).asideStyle, "lg:rounded-2xl flex-1 flex flex-col overflow-hidden dark:bg-slate-900"])}"><div class="${ssrRenderClass([unref(styleStore2).asideBrandStyle, "flex flex-row h-14 items-center justify-between dark:bg-slate-900"])}"><div class="text-center flex-1 lg:text-start lg:pe-6 xl:text-center xl:pe-0"><b class="font-black">${ssrInterpolate(unref(__)("dashboard"))}</b></div><button class="hidden lg:inline-block xl:hidden p-3">`);
      _push(ssrRenderComponent(_sfc_main$m, { path: unref(mdiClose) }, null, _parent));
      _push(`</button></div><div class="${ssrRenderClass([
        unref(styleStore2).darkMode ? "aside-scrollbars-[slate]" : unref(styleStore2).asideScrollbarsStyle,
        "flex-1 overflow-y-auto overflow-x-hidden"
      ])}">`);
      _push(ssrRenderComponent(_sfc_main$9, {
        menu: __props.menu,
        onMenuClick: menuClick
      }, null, _parent));
      _push(`</div><ul>`);
      _push(ssrRenderComponent(_sfc_main$a, {
        item: logoutItem.value,
        onMenuClick: menuClick
      }, null, _parent));
      _push(`</ul></div></aside>`);
    };
  }
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/AsideMenuLayer.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = {
  __name: "OverlayLayer",
  __ssrInlineRender: true,
  props: {
    zIndex: {
      type: String,
      default: "z-50"
    },
    type: {
      type: String,
      default: "flex"
    }
  },
  emits: ["overlay-click"],
  setup(__props, { emit }) {
    const styleStore2 = useStyleStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [[__props.type, __props.zIndex], "items-center flex-col justify-center overflow-hidden fixed inset-0"]
      }, _attrs))}><div class="${ssrRenderClass([unref(styleStore2).overlayStyle, "absolute inset-0 bg-gradient-to-tr opacity-90 dark:from-gray-700 dark:via-gray-900 dark:to-gray-700"])}"></div>`);
      ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
      _push(`</div>`);
    };
  }
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/OverlayLayer.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {
  __name: "AsideMenu",
  __ssrInlineRender: true,
  props: {
    menu: {
      type: Array,
      required: true
    },
    isAsideMobileExpanded: Boolean,
    isAsideLgActive: Boolean
  },
  emits: ["menu-click", "aside-lg-close-click"],
  setup(__props, { emit }) {
    const menuClick = (event, item) => {
      emit("menu-click", event, item);
    };
    const asideLgCloseClick = (event) => {
      emit("aside-lg-close-click", event);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$8, {
        menu: __props.menu,
        class: [
          __props.isAsideMobileExpanded ? "start-0" : "-end-60 lg:start-0",
          { "lg:hidden xl:flex": !__props.isAsideLgActive }
        ],
        onMenuClick: menuClick,
        onAsideLgCloseClick: asideLgCloseClick
      }, null, _parent));
      _push(ssrRenderComponent(_sfc_main$7, {
        style: __props.isAsideLgActive ? null : { display: "none" },
        "z-index": "z-30",
        onOverlayClick: asideLgCloseClick
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/AsideMenu.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = defineComponent({
  name: "BaseLevel",
  props: {
    mobile: Boolean,
    type: {
      type: String,
      default: "justify-between"
    }
  },
  render() {
    const parentClass = [this.type, "items-center"];
    const parentMobileClass = ["flex"];
    const parentBaseClass = ["block", "md:flex"];
    const childBaseClass = ["flex", "items-center", "justify-center"];
    return h(
      "div",
      {
        class: parentClass.concat(
          this.mobile ? parentMobileClass : parentBaseClass
        )
      },
      this.$slots.default().map((element, index) => {
        const childClass = !this.mobile && this.$slots.default().length > index + 1 ? childBaseClass.concat(["mb-6", "md:mb-0"]) : childBaseClass;
        return h("div", { class: childClass }, [element]);
      })
    );
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/BaseLevel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {
  __name: "FooterBar",
  __ssrInlineRender: true,
  setup(__props) {
    (/* @__PURE__ */ new Date()).getFullYear();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: [unref(containerMaxW), "py-2 px-6"]
      }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$5, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center md:text-start"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div><div class="md:py-2"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "text-center md:text-start" }, [
                renderSlot(_ctx.$slots, "default")
              ]),
              createVNode("div", { class: "md:py-2" })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</footer>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/FooterBar.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const layoutAsidePadding = "xl:ps-60";
const _sfc_main$3 = {
  __name: "LayoutAuthenticated",
  __ssrInlineRender: true,
  setup(__props) {
    router.on("navigate", () => {
      isAsideMobileExpanded.value = false;
      isAsideLgActive.value = false;
    });
    const styleStore2 = useStyleStore();
    const isAsideMobileExpanded = ref(false);
    const isAsideLgActive = ref(false);
    const menuClick = (event, item) => {
      if (item.isToggleLightDark) {
        styleStore2.setDarkMode();
      }
      if (item.isLogout) {
        router.post(route("dashboard.logout"));
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        id: "authenticated",
        class: {
          dark: unref(styleStore2).darkMode,
          "overflow-hidden lg:overflow-visible": isAsideMobileExpanded.value
        }
      }, _attrs))}><div class="${ssrRenderClass([[layoutAsidePadding, { "ms-60 lg:me-0": isAsideMobileExpanded.value }], "pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-100 dark:bg-slate-800 dark:text-slate-100"])}">`);
      _push(ssrRenderComponent(_sfc_main$b, {
        class: [
          layoutAsidePadding,
          { "ms-60 lg:me-0": isAsideMobileExpanded.value }
        ],
        menu: unref(menuNavBar),
        onMenuClick: menuClick
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$c, {
              display: "flex lg:hidden",
              onClick: ($event) => isAsideMobileExpanded.value = !isAsideMobileExpanded.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$m, {
                    path: isAsideMobileExpanded.value ? unref(mdiBackburger) : unref(mdiForwardburger),
                    size: "24"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$m, {
                      path: isAsideMobileExpanded.value ? unref(mdiBackburger) : unref(mdiForwardburger),
                      size: "24"
                    }, null, 8, ["path"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$c, {
              display: "hidden lg:flex xl:hidden",
              onClick: ($event) => isAsideLgActive.value = true
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$m, {
                    path: unref(mdiMenu),
                    size: "24"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$m, {
                      path: unref(mdiMenu),
                      size: "24"
                    }, null, 8, ["path"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$c, { "use-margin": "" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$i, {
                    borderless: "",
                    "ctrl-k-focus": "",
                    placeholder: "Search (ctrl+k)",
                    transparent: ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$i, {
                      borderless: "",
                      "ctrl-k-focus": "",
                      placeholder: "Search (ctrl+k)",
                      transparent: ""
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$c, {
                display: "flex lg:hidden",
                onClick: withModifiers(($event) => isAsideMobileExpanded.value = !isAsideMobileExpanded.value, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$m, {
                    path: isAsideMobileExpanded.value ? unref(mdiBackburger) : unref(mdiForwardburger),
                    size: "24"
                  }, null, 8, ["path"])
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$c, {
                display: "hidden lg:flex xl:hidden",
                onClick: withModifiers(($event) => isAsideLgActive.value = true, ["prevent"])
              }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$m, {
                    path: unref(mdiMenu),
                    size: "24"
                  }, null, 8, ["path"])
                ]),
                _: 1
              }, 8, ["onClick"]),
              createVNode(_sfc_main$c, { "use-margin": "" }, {
                default: withCtx(() => [
                  createVNode(_sfc_main$i, {
                    borderless: "",
                    "ctrl-k-focus": "",
                    placeholder: "Search (ctrl+k)",
                    transparent: ""
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$6, {
        "is-aside-lg-active": isAsideLgActive.value,
        "is-aside-mobile-expanded": isAsideMobileExpanded.value,
        menu: unref(menuAside),
        onMenuClick: menuClick,
        onAsideLgCloseClick: ($event) => isAsideLgActive.value = false
      }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Layouts/LayoutAuthenticated.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "LayoutGuest",
  __ssrInlineRender: true,
  setup(__props) {
    const styleStore2 = useStyleStore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: { dark: unref(styleStore2).darkMode }
      }, _attrs))}><div class="bg-gray-50 dark:bg-slate-800 dark:text-slate-100">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Layouts/LayoutGuest.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "Flash",
  __ssrInlineRender: true,
  setup(__props) {
    const flash = computed(() => usePage().props.flash);
    function handleFlash(flashValue) {
      if (flashValue.error || flashValue.success) {
        let isDark = useStyleStore().darkMode;
        let backColor = isDark ? "rgb(15 23 42 )" : "";
        let color = isDark ? "rgb(241, 245, 249)" : "";
        let icon = flashValue.error ? "error" : "success";
        let title = flashValue.error ?? flashValue.success;
        Swal.fire({
          title,
          icon,
          target: "#app",
          background: backColor,
          color,
          confirmButtonText: __("continue"),
          confirmButtonColor: "rgb(59, 130, 246)"
        });
      }
    }
    handleFlash(flash.value);
    watch(flash, (newValue, oldValue) => {
      handleFlash(newValue);
    }, { deep: true });
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/Flash.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    let user = usePage().props.auth.user;
    let meta = computed(() => usePage().props.meta ?? {});
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(user) ? _sfc_main$3 : _sfc_main$2), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Head), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<title${_scopeId2}>${ssrInterpolate(unref(meta).title)}</title>`);
                  if (unref(meta).description) {
                    _push3(`<meta${ssrRenderAttr("content", unref(meta).description)} name="description"${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(meta).keywords) {
                    _push3(`<meta${ssrRenderAttr("content", unref(meta).keywords)} name="keywords"${_scopeId2}>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("title", null, toDisplayString(unref(meta).title), 1),
                    unref(meta).description ? (openBlock(), createBlock("meta", {
                      key: 0,
                      content: unref(meta).description,
                      name: "description"
                    }, null, 8, ["content"])) : createCommentVNode("", true),
                    unref(meta).keywords ? (openBlock(), createBlock("meta", {
                      key: 1,
                      content: unref(meta).keywords,
                      name: "keywords"
                    }, null, 8, ["content"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$1, null, null, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode(unref(Head), null, {
                default: withCtx(() => [
                  createVNode("title", null, toDisplayString(unref(meta).title), 1),
                  unref(meta).description ? (openBlock(), createBlock("meta", {
                    key: 0,
                    content: unref(meta).description,
                    name: "description"
                  }, null, 8, ["content"])) : createCommentVNode("", true),
                  unref(meta).keywords ? (openBlock(), createBlock("meta", {
                    key: 1,
                    content: unref(meta).keywords,
                    name: "keywords"
                  }, null, 8, ["content"])) : createCommentVNode("", true)
                ]),
                _: 1
              }),
              createVNode(_sfc_main$1),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Layouts/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const pinia = createPinia();
createInertiaApp({
  title: (title) => `${title}`,
  resolve: (name) => {
    let page = resolvePageComponent(`./Pages/${name}.vue`, /* @__PURE__ */ Object.assign({ "./Pages/Admins/Index.vue": () => import("./assets/Index-f1ff0b7a.js"), "./Pages/Auth/ConfirmPassword.vue": () => import("./assets/ConfirmPassword-819628c4.js"), "./Pages/Auth/ForgotPassword.vue": () => import("./assets/ForgotPassword-6c752d80.js"), "./Pages/Auth/Login.vue": () => import("./assets/Login-3ebc1c5d.js"), "./Pages/Auth/Profile.vue": () => import("./assets/Profile-c47015a5.js"), "./Pages/Auth/Register.vue": () => import("./assets/Register-dbdf4df0.js"), "./Pages/Auth/ResetPassword.vue": () => import("./assets/ResetPassword-28ea430f.js"), "./Pages/Auth/TwoFactorChallenge.vue": () => import("./assets/TwoFactorChallenge-39afb166.js"), "./Pages/Auth/VerifyEmail.vue": () => import("./assets/VerifyEmail-b12fe20d.js"), "./Pages/Contacts/Index.vue": () => import("./assets/Index-c639490e.js"), "./Pages/Error.vue": () => import("./assets/Error-6a146e2d.js"), "./Pages/Home.vue": () => import("./assets/Home-3ef576ef.js"), "./Pages/Navigations/Index.vue": () => import("./assets/Index-a108b654.js"), "./Pages/Navigations/Show.vue": () => import("./assets/Show-aebbdfbf.js"), "./Pages/Pages/Index.vue": () => import("./assets/Index-fdc00cb7.js"), "./Pages/Pages/Show.vue": () => import("./assets/Show-a1167fe7.js"), "./Pages/Posts/Index.vue": () => import("./assets/Index-b049c908.js"), "./Pages/Posts/Show.vue": () => import("./assets/Show-fb85781d.js"), "./Pages/Roles/Index.vue": () => import("./assets/Index-931776cc.js"), "./Pages/Sections/Index.vue": () => import("./assets/Index-9961e477.js"), "./Pages/Sections/Show.vue": () => import("./assets/Show-d4ea3e0c.js"), "./Pages/Settings/Index.vue": () => import("./assets/Index-24a1f3ee.js") }));
    return page.then((page2) => {
      page2.default.layout = page2.default.layout || _sfc_main;
      return page2;
    });
  },
  setup({ el, App, props, plugin }) {
    return createApp({ render: () => h(App, props) }).use(plugin).use(pinia).use(VueGoogleMaps, {
      load: {
        key: "AIzaSyAsWoXMlhZneXdzbmoCgxMwW8gnqIvAN0w",
        libraries: "places",
        language: props.initialPage.props.current_locale
      }
    }).mixin(Globals).mount(el);
  },
  progress: {
    color: "#4B5563"
  }
});
const styleStore = useStyleStore(pinia);
styleStore.setStyle(localStorage[styleKey] ?? "basic");
if (!localStorage[darkModeKey] && window.matchMedia("(prefers-color-scheme: dark)").matches || localStorage[darkModeKey] === "1") {
  styleStore.setDarkMode(true);
}
export {
  _sfc_main$i as _,
  _sfc_main$j as a,
  _sfc_main$2 as b,
  _sfc_main$f as c,
  _sfc_main$5 as d,
  _sfc_main$k as e,
  _sfc_main$g as f,
  __ as g,
  gradientBgDark as h,
  gradientBgPinkRed as i,
  gradientBgPurplePink as j,
  _sfc_main$m as k,
  useMainStore as l,
  colorsOutline as m,
  colorsBgLight as n,
  assignTranslatable as o,
  localesObject as p,
  assignMeta as q,
  can as r,
  _sfc_main$7 as s,
  containerFluidMaxW as t,
  useStyleStore as u,
  containerMaxW as v,
  colorsText as w
};
