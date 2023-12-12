<script setup>
import {computed, reactive, watchEffect} from "vue";
import {Link} from "@inertiajs/vue3";
import {Search} from "../../Utils/index.js";
import {__} from "../../Globals.js";
import {debounce} from "lodash";
import {collect} from "collect.js";
import FormControl from "./FormControl.vue";

let props = defineProps({
    headers: Array,
    sortable: {type: Boolean, default: true},
    searchable: {type: Boolean, default: true},
    model: String,
    pagination: Object,
    isDraggable: Boolean
})

function calculatedUrl(paginationUrl) {
    if (paginationUrl !== null) {
        paginationUrl = new URL(paginationUrl)
        let paginationParams = new URLSearchParams(paginationUrl.search);
        let pageParams = new URLSearchParams(document.location.search);
        pageParams.forEach((value, key) => {
            if (key !== 'page')
                paginationParams.set(key, value);
        });

        paginationUrl.search = paginationParams;
        return paginationUrl.href;
    }

}



let searchParameters = computed(() => Search.getParameters())
let searchableFields = collect(props.headers).where('searchable', true).pluck('name').all();
let search = reactive({});

watchEffect(() => {
    Object.assign(search, searchParameters.value.filter)

})


const headerValue = (header, key, defaultKey = null) => typeof header === 'string' ? header : (header[key] ?? (defaultKey ? header[defaultKey] : undefined))
const isSortable = (header) => typeof header === 'string' ? false : (header.sortable && props.sortable)

const searchableValues = (header, key, defaultKey = null) => {
    if (typeof header === 'string' || !header.sortable) {
        return null;
    } else {
        return (header.searchable[key] ?? (defaultKey ? header.searchable[defaultKey] : headerValue(header, key, defaultKey)))
    }
}
const searchStart = debounce((key, value) => {
    let newValue = {[key]: value}
    Object.assign(search, newValue)

    Search.start(search)
}, 500)

</script>

<template>
    <table class="table-auto border-collapse">
        <thead>
        <tr>
            <th
                v-for="(header, key) in headers"
                :key="key"
                class="content-start  "
                valign="top"

            >
                <div :class='{
            "sortable": isSortable(header) ,
            "sorted-asc" : Search.isSortExist(header.name) && Search.isAsc(header.name),
            "sorted-desc" : Search.isSortExist(header.name) && !Search.isAsc(header.name),
             }'
                     class="mb-auto h-full"
                     @click="()=>isSortable(header) ? Search.sort(header.name,props.model):''">
                    {{ __(headerValue(header, 'label', 'name')) }}
                </div>

                <div v-if="searchableFields.includes(headerValue(header,'name')) && searchable" class=" mt-2">

                    <FormControl
                        v-model="search[searchableValues(header,'name')]"
                        :options="searchableValues(header,'options')"
                        :type="searchableValues(header,'type')"
                        :is-multiple="searchableValues(header,'isMultiple')"
                        required
                        @update:model-value="value=>searchStart(searchableValues(header,'name'),value)"
                    />
                </div>

            </th>
        </tr>
        </thead>
        <tbody v-if="!isDraggable">
        <slot>
            <tr>
                <td
                    class="text-center py-24  dark:text-slate-400"
                    colspan="100%"
                >
                    {{ __('no_data') }}
                </td>
            </tr>
        </slot>
        </tbody>
        <slot v-else>
            <tr>
                <td
                    class="text-center w- py-24  dark:text-slate-400"
                    colspan="100%"
                >
                    {{ __('no_data') }}
                </td>
            </tr>
        </slot>
    </table>
    <div
        v-if="pagination"
        class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800"
    >
        <div class="justify-between items-center flex  md:flex-row flex-col gap-3">
            <div class="flex items-center justify-center">
                <div class="flex items-center justify-start flex-wrap">
                    <component
                        :is="link.url && !link.active ? Link :'p' "
                        v-for="(link,key) in pagination.links"
                        :key="key"
                        :class="
              {
                'dark:text-slate-600 text-gray-400 cursor-not-allowed ' : !link.url,
                'hover:bg-gray-100 dark:hover:bg-slate-800' : link.url,
                'bg-gray-200 dark:bg-slate-800' : link.active
              }"
                        :href="calculatedUrl(link.url)"
                        class="inline-flex justify-center items-center rounded px-3 py-1  text-sm  me-3 "
                        v-html="link.label"
                    />
                </div>
            </div>
            <div class="flex-col justify-center items-center text-center ">
                <div class="text-xsm">
                    {{
                        __('result_from', {
                            from: pagination.from ?? 0,
                            to: pagination.to ?? 0,
                            total: pagination.total
                        })
                    }}
                </div>
                <div class="text-xsm">
                    {{
                        __('page_from', {
                            current: pagination.current_page,
                            total: pagination.last_page
                        })
                    }}
                </div>
            </div>
        </div>
    </div>
</template>
<style>

</style>
