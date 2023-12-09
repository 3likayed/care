<template>

    <SectionMain>
        <BreadCrumb :items="[{}]"/>
        <StocksList :items="items" :pagination="pagination" :products="products" :suppliers="suppliers"/>
    </SectionMain>


</template>

<script setup>

import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {usePage} from "@inertiajs/vue3";
import {computed} from "vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import StocksList from "../../Components/Stocks/StocksList.vue";


let items = computed(() => usePage().props.data.data);
let pagination = computed(() => usePage().props.data.meta);
let products = computed(() => usePage().props.products)
let suppliers = computed(() => usePage().props.suppliers)

</script>
<style>


</style>
