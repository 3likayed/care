import {router} from "@inertiajs/vue3";
import {modelResolver, route} from "../../Globals.js";
import moment from "moment/moment.js";

export default class Search {
    static  getParameters = () => {
        let searchParams = new URLSearchParams(document.location.search);
        let search = {};
        for (const [key, value] of searchParams.entries()) {
            search[key] = value
        }
        return search;
    }

    static dateInterval(options = {}) {
        let defaults = {interval: 1, shift: 0, modeRelative: true, mode: 1}
        for (const [key, value] of Object.entries(options)) {
            defaults[key] = options[key] ?? options[key];
        }

        let startDate = moment();
        startDate.add(defaults.shift, 'd')

        let endDate = moment(startDate).add(defaults.mode * defaults.interval, 'd');


        return [
            startDate.format("YYYY-MM-DD"),
            endDate.format("YYYY-MM-DD")
        ]
    };

    static setToday() {

    }

    static  start = (value, model) => {
        router.visit(route(`dashboard.${modelResolver(model)}.index`), {
            replace: true,
            preserveState: true,
            data: value
        })
    }
}

