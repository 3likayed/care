<template>

    <SectionTitleLineWithButton :icon="mdiCartVariant"
                                :visit-data="visitData"
                                main
                                :title="title ?? 'patient_services'"
                                model="patient-services">

        <template #create>
            <PatientServiceCreate :data="data" :patients="patients" :packages="packages"/>
        </template>
    </SectionTitleLineWithButton>
    <CardBox has-table>
        <BaseTable
            :headers="headers"
            :pagination="pagination"
            :searchable="searchable"
            :sortable="sortable"
        >
            <tr v-for="(item) in items" class="rtl:flex-row-reverse">
                <td :data-label="__('patient_name')">
                    <Link :href="Model.showLink('patients',item.patient.id)">
                        {{ item.patient.name }}
                    </Link>

                </td>
                <td :data-label="__('service_name')">
                    <Link :href="Model.showLink('services',item.service.id)">
                        {{ item.service.name }}
                    </Link>
                </td>

                <td :data-label="__('available')">
                    {{ item.available }}
                </td>
            </tr>

        </BaseTable>
    </CardBox>
</template>

<script setup>

import CardBox from "../../Components/Sahred/CardBox.vue";
import BaseTable from "../../Components/Sahred/BaseTable.vue";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import PatientServiceCreate from "./PatientServiceCreate.vue";
import {Link} from "@inertiajs/vue3";
import {Model} from "../../Utils/index.js";
import {mdiCartVariant} from "@mdi/js";

let props = defineProps({
    data: Object,
    title: String,
    packages: {
        type: Array,
        default: []
    },
    patients: {
        type: Array,
        default: []
    },
    visitData: Object,
    items: Array,
    pagination: Object,
    searchable: {
        type: Boolean,
        default: true,
    },
    sortable: {
        type: Boolean,
        default: true,
    },
})

let headers = [
    {
        name: 'patient.name',
        label: 'patient_name',
        sortable: true,
        searchable: {name: 'patient_id', options: props.patients}
    },
    {
        name: 'service.name',
        label: 'service_name',
        sortable: true,
        searchable: {name: 'service_id', options: props.packages}
    },
    {name: 'available', sortable: true},
];

</script>
<style>


</style>
