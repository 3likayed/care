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
            <AppointmentProductsList :data="{appointment_id:computedData.id}"
                                     :items="computedData.appointment_products"
                                     :products="computedProducts"
                                     :searchable="false"
                                     :sortable="false"/>
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
import PatientShow from "../../Components/Patients/PatientShow.vue";
import AppointmentShow from "../../Components/Appointments/AppointmentShow.vue";
import {useStepStore} from "../../Stores/step.js";
import AppointmentProductsList from "../../Components/AppointmentProducts/AppointmentProductsList.vue";
import {collect} from "collect.js";


let steps = ref(['data', {name: 'patient', permission: 'patients.show'}, {
    name: 'products',
    permission: 'appointment-products.show'
}]);
let step = ref(useStepStore().getStep());
let computedData = computed(() => usePage().props.data);

let computedProducts = computed(() =>
    collect(usePage().props.products)
        .whereNotIn('id', collect(computedData.value.appointment_products).pluck('product.id').all()
        ).all()
);
let breadcrumbItems = [
    {
        name: __('appointments'),
        href: route(`dashboard.appointments.index`)
    },
    {}
]


</script>
<style scoped>

</style>
