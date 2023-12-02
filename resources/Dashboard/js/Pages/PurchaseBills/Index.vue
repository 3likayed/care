<template>

    <SectionMain>
        <BreadCrumb :items="[{name: __('PurchaseBills'), href: route('dashboard.purchase-bills.index')}]"/>
        <PurchaseBillsList :items="items" :pagination="pagination"/>
    </SectionMain>


</template>

<script setup>

import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {usePage} from "@inertiajs/vue3";
import {computed} from "vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import PurchaseBillsList from "../../Components/PurchaseBills/PurchaseBillsList.vue";


let items = computed(() => usePage().props.data.data);
let pagination = computed(() => usePage().props.data.meta);
</script>
<style>


</style>
