<template>

    <SectionMain>
        <BreadCrumb :items="[{name: __('specializations'), href: route('dashboard.specializations.index')}]"/>
        <SpecializationsList :items="items" :pagination="pagination"/>
    </SectionMain>

</template>

<script setup>
import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {usePage} from "@inertiajs/vue3";
import {computed, ref} from "vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import AppointmentTypesList from "../../Components/AppointmentTypes/AppointmentTypesList.vue";
import SpecializationsList from "../../Components/Specializations/SpecializationsList.vue";


let items = computed(() => usePage().props.data.data);
let pagination = computed(() => usePage().props.data.meta);
</script>
<style>


</style>
