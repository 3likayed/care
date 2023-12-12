<template>

    <SectionMain>
        <BreadCrumb :items="[{}]"/>
        <DoctorProductsList :items="items" :pagination="pagination" :products="products" :doctors="doctors"/>
    </SectionMain>


</template>

<script setup>

import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {usePage} from "@inertiajs/vue3";
import {computed} from "vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import DoctorProductsList from "../../Components/DoctorProducts/DoctorProductsList.vue";


let items = computed(() => usePage().props.data.data);
let pagination = computed(() => usePage().props.data.meta);
let products = computed(() => usePage().props.products);
let doctors = computed(() => usePage().props.doctors);


</script>
<style>


</style>
