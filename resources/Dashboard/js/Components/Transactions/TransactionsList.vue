<template>

    <SectionTitleLineWithButton :has-create="hasCreate" :icon="mdiLockAlertOutline" :title="__('transactions')" main
                                model="transactions">
        <template #create>
            <TransactionCreate :data="data" :model="model"/>
        </template>
    </SectionTitleLineWithButton>
    <DynamicSearch v-if="searchable" :fields="[{name:'search'},{name:'name'},{name:'email'}]" model="transactions"/>
    <CardBox has-table>
        <BaseTable
            :headers="headers"
            :pagination="pagination"
            :sortable="sortable"
        >
            <tr v-for="(item,key) in computedItems" class="rtl:flex-row-reverse">
                <td data-label="# ">{{ item.id }}</td>
                <td :data-label="__('name')">
                    {{ item.amount }}
                </td>
                <td :data-label="__('model')">

                    <Link :href="route(`dashboard.${modelResolver(item.model.name)}.show`,item.model.id)">
                        {{ __(item.model.name) }} - {{ item.model.id }}
                    </Link>
                </td>

                <td :data-label="__('employee')">
                    {{ item.employee.name }}
                </td>
                <td :data-label="__('created_at')">
                    {{ moment(item.created_at).format('YYYY-MM-DD   |   HH:mm | A') }}
                </td>
                <!--                <td :data-label="__('options')">
                                    <TableOptions :item="item" model="transactions" @edit="edited=item">
                                        <template #edit>
                                            <PatientEdit :data="edited"/>
                                        </template>
                                    </TableOptions>
                                </td>-->
            </tr>

        </BaseTable>
    </CardBox>
</template>

<script setup>

import CardBox from "../../Components/Sahred/CardBox.vue";
import BaseTable from "../../Components/Sahred/BaseTable.vue";
import {mdiLockAlertOutline} from "@mdi/js";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import DynamicSearch from "../../Components/DynamicSearch.vue";
import moment from "moment";
import TransactionCreate from "./TransactionCreate.vue";
import {computed, ref} from "vue";
import {Link} from "@inertiajs/vue3";
import {modelResolver} from "../../Globals.js";


let edited = ref();

let props = defineProps({
    items: Array,
    model: String,
    data: Object,
    pagination: Object,
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
let computedItems = computed(() => props.items)

let typeOptions = [{id:'deposit',name:'deposit'}, {id:'withdraw',name:'withdraw'}]
let headers = [
    {name: 'id', sortable: true, searchable: true},
    {name: 'type', sortable: true, searchable: {options: typeOptions}},
    {name: 'amount', sortable: true},
    {name: 'transactionable_type', label: 'model', sortable: true},
    {name: 'employee.name', label: 'employee', sortable: true, searchable: {name: 'employee.name'}},
    {name: 'created_at', sortable: true, searchable: {name: 'created_at', type: 'date-range'}}]
</script>
<style>


</style>
