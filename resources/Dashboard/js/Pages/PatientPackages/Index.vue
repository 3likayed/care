<template>

    <SectionMain>
        <BreadCrumb :items="[{}]"/>
        <PatientPackagesList :items="items" :packages="packages" :patients="patients" :pagination="pagination"/>
    </SectionMain>


</template>

<script setup>

import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {usePage} from "@inertiajs/vue3";
import {computed} from "vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import PatientPackagesList from "../../Components/PatientPackages/PatientPackagesList.vue";


let items = computed(() => usePage().props.data.data);
let pagination = computed(() => usePage().props.data.meta);
let packages = computed(() => usePage().props.packages);
let patients = computed(() => usePage().props.patients);
let doctors = computed(() => usePage().props.doctors);


</script>
<style>


</style>
