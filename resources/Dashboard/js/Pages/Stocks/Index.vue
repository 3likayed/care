<template>

    <SectionMain>
        <BreadCrumb :items="[{}]"/>
        <StocksList :stockable-type-options="stockableTypeOptions" :items="items" :pagination="pagination" :products="products" :suppliers="suppliers"/>
    </SectionMain>


</template>

<script setup>

import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {usePage} from "@inertiajs/vue3";
import {computed} from "vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import StocksList from "../../Components/Stocks/StocksList.vue";
import {__} from "../../Globals.js";
import {snakeCase} from "lodash/string.js";

let page = usePage()
let items = computed(() => page.props.data.data);
let pagination = computed(() => page.props.data.meta);
let products = computed(() => page.props.products)
let suppliers = computed(() => page.props.suppliers)
let stockableTypeOptions = computed(() => page.props.stockable_type_options.map(
    (value) => ({
        id: value,
        name: __(snakeCase(value))
    }))
);


</script>
<style>


</style>
