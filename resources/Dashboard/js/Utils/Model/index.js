import {router} from "@inertiajs/vue3";
import {can, modelResolver, route} from "../../Globals.js";


export default class Model {
    static  delete = (model, id, modelResolve = true) => {
        if (modelResolver)
            model = modelResolver(model);
        router.delete(route(`dashboard.${model}.destroy`, id), {
            preserveState: (page) => Object.keys(page.props.errors).length,
            preserveScroll: true,
        });
    }

    static show(model, id, modelResolve = true) {
        router.visit(this.showLink(model, id, modelResolve))
    }

    static index(model, data, modelResolve = true) {
        router.visit(this.indexLink(model, data, modelResolve))
    }

    static indexLink(model, data, modelResolve = true) {
        if (modelResolver)
            model = modelResolver(model);
        return can(`${model}.show`) ? route(`dashboard.${model}.index`, data) : "#";
    }

    static showLink(model, id, modelResolve = true) {
        if (modelResolver)
            model = modelResolver(model);
        return can(`${model}.show`) ? route(`dashboard.${model}.show`, id) : '#';
    }

    static async fetch(model, filter) {
        try {
            const url = route(`dashboard.fetch.${model}`)
            let result = Object.entries(filter)
                .map(([key, value]) => value ? `filter[${key}]=${value}` : '')
                .join('&');
            const fullUrl = result ? `${url}?${result}` : url;
            return (await fetch(fullUrl)).json();
        } catch (error) {
            console.error(error);
        }
    }

    static create(model, form,data=null) {
        console.log(model);
        form.post(route(`dashboard.${model}.store`,data), {
            preserveScroll: true,
            preserveState: (page) => Object.keys(page.props.errors).length,
        })
    }

    static edit(model, form, data) {

        form.transform((data) => ({
            ...data,
            _method: 'put',
        })).post(route(`dashboard.${model}.update`, data), {
            preserveScroll: true,
            preserveState: (page) => Object.keys(page.props.errors).length,
        })
    }

    static transaction(model, form, data) {

        form.post(route(`dashboard.transactions.${model}`, data), {
            preserveScroll: true,
            preserveState: (page) => Object.keys(page.props.errors).length,
        })
    }

    static submit(operation, model, form, data=null, modelResolve = true,) {

        if (modelResolver)
            model = modelResolver(model);
        switch (operation) {
            case 'edit' :
                this.edit(model, form, data);
                break;
            case 'transaction' :
                this.transaction(model, form, data);
                break;
            case 'create' :
                this.create(model, form,data)
        }
    }

}

