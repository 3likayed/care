<script setup>
import {computed, onMounted, provide, ref} from "vue";
import {useMainStore} from "../Stores/main.js";
import * as chartConfig from "../Components/Charts/chart.config.js";
import SectionTitleLineWithButton from "../Components/Sahred/SectionTitleLineWithButton.vue";
import SectionMain from "../Components/Sahred/SectionMain.vue";
import CardBoxWidget from "../Components/Sahred/CardBoxWidget.vue";
import {mdiAccountStarOutline, mdiChartTimelineVariant} from "@mdi/js";
import BreadCrumb from "../Components/Sahred/BreadCrumb.vue";
import AppointmentsList from "../Components/Appointments/AppointmentsList.vue";
import EmployeeCreate from "../Components/Employees/EmployeeCreate.vue";
import DoctorCreate from "../Components/Doctors/DoctorCreate.vue";

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
provide('showCreateEmployee', employeeCreate );
provide('showCreateDoctor', doctorCreate );
</script>

<template>
    <SectionMain>
        <BreadCrumb/>
        <SectionTitleLineWithButton
            :icon="mdiChartTimelineVariant"
            :title="__('home')"
            main
        />
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6">
            <CardBoxWidget
                v-if="can('employees.show')"
                :icon="mdiAccountStarOutline"
                :label="__('data')"
                :number="$page.props.data.employees_count"
                color="text-red-500"
                has-action
                @action="employeeCreate=true"
            />
            <CardBoxWidget
                v-if="can('doctors.show')"
                :icon="mdiAccountStarOutline"
                :label="__('data')"
                :number="$page.props.data.employees_count"
                color="text-red-500"
                has-action
                @action="doctorCreate=true"
            />
        </div>


        <div class="space-y-14">
            <AppointmentsList :has-search="false"
                              :items="$page.props.appointments"
                              :sortable="false"
                              :title="__('today_appointments')"/>
            <AppointmentsList :has-search="false"
                              :items="$page.props.visits"
                              :sortable="false"
                              :title="__('today_visits')"/>
        </div>
        <EmployeeCreate v-if="employeeCreate"/>
        <DoctorCreate v-if="doctorCreate"/>
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
