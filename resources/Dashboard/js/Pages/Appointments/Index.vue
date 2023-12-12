<template>
    <SectionMain>
        <BreadCrumb
            :items="[{ }]"/>
        <AppointmentsList
            :items="data.data"
            :pagination="data.meta"
        />
    </SectionMain>

</template>

<script setup>

import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {computed, ref} from "vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import AppointmentsList from "../../Components/Appointments/AppointmentsList.vue";
import {usePage} from "@inertiajs/vue3";

let daysInterval = ref()
let patients = ref([]);
let data = computed(() => usePage().props.data)

</script>
<style scoped>

</style>
