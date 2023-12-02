<template>

    <SectionMain>
        <BreadCrumb :items="[{name: __('appointment-types'), href: route('dashboard.appointment-types.index')}]"/>
        <AppointmentTypesList :items="items" :pagination="pagination"/>
    </SectionMain>

</template>

<script setup>
import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {usePage} from "@inertiajs/vue3";
import {computed, ref} from "vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import AppointmentTypesList from "../../Components/AppointmentTypes/AppointmentTypesList.vue";


let items = computed(() => usePage().props.data.data);
let pagination = computed(() => usePage().props.data.meta);
</script>
<style>


</style>
