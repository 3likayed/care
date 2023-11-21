import Pluralize from "pluralize";
import {router} from "@inertiajs/vue3";
import {route} from "../../Globals.js";

export default class Search {
    static  getParameters = () => {
        let searchParams = new URLSearchParams(document.location.search);
        let search = {};
        for (const [key, value] of searchParams.entries()) {
            search[key] = value
        }
        return search;
    }
    static  start = (value, model) => {
        let data = {};
        value.search ? data.search = value.search : ''
        value.startDate ? data.startDate = value.startDate : ''
        value.endDate ? data.endDate = value.endDate : ''
        router.visit(route(`dashboard.${Pluralize(model)}.index`), {
            replace: true,
            preserveState: true,
            data: data
        })
    }
}

