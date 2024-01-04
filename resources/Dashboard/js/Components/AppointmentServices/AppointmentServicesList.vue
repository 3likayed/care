<template>

    <SectionTitleLineWithButton :has-create="hasCreate"
                                :icon="mdiTruckDelivery"
                                :visit-data="visitData"
                                main
                                model="appointment-services">

        <template #create>
            <AppointmentServiceCreate :data="data" :tools="tools" :services="services"/>
        </template>
    </SectionTitleLineWithButton>
    <!--    <DynamicSearch v-if="searchable" :fields="[{name:'search'},{name:'name'}]"
                       model="purchases"/>-->
    <CardBox has-table>
        <BaseTable
            :headers="headers"
            :pagination="pagination"
            :searchable="searchable"
            :sortable="sortable"
        >
            <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
                <td :data-label="__('service')">
                    <Link :href="Model.showLink('services',item.service.id)">
                        {{ item.service.name }}
                    </Link>
                </td>
                <td :data-label="__('service')">
                    <Link :href="Model.showLink('appointments',item.appointment.id)">
                        {{ item.appointment.name }}
                    </Link>
                </td>
                <td :data-label="__('quantity')">
                    {{ item.quantity }}
                </td>
                <td :data-label="__('unit_price')">
                    {{ item.unit_price }}
                </td>
                <td :data-label="__('total_price')">
                    {{ item.total_price }}
                </td>
                <td>

                    <TableOptions :has-show="false" :item="item" model="appointment-services" @edit="edited=item">
                        <template #edit>
                            <AppointmentServiceEdit :data="edited"/>
                        </template>
                    </TableOptions>
                </td>

            </tr>

        </BaseTable>
    </CardBox>
</template>

<script setup>

import CardBox from "../../Components/Sahred/CardBox.vue";
import BaseTable from "../../Components/Sahred/BaseTable.vue";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import {ref} from "vue";
import {mdiTruckDelivery} from "@mdi/js";
import AppointmentServiceCreate from "./AppointmentServiceCreate.vue";
import {Link} from "@inertiajs/vue3";
import {Model} from "../../Utils/index.js";
import AppointmentServiceEdit from "./AppointmentServiceEdit.vue";

let edited = ref();
let props = defineProps({
    data: Object,
    services: {
        type: Array,
        default: []
    },
    tools: {
        type: Array,
        default: []
    },
    visitData: Object,
    hasCreate: {
        type: Boolean,
        default: true
    },
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
    {name: 'service.name', label: 'service', sortable: true, searchable: {name: 'service.id', options: props.services}},
    {name: 'appointment.id', label: 'appointment', sortable: true, searchable: {name: 'appointment.id'}},
    {name: 'quantity', sortable: true},
    {name: 'unit_price', sortable: true},
    {name: 'total_price', sortable: true}
];
</script>
<style>


</style>
