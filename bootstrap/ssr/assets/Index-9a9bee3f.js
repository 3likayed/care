import { computed, withCtx, unref, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext, reactive, ref, watch, resolveComponent, isRef, createCommentVNode, withModifiers } from "vue";
import { ssrRenderComponent, ssrRenderList, ssrRenderAttrs } from "vue/server-renderer";
import { mdiLockAlertOutline, mdiFacebook, mdiTwitter, mdiInstagram, mdiLinkedin, mdiEmail, mdiPhone } from "@mdi/js";
import { _ as _sfc_main$6 } from "./SectionMain-10700a79.js";
import { _ as _sfc_main$9 } from "./CardBox-8f14b1bf.js";
import { _ as _sfc_main$4 } from "./FormField-df0fbba2.js";
import { a as _sfc_main$5, p as assignMeta, g as __, e as _sfc_main$a, c as _sfc_main$b } from "../app.js";
import { _ as _sfc_main$8 } from "./SectionTitleLineWithButton-20201868.js";
import { usePage, useForm } from "@inertiajs/vue3";
import { _ as _sfc_main$c } from "./FormValidationErrors-94aef0ec.js";
import { _ as _sfc_main$3 } from "./FormWithLabelField-bb0b44ef.js";
import { _ as _sfc_main$d } from "./StepsComponent-8cf750bb.js";
import { _ as _sfc_main$7 } from "./BreadCrumb-4683e004.js";
import "pinia";
import "ziggy-js";
import "pluralize";
/* empty css                                 */import "axios";
import "@tinymce/tinymce-vue";
import "primevue/dropdown/dropdown.esm.js";
import "sweetalert2";
/* empty css                      */import "./laravel-vite-plugin-af3ef812.js";
import "primevue/config/config.esm.js";
const _sfc_main$2 = {
  __name: "MetaDataComponent",
  __ssrInlineRender: true,
  props: {
    modelValue: Object
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    let locales = usePage().props.locales;
    let props = __props;
    const emit = __emit;
    const computedValue = computed({
      get: () => props.modelValue,
      set: (value) => {
        emit("update:modelValue", value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_sfc_main$3, {
        label: _ctx.__("title")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(locales), (locale) => {
              _push2(ssrRenderComponent(_sfc_main$4, {
                errors: computedValue.value.errors[`meta.title.${locale}`],
                label: _ctx.__(locale)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      modelValue: computedValue.value.meta.title[locale],
                      "onUpdate:modelValue": ($event) => computedValue.value.meta.title[locale] = $event,
                      autocomplete: "title",
                      name: "title",
                      required: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$5, {
                        modelValue: computedValue.value.meta.title[locale],
                        "onUpdate:modelValue": ($event) => computedValue.value.meta.title[locale] = $event,
                        autocomplete: "title",
                        name: "title",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                return openBlock(), createBlock(_sfc_main$4, {
                  errors: computedValue.value.errors[`meta.title.${locale}`],
                  label: _ctx.__(locale)
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$5, {
                      modelValue: computedValue.value.meta.title[locale],
                      "onUpdate:modelValue": ($event) => computedValue.value.meta.title[locale] = $event,
                      autocomplete: "title",
                      name: "title",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["errors", "label"]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        label: _ctx.__("slug")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(locales), (locale) => {
              _push2(ssrRenderComponent(_sfc_main$4, {
                errors: computedValue.value.errors[`meta.slug.${locale}`],
                label: _ctx.__(locale)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      modelValue: computedValue.value.meta.slug[locale],
                      "onUpdate:modelValue": ($event) => computedValue.value.meta.slug[locale] = $event,
                      autocomplete: "slug",
                      name: "slug",
                      required: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$5, {
                        modelValue: computedValue.value.meta.slug[locale],
                        "onUpdate:modelValue": ($event) => computedValue.value.meta.slug[locale] = $event,
                        autocomplete: "slug",
                        name: "slug",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                return openBlock(), createBlock(_sfc_main$4, {
                  errors: computedValue.value.errors[`meta.slug.${locale}`],
                  label: _ctx.__(locale)
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$5, {
                      modelValue: computedValue.value.meta.slug[locale],
                      "onUpdate:modelValue": ($event) => computedValue.value.meta.slug[locale] = $event,
                      autocomplete: "slug",
                      name: "slug",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["errors", "label"]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        label: _ctx.__("keywords")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(locales), (locale) => {
              _push2(ssrRenderComponent(_sfc_main$4, {
                errors: computedValue.value.errors[`meta.keywords.${locale}`],
                label: _ctx.__(locale)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      modelValue: computedValue.value.meta.keywords[locale],
                      "onUpdate:modelValue": ($event) => computedValue.value.meta.keywords[locale] = $event,
                      autocomplete: "keywords",
                      name: "keywords",
                      required: ""
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$5, {
                        modelValue: computedValue.value.meta.keywords[locale],
                        "onUpdate:modelValue": ($event) => computedValue.value.meta.keywords[locale] = $event,
                        autocomplete: "keywords",
                        name: "keywords",
                        required: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                return openBlock(), createBlock(_sfc_main$4, {
                  errors: computedValue.value.errors[`meta.keywords.${locale}`],
                  label: _ctx.__(locale)
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$5, {
                      modelValue: computedValue.value.meta.keywords[locale],
                      "onUpdate:modelValue": ($event) => computedValue.value.meta.keywords[locale] = $event,
                      autocomplete: "keywords",
                      name: "keywords",
                      required: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["errors", "label"]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_sfc_main$3, {
        cols: { lg: 1 },
        label: _ctx.__("description")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(locales), (locale) => {
              _push2(ssrRenderComponent(_sfc_main$4, {
                errors: computedValue.value.errors[`meta.description.${locale}`],
                label: _ctx.__(locale)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_sfc_main$5, {
                      modelValue: computedValue.value.meta.description[locale],
                      "onUpdate:modelValue": ($event) => computedValue.value.meta.description[locale] = $event,
                      autocomplete: "description",
                      name: "description",
                      required: "",
                      type: "textarea"
                    }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_sfc_main$5, {
                        modelValue: computedValue.value.meta.description[locale],
                        "onUpdate:modelValue": ($event) => computedValue.value.meta.description[locale] = $event,
                        autocomplete: "description",
                        name: "description",
                        required: "",
                        type: "textarea"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                return openBlock(), createBlock(_sfc_main$4, {
                  errors: computedValue.value.errors[`meta.description.${locale}`],
                  label: _ctx.__(locale)
                }, {
                  default: withCtx(() => [
                    createVNode(_sfc_main$5, {
                      modelValue: computedValue.value.meta.description[locale],
                      "onUpdate:modelValue": ($event) => computedValue.value.meta.description[locale] = $event,
                      autocomplete: "description",
                      name: "description",
                      required: "",
                      type: "textarea"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 2
                }, 1032, ["errors", "label"]);
              }), 256))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/MetaDataComponent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
let countryvalues = [
  {
    "name": "Afghanistan",
    "code": "+93",
    "emoji": "🇦🇫",
    "value": "AF"
  },
  {
    "name": "Aland Islands",
    "code": "+358",
    "emoji": "🇦🇽",
    "value": "AX"
  },
  {
    "name": "Albania",
    "code": "+355",
    "emoji": "🇦🇱",
    "value": "AL"
  },
  {
    "name": "Algeria",
    "code": "+213",
    "emoji": "🇩🇿",
    "value": "DZ"
  },
  {
    "name": "AmericanSamoa",
    "code": "+1684",
    "emoji": "🇦🇸",
    "value": "AS"
  },
  {
    "name": "Andorra",
    "code": "+376",
    "emoji": "🇦🇩",
    "value": "AD"
  },
  {
    "name": "Angola",
    "code": "+244",
    "emoji": "🇦🇴",
    "value": "AO"
  },
  {
    "name": "Anguilla",
    "code": "+1264",
    "emoji": "🇦🇮",
    "value": "AI"
  },
  {
    "name": "Antarctica",
    "code": "+672",
    "emoji": "🇦🇶",
    "value": "AQ"
  },
  {
    "name": "Antigua and Barbuda",
    "code": "+1268",
    "emoji": "🇦🇬",
    "value": "AG"
  },
  {
    "name": "Argentina",
    "code": "+54",
    "emoji": "🇦🇷",
    "value": "AR"
  },
  {
    "name": "Armenia",
    "code": "+374",
    "emoji": "🇦🇲",
    "value": "AM"
  },
  {
    "name": "Aruba",
    "code": "+297",
    "emoji": "🇦🇼",
    "value": "AW"
  },
  {
    "name": "Australia",
    "code": "+61",
    "emoji": "🇦🇺",
    "value": "AU"
  },
  {
    "name": "Austria",
    "code": "+43",
    "emoji": "🇦🇹",
    "value": "AT"
  },
  {
    "name": "Azerbaijan",
    "code": "+994",
    "emoji": "🇦🇿",
    "value": "AZ"
  },
  {
    "name": "Bahamas",
    "code": "+1242",
    "emoji": "🇧🇸",
    "value": "BS"
  },
  {
    "name": "Bahrain",
    "code": "+973",
    "emoji": "🇧🇭",
    "value": "BH"
  },
  {
    "name": "Bangladesh",
    "code": "+880",
    "emoji": "🇧🇩",
    "value": "BD"
  },
  {
    "name": "Barbados",
    "code": "+1246",
    "emoji": "🇧🇧",
    "value": "BB"
  },
  {
    "name": "Belarus",
    "code": "+375",
    "emoji": "🇧🇾",
    "value": "BY"
  },
  {
    "name": "Belgium",
    "code": "+32",
    "emoji": "🇧🇪",
    "value": "BE"
  },
  {
    "name": "Belize",
    "code": "+501",
    "emoji": "🇧🇿",
    "value": "BZ"
  },
  {
    "name": "Benin",
    "code": "+229",
    "emoji": "🇧🇯",
    "value": "BJ"
  },
  {
    "name": "Bermuda",
    "code": "+1441",
    "emoji": "🇧🇲",
    "value": "BM"
  },
  {
    "name": "Bhutan",
    "code": "+975",
    "emoji": "🇧🇹",
    "value": "BT"
  },
  {
    "name": "Bolivia, Plurinational State of",
    "code": "+591",
    "emoji": "🇧🇴",
    "value": "BO"
  },
  {
    "name": "Bosnia and Herzegovina",
    "code": "+387",
    "emoji": "🇧🇦",
    "value": "BA"
  },
  {
    "name": "Botswana",
    "code": "+267",
    "emoji": "🇧🇼",
    "value": "BW"
  },
  {
    "name": "Brazil",
    "code": "+55",
    "emoji": "🇧🇷",
    "value": "BR"
  },
  {
    "name": "British Indian Ocean Territory",
    "code": "+246",
    "emoji": "🇮🇴",
    "value": "IO"
  },
  {
    "name": "Brunei Darussalam",
    "code": "+673",
    "emoji": "🇧🇳",
    "value": "BN"
  },
  {
    "name": "Bulgaria",
    "code": "+359",
    "emoji": "🇧🇬",
    "value": "BG"
  },
  {
    "name": "Burkina Faso",
    "code": "+226",
    "emoji": "🇧🇫",
    "value": "BF"
  },
  {
    "name": "Burundi",
    "code": "+257",
    "emoji": "🇧🇮",
    "value": "BI"
  },
  {
    "name": "Cambodia",
    "code": "+855",
    "emoji": "🇰🇭",
    "value": "KH"
  },
  {
    "name": "Cameroon",
    "code": "+237",
    "emoji": "🇨🇲",
    "value": "CM"
  },
  {
    "name": "Canada",
    "code": "+1",
    "emoji": "🇨🇦",
    "value": "CA"
  },
  {
    "name": "Cape Verde",
    "code": "+238",
    "emoji": "🇨🇻",
    "value": "CV"
  },
  {
    "name": "Cayman Islands",
    "code": "+345",
    "emoji": "🇰🇾",
    "value": "KY"
  },
  {
    "name": "Central African Republic",
    "code": "+236",
    "emoji": "🇨🇫",
    "value": "CF"
  },
  {
    "name": "Chad",
    "code": "+235",
    "emoji": "🇹🇩",
    "value": "TD"
  },
  {
    "name": "Chile",
    "code": "+56",
    "emoji": "🇨🇱",
    "value": "CL"
  },
  {
    "name": "China",
    "code": "+86",
    "emoji": "🇨🇳",
    "value": "CN"
  },
  {
    "name": "Christmas Island",
    "code": "+61",
    "emoji": "🇨🇽",
    "value": "CX"
  },
  {
    "name": "Cocos (Keeling) Islands",
    "code": "+61",
    "emoji": "🇨🇨",
    "value": "CC"
  },
  {
    "name": "Colombia",
    "code": "+57",
    "emoji": "🇨🇴",
    "value": "CO"
  },
  {
    "name": "Comoros",
    "code": "+269",
    "emoji": "🇰🇲",
    "value": "KM"
  },
  {
    "name": "Congo",
    "code": "+242",
    "emoji": "🇨🇬",
    "value": "CG"
  },
  {
    "name": "Congo, The Democratic Republic of the Congo",
    "code": "+243",
    "emoji": "🇨🇩",
    "value": "CD"
  },
  {
    "name": "Cook Islands",
    "code": "+682",
    "emoji": "🇨🇰",
    "value": "CK"
  },
  {
    "name": "Costa Rica",
    "code": "+506",
    "emoji": "🇨🇷",
    "value": "CR"
  },
  {
    "name": "Cote d'Ivoire",
    "code": "+225",
    "emoji": "🇨🇮",
    "value": "CI"
  },
  {
    "name": "Croatia",
    "code": "+385",
    "emoji": "🇭🇷",
    "value": "HR"
  },
  {
    "name": "Cuba",
    "code": "+53",
    "emoji": "🇨🇺",
    "value": "CU"
  },
  {
    "name": "Cyprus",
    "code": "+357",
    "emoji": "🇨🇾",
    "value": "CY"
  },
  {
    "name": "Czech Republic",
    "code": "+420",
    "emoji": "🇨🇿",
    "value": "CZ"
  },
  {
    "name": "Denmark",
    "code": "+45",
    "emoji": "🇩🇰",
    "value": "DK"
  },
  {
    "name": "Djibouti",
    "code": "+253",
    "emoji": "🇩🇯",
    "value": "DJ"
  },
  {
    "name": "Dominica",
    "code": "+1767",
    "emoji": "🇩🇲",
    "value": "DM"
  },
  {
    "name": "Dominican Republic",
    "code": "+1849",
    "emoji": "🇩🇴",
    "value": "DO"
  },
  {
    "name": "Ecuador",
    "code": "+593",
    "emoji": "🇪🇨",
    "value": "EC"
  },
  {
    "name": "Egypt",
    "code": "+20",
    "emoji": "🇪🇬",
    "value": "EG"
  },
  {
    "name": "El Salvador",
    "code": "+503",
    "emoji": "🇸🇻",
    "value": "SV"
  },
  {
    "name": "Equatorial Guinea",
    "code": "+240",
    "emoji": "🇬🇶",
    "value": "GQ"
  },
  {
    "name": "Eritrea",
    "code": "+291",
    "emoji": "🇪🇷",
    "value": "ER"
  },
  {
    "name": "Estonia",
    "code": "+372",
    "emoji": "🇪🇪",
    "value": "EE"
  },
  {
    "name": "Ethiopia",
    "code": "+251",
    "emoji": "🇪🇹",
    "value": "ET"
  },
  {
    "name": "Falkland Islands (Malvinas)",
    "code": "+500",
    "emoji": "🇫🇰",
    "value": "FK"
  },
  {
    "name": "Faroe Islands",
    "code": "+298",
    "emoji": "🇫🇴",
    "value": "FO"
  },
  {
    "name": "Fiji",
    "code": "+679",
    "emoji": "🇫🇯",
    "value": "FJ"
  },
  {
    "name": "Finland",
    "code": "+358",
    "emoji": "🇫🇮",
    "value": "FI"
  },
  {
    "name": "France",
    "code": "+33",
    "emoji": "🇫🇷",
    "value": "FR"
  },
  {
    "name": "French Guiana",
    "code": "+594",
    "emoji": "🇬🇫",
    "value": "GF"
  },
  {
    "name": "French Polynesia",
    "code": "+689",
    "emoji": "🇵🇫",
    "value": "PF"
  },
  {
    "name": "Gabon",
    "code": "+241",
    "emoji": "🇬🇦",
    "value": "GA"
  },
  {
    "name": "Gambia",
    "code": "+220",
    "emoji": "🇬🇲",
    "value": "GM"
  },
  {
    "name": "Georgia",
    "code": "+995",
    "emoji": "🇬🇪",
    "value": "GE"
  },
  {
    "name": "Germany",
    "code": "+49",
    "emoji": "🇩🇪",
    "value": "DE"
  },
  {
    "name": "Ghana",
    "code": "+233",
    "emoji": "🇬🇭",
    "value": "GH"
  },
  {
    "name": "Gibraltar",
    "code": "+350",
    "emoji": "🇬🇮",
    "value": "GI"
  },
  {
    "name": "Greece",
    "code": "+30",
    "emoji": "🇬🇷",
    "value": "GR"
  },
  {
    "name": "Greenland",
    "code": "+299",
    "emoji": "🇬🇱",
    "value": "GL"
  },
  {
    "name": "Grenada",
    "code": "+1473",
    "emoji": "🇬🇩",
    "value": "GD"
  },
  {
    "name": "Guadeloupe",
    "code": "+590",
    "emoji": "🇬🇵",
    "value": "GP"
  },
  {
    "name": "Guam",
    "code": "+1671",
    "emoji": "🇬🇺",
    "value": "GU"
  },
  {
    "name": "Guatemala",
    "code": "+502",
    "emoji": "🇬🇹",
    "value": "GT"
  },
  {
    "name": "Guernsey",
    "code": "+44",
    "emoji": "🇬🇬",
    "value": "GG"
  },
  {
    "name": "Guinea",
    "code": "+224",
    "emoji": "🇬🇳",
    "value": "GN"
  },
  {
    "name": "Guinea-Bissau",
    "code": "+245",
    "emoji": "🇬🇼",
    "value": "GW"
  },
  {
    "name": "Guyana",
    "code": "+595",
    "emoji": "🇬🇾",
    "value": "GY"
  },
  {
    "name": "Haiti",
    "code": "+509",
    "emoji": "🇭🇹",
    "value": "HT"
  },
  {
    "name": "Holy See (Vatican City State)",
    "code": "+379",
    "emoji": "🇻🇦",
    "value": "VA"
  },
  {
    "name": "Honduras",
    "code": "+504",
    "emoji": "🇭🇳",
    "value": "HN"
  },
  {
    "name": "Hong Kong",
    "code": "+852",
    "emoji": "🇭🇰",
    "value": "HK"
  },
  {
    "name": "Hungary",
    "code": "+36",
    "emoji": "🇭🇺",
    "value": "HU"
  },
  {
    "name": "Iceland",
    "code": "+354",
    "emoji": "🇮🇸",
    "value": "IS"
  },
  {
    "name": "India",
    "code": "+91",
    "emoji": "🇮🇳",
    "value": "IN"
  },
  {
    "name": "Indonesia",
    "code": "+62",
    "emoji": "🇮🇩",
    "value": "ID"
  },
  {
    "name": "Iran, Islamic Republic of Persian Gulf",
    "code": "+98",
    "emoji": "🇮🇷",
    "value": "IR"
  },
  {
    "name": "Iraq",
    "code": "+964",
    "emoji": "🇮🇷",
    "value": "IQ"
  },
  {
    "name": "Ireland",
    "code": "+353",
    "emoji": "🇮🇪",
    "value": "IE"
  },
  {
    "name": "Isle of Man",
    "code": "+44",
    "emoji": "🇮🇲",
    "value": "IM"
  },
  {
    "name": "Israel",
    "code": "+972",
    "emoji": "🇮🇱",
    "value": "IL"
  },
  {
    "name": "Italy",
    "code": "+39",
    "emoji": "🇮🇹",
    "value": "IT"
  },
  {
    "name": "Jamaica",
    "code": "+1876",
    "emoji": "🇯🇲",
    "value": "JM"
  },
  {
    "name": "Japan",
    "code": "+81",
    "emoji": "🇯🇵",
    "value": "JP"
  },
  {
    "name": "Jersey",
    "code": "+44",
    "emoji": "🇯🇪",
    "value": "JE"
  },
  {
    "name": "Jordan",
    "code": "+962",
    "emoji": "🇯🇴",
    "value": "JO"
  },
  {
    "name": "Kazakhstan",
    "code": "+77",
    "emoji": "🇰🇿",
    "value": "KZ"
  },
  {
    "name": "Kenya",
    "code": "+254",
    "emoji": "🇰🇪",
    "value": "KE"
  },
  {
    "name": "Kiribati",
    "code": "+686",
    "emoji": "🇰🇮",
    "value": "KI"
  },
  {
    "name": "Korea, Democratic People's Republic of Korea",
    "code": "+850",
    "emoji": "🇰🇵",
    "value": "KP"
  },
  {
    "name": "Korea, Republic of South Korea",
    "code": "+82",
    "emoji": "🇰🇷",
    "value": "KR"
  },
  {
    "name": "Kuwait",
    "code": "+965",
    "emoji": "🇰🇼",
    "value": "KW"
  },
  {
    "name": "Kyrgyzstan",
    "code": "+996",
    "emoji": "🇰🇬",
    "value": "KG"
  },
  {
    "name": "Laos",
    "code": "+856",
    "emoji": "🇱🇦",
    "value": "LA"
  },
  {
    "name": "Latvia",
    "code": "+371",
    "emoji": "🇱🇻",
    "value": "LV"
  },
  {
    "name": "Lebanon",
    "code": "+961",
    "emoji": "🇱🇧",
    "value": "LB"
  },
  {
    "name": "Lesotho",
    "code": "+266",
    "emoji": "🇱🇸",
    "value": "LS"
  },
  {
    "name": "Liberia",
    "code": "+231",
    "emoji": "🇱🇷",
    "value": "LR"
  },
  {
    "name": "Libyan Arab Jamahiriya",
    "code": "+218",
    "emoji": "🇱🇾",
    "value": "LY"
  },
  {
    "name": "Liechtenstein",
    "code": "+423",
    "emoji": "🇱🇮",
    "value": "LI"
  },
  {
    "name": "Lithuania",
    "code": "+370",
    "emoji": "🇱🇹",
    "value": "LT"
  },
  {
    "name": "Luxembourg",
    "code": "+352",
    "emoji": "🇱🇺",
    "value": "LU"
  },
  {
    "name": "Macao",
    "code": "+853",
    "emoji": "🇲🇴",
    "value": "MO"
  },
  {
    "name": "Macedonia",
    "code": "+389",
    "emoji": "🇲🇰",
    "value": "MK"
  },
  {
    "name": "Madagascar",
    "code": "+261",
    "emoji": "🇲🇬",
    "value": "MG"
  },
  {
    "name": "Malawi",
    "code": "+265",
    "emoji": "🇲🇼",
    "value": "MW"
  },
  {
    "name": "Malaysia",
    "code": "+60",
    "emoji": "🇲🇾",
    "value": "MY"
  },
  {
    "name": "Maldives",
    "code": "+960",
    "emoji": "🇲🇻",
    "value": "MV"
  },
  {
    "name": "Mali",
    "code": "+223",
    "emoji": "🇲🇱",
    "value": "ML"
  },
  {
    "name": "Malta",
    "code": "+356",
    "emoji": "🇲🇹",
    "value": "MT"
  },
  {
    "name": "Marshall Islands",
    "code": "+692",
    "emoji": "🇲🇭",
    "value": "MH"
  },
  {
    "name": "Martinique",
    "code": "+596",
    "emoji": "🇲🇶",
    "value": "MQ"
  },
  {
    "name": "Mauritania",
    "code": "+222",
    "emoji": "🇲🇷",
    "value": "MR"
  },
  {
    "name": "Mauritius",
    "code": "+230",
    "emoji": "🇲🇺",
    "value": "MU"
  },
  {
    "name": "Mayotte",
    "code": "+262",
    "emoji": "🇾🇹",
    "value": "YT"
  },
  {
    "name": "Mexico",
    "code": "+52",
    "emoji": "🇲🇽",
    "value": "MX"
  },
  {
    "name": "Micronesia, Federated States of Micronesia",
    "code": "+691",
    "emoji": "🇫🇲",
    "value": "FM"
  },
  {
    "name": "Moldova",
    "code": "+373",
    "emoji": "🇲🇩",
    "value": "MD"
  },
  {
    "name": "Monaco",
    "code": "+377",
    "emoji": "🇲🇨",
    "value": "MC"
  },
  {
    "name": "Mongolia",
    "code": "+976",
    "emoji": "🇲🇳",
    "value": "MN"
  },
  {
    "name": "Montenegro",
    "code": "+382",
    "emoji": "🇲🇪",
    "value": "ME"
  },
  {
    "name": "Montserrat",
    "code": "+1664",
    "emoji": "🇲🇸",
    "value": "MS"
  },
  {
    "name": "Morocco",
    "code": "+212",
    "emoji": "🇲🇦",
    "value": "MA"
  },
  {
    "name": "Mozambique",
    "code": "+258",
    "emoji": "🇲🇿",
    "value": "MZ"
  },
  {
    "name": "Myanmar",
    "code": "+95",
    "emoji": "🇲🇲",
    "value": "MM"
  },
  {
    "name": "Namibia",
    "emoji": "🇳🇦",
    "code": "+264",
    "value": "NA"
  },
  {
    "name": "Nauru",
    "code": "+674",
    "emoji": "🇳🇷",
    "value": "NR"
  },
  {
    "name": "Nepal",
    "code": "+977",
    "emoji": "🇳🇵",
    "value": "NP"
  },
  {
    "name": "Netherlands",
    "code": "+31",
    "emoji": "🇳🇱",
    "value": "NL"
  },
  {
    "name": "Netherlands Antilles",
    "code": "+599",
    "emoji": "🇧🇶",
    "value": "AN"
  },
  {
    "name": "New Caledonia",
    "code": "+687",
    "emoji": "🇳🇨",
    "value": "NC"
  },
  {
    "name": "New Zealand",
    "code": "+64",
    "emoji": "🇳🇿",
    "value": "NZ"
  },
  {
    "name": "Nicaragua",
    "code": "+505",
    "emoji": "🇳🇮",
    "value": "NI"
  },
  {
    "name": "Niger",
    "code": "+227",
    "emoji": "🇳🇪",
    "value": "NE"
  },
  {
    "name": "Nigeria",
    "code": "+234",
    "emoji": "🇳🇬",
    "value": "NG"
  },
  {
    "name": "Niue",
    "code": "+683",
    "emoji": "🇳🇺",
    "value": "NU"
  },
  {
    "name": "Norfolk Island",
    "code": "+672",
    "emoji": "🇳🇫",
    "value": "NF"
  },
  {
    "name": "Northern Mariana Islands",
    "code": "+1670",
    "emoji": "🇲🇵",
    "value": "MP"
  },
  {
    "name": "Norway",
    "code": "+47",
    "emoji": "🇳🇴",
    "value": "NO"
  },
  {
    "name": "Oman",
    "code": "+968",
    "emoji": "🇴🇲",
    "value": "OM"
  },
  {
    "name": "Pakistan",
    "code": "+92",
    "emoji": "🇵🇰",
    "value": "PK"
  },
  {
    "name": "Palau",
    "code": "+680",
    "emoji": "🇵🇼",
    "value": "PW"
  },
  {
    "name": "Palestinian Territory, Occupied",
    "code": "+970",
    "emoji": "🇵🇸",
    "value": "PS"
  },
  {
    "name": "Panama",
    "code": "+507",
    "emoji": "🇵🇦",
    "value": "PA"
  },
  {
    "name": "Papua New Guinea",
    "code": "+675",
    "emoji": "🇵🇬",
    "value": "PG"
  },
  {
    "name": "Paraguay",
    "code": "+595",
    "emoji": "🇵🇾",
    "value": "PY"
  },
  {
    "name": "Peru",
    "code": "+51",
    "emoji": "🇵🇪",
    "value": "PE"
  },
  {
    "name": "Philippines",
    "code": "+63",
    "emoji": "🇵🇭",
    "value": "PH"
  },
  {
    "name": "Pitcairn",
    "code": "+872",
    "emoji": "🇵🇳",
    "value": "PN"
  },
  {
    "name": "Poland",
    "code": "+48",
    "emoji": "🇵🇱",
    "value": "PL"
  },
  {
    "name": "Portugal",
    "code": "+351",
    "emoji": "🇵🇹",
    "value": "PT"
  },
  {
    "name": "Puerto Rico",
    "code": "+1939",
    "emoji": "🇵🇷",
    "value": "PR"
  },
  {
    "name": "Qatar",
    "code": "+974",
    "emoji": "🇶🇦",
    "value": "QA"
  },
  {
    "name": "Romania",
    "code": "+40",
    "emoji": "🇷🇴",
    "value": "RO"
  },
  {
    "name": "Russia",
    "code": "+7",
    "emoji": "🇷🇺",
    "value": "RU"
  },
  {
    "name": "Rwanda",
    "code": "+250",
    "emoji": "🇷🇼",
    "value": "RW"
  },
  {
    "name": "Reunion",
    "code": "+262",
    "emoji": "🇷🇪",
    "value": "RE"
  },
  {
    "name": "Saint Barthelemy",
    "code": "+590",
    "emoji": "🇧🇱",
    "value": "BL"
  },
  {
    "name": "Saint Helena, Ascension and Tristan Da Cunha",
    "code": "+290",
    "emoji": "🇸🇭",
    "value": "SH"
  },
  {
    "name": "Saint Kitts and Nevis",
    "code": "+1869",
    "emoji": "🇰🇳",
    "value": "KN"
  },
  {
    "name": "Saint Lucia",
    "code": "+1758",
    "emoji": "🇱🇨",
    "value": "LC"
  },
  {
    "name": "Saint Martin",
    "code": "+590",
    "emoji": "🇲🇫",
    "value": "MF"
  },
  {
    "name": "Saint Pierre and Miquelon",
    "code": "+508",
    "emoji": "🇵🇲",
    "value": "PM"
  },
  {
    "name": "Saint Vincent and the Grenadines",
    "code": "+1784",
    "emoji": "🇻🇨",
    "value": "VC"
  },
  {
    "name": "Samoa",
    "code": "+685",
    "emoji": "🇼🇸",
    "value": "WS"
  },
  {
    "name": "San Marino",
    "code": "+378",
    "emoji": "🇸🇲",
    "value": "SM"
  },
  {
    "name": "Sao Tome and Principe",
    "code": "+239",
    "emoji": "🇸🇹",
    "value": "ST"
  },
  {
    "name": "Saudi Arabia",
    "code": "+966",
    "emoji": "🇸🇦",
    "value": "SA"
  },
  {
    "name": "Senegal",
    "code": "+221",
    "emoji": "🇸🇳",
    "value": "SN"
  },
  {
    "name": "Serbia",
    "code": "+381",
    "emoji": "🇷🇸",
    "value": "RS"
  },
  {
    "name": "Seychelles",
    "code": "+248",
    "emoji": "🇸🇨",
    "value": "SC"
  },
  {
    "name": "Sierra Leone",
    "code": "+232",
    "emoji": "🇸🇱",
    "value": "SL"
  },
  {
    "name": "Singapore",
    "code": "+65",
    "emoji": "🇸🇬",
    "value": "SG"
  },
  {
    "name": "Slovakia",
    "code": "+421",
    "emoji": "🇸🇰",
    "value": "SK"
  },
  {
    "name": "Slovenia",
    "code": "+386",
    "emoji": "🇸🇮",
    "value": "SI"
  },
  {
    "name": "Solomon Islands",
    "code": "+677",
    "emoji": "🇸🇧",
    "value": "SB"
  },
  {
    "name": "Somalia",
    "code": "+252",
    "emoji": "🇸🇴",
    "value": "SO"
  },
  {
    "name": "South Africa",
    "code": "+27",
    "emoji": "🇿🇦",
    "value": "ZA"
  },
  {
    "name": "South Sudan",
    "code": "+211",
    "emoji": "🇸🇸",
    "value": "SS"
  },
  {
    "name": "South Georgia and the South Sandwich Islands",
    "code": "+500",
    "emoji": "🇬🇸",
    "value": "GS"
  },
  {
    "name": "Spain",
    "code": "+34",
    "emoji": "🇪🇸",
    "value": "ES"
  },
  {
    "name": "Sri Lanka",
    "code": "+94",
    "emoji": "🇱🇰",
    "value": "LK"
  },
  {
    "name": "Sudan",
    "code": "+249",
    "emoji": "🇸🇩",
    "value": "SD"
  },
  {
    "name": "Suriname",
    "code": "+597",
    "emoji": "🇸🇷",
    "value": "SR"
  },
  {
    "name": "Svalbard and Jan Mayen",
    "code": "+47",
    "emoji": "🇸🇯",
    "value": "SJ"
  },
  {
    "name": "Swaziland",
    "code": "+268",
    "emoji": "🇸🇿",
    "value": "SZ"
  },
  {
    "name": "Sweden",
    "code": "+46",
    "emoji": "🇸🇪",
    "value": "SE"
  },
  {
    "name": "Switzerland",
    "code": "+41",
    "emoji": "🇨🇭",
    "value": "CH"
  },
  {
    "name": "Syrian Arab Republic",
    "code": "+963",
    "emoji": "🇸🇾",
    "value": "SY"
  },
  {
    "name": "Taiwan",
    "code": "+886",
    "emoji": "🇹🇼",
    "value": "TW"
  },
  {
    "name": "Tajikistan",
    "code": "+992",
    "emoji": "🇹🇯",
    "value": "TJ"
  },
  {
    "name": "Tanzania, United Republic of Tanzania",
    "code": "+255",
    "emoji": "🇹🇿",
    "value": "TZ"
  },
  {
    "name": "Thailand",
    "code": "+66",
    "emoji": "🇹🇭",
    "value": "TH"
  },
  {
    "name": "Timor-Leste",
    "code": "+670",
    "emoji": "🇹🇱",
    "value": "TL"
  },
  {
    "name": "Togo",
    "code": "+228",
    "emoji": "🇹🇬",
    "value": "TG"
  },
  {
    "name": "Tokelau",
    "code": "+690",
    "emoji": "🇹🇰",
    "value": "TK"
  },
  {
    "name": "Tonga",
    "code": "+676",
    "emoji": "🇹🇴",
    "value": "TO"
  },
  {
    "name": "Trinidad and Tobago",
    "code": "+1868",
    "emoji": "🇹🇹",
    "value": "TT"
  },
  {
    "name": "Tunisia",
    "code": "+216",
    "emoji": "🇹🇳",
    "value": "TN"
  },
  {
    "name": "Turkey",
    "code": "+90",
    "emoji": "🇹🇷",
    "value": "TR"
  },
  {
    "name": "Turkmenistan",
    "code": "+993",
    "emoji": "🇹🇲",
    "value": "TM"
  },
  {
    "name": "Turks and Caicos Islands",
    "code": "+1649",
    "emoji": "🇹🇨",
    "value": "TC"
  },
  {
    "name": "Tuvalu",
    "code": "+688",
    "emoji": "🇹🇻",
    "value": "TV"
  },
  {
    "name": "Uganda",
    "code": "+256",
    "emoji": "🇺🇬",
    "value": "UG"
  },
  {
    "name": "Ukraine",
    "code": "+380",
    "emoji": "🇺🇦",
    "value": "UA"
  },
  {
    "name": "United Arab Emirates",
    "code": "+971",
    "emoji": "🇦🇪",
    "value": "AE"
  },
  {
    "name": "United Kingdom",
    "code": "+44",
    "emoji": "🇬🇧",
    "value": "GB"
  },
  {
    "name": "United States",
    "code": "+1",
    "emoji": "🇺🇸",
    "value": "US"
  },
  {
    "name": "Uruguay",
    "code": "+598",
    "emoji": "🇺🇾",
    "value": "UY"
  },
  {
    "name": "Uzbekistan",
    "code": "+998",
    "emoji": "🇺🇿",
    "value": "UZ"
  },
  {
    "name": "Vanuatu",
    "code": "+678",
    "emoji": "🇻🇺",
    "value": "VU"
  },
  {
    "name": "Venezuela, Bolivarian Republic of Venezuela",
    "code": "+58",
    "emoji": "🇻🇪",
    "value": "VE"
  },
  {
    "name": "Vietnam",
    "code": "+84",
    "emoji": "🇻🇳",
    "value": "VN"
  },
  {
    "name": "Virgin Islands, British",
    "code": "+1284",
    "emoji": "🇻🇬",
    "value": "VG"
  },
  {
    "name": "Virgin Islands, U.S.",
    "code": "+1340",
    "emoji": "🇻🇮",
    "value": "VI"
  },
  {
    "name": "Wallis and Futuna",
    "code": "+681",
    "emoji": "🇼🇫",
    "value": "WF"
  },
  {
    "name": "Yemen",
    "code": "+967",
    "emoji": "🇾🇪",
    "value": "YE"
  },
  {
    "name": "Zambia",
    "code": "+260",
    "emoji": "🇿🇲",
    "value": "ZM"
  },
  {
    "name": "Zimbabwe",
    "code": "+263",
    "emoji": "🇿🇼",
    "value": "ZW"
  }
];
const _sfc_main$1 = {
  __name: "GoogleMap",
  __ssrInlineRender: true,
  props: {
    center: Object,
    modelValue: Object
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    let props = __props;
    let location = computed(() => {
      return {
        lat: props.modelValue.lat,
        lng: props.modelValue.lng
      };
    });
    const emit = __emit;
    let mapCenter = reactive({ lat: props.center.lat, lng: props.center.lng });
    function setPlace(newLocation, changeCenter, changePlace) {
      let lat = newLocation.lat();
      let lng = newLocation.lng();
      if (changeCenter === true) {
        mapCenter.lat = lat;
        mapCenter.lng = lng;
      }
      if (changePlace) {
        emit("update:modelValue", { lat, lng });
      }
    }
    const myMapRef = ref(null);
    const controlUI = document.createElement("button");
    controlUI.title = "Click to zoom the map";
    const controlText = document.createElement("div");
    controlText.innerHTML = `Center`;
    controlUI.appendChild(controlText);
    function addMyButton(map) {
      var controlDiv = document.createElement("div");
      var firstChild = document.createElement("div");
      firstChild.style.cursor = "pointer";
      firstChild.style.marginRight = "10px";
      firstChild.style.padding = "0px";
      firstChild.title = "Your Location";
      firstChild.className = "w-[40px] h-[40px] bg-white flex justify-center items-center shadow-2xl  cursor-pointer margin-x-[10px] ";
      controlDiv.appendChild(firstChild);
      var secondChild = document.createElement("div");
      secondChild.style.margin = "5px";
      secondChild.style.width = "18px";
      secondChild.style.height = "18px";
      secondChild.style.backgroundImage = "url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png)";
      secondChild.style.backgroundSize = "180px 18px";
      secondChild.style.backgroundPosition = "0px 0px";
      secondChild.style.backgroundRepeat = "no-repeat";
      secondChild.id = "you_location_img";
      firstChild.appendChild(secondChild);
      firstChild.addEventListener("click", function() {
        navigator.geolocation.getCurrentPosition((position) => {
          setPlace({ lat: () => position.coords.latitude, lng: () => position.coords.longitude }, true);
          map.setZoom(16);
        });
      });
      map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(controlDiv);
    }
    watch(myMapRef, (googleMap) => {
      if (googleMap) {
        googleMap.$mapPromise.then((map) => {
          addMyButton(map);
        });
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_GMapAutocomplete = resolveComponent("GMapAutocomplete");
      const _component_GMapMap = resolveComponent("GMapMap");
      const _component_GMapMarker = resolveComponent("GMapMarker");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_GMapAutocomplete, {
        class: "px-3 py-2 max-w-full focus:ring focus:outline-none border-gray-700 rounded w-full mb-2 dark:placeholder-gray-400 bg-white dark:bg-slate-800",
        onPlace_changed: (place) => setPlace(place.geometry.location, true, true)
      }, null, _parent));
      _push(ssrRenderComponent(_component_GMapMap, {
        ref_key: "myMapRef",
        ref: myMapRef,
        center: unref(mapCenter),
        "disable-default-u-i": true,
        options: {
          zoomControl: true,
          mapTypeControl: true,
          scaleControl: true,
          streetViewControl: true,
          rotateControl: true,
          fullscreenControl: true
        },
        zoom: 16,
        class: "h-[420px] md:h-[600px]",
        onClick: (place) => setPlace(place.latLng, false, true)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_GMapMarker, {
              position: { lat: unref(location).lat, lng: unref(location).lng }
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_GMapMarker, {
                position: { lat: unref(location).lat, lng: unref(location).lng }
              }, null, 8, ["position"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Components/Sahred/GoogleMap.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "Index",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c, _d, _e, _f;
    usePage().props.auth.user;
    let locales = usePage().props.locales;
    let settings = usePage().props.settings;
    const form = useForm({
      name: (settings == null ? void 0 : settings.name) ?? {},
      title: (settings == null ? void 0 : settings.title) ?? {},
      description: (settings == null ? void 0 : settings.description) ?? {},
      phone: (settings == null ? void 0 : settings.phone) ?? [{}],
      whatsapp: (settings == null ? void 0 : settings.whatsapp) ?? [{}],
      email: (settings == null ? void 0 : settings.email) ?? [null],
      location: {
        lat: (_a = settings == null ? void 0 : settings.location) == null ? void 0 : _a.lat,
        lng: (_b = settings == null ? void 0 : settings.location) == null ? void 0 : _b.lng
      },
      social: {
        facebook: ((_c = settings == null ? void 0 : settings.social) == null ? void 0 : _c.facebook) ?? null,
        instagram: ((_d = settings == null ? void 0 : settings.social) == null ? void 0 : _d.instagram) ?? null,
        twitter: ((_e = settings == null ? void 0 : settings.social) == null ? void 0 : _e.twitter) ?? null,
        linkedin: ((_f = settings == null ? void 0 : settings.social) == null ? void 0 : _f.linkedin) ?? null
      },
      meta: assignMeta(settings == null ? void 0 : settings.meta),
      _method: "put"
    });
    reactive({ lat: form.location.lat, lng: form.location.lng });
    const submit = () => {
      form.post(route("dashboard.settings.update"), {
        preserveState: (page) => Object.keys(page.props.errors).length
      });
    };
    function addField(field) {
      if (field === "email") {
        form[field][Object.keys(form[field]).length] = null;
      } else
        form[field][Object.keys(form[field]).length] = {};
    }
    let steps = ref([__("main_data"), __("meta")]);
    let step = ref(0);
    function performActionOnEmail(action, key) {
      if (action === "delete") {
        form.email.splice(key, 1);
      }
    }
    function performActionOnPhone(action, key) {
      if (action === "delete") {
        form.phone.splice(key, 1);
      }
    }
    function performActionOnWhatsapp(action, key) {
      if (action === "delete") {
        form.whatsapp.splice(key, 1);
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$6, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_sfc_main$7, {
              items: [{ name: unref(__)("settings"), href: _ctx.route("dashboard.settings.edit") }]
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$8, {
              icon: unref(mdiLockAlertOutline),
              title: unref(__)("settings"),
              main: ""
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_sfc_main$9, {
              "is-form": "",
              onSubmit: submit
            }, {
              footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_sfc_main$a, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_sfc_main$b, {
                          label: unref(__)("continue"),
                          color: "info",
                          type: "submit"
                        }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_sfc_main$b, {
                            label: unref(__)("continue"),
                            color: "info",
                            type: "submit"
                          }, null, 8, ["label"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_sfc_main$a, null, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$b, {
                          label: unref(__)("continue"),
                          color: "info",
                          type: "submit"
                        }, null, 8, ["label"])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (Object.keys(_ctx.$page.props.errors).length) {
                    _push3(ssrRenderComponent(_sfc_main$c, null, null, _parent3, _scopeId2));
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(ssrRenderComponent(_sfc_main$d, {
                    modelValue: unref(step),
                    "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : step = $event,
                    steps: unref(steps)
                  }, null, _parent3, _scopeId2));
                  if (unref(step) === 0) {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      label: unref(__)("site_name")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(locales), (locale) => {
                            _push4(ssrRenderComponent(_sfc_main$4, {
                              errors: unref(form).errors[`name.${locale}`],
                              label: unref(__)(locale)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_sfc_main$5, {
                                    modelValue: unref(form).name[locale],
                                    "onUpdate:modelValue": ($event) => unref(form).name[locale] = $event,
                                    autocomplete: "name",
                                    name: "name",
                                    required: ""
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_sfc_main$5, {
                                      modelValue: unref(form).name[locale],
                                      "onUpdate:modelValue": ($event) => unref(form).name[locale] = $event,
                                      autocomplete: "name",
                                      name: "name",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                              return openBlock(), createBlock(_sfc_main$4, {
                                errors: unref(form).errors[`name.${locale}`],
                                label: unref(__)(locale)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$5, {
                                    modelValue: unref(form).name[locale],
                                    "onUpdate:modelValue": ($event) => unref(form).name[locale] = $event,
                                    autocomplete: "name",
                                    name: "name",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 2
                              }, 1032, ["errors", "label"]);
                            }), 256))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      label: unref(__)("site_title")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(locales), (locale) => {
                            _push4(ssrRenderComponent(_sfc_main$4, {
                              errors: unref(form).errors[`title.${locale}`],
                              label: unref(__)(locale)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_sfc_main$5, {
                                    modelValue: unref(form).title[locale],
                                    "onUpdate:modelValue": ($event) => unref(form).title[locale] = $event,
                                    autocomplete: "name",
                                    name: "name",
                                    required: ""
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_sfc_main$5, {
                                      modelValue: unref(form).title[locale],
                                      "onUpdate:modelValue": ($event) => unref(form).title[locale] = $event,
                                      autocomplete: "name",
                                      name: "name",
                                      required: ""
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                              return openBlock(), createBlock(_sfc_main$4, {
                                errors: unref(form).errors[`title.${locale}`],
                                label: unref(__)(locale)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$5, {
                                    modelValue: unref(form).title[locale],
                                    "onUpdate:modelValue": ($event) => unref(form).title[locale] = $event,
                                    autocomplete: "name",
                                    name: "name",
                                    required: ""
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 2
                              }, 1032, ["errors", "label"]);
                            }), 256))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      label: unref(__)("site_description")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(locales), (locale) => {
                            _push4(ssrRenderComponent(_sfc_main$4, {
                              errors: unref(form).errors[`description.${locale}`],
                              label: unref(__)(locale)
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_sfc_main$5, {
                                    modelValue: unref(form).description[locale],
                                    "onUpdate:modelValue": ($event) => unref(form).description[locale] = $event,
                                    dir: locale === "ar" ? "rtl" : "ltr",
                                    autocomplete: "description",
                                    name: "description",
                                    required: "",
                                    type: "editor"
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_sfc_main$5, {
                                      modelValue: unref(form).description[locale],
                                      "onUpdate:modelValue": ($event) => unref(form).description[locale] = $event,
                                      dir: locale === "ar" ? "rtl" : "ltr",
                                      autocomplete: "description",
                                      name: "description",
                                      required: "",
                                      type: "editor"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "dir"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                              return openBlock(), createBlock(_sfc_main$4, {
                                errors: unref(form).errors[`description.${locale}`],
                                label: unref(__)(locale)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$5, {
                                    modelValue: unref(form).description[locale],
                                    "onUpdate:modelValue": ($event) => unref(form).description[locale] = $event,
                                    dir: locale === "ar" ? "rtl" : "ltr",
                                    autocomplete: "description",
                                    name: "description",
                                    required: "",
                                    type: "editor"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "dir"])
                                ]),
                                _: 2
                              }, 1032, ["errors", "label"]);
                            }), 256))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      cols: { sm: 1, lg: 2 },
                      label: unref(__)("social_media")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$4, {
                            errors: unref(form).errors[`social.facebook`],
                            label: unref(__)("facebook")
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$5, {
                                  modelValue: unref(form).social.facebook,
                                  "onUpdate:modelValue": ($event) => unref(form).social.facebook = $event,
                                  icon: unref(mdiFacebook),
                                  autocomplete: "facebook",
                                  name: "facebook"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$5, {
                                    modelValue: unref(form).social.facebook,
                                    "onUpdate:modelValue": ($event) => unref(form).social.facebook = $event,
                                    icon: unref(mdiFacebook),
                                    autocomplete: "facebook",
                                    name: "facebook"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_sfc_main$4, {
                            errors: unref(form).errors[`social.twitter`],
                            label: unref(__)("twitter")
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$5, {
                                  modelValue: unref(form).social.twitter,
                                  "onUpdate:modelValue": ($event) => unref(form).social.twitter = $event,
                                  icon: unref(mdiTwitter),
                                  autocomplete: "twitter",
                                  name: "twitter"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$5, {
                                    modelValue: unref(form).social.twitter,
                                    "onUpdate:modelValue": ($event) => unref(form).social.twitter = $event,
                                    icon: unref(mdiTwitter),
                                    autocomplete: "twitter",
                                    name: "twitter"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_sfc_main$4, {
                            errors: unref(form).errors[`social.instagram`],
                            label: unref(__)("instagram")
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$5, {
                                  modelValue: unref(form).social.instagram,
                                  "onUpdate:modelValue": ($event) => unref(form).social.instagram = $event,
                                  icon: unref(mdiInstagram),
                                  autocomplete: "instagram",
                                  name: "instagram"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$5, {
                                    modelValue: unref(form).social.instagram,
                                    "onUpdate:modelValue": ($event) => unref(form).social.instagram = $event,
                                    icon: unref(mdiInstagram),
                                    autocomplete: "instagram",
                                    name: "instagram"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_sfc_main$4, {
                            errors: unref(form).errors[`social.linkedin`],
                            label: unref(__)("linkedin")
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_sfc_main$5, {
                                  modelValue: unref(form).social.linkedin,
                                  "onUpdate:modelValue": ($event) => unref(form).social.linkedin = $event,
                                  icon: unref(mdiLinkedin),
                                  autocomplete: "linkedin",
                                  name: "linkedin"
                                }, null, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_sfc_main$5, {
                                    modelValue: unref(form).social.linkedin,
                                    "onUpdate:modelValue": ($event) => unref(form).social.linkedin = $event,
                                    icon: unref(mdiLinkedin),
                                    autocomplete: "linkedin",
                                    name: "linkedin"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$4, {
                              errors: unref(form).errors[`social.facebook`],
                              label: unref(__)("facebook")
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$5, {
                                  modelValue: unref(form).social.facebook,
                                  "onUpdate:modelValue": ($event) => unref(form).social.facebook = $event,
                                  icon: unref(mdiFacebook),
                                  autocomplete: "facebook",
                                  name: "facebook"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ]),
                              _: 1
                            }, 8, ["errors", "label"]),
                            createVNode(_sfc_main$4, {
                              errors: unref(form).errors[`social.twitter`],
                              label: unref(__)("twitter")
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$5, {
                                  modelValue: unref(form).social.twitter,
                                  "onUpdate:modelValue": ($event) => unref(form).social.twitter = $event,
                                  icon: unref(mdiTwitter),
                                  autocomplete: "twitter",
                                  name: "twitter"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ]),
                              _: 1
                            }, 8, ["errors", "label"]),
                            createVNode(_sfc_main$4, {
                              errors: unref(form).errors[`social.instagram`],
                              label: unref(__)("instagram")
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$5, {
                                  modelValue: unref(form).social.instagram,
                                  "onUpdate:modelValue": ($event) => unref(form).social.instagram = $event,
                                  icon: unref(mdiInstagram),
                                  autocomplete: "instagram",
                                  name: "instagram"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ]),
                              _: 1
                            }, 8, ["errors", "label"]),
                            createVNode(_sfc_main$4, {
                              errors: unref(form).errors[`social.linkedin`],
                              label: unref(__)("linkedin")
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$5, {
                                  modelValue: unref(form).social.linkedin,
                                  "onUpdate:modelValue": ($event) => unref(form).social.linkedin = $event,
                                  icon: unref(mdiLinkedin),
                                  autocomplete: "linkedin",
                                  name: "linkedin"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                              ]),
                              _: 1
                            }, 8, ["errors", "label"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`<div class="grid lg:grid-cols-3 gap-3 mt-10"${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      button: { color: "success", icon: _ctx.mdiPlusCircle },
                      cols: { sm: 1, lg: 1 },
                      errors: unref(form).errors.email,
                      label: unref(__)("email"),
                      onButtonClick: ($event) => addField("email")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(form).email, (email, key) => {
                            _push4(ssrRenderComponent(_sfc_main$4, {
                              key,
                              errors: unref(form).errors[`email.${key}`]
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_sfc_main$5, {
                                    modelValue: unref(form).email[key],
                                    "onUpdate:modelValue": ($event) => unref(form).email[key] = $event,
                                    actions: { delete: { color: "danger", icon: _ctx.mdiTrashCanOutline, key } },
                                    icon: unref(mdiEmail),
                                    autocomplete: "email",
                                    name: "email[]",
                                    onAction: performActionOnEmail
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_sfc_main$5, {
                                      modelValue: unref(form).email[key],
                                      "onUpdate:modelValue": ($event) => unref(form).email[key] = $event,
                                      actions: { delete: { color: "danger", icon: _ctx.mdiTrashCanOutline, key } },
                                      icon: unref(mdiEmail),
                                      autocomplete: "email",
                                      name: "email[]",
                                      onAction: performActionOnEmail
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "actions", "icon"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).email, (email, key) => {
                              return openBlock(), createBlock(_sfc_main$4, {
                                key,
                                errors: unref(form).errors[`email.${key}`]
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$5, {
                                    modelValue: unref(form).email[key],
                                    "onUpdate:modelValue": ($event) => unref(form).email[key] = $event,
                                    actions: { delete: { color: "danger", icon: _ctx.mdiTrashCanOutline, key } },
                                    icon: unref(mdiEmail),
                                    autocomplete: "email",
                                    name: "email[]",
                                    onAction: performActionOnEmail
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "actions", "icon"])
                                ]),
                                _: 2
                              }, 1032, ["errors"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      button: { color: "success", icon: _ctx.mdiPlusCircle },
                      cols: { sm: 1, lg: 1 },
                      errors: unref(form).errors.phone,
                      label: unref(__)("phone"),
                      onButtonClick: ($event) => addField("phone")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(form).phone, (phone, key) => {
                            _push4(ssrRenderComponent(_sfc_main$4, {
                              key,
                              errors: unref(form).errors[`phone.${key}.number`],
                              "class-addon": "grid grid-cols-12 gap-2"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_sfc_main$5, {
                                    modelValue: unref(form).phone[key].country_code,
                                    "onUpdate:modelValue": ($event) => unref(form).phone[key].country_code = $event,
                                    options: unref(countryvalues),
                                    "other-labels": ["emoji", "code"],
                                    class: "col-span-4",
                                    type: "select"
                                  }, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_sfc_main$5, {
                                    modelValue: unref(form).phone[key].number,
                                    "onUpdate:modelValue": ($event) => unref(form).phone[key].number = $event,
                                    actions: { delete: { color: "danger", icon: _ctx.mdiTrashCanOutline, key } },
                                    icon: unref(mdiPhone),
                                    autocomplete: "phone",
                                    class: "col-span-8",
                                    name: "phone[]",
                                    onAction: performActionOnPhone
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_sfc_main$5, {
                                      modelValue: unref(form).phone[key].country_code,
                                      "onUpdate:modelValue": ($event) => unref(form).phone[key].country_code = $event,
                                      options: unref(countryvalues),
                                      "other-labels": ["emoji", "code"],
                                      class: "col-span-4",
                                      type: "select"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                    createVNode(_sfc_main$5, {
                                      modelValue: unref(form).phone[key].number,
                                      "onUpdate:modelValue": ($event) => unref(form).phone[key].number = $event,
                                      actions: { delete: { color: "danger", icon: _ctx.mdiTrashCanOutline, key } },
                                      icon: unref(mdiPhone),
                                      autocomplete: "phone",
                                      class: "col-span-8",
                                      name: "phone[]",
                                      onAction: performActionOnPhone
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "actions", "icon"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).phone, (phone, key) => {
                              return openBlock(), createBlock(_sfc_main$4, {
                                key,
                                errors: unref(form).errors[`phone.${key}.number`],
                                "class-addon": "grid grid-cols-12 gap-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$5, {
                                    modelValue: unref(form).phone[key].country_code,
                                    "onUpdate:modelValue": ($event) => unref(form).phone[key].country_code = $event,
                                    options: unref(countryvalues),
                                    "other-labels": ["emoji", "code"],
                                    class: "col-span-4",
                                    type: "select"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                  createVNode(_sfc_main$5, {
                                    modelValue: unref(form).phone[key].number,
                                    "onUpdate:modelValue": ($event) => unref(form).phone[key].number = $event,
                                    actions: { delete: { color: "danger", icon: _ctx.mdiTrashCanOutline, key } },
                                    icon: unref(mdiPhone),
                                    autocomplete: "phone",
                                    class: "col-span-8",
                                    name: "phone[]",
                                    onAction: performActionOnPhone
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "actions", "icon"])
                                ]),
                                _: 2
                              }, 1032, ["errors"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      button: { color: "success", icon: _ctx.mdiPlusCircle },
                      cols: { sm: 1, lg: 1 },
                      errors: unref(form).errors.whatsapp,
                      label: unref(__)("whatsapp"),
                      onButtonClick: ($event) => addField("whatsapp")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(form).whatsapp, (whatsapp, key) => {
                            _push4(ssrRenderComponent(_sfc_main$4, {
                              key,
                              errors: unref(form).errors[`whatsapp.${key}.number`],
                              "class-addon": "grid grid-cols-12 gap-2"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_sfc_main$5, {
                                    modelValue: unref(form).whatsapp[key].country_code,
                                    "onUpdate:modelValue": ($event) => unref(form).whatsapp[key].country_code = $event,
                                    options: unref(countryvalues),
                                    "other-labels": ["emoji", "code"],
                                    class: "col-span-4",
                                    type: "select"
                                  }, null, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_sfc_main$5, {
                                    modelValue: unref(form).whatsapp[key].number,
                                    "onUpdate:modelValue": ($event) => unref(form).whatsapp[key].number = $event,
                                    actions: { delete: { color: "danger", icon: _ctx.mdiTrashCanOutline, key } },
                                    icon: unref(mdiPhone),
                                    autocomplete: "whatsapp",
                                    class: "col-span-8",
                                    name: "whatsapp[]",
                                    onAction: performActionOnWhatsapp
                                  }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_sfc_main$5, {
                                      modelValue: unref(form).whatsapp[key].country_code,
                                      "onUpdate:modelValue": ($event) => unref(form).whatsapp[key].country_code = $event,
                                      options: unref(countryvalues),
                                      "other-labels": ["emoji", "code"],
                                      class: "col-span-4",
                                      type: "select"
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                    createVNode(_sfc_main$5, {
                                      modelValue: unref(form).whatsapp[key].number,
                                      "onUpdate:modelValue": ($event) => unref(form).whatsapp[key].number = $event,
                                      actions: { delete: { color: "danger", icon: _ctx.mdiTrashCanOutline, key } },
                                      icon: unref(mdiPhone),
                                      autocomplete: "whatsapp",
                                      class: "col-span-8",
                                      name: "whatsapp[]",
                                      onAction: performActionOnWhatsapp
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "actions", "icon"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).whatsapp, (whatsapp, key) => {
                              return openBlock(), createBlock(_sfc_main$4, {
                                key,
                                errors: unref(form).errors[`whatsapp.${key}.number`],
                                "class-addon": "grid grid-cols-12 gap-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$5, {
                                    modelValue: unref(form).whatsapp[key].country_code,
                                    "onUpdate:modelValue": ($event) => unref(form).whatsapp[key].country_code = $event,
                                    options: unref(countryvalues),
                                    "other-labels": ["emoji", "code"],
                                    class: "col-span-4",
                                    type: "select"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                  createVNode(_sfc_main$5, {
                                    modelValue: unref(form).whatsapp[key].number,
                                    "onUpdate:modelValue": ($event) => unref(form).whatsapp[key].number = $event,
                                    actions: { delete: { color: "danger", icon: _ctx.mdiTrashCanOutline, key } },
                                    icon: unref(mdiPhone),
                                    autocomplete: "whatsapp",
                                    class: "col-span-8",
                                    name: "whatsapp[]",
                                    onAction: performActionOnWhatsapp
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "actions", "icon"])
                                ]),
                                _: 2
                              }, 1032, ["errors"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_sfc_main$3, {
                      cols: { lg: 1 },
                      label: unref(__)("site_location")
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_sfc_main$1, {
                            modelValue: unref(form).location,
                            "onUpdate:modelValue": ($event) => unref(form).location = $event,
                            center: { lat: unref(form).location.lat, lng: unref(form).location.lng }
                          }, null, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_sfc_main$1, {
                              modelValue: unref(form).location,
                              "onUpdate:modelValue": ($event) => unref(form).location = $event,
                              center: { lat: unref(form).location.lat, lng: unref(form).location.lng }
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "center"])
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  if (unref(step) === 1) {
                    _push3(`<div${_scopeId2}>`);
                    _push3(ssrRenderComponent(_sfc_main$2, {
                      modelValue: unref(form),
                      "onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null
                    }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    Object.keys(_ctx.$page.props.errors).length ? (openBlock(), createBlock(_sfc_main$c, { key: 0 })) : createCommentVNode("", true),
                    createVNode(_sfc_main$d, {
                      modelValue: unref(step),
                      "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : step = $event,
                      steps: unref(steps)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "steps"]),
                    unref(step) === 0 ? (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode(_sfc_main$3, {
                        label: unref(__)("site_name")
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                            return openBlock(), createBlock(_sfc_main$4, {
                              errors: unref(form).errors[`name.${locale}`],
                              label: unref(__)(locale)
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$5, {
                                  modelValue: unref(form).name[locale],
                                  "onUpdate:modelValue": ($event) => unref(form).name[locale] = $event,
                                  autocomplete: "name",
                                  name: "name",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1032, ["errors", "label"]);
                          }), 256))
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      createVNode(_sfc_main$3, {
                        label: unref(__)("site_title")
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                            return openBlock(), createBlock(_sfc_main$4, {
                              errors: unref(form).errors[`title.${locale}`],
                              label: unref(__)(locale)
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$5, {
                                  modelValue: unref(form).title[locale],
                                  "onUpdate:modelValue": ($event) => unref(form).title[locale] = $event,
                                  autocomplete: "name",
                                  name: "name",
                                  required: ""
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 2
                            }, 1032, ["errors", "label"]);
                          }), 256))
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      createVNode(_sfc_main$3, {
                        label: unref(__)("site_description")
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                            return openBlock(), createBlock(_sfc_main$4, {
                              errors: unref(form).errors[`description.${locale}`],
                              label: unref(__)(locale)
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$5, {
                                  modelValue: unref(form).description[locale],
                                  "onUpdate:modelValue": ($event) => unref(form).description[locale] = $event,
                                  dir: locale === "ar" ? "rtl" : "ltr",
                                  autocomplete: "description",
                                  name: "description",
                                  required: "",
                                  type: "editor"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "dir"])
                              ]),
                              _: 2
                            }, 1032, ["errors", "label"]);
                          }), 256))
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      createVNode(_sfc_main$3, {
                        cols: { sm: 1, lg: 2 },
                        label: unref(__)("social_media")
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$4, {
                            errors: unref(form).errors[`social.facebook`],
                            label: unref(__)("facebook")
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5, {
                                modelValue: unref(form).social.facebook,
                                "onUpdate:modelValue": ($event) => unref(form).social.facebook = $event,
                                icon: unref(mdiFacebook),
                                autocomplete: "facebook",
                                name: "facebook"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }, 8, ["errors", "label"]),
                          createVNode(_sfc_main$4, {
                            errors: unref(form).errors[`social.twitter`],
                            label: unref(__)("twitter")
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5, {
                                modelValue: unref(form).social.twitter,
                                "onUpdate:modelValue": ($event) => unref(form).social.twitter = $event,
                                icon: unref(mdiTwitter),
                                autocomplete: "twitter",
                                name: "twitter"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }, 8, ["errors", "label"]),
                          createVNode(_sfc_main$4, {
                            errors: unref(form).errors[`social.instagram`],
                            label: unref(__)("instagram")
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5, {
                                modelValue: unref(form).social.instagram,
                                "onUpdate:modelValue": ($event) => unref(form).social.instagram = $event,
                                icon: unref(mdiInstagram),
                                autocomplete: "instagram",
                                name: "instagram"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }, 8, ["errors", "label"]),
                          createVNode(_sfc_main$4, {
                            errors: unref(form).errors[`social.linkedin`],
                            label: unref(__)("linkedin")
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5, {
                                modelValue: unref(form).social.linkedin,
                                "onUpdate:modelValue": ($event) => unref(form).social.linkedin = $event,
                                icon: unref(mdiLinkedin),
                                autocomplete: "linkedin",
                                name: "linkedin"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                            ]),
                            _: 1
                          }, 8, ["errors", "label"])
                        ]),
                        _: 1
                      }, 8, ["label"]),
                      createVNode("div", { class: "grid lg:grid-cols-3 gap-3 mt-10" }, [
                        createVNode(_sfc_main$3, {
                          button: { color: "success", icon: _ctx.mdiPlusCircle },
                          cols: { sm: 1, lg: 1 },
                          errors: unref(form).errors.email,
                          label: unref(__)("email"),
                          onButtonClick: ($event) => addField("email")
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).email, (email, key) => {
                              return openBlock(), createBlock(_sfc_main$4, {
                                key,
                                errors: unref(form).errors[`email.${key}`]
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$5, {
                                    modelValue: unref(form).email[key],
                                    "onUpdate:modelValue": ($event) => unref(form).email[key] = $event,
                                    actions: { delete: { color: "danger", icon: _ctx.mdiTrashCanOutline, key } },
                                    icon: unref(mdiEmail),
                                    autocomplete: "email",
                                    name: "email[]",
                                    onAction: performActionOnEmail
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "actions", "icon"])
                                ]),
                                _: 2
                              }, 1032, ["errors"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["button", "errors", "label", "onButtonClick"]),
                        createVNode(_sfc_main$3, {
                          button: { color: "success", icon: _ctx.mdiPlusCircle },
                          cols: { sm: 1, lg: 1 },
                          errors: unref(form).errors.phone,
                          label: unref(__)("phone"),
                          onButtonClick: ($event) => addField("phone")
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).phone, (phone, key) => {
                              return openBlock(), createBlock(_sfc_main$4, {
                                key,
                                errors: unref(form).errors[`phone.${key}.number`],
                                "class-addon": "grid grid-cols-12 gap-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$5, {
                                    modelValue: unref(form).phone[key].country_code,
                                    "onUpdate:modelValue": ($event) => unref(form).phone[key].country_code = $event,
                                    options: unref(countryvalues),
                                    "other-labels": ["emoji", "code"],
                                    class: "col-span-4",
                                    type: "select"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                  createVNode(_sfc_main$5, {
                                    modelValue: unref(form).phone[key].number,
                                    "onUpdate:modelValue": ($event) => unref(form).phone[key].number = $event,
                                    actions: { delete: { color: "danger", icon: _ctx.mdiTrashCanOutline, key } },
                                    icon: unref(mdiPhone),
                                    autocomplete: "phone",
                                    class: "col-span-8",
                                    name: "phone[]",
                                    onAction: performActionOnPhone
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "actions", "icon"])
                                ]),
                                _: 2
                              }, 1032, ["errors"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["button", "errors", "label", "onButtonClick"]),
                        createVNode(_sfc_main$3, {
                          button: { color: "success", icon: _ctx.mdiPlusCircle },
                          cols: { sm: 1, lg: 1 },
                          errors: unref(form).errors.whatsapp,
                          label: unref(__)("whatsapp"),
                          onButtonClick: ($event) => addField("whatsapp")
                        }, {
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).whatsapp, (whatsapp, key) => {
                              return openBlock(), createBlock(_sfc_main$4, {
                                key,
                                errors: unref(form).errors[`whatsapp.${key}.number`],
                                "class-addon": "grid grid-cols-12 gap-2"
                              }, {
                                default: withCtx(() => [
                                  createVNode(_sfc_main$5, {
                                    modelValue: unref(form).whatsapp[key].country_code,
                                    "onUpdate:modelValue": ($event) => unref(form).whatsapp[key].country_code = $event,
                                    options: unref(countryvalues),
                                    "other-labels": ["emoji", "code"],
                                    class: "col-span-4",
                                    type: "select"
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                  createVNode(_sfc_main$5, {
                                    modelValue: unref(form).whatsapp[key].number,
                                    "onUpdate:modelValue": ($event) => unref(form).whatsapp[key].number = $event,
                                    actions: { delete: { color: "danger", icon: _ctx.mdiTrashCanOutline, key } },
                                    icon: unref(mdiPhone),
                                    autocomplete: "whatsapp",
                                    class: "col-span-8",
                                    name: "whatsapp[]",
                                    onAction: performActionOnWhatsapp
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "actions", "icon"])
                                ]),
                                _: 2
                              }, 1032, ["errors"]);
                            }), 128))
                          ]),
                          _: 1
                        }, 8, ["button", "errors", "label", "onButtonClick"])
                      ]),
                      createVNode(_sfc_main$3, {
                        cols: { lg: 1 },
                        label: unref(__)("site_location")
                      }, {
                        default: withCtx(() => [
                          createVNode(_sfc_main$1, {
                            modelValue: unref(form).location,
                            "onUpdate:modelValue": ($event) => unref(form).location = $event,
                            center: { lat: unref(form).location.lat, lng: unref(form).location.lng }
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "center"])
                        ]),
                        _: 1
                      }, 8, ["label"])
                    ])) : createCommentVNode("", true),
                    unref(step) === 1 ? (openBlock(), createBlock("div", { key: 2 }, [
                      createVNode(_sfc_main$2, {
                        modelValue: unref(form),
                        "onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_sfc_main$7, {
                items: [{ name: unref(__)("settings"), href: _ctx.route("dashboard.settings.edit") }]
              }, null, 8, ["items"]),
              createVNode(_sfc_main$8, {
                icon: unref(mdiLockAlertOutline),
                title: unref(__)("settings"),
                main: ""
              }, null, 8, ["icon", "title"]),
              createVNode(_sfc_main$9, {
                "is-form": "",
                onSubmit: withModifiers(submit, ["prevent"])
              }, {
                footer: withCtx(() => [
                  createVNode(_sfc_main$a, null, {
                    default: withCtx(() => [
                      createVNode(_sfc_main$b, {
                        label: unref(__)("continue"),
                        color: "info",
                        type: "submit"
                      }, null, 8, ["label"])
                    ]),
                    _: 1
                  })
                ]),
                default: withCtx(() => [
                  Object.keys(_ctx.$page.props.errors).length ? (openBlock(), createBlock(_sfc_main$c, { key: 0 })) : createCommentVNode("", true),
                  createVNode(_sfc_main$d, {
                    modelValue: unref(step),
                    "onUpdate:modelValue": ($event) => isRef(step) ? step.value = $event : step = $event,
                    steps: unref(steps)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "steps"]),
                  unref(step) === 0 ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_sfc_main$3, {
                      label: unref(__)("site_name")
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                          return openBlock(), createBlock(_sfc_main$4, {
                            errors: unref(form).errors[`name.${locale}`],
                            label: unref(__)(locale)
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5, {
                                modelValue: unref(form).name[locale],
                                "onUpdate:modelValue": ($event) => unref(form).name[locale] = $event,
                                autocomplete: "name",
                                name: "name",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1032, ["errors", "label"]);
                        }), 256))
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_sfc_main$3, {
                      label: unref(__)("site_title")
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                          return openBlock(), createBlock(_sfc_main$4, {
                            errors: unref(form).errors[`title.${locale}`],
                            label: unref(__)(locale)
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5, {
                                modelValue: unref(form).title[locale],
                                "onUpdate:modelValue": ($event) => unref(form).title[locale] = $event,
                                autocomplete: "name",
                                name: "name",
                                required: ""
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            _: 2
                          }, 1032, ["errors", "label"]);
                        }), 256))
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_sfc_main$3, {
                      label: unref(__)("site_description")
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(locales), (locale) => {
                          return openBlock(), createBlock(_sfc_main$4, {
                            errors: unref(form).errors[`description.${locale}`],
                            label: unref(__)(locale)
                          }, {
                            default: withCtx(() => [
                              createVNode(_sfc_main$5, {
                                modelValue: unref(form).description[locale],
                                "onUpdate:modelValue": ($event) => unref(form).description[locale] = $event,
                                dir: locale === "ar" ? "rtl" : "ltr",
                                autocomplete: "description",
                                name: "description",
                                required: "",
                                type: "editor"
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "dir"])
                            ]),
                            _: 2
                          }, 1032, ["errors", "label"]);
                        }), 256))
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode(_sfc_main$3, {
                      cols: { sm: 1, lg: 2 },
                      label: unref(__)("social_media")
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$4, {
                          errors: unref(form).errors[`social.facebook`],
                          label: unref(__)("facebook")
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$5, {
                              modelValue: unref(form).social.facebook,
                              "onUpdate:modelValue": ($event) => unref(form).social.facebook = $event,
                              icon: unref(mdiFacebook),
                              autocomplete: "facebook",
                              name: "facebook"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }, 8, ["errors", "label"]),
                        createVNode(_sfc_main$4, {
                          errors: unref(form).errors[`social.twitter`],
                          label: unref(__)("twitter")
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$5, {
                              modelValue: unref(form).social.twitter,
                              "onUpdate:modelValue": ($event) => unref(form).social.twitter = $event,
                              icon: unref(mdiTwitter),
                              autocomplete: "twitter",
                              name: "twitter"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }, 8, ["errors", "label"]),
                        createVNode(_sfc_main$4, {
                          errors: unref(form).errors[`social.instagram`],
                          label: unref(__)("instagram")
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$5, {
                              modelValue: unref(form).social.instagram,
                              "onUpdate:modelValue": ($event) => unref(form).social.instagram = $event,
                              icon: unref(mdiInstagram),
                              autocomplete: "instagram",
                              name: "instagram"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }, 8, ["errors", "label"]),
                        createVNode(_sfc_main$4, {
                          errors: unref(form).errors[`social.linkedin`],
                          label: unref(__)("linkedin")
                        }, {
                          default: withCtx(() => [
                            createVNode(_sfc_main$5, {
                              modelValue: unref(form).social.linkedin,
                              "onUpdate:modelValue": ($event) => unref(form).social.linkedin = $event,
                              icon: unref(mdiLinkedin),
                              autocomplete: "linkedin",
                              name: "linkedin"
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "icon"])
                          ]),
                          _: 1
                        }, 8, ["errors", "label"])
                      ]),
                      _: 1
                    }, 8, ["label"]),
                    createVNode("div", { class: "grid lg:grid-cols-3 gap-3 mt-10" }, [
                      createVNode(_sfc_main$3, {
                        button: { color: "success", icon: _ctx.mdiPlusCircle },
                        cols: { sm: 1, lg: 1 },
                        errors: unref(form).errors.email,
                        label: unref(__)("email"),
                        onButtonClick: ($event) => addField("email")
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(form).email, (email, key) => {
                            return openBlock(), createBlock(_sfc_main$4, {
                              key,
                              errors: unref(form).errors[`email.${key}`]
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$5, {
                                  modelValue: unref(form).email[key],
                                  "onUpdate:modelValue": ($event) => unref(form).email[key] = $event,
                                  actions: { delete: { color: "danger", icon: _ctx.mdiTrashCanOutline, key } },
                                  icon: unref(mdiEmail),
                                  autocomplete: "email",
                                  name: "email[]",
                                  onAction: performActionOnEmail
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "actions", "icon"])
                              ]),
                              _: 2
                            }, 1032, ["errors"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["button", "errors", "label", "onButtonClick"]),
                      createVNode(_sfc_main$3, {
                        button: { color: "success", icon: _ctx.mdiPlusCircle },
                        cols: { sm: 1, lg: 1 },
                        errors: unref(form).errors.phone,
                        label: unref(__)("phone"),
                        onButtonClick: ($event) => addField("phone")
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(form).phone, (phone, key) => {
                            return openBlock(), createBlock(_sfc_main$4, {
                              key,
                              errors: unref(form).errors[`phone.${key}.number`],
                              "class-addon": "grid grid-cols-12 gap-2"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$5, {
                                  modelValue: unref(form).phone[key].country_code,
                                  "onUpdate:modelValue": ($event) => unref(form).phone[key].country_code = $event,
                                  options: unref(countryvalues),
                                  "other-labels": ["emoji", "code"],
                                  class: "col-span-4",
                                  type: "select"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                createVNode(_sfc_main$5, {
                                  modelValue: unref(form).phone[key].number,
                                  "onUpdate:modelValue": ($event) => unref(form).phone[key].number = $event,
                                  actions: { delete: { color: "danger", icon: _ctx.mdiTrashCanOutline, key } },
                                  icon: unref(mdiPhone),
                                  autocomplete: "phone",
                                  class: "col-span-8",
                                  name: "phone[]",
                                  onAction: performActionOnPhone
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "actions", "icon"])
                              ]),
                              _: 2
                            }, 1032, ["errors"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["button", "errors", "label", "onButtonClick"]),
                      createVNode(_sfc_main$3, {
                        button: { color: "success", icon: _ctx.mdiPlusCircle },
                        cols: { sm: 1, lg: 1 },
                        errors: unref(form).errors.whatsapp,
                        label: unref(__)("whatsapp"),
                        onButtonClick: ($event) => addField("whatsapp")
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(form).whatsapp, (whatsapp, key) => {
                            return openBlock(), createBlock(_sfc_main$4, {
                              key,
                              errors: unref(form).errors[`whatsapp.${key}.number`],
                              "class-addon": "grid grid-cols-12 gap-2"
                            }, {
                              default: withCtx(() => [
                                createVNode(_sfc_main$5, {
                                  modelValue: unref(form).whatsapp[key].country_code,
                                  "onUpdate:modelValue": ($event) => unref(form).whatsapp[key].country_code = $event,
                                  options: unref(countryvalues),
                                  "other-labels": ["emoji", "code"],
                                  class: "col-span-4",
                                  type: "select"
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                                createVNode(_sfc_main$5, {
                                  modelValue: unref(form).whatsapp[key].number,
                                  "onUpdate:modelValue": ($event) => unref(form).whatsapp[key].number = $event,
                                  actions: { delete: { color: "danger", icon: _ctx.mdiTrashCanOutline, key } },
                                  icon: unref(mdiPhone),
                                  autocomplete: "whatsapp",
                                  class: "col-span-8",
                                  name: "whatsapp[]",
                                  onAction: performActionOnWhatsapp
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "actions", "icon"])
                              ]),
                              _: 2
                            }, 1032, ["errors"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["button", "errors", "label", "onButtonClick"])
                    ]),
                    createVNode(_sfc_main$3, {
                      cols: { lg: 1 },
                      label: unref(__)("site_location")
                    }, {
                      default: withCtx(() => [
                        createVNode(_sfc_main$1, {
                          modelValue: unref(form).location,
                          "onUpdate:modelValue": ($event) => unref(form).location = $event,
                          center: { lat: unref(form).location.lat, lng: unref(form).location.lng }
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "center"])
                      ]),
                      _: 1
                    }, 8, ["label"])
                  ])) : createCommentVNode("", true),
                  unref(step) === 1 ? (openBlock(), createBlock("div", { key: 2 }, [
                    createVNode(_sfc_main$2, {
                      modelValue: unref(form),
                      "onUpdate:modelValue": ($event) => isRef(form) ? form.value = $event : null
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])) : createCommentVNode("", true)
                ]),
                _: 1
              }, 8, ["onSubmit"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/Dashboard/js/Pages/Settings/Index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
