<template>
    <nav class="flex bg-white dark:bg-slate-900/70 py-3 px-5 rounded-lg mb-4">
        <ol class="inline-flex flex-nowrap items-center">
            <li class="inline-flex items-center">
                <Link
                    :href="route('dashboard.index')"
                    class="inline-flex items-center hover:text-gray-600 dark:hover:text-slate-400 "
                >
                    {{ __('home') }}
                </Link>
            </li>
            <li
                v-for="(item , key) in items"
                :key="key"
                class="inline-flex items-center"
            >
                <BaseIcon :path="mdiChevronDoubleRight"/>
                <Link
                    :href="item.href??''"
                    class="inline-flex items-center hover:text-gray-600 dark:hover:text-slate-400"
                >
                    {{ item.name ? __(item.name) : lastName }}
                </Link>
            </li>
        </ol>
    </nav>
    <slot/>
</template>
<script setup>
import {Link, usePage} from "@inertiajs/vue3";
import BaseIcon from "./BaseIcon.vue";
import {mdiChevronDoubleRight} from "@mdi/js";

let props = defineProps({
    items: Array
})

let lastName = Array.isArray(usePage().props.meta.title) ? usePage().props.meta.title[0] : usePage().props.meta.title
</script>
