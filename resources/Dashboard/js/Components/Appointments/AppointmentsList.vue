<script setup>

import CardBox from "../../Components/Sahred/CardBox.vue";
import BaseTable from "../../Components/Sahred/BaseTable.vue";
import {mdiCalendarToday} from "@mdi/js";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import AppointmentEdit from "./AppointmentEdit.vue";
import moment from "moment";
import AppointmentCreate from "./AppointmentCreate.vue";
import {computed, ref} from "vue";
import {Link, usePage} from "@inertiajs/vue3";
import BaseButton from "../Sahred/BaseButton.vue";
import FormControl from "../Sahred/FormControl.vue";
import {__} from "../../Globals.js";
import FormField from "../Sahred/FormField.vue";
import {Model, Search} from "../../Utils/index.js";
import StatusIcon from "../Sahred/StatusIcon.vue";

let props = defineProps({
    title: String,
    items: Array,
    pagination: Object,
    visitData: Object,
    hasCreate: {
        type: Boolean,
        default: true
    },
    sortable: {
        type: Boolean,
        default: true,
    },
    searchable: {
        type: Boolean,
        default: true,
    },
})

let daysInterval = ref();
let edited = ref();
let appointmentTypes = computed(() => usePage().props.appointment_types);
let doctors = computed(() => usePage().props.doctors);
let statusOptions = [
    {id: 'completed', name: __('completed')},
    {id: 'not_completed', name: __('not_completed')},
    {id: 'pending', name: __('pending')},
    {id: 'canceled', name: __('canceled')}
];

let headerFields = [
    {name: 'id', sortable: true, searchable: true},
    {name: 'doctor.name', label: 'doctor', sortable: true, searchable: {name: 'doctor_id', options: doctors.value}},
    {name: 'patient.name', label: 'patient', sortable: true, searchable: {name: 'patient'}},
    {name: 'appointment_type.name', label: 'appointment_type', sortable: true, searchable: {name: 'appointment_type_id', options: appointmentTypes.value}},
    {name: 'date', sortable: true, searchable: {type: 'date-range'}},
    'time',
    'total_price',
    'total_paid',
    {name: 'status', searchable: {options:statusOptions}},
    {name: 'created_at', sortable: true,searchable: {type:'date-range'}}
]
</script>

<template>

    <SectionTitleLineWithButton :has-create="hasCreate"
                                :icon="mdiCalendarToday"
                                :title="title"
                                :visit-data="visitData"
                                main
                                model="appointments">
        <template #create>
            <slot name="create">
                <AppointmentCreate :appointmentTypes="appointmentTypes" :doctors="doctors"/>
            </slot>

        </template>
    </SectionTitleLineWithButton>

    <section v-if="searchable">
        <FormField class-addon="grid md:grid-cols-2 gap-5">
            <BaseButton :icon="mdiCalendarToday" :label="__('today_appointments')"
                        color="contrast"
                        @click="Search.start(Search.dateInterval({ interval:0 }),'appointments',true)"/>
            <BaseButton :icon="mdiCalendarToday" :label="__('month_appointments')"
                        color="info"
                        @click="Search.start(Search.dateInterval({ interval:30 }),'appointments',true)"/>
        </FormField>

        <FormField :label="__('days')" class-addon="grid md:grid-cols-3 gap-5">
            <FormControl
                v-model="daysInterval"
                autocomplete="search"
                name="search"
            >
            </FormControl>
            <BaseButton :icon="mdiCalendarToday" :label="__('next')"
                        color="success"
                        @click="Search.start(Search.dateInterval({ interval:daysInterval }),'appointments',true)"/>
            <BaseButton :icon="mdiCalendarToday" :label="__('previous')"
                        color="danger"
                        @click="Search.start(Search.dateInterval({ interval:daysInterval,mode:-1 }),'appointments',true)"/>
        </FormField>
    </section>

    <CardBox has-table>
        <BaseTable
            :headers="headerFields"
            :pagination="pagination"
            :searchable="searchable"
            :sortable="sortable"
            model="appointments"
        >
            <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
                <td data-label="# ">{{ item.id }}</td>
                <td :data-label="__('doctor')">

                    <Link v-if="item.doctor" :href="route('dashboard.doctors.show',item.doctor.id)">
                        {{ item.doctor.employee.name }}
                    </Link>
                    <div v-else>
                        {{ __('no_data') }}
                    </div>
                </td>
                <td :data-label="__('patient')">
                    <Link :href="Model.showLink('patients',item.patient.id)">
                        {{ item.patient.name }}
                    </Link>
                </td>
                <td :data-label="__('appointment_type')">
                    {{ item.appointment_type.name }}
                </td>
                <td :data-label="__('date')">
                    {{ moment(item.date).format("YYYY-MM-DD") }}
                </td>
                <td :data-label="__('time')">
                    {{ moment(item.date).format("h:mm A") }}
                </td>
                <td :data-label="__('total_price')">

                    {{ item.total_price }}
                </td>
                <td :data-label="__('total_paid')">
                    {{ item.total_paid }}
                </td>
                <td :data-label="__('status')">

                    <StatusIcon :label="item.status" :status="item.status"/>
                </td>
                <td :data-label="__('created_at')">
                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                </td>
                <td :data-label="__('options')">
                    <TableOptions :has-destroy="!item.doctor_id" :has-edit="!item.doctor_id" :item="item"
                                  model="appointments" @edit="edited=item">
                        <template #edit>
                            <AppointmentEdit :appointmentTypes="appointmentTypes" :data="edited" :doctors="doctors"/>
                        </template>
                    </TableOptions>
                </td>
            </tr>

        </BaseTable>
    </CardBox>
</template>

<style>


</style>
