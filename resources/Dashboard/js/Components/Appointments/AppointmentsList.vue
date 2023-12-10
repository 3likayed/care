<script setup>

import CardBox from "../../Components/Sahred/CardBox.vue";
import BaseTable from "../../Components/Sahred/BaseTable.vue";
import {mdiCalendarToday, mdiFormatListBulleted} from "@mdi/js";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import AppointmentEdit from "./AppointmentEdit.vue";
import moment from "moment";
import AppointmentCreate from "./AppointmentCreate.vue";
import {computed, ref} from "vue";
import {Link, usePage} from "@inertiajs/vue3";


let daysInterval = ref();
let edited = ref();
let appointmentTypes = computed(() => usePage().props.appointment_types);
let doctors = computed(() => usePage().props.doctors);

let props = defineProps({
    title: String,
    items: Array,
    pagination: Object,
    visitData: Object,
    sortable: {
        type: Boolean,
        default: true,
    },
    searchable: {
        type: Boolean,
        default: true,
    },
})

let headerFields = [
    {name: 'id', sortable: true, searchable: true},
    {name: 'doctor.name', label: 'doctor', sortable: true},
    {name: 'patient.name', label: 'patient', sortable: true, searchable: {name: 'patient'}},
    {
        name: 'appointment_type.name',
        label: 'appointment_type',
        sortable: true,
        searchable: {name: 'appointment_type_id', options: appointmentTypes.value}
    },
    {name: 'price', sortable: true},
    {name: 'date', sortable: true, searchable: {type: 'date-range'}},
    'time',
    {name: 'created_at', sortable: true,}]
</script>

<template>

    <SectionTitleLineWithButton :icon="mdiCalendarToday"
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
                    <Link :href="route('dashboard.patients.show',item.patient.id)">
                        {{ item.patient.name }}
                    </Link>
                </td>
                <td :data-label="__('appointment_type')">
                    {{ item.appointment_type.name }}
                </td>
                <td :data-label="__('price')">

                    {{ item.price }}
                </td>
                <td :data-label="__('date')">
                    {{ moment(item.date).format("YYYY-MM-DD") }}
                </td>
                <td :data-label="__('time')">
                    {{ moment(item.date).format("h:mm A") }}
                </td>
                <td :data-label="__('created_at')">
                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                </td>
                <td :data-label="__('options')">
                    <TableOptions :item="item" model="appointments" @edit="edited=item">
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
