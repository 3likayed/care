<template>

    <SectionMain>
        <BreadCrumb :items="[{name: __('purchases'), href: route('dashboard.purchases.index')}]"/>
        <PurchasesList :suppliers="suppliers" :items="items" :stockables="stockables" :pagination="pagination"/>
    </SectionMain>


</template>

<script setup>

import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {usePage} from "@inertiajs/vue3";
import {computed} from "vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import PurchasesList from "../../Components/Purchases/PurchasesList.vue";


let items = computed(() => usePage().props.data.data);
let pagination = computed(() => usePage().props.data.meta);
let suppliers = computed(() => usePage().props.suppliers);
let stockables = computed(() => usePage().props.stockables);



</script>
<style>


</style>
