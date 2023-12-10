<script setup>
import {computed, onMounted, provide, ref} from "vue";
import {useMainStore} from "../Stores/main.js";
import * as chartConfig from "../Components/Charts/chart.config.js";
import SectionTitleLineWithButton from "../Components/Sahred/SectionTitleLineWithButton.vue";
import SectionMain from "../Components/Sahred/SectionMain.vue";
import CardBoxWidget from "../Components/Sahred/CardBoxWidget.vue";
import {mdiAccountStarOutline, mdiChartTimelineVariant, mdiDoctor, mdiNaturePeople} from "@mdi/js";
import BreadCrumb from "../Components/Sahred/BreadCrumb.vue";
import AppointmentsList from "../Components/Appointments/AppointmentsList.vue";
import AppointmentCreate from "../Components/Appointments/AppointmentCreate.vue";
import EmployeeCreate from "../Components/Employees/EmployeeCreate.vue";
import DoctorCreate from "../Components/Doctors/DoctorCreate.vue";
import PatientCreate from "../Components/Patients/PatientCreate.vue";
import moment from "moment";


const chartData = ref(null);

const fillChartData = () => {
    chartData.value = chartConfig.sampleChartData();
};

onMounted(() => {
    fillChartData();
});

const mainStore = useMainStore();
const clientBarItems = computed(() => mainStore.clients.slice(0, 4));
const transactionBarItems = computed(() => mainStore.history);

let employeeCreate = ref(false);
let doctorCreate = ref(false);
let patientCreate = ref(false);
let appointmentCreate = ref(false);
provide('showCreateEmployee', employeeCreate);
provide('showCreateDoctor', doctorCreate);
provide('showCreatePatient', patientCreate);
provide('showCreateAppointment', appointmentCreate);
let appointmentData = ref();
</script>

<template>
    <SectionMain>
        <BreadCrumb/>
        <SectionTitleLineWithButton
            :icon="mdiChartTimelineVariant"
            :title="__('home')"
            main
        />
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3 mb-6">
            <CardBoxWidget
                v-if="can('employees.show')"
                :icon="mdiAccountStarOutline"
                :label="__('employees')"
                :number="$page.props.data.employees_count"
                has-action
                @action="employeeCreate=true"
            />
            <CardBoxWidget
                v-if="can('doctors.show')"
                :icon="mdiDoctor"
                :label="__('doctors')"
                :number="$page.props.data.doctors_count"
                has-action
                @action="doctorCreate=true"
            />
            <CardBoxWidget
                v-if="can('patients.show')"
                :icon="mdiNaturePeople"
                :label="__('patients')"
                :number="$page.props.data.patients_count"
                has-action
                @action="patientCreate=true"
            />
            <CardBoxWidget
                v-if="can('appointments.show')"
                :icon="mdiAccountStarOutline"
                :label="__('today_appointments')"
                :number="$page.props.data.appointments_count"
                color="text-red-500"
                has-action
                @action="appointmentData=null;appointmentCreate=true"
            />
            <CardBoxWidget
                v-if="can('appointments.show')"
                :icon="mdiAccountStarOutline"
                :label="__('today_visits')"
                :number="$page.props.data.visits_count"
                color="text-red-500"
                has-action
                @action="appointmentData={date:moment().format('YYYY-MM-DDTHH:mm')}; appointmentCreate=true"
            />
        </div>


        <div class="space-y-14">
            <AppointmentsList v-if="can('appointments.show')"
                              :items="$page.props.appointments"
                              :searchable="false"
                              :sortable="false"
                              :title="__('today_appointments')"
                              :visit-data="{filter:{date:moment().format('YYYY-MM-DD')+'|'+moment().format('YYYY-MM-DD')}}"/>
            <AppointmentsList v-if="can(' appointments.show|doctors.show')"
                              :items="$page.props.visits"
                              :searchable="false"
                              :sortable="false"
                              :title="__('today_visits')"
            />
        </div>
        <EmployeeCreate v-if="employeeCreate"/>
        <DoctorCreate v-if="doctorCreate"/>
        <PatientCreate v-if="patientCreate"/>
        <AppointmentCreate v-if="appointmentCreate" :data="appointmentData  "/>

        <!--    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div class="flex flex-col justify-between">
                    <CardBoxTransaction
                        v-for="(transaction, index) in transactionBarItems"
                        :key="index"
                        :account="transaction.account"
                        :amount="transaction.amount"
                        :business="transaction.business"
                        :date="transaction.date"
                        :name="transaction.name"
                        :type="transaction.type"
                    />
                  </div>
                  <div class="flex flex-col justify-between">
                    <CardBoxClient
                        v-for="client in clientBarItems"
                        :key="client.id"
                        :date="client.created"
                        :login="client.login"
                        :name="client.name"
                        :progress="client.progress"
                    />
                  </div>
                </div>-->
        <!--    <SectionTitleLineWithButton :icon="mdiChartPie" title="Trends overview">
                  <BaseButton
                      :icon="mdiReload"
                      color="whiteDark"
                      @click="fillChartData"
                  />
                </SectionTitleLineWithButton>

                <CardBox class="mb-4">
                  <div v-if="chartData">
                    <line-chart :data="chartData" class="h-96"/>
                  </div>
                </CardBox>-->
    </SectionMain>
</template>
