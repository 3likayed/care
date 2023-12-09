<script setup>
import {Head, usePage} from "@inertiajs/vue3";
import LayoutAuthenticated from "./LayoutAuthenticated.vue";
import LayoutGuest from "./LayoutGuest.vue";
import {computed} from "vue";
import Flash from "../Components/Sahred/Flash.vue";

let user = usePage().props.auth.user
let meta = computed(() => usePage().props.meta ?? {});
;
let title = computed(() => {
    let title = "";
    if (!Array.isArray(meta.value.title)) {
        title = meta.value.title;
    } else {
        title = meta.value.title.join(' | ')
    }
    return title += meta.value.site_name ? " | " + meta.value.site_name : ''
})
</script>

<template>
    <component :is="user ? LayoutAuthenticated : LayoutGuest">
        <Head>
            <title>{{ title }}</title>
            <meta
                v-if="meta.description"
                :content="meta.description"
                name="description"
            >
            <meta
                v-if="meta.keywords"
                :content="meta.keywords"
                name="keywords"
            >
        </Head>
        <Flash/>
        <slot/>
    </component>
</template>

<style scoped>

</style>
