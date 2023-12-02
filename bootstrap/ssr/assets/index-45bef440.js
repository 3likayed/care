var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { router } from "@inertiajs/vue3";
import { t as route, m as modelResolver } from "../app.js";
import moment from "moment/moment.js";
class Search {
  static dateInterval(options = {}) {
    let defaults = { interval: 1, shift: 0, modeRelative: true, mode: 1 };
    for (const [key, value] of Object.entries(options)) {
      defaults[key] = options[key] ?? options[key];
    }
    let startDate = moment();
    startDate.add(defaults.mode * defaults.shift, "d");
    let endDate = moment(startDate).add(defaults.interval, "d");
    return [
      startDate.format("YYYY-MM-DD"),
      endDate.format("YYYY-MM-DD")
    ];
  }
  static setToday() {
  }
}
__publicField(Search, "getParameters", () => {
  let searchParams = new URLSearchParams(document.location.search);
  let search = {};
  for (const [key, value] of searchParams.entries()) {
    search[key] = value;
  }
  return search;
});
__publicField(Search, "start", (value, model) => {
  router.visit(route(`dashboard.${modelResolver(model)}.index`), {
    replace: true,
    preserveState: true,
    data: value
  });
});
export {
  Search as S
};
