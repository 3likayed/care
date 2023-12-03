<template>
    <SectionMain>
        <BreadCrumb :items="breadcrumbItems"/>
        <CardBox class="mb-4">
            <StepsComponent
                v-model="step"
                :steps="steps"
            />
        </CardBox>
        <section v-if="step===0">
            <AppointmentEdit
                :appointment-types="appointmentTypes"
                :data="computedData"
                :is-modal="false"
            />
        </section>
        <section v-if="step===1">
            <PatientShow

                :data="computedData.patient"

            />
        </section>
        <section v-show="step === 2">
            <AppointmentProducts/>
        </section>
    </SectionMain>
</template>

<script setup>

import {usePage} from "@inertiajs/vue3";
import SectionMain from "../../Components/Sahred/SectionMain.vue";
import {computed, ref} from "vue";
import {__} from "../../Globals.js";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import StepsComponent from "../../Components/Sahred/StepsComponent.vue";
import CardBox from "../../Components/Sahred/CardBox.vue";
import AppointmentEdit from "../../Components/Appointments/AppointmentEdit.vue";
import AppointmentProducts from "../../Components/Appointments/AppointmentProducts.vue";
import PatientShow from "../../Components/Patients/PatientShow.vue";


let steps = ref(['data',{name:'patient',permission: 'patients.show'}, {name: 'products', permission: 'appointment-product.show'}]);
let step = ref(0);
let computedData = computed(() => usePage().props.data);
let appointmentTypes = usePage().props.appointment_types
let breadcrumbItems = [
    {
        name: __('appointments'),
        href: route(`dashboard.appointments.index`)
    },
    {
        name: computedData.value.id,
    }]


</script>
<style scoped>

</style>
