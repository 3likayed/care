<template>

    <SectionMain>
        <BreadCrumb :items="[{name: __('patients'), href: route('dashboard.reservation-types.index')}]"/>
        <ReservationTypesList :items="items" :pagination="pagination"/>
    </SectionMain>

</template>

<script setup>
import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {usePage} from "@inertiajs/vue3";
import {computed, ref} from "vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import ReservationTypesList from "../../Components/ReservationTypes/ReservationTypesList.vue";


let items = computed(() => usePage().props.data.data);
let pagination = computed(() => usePage().props.data.meta);
</script>
<style>


</style>
