<template>

    <SectionMain>
        <BreadCrumb :items="[{name: __('packages'), href: route('dashboard.packages.index')}]"/>
        <PackagesList :items="items" :pagination="pagination" :services="services"/>
    </SectionMain>


</template>

<script setup>

import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {usePage} from "@inertiajs/vue3";
import {computed} from "vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import PackagesList from "../../Components/Packages/PackagesList.vue";


let items = computed(() => usePage().props.data.data);
let pagination = computed(() => usePage().props.data.meta);
let services = computed(() => usePage().props.services);
</script>
<style>


</style>
