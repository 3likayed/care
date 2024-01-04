<template>
    <SectionMain>
        <BreadCrumb :items="breadcrumbItems"/>
        <AppointmentsList
            :has-create="false"
            :items="[computedData]"
            :searchable="false"
            :sortable="false"
            :visit-data="{filter:{id:computedData.id}}"
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
            <AppointmentServicesList
                :data="{appointment_id:computedData.id}"
                :has-create="canCreateService"
                :items="computedData.appointment_servicess"
                :searchable="false"
                :services="computedServices"
                :sortable="false"
                :tools="computedTools"/>
        </section>
        <section v-show="step === 4">
            <div class="grid lg:grid-cols-3 gap-10 lg:gap-20 mb-5">
                <CardBoxWidget
                    :icon="mdiCash"
                    :label="__('total_price')"
                    :number="computedData.total_price"
                    color="success"

                />
                <CardBoxWidget
                    :icon="mdiCashPlus"
                    :label="__('total_paid')"
                    :number="computedData.total_paid"
                    color="info"

                />
                <CardBoxWidget
                    :icon="mdiCashMinus"
                    :label="__('total_remaining')"
                    :number="computedData.total_remaining"
                    color="danger"

                />

            </div>
            <TransactionsList
                :data="{id:computedData.id , max:computedData.total_remaining}"
                :has-create="computedData.status !== 'completed' "
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
import {mdiCash, mdiCashMinus, mdiCashPlus} from "@mdi/js";
import CardBoxWidget from "../../Components/Sahred/CardBoxWidget.vue";
import AppointmentServicesList from "../../Components/AppointmentServices/AppointmentServicesList.vue";


let steps = ref(['data',
    {
        name: 'patient',
        permission: 'patients.show'
    },
    {
        name: 'products',
        permission: 'appointment-products.show'
    },
    {
        name: 'services',
        permission: 'appointment-services.show'
    },
    {
        name: 'transactions',
        permission: 'transactions.show'
    },
]);
let step = ref(useStepStore().getStep());
let computedData = computed(() => usePage().props.data);
let computedTools = computed(() => usePage().props.tools)
let computedProducts = computed(() =>
    collect(usePage().props.products)
        .whereNotIn('id', collect(computedData.value.appointment_products).pluck('product.id').all()
        ).all()
);
let canCreateProduct = computed(() => usePage().props.auth.doctor?.id === computedData.value.doctor_id && computedData.value.status === 'not_completed')


let computedServices = computed(() =>
    collect(usePage().props.services)
        .whereNotIn('id', collect(computedData.value.appointment_services).pluck('service.id').all()
        ).all()
);

let canCreateService = computed(() => usePage().props.auth.doctor?.id === computedData.value.doctor_id && computedData.value.status === 'not_completed')
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
