<template>
    <SectionMain>
        <BreadCrumb :items="breadcrumbItems"/>
        <AppointmentsList
            :has-create="false"
            :items="[computedData]"
            :searchable="false"
            :sortable="false"
            title="details"/>
        <CardBox class="my-4">
            <StepsComponent
                v-model="step"
                :steps="steps"
            />
        </CardBox>
        <section v-if="step===0" class="space-y-5">

            <AppointmentEdit
                :appointment-types="$page.props.appointment_types"
                :data="computedData"
                :doctors="$page.props.doctors"
                :is-disabled="true"
                :is-modal="false"
                :title="__('field_data',{field:'appointment'})"/>
        </section>
        <section v-if="step===1">
            <PatientShow :data="computedData.patient"/>
        </section>
        <section v-show="step === 2">
            <AppointmentProductsList
                :data="{appointment_id:computedData.id}"
                :has-create="canCreateProduct"
                :items="computedData.appointment_products"
                :products="computedProducts"
                :searchable="false"
                :sortable="false"/>
        </section>
        <section v-show="step === 3">
            <TransactionsList
                :data="{id:computedData.id , max:computedData.total_remaining}"
                :has-create="computedData.total_remaining>0"
                :items="computedData.transactions"
                :searchable="false"
                :sortable="false"
                :visit-data="{filter:{transactionable_type:'Appointment',transactionable_id:computedData.id}}"
                model="appointment"
            />
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
import {useStepStore} from "../../Stores/step.js";
import AppointmentProductsList from "../../Components/AppointmentProducts/AppointmentProductsList.vue";
import {collect} from "collect.js";
import AppointmentEdit from "../../Components/Appointments/AppointmentEdit.vue";
import AppointmentsList from "../../Components/Appointments/AppointmentsList.vue";
import TransactionsList from "../../Components/Transactions/TransactionsList.vue";


let steps = ref(['data', {
    name: 'patient',
    permission: 'patients.show'
}, {
    name: 'products',
    permission: 'appointment-products.show'
},
    {
        name: 'transactions',
        permission: 'transactions.show'
    },
]);
let step = ref(useStepStore().getStep());
let computedData = computed(() => usePage().props.data);

let computedProducts = computed(() =>
    collect(usePage().props.products)
        .whereNotIn('id', collect(computedData.value.appointment_products).pluck('product.id').all()
        ).all()
);
let canCreateProduct = computed(() => usePage().props.auth.doctor?.id === computedData.value.doctor_id)
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
