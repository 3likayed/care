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
            <AppointmentShow
                :data="computedData"/>
        </section>
        <section v-if="step===1">
            <PatientShow :data="computedData.patient"/>
        </section>
        <section v-show="step === 2">
            <AppointmentProducts :products="computedProducts"/>
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
import AppointmentProducts from "../../Components/Appointments/AppointmentProducts.vue";
import PatientShow from "../../Components/Patients/PatientShow.vue";
import AppointmentShow from "../../Components/Appointments/AppointmentShow.vue";
import {useStepStore} from "../../Stores/step.js";


let steps = ref(['data', {name: 'patient', permission: 'patients.show'}, {
    name: 'products',
    permission: 'appointment-product.show'
}]);
let step = ref(useStepStore().getStep());
let computedData = computed(() => usePage().props.data);
let computedProducts = computed(() => usePage().props.products);
let breadcrumbItems = [
    {
        name: __('appointments'),
        href: route(`dashboard.appointments.index`)
    },
    {}]


</script>
<style scoped>

</style>
