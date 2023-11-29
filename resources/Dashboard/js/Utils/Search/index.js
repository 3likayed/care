import {router, usePage} from "@inertiajs/vue3";
import {route} from "../../Globals.js";
import moment from "moment/moment.js";

export default class Search {
    static  getParameters = () => {
        let searchParams = new URLSearchParams(usePage().url.split('?')[1]);
        const resultObject = {filter: {}, sort: ''};

        searchParams.forEach((value, key) => {
            if (key.startsWith('filter[')) {
                // Extracting filter parameters
                const filterName = key.match(/\[([^)]+)\]/)[1];
                resultObject.filter[filterName] = /^-?\d+\.?\d*$/.test(value) ? Number(value) :  value

            } else if (key === 'sort') {
                // Extracting sort parameters
                resultObject.sort = value;
            }
        });

        return resultObject;


    }

    static dateInterval(options = {}) {
        let defaults = {interval: 1, shift: 0, modeRelative: true, mode: 1, start: 'start', end: 'end'}
        for (const [key, value] of Object.entries(options)) {
            defaults[key] = options[key] ?? options[key];
        }

        let startDate = moment();
        startDate.add(defaults.shift, 'd')

        let endDate = moment(startDate).add(defaults.mode * defaults.interval, 'd');


        return {
            [defaults.end]: endDate.format("YYYY-MM-DD"), [defaults.start]: startDate.format("YYYY-MM-DD"),

        }


    };

    static isAsc(sortParam) {
        const currentSortArray = this.getParameters().sort ? this.getParameters().sort.split(',') : [];
        const descIndex = currentSortArray.indexOf(`-${sortParam}`)
        return descIndex === -1;

    }

    static isSortExist(sortParam) {
        const currentSortArray = this.getParameters().sort ? this.getParameters().sort.split(',') : [];
        const ascIndex = currentSortArray.indexOf(sortParam)
        const descIndex = currentSortArray.indexOf(`-${sortParam}`)
        return (ascIndex !== -1 ?? ascIndex) || (descIndex !== -1 ?? descIndex);
    }

    static sortTypeToggle(sortParam) {
        return this.isAsc(sortParam) ? '-' : ''
    }

    static sort(sortParam, model) {
        // Parse the current sort parameter

        let sortType = this.sortTypeToggle(sortParam)
        let param = this.getParameters();
        param.sort = this.sortTypeToggle(sortParam) + sortParam;
        param.page = '';

        let url = model ? route(`dashboard.${model}.index`) : ''
        router.visit(url, {
            replace: true, preserveState: true, data: param
        })

    }


    static    start = (value, model) => {
        let param = this.getParameters();
        param.filter = value;
        let url = model ? route(`dashboard.${model}.index`) : ''
        router.visit(url, {
            replace: true, preserveState: true, data: param
        })
    }


}

