var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { router } from "@inertiajs/vue3";
import { m as modelResolver, t as route } from "../app.js";
class Model {
  static show(model, id, modelResolve = true) {
    if (modelResolver)
      model = modelResolver(model);
    router.visit(route(`dashboard.${model}.show`, id));
  }
  static showLink(model, id, modelResolve = true) {
    if (modelResolver)
      model = modelResolver(model);
    return route(`dashboard.${model}.show`, id);
  }
  static async fetch(model, filter) {
    try {
      const url = route(`dashboard.fetch.${modelResolver(model)}`);
      const parameters = new URLSearchParams(filter).toString();
      const fullUrl = parameters ? `${url}?${parameters}` : url;
      const response = await fetch(fullUrl);
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
  static create(model, form) {
    form.post(route(`dashboard.${model}.store`), {
      preserveScroll: true,
      preserveState: (page) => Object.keys(page.props.errors).length
    });
  }
  static edit(model, form, id) {
    form.transform((data) => ({
      ...data,
      _method: "put"
    })).post(route(`dashboard.${model}.update`, id), {
      preserveScroll: true,
      preserveState: (page) => Object.keys(page.props.errors).length
    });
  }
  static submit(operation, model, form, id, modelResolve = true) {
    if (modelResolver)
      model = modelResolver(model);
    switch (operation) {
      case "edit":
        this.edit(model, form, id);
        break;
      case "create":
        this.create(model, form);
    }
  }
}
__publicField(Model, "delete", (model, id, modelResolve = true) => {
  if (modelResolver)
    model = modelResolver(model);
  router.delete(route(`dashboard.${model}.destroy`, id), {
    preserveState: (page) => Object.keys(page.props.errors).length,
    preserveScroll: true
  });
});
export {
  Model as M
};
