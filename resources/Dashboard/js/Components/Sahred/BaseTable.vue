<script setup>
import {useSlots} from "vue";
import {Link} from "@inertiajs/vue3";

let props = defineProps({
    headers: Array,
    pagination: Object,
    isDraggable: Boolean
})
let slots = useSlots()

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
</script>

<template>
    <table class="table-auto border-collapse">
        <thead>
        <tr>
            <th v-for="(header, key) in headers" :key="key">
                {{ header }}
            </th>
        </tr>
        </thead>
        <tbody v-if="!isDraggable">
        <slot>
            <tr>
                <td class="text-center w- py-24  dark:text-slate-400" colspan="100%">
                    {{ __('no_data') }}
                </td>
            </tr>
        </slot>
        </tbody>
        <slot v-else>
            <tr>
                <td class="text-center w- py-24  dark:text-slate-400" colspan="100%">
                    {{ __('no_data') }}
                </td>
            </tr>
        </slot>

    </table>
    <div v-if="pagination" class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
        <div class="justify-between items-center flex  md:flex-row flex-col gap-3">
            <div class="flex items-center justify-center">
                <div class="flex items-center justify-start flex-wrap">
                    <component :is="link.url && !link.active ? Link :'p' " v-for="(link,key) in pagination.links"
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
                    >
                    </component>
                </div>
            </div>
            <div class="flex-col justify-center items-center text-center ">
                <div class="text-xsm">{{
                        __('result_from', {
                            from: pagination.from ?? 0,
                            to: pagination.to ?? 0,
                            total: pagination.total
                        })
                    }}
                </div>
                <div class="text-xsm">{{
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
th, td {
    text-align: center;
}

</style>
