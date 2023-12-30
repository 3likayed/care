<template>

    <SectionMain>
        <BreadCrumb :items="[{}]"/>
        <PatientServicesList :items="items" :packages="packages" :pagination="pagination"/>
    </SectionMain>


</template>

<script setup>

import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {usePage} from "@inertiajs/vue3";
import {computed} from "vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import PatientServicesList from "../../Components/PatientServices/PatientServicesList.vue";


let items = computed(() => usePage().props.data.data);
let pagination = computed(() => usePage().props.data.meta);
let packages = computed(() => usePage().props.packages);
let doctors = computed(() => usePage().props.doctors);


</script>
<style>


</style>
