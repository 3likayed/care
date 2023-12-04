<template>
    <SectionMain>
        <BreadCrumb
            :items="[{name: __('patients'), href: route(`dashboard.patients.index`)},{name: data.name, href: route(`dashboard.patients.show`, data.id)}]"/>
        <CardBox class="mb-4">
            <StepsComponent
                v-model="step"
                :steps="steps"
            />
        </CardBox>
        <section v-if="step===0">
            <PatientShow
                :data="data"
                :is-modal="false"
            />
        </section>
        <section v-if="step===1">
            <PatientEdit
                :data="data"
                :is-modal="false"
            />
        </section>
        <section v-show="step === 2">
            <AppointmentsList
                :searchable="false"
                :items="data.appointments"
                :sortable="false"
            >
                <template #create>
                    <AppointmentCreate :appointmentTypes="appointmentTypes" :data="{patient_id:data.id}"
                                       :patients="[data]"/>
                </template>
            </AppointmentsList>
        </section>
        <!--
            <section v-show="step === 1">
              <PostDetailsList :data="data"/>
            </section>
        -->
        <!--    <section v-show="step === 1">
              <ProjectsList :projects="patient.projects"/>
            </section>-->
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
import PatientEdit from "../../Components/Patients/PatientEdit.vue";
import AppointmentsList from "../../Components/Appointments/AppointmentsList.vue";
import AppointmentCreate from "../../Components/Appointments/AppointmentCreate.vue";
import PatientShow from "../../Components/Patients/PatientShow.vue";


let steps = ref([__('data'), __('edit'), __('appointments')]);
let step = ref(0);

let data = computed(() => usePage().props.data);
let appointmentTypes = usePage().props.appointment_types;

</script>
<style scoped>

</style>
