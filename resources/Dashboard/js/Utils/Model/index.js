import {router} from "@inertiajs/vue3";
import {route} from "../../Globals.js";
import Pluralize from "pluralize";

export default class Model {
    static  delete = (model, id, pluralize = true) => {
        if (pluralize)
            model = Pluralize(model);
        router.delete(route(`dashboard.${model}.destroy`, id), {
            preserveState: (page) => Object.keys(page.props.errors).length,
            preserveScroll: true,
        });
    }

    static show(model, id, pluralize = true) {
        if (pluralize)
            model = Pluralize(model);
        router.visit(route(`dashboard.${model}.show`, id))
    }

    static create(model, form) {
        form.post(route(`dashboard.${model}.store`), {
            preserveScroll: true,
            preserveState: (page) => Object.keys(page.props.errors).length,
        })
    }

    static edit(model, form, id) {

        form.transform((data) => ({
            ...data,
            _method: 'put',
        })).post(route(`dashboard.${model}.update`, id), {
            preserveScroll: true,
            preserveState: (page) => Object.keys(page.props.errors).length,
        })
    }

    static submit(operation, model, form, id, pluralize = true) {

        if (pluralize)
            model = Pluralize(model);
        switch (operation) {
            case 'edit' :
                this.edit(model, form, id);
                break;
            case 'create' :
                this.create(model, form)
        }
    }

}

