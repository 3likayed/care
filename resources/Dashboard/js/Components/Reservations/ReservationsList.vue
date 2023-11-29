<template>

    <SectionTitleLineWithButton :icon="mdiFormatListBulleted" :title="__('reservations')" main>

        <template #create>
            <slot name="create">
                <ReservationCreate  :reservationTypes="reservationTypes"/>
            </slot>

        </template>
    </SectionTitleLineWithButton>
    <DynamicSearch v-if="hasSearch"
                   :fields="searchFields"
                   model="reservations">
        <div class="col-span-full ">
            <FormField :label="__('days')" class-addon="grid md:grid-cols-3 gap-5">
                <FormControl
                    v-model="daysInterval"
                    autocomplete="search"
                    name="search"
                >
                </FormControl>
                <BaseButton :icon="mdiCalendarToday" :label="__('next')"
                            color="success"
                            @click="Search.start(Search.dateInterval({ interval:daysInterval }),'reservations',true)"/>
                <BaseButton :icon="mdiCalendarToday" :label="__('previous')"
                            color="danger"
                            @click="Search.start(Search.dateInterval({ interval:daysInterval,mode:-1 }),'reservations',true)"/>
            </FormField>
        </div>
    </DynamicSearch>
    <CardBox has-table>
        <BaseTable
            :headers="['#','patient','reservation_type','price','date','time',{name:'created_at',sortable:true}]"
            :pagination="pagination"
        >
            <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
                <td data-label="# ">{{ key + 1 }}</td>
                <td :data-label="__('patient')">
                    <Link :href="route('dashboard.patients.show',item.patient.id)">
                        {{ item.patient.name }}
                    </Link>

                </td>
                <td :data-label="__('reservation_type')">
                    {{ item.reservation_type.name }}
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
                    <TableOptions :item="item" model="reservations" @edit="edited=item">
                        <template #edit>
                            <ReservationEdit :data="edited" :reservationTypes="reservationTypes"/>
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
import {mdiCalendarToday, mdiFormatListBulleted} from "@mdi/js";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import DynamicSearch from "../../Components/DynamicSearch.vue";
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import ReservationEdit from "./ReservationEdit.vue";
import moment from "moment";
import ReservationCreate from "./ReservationCreate.vue";
import {computed, ref} from "vue";
import {Link, usePage} from "@inertiajs/vue3";
import BaseButton from "../Sahred/BaseButton.vue";
import FormControl from "../Sahred/FormControl.vue";
import FormField from "../Sahred/FormField.vue";
import {Search} from "../../Utils/index.js";


let daysInterval = ref();
let edited = ref();
let reservationTypes = computed(() => usePage().props.reservation_types);

let props = defineProps({
    data:Object,
    items: Array,
    pagination: Object,
    hasSearch: {
        type: Boolean,
        default: true,
    },
})
let searchFields = [
    {name: 'start', type: 'date'},
    {name: 'end', type: 'date'},
    {name: 'reservation_type_id', label: 'reservation-type', type: 'select', options :reservationTypes.value}
]
</script>
<style>


</style>
