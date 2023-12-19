<template>

    <SectionTitleLineWithButton :has-create="hasCreate && can('manual-transactions.create')"
                                :icon="mdiAccountCash"
                                :title="__('manual_transactions')"
                                :visit-data="visitData"
                                main
                                model="manual_transactions">
        <template #create>
            <ManualTransactionCreate :data="data"/>
        </template>
    </SectionTitleLineWithButton>
    <CardBox has-table>
        <BaseTable
            :headers="headers"
            :pagination="pagination"
            :searchable="searchable"
            :sortable="sortable"
        >
            <tr v-for="(item,key) in computedItems" class="rtl:flex-row-reverse">
                <td data-label="# ">{{ item.id }}</td>
                <td :data-label="__('type')">
                    {{ __(item.transaction.type) }}
                </td>
                <td :data-label="__('amount')">
                    {{ item.transaction.amount }}
                </td>
                <td :data-label="__('notes')">
                    {{ item.notes }}
                </td>

                <td :data-label="__('employee')">
                    <Link :href="Model.showLink('employees',item.transaction.employee.id)">
                        {{ item.transaction.employee.name }}
                    </Link>
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
import {mdiAccountCash} from "@mdi/js";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import moment from "moment";
import ManualTransactionCreate from "./ManualTransactionCreate.vue";
import {computed, ref} from "vue";
import {Link} from "@inertiajs/vue3";
import {__} from "../../Globals.js"
import {Model} from "../../Utils/index.js";


let edited = ref();

let props = defineProps({
    items: Array,
    model: String,
    data: Object,
    pagination: Object,
    visitData: Object,
    transactionableTypeOptions: Array,
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

let typeOptions = [{id: 'deposit', name: __('deposit')}, {id: 'withdraw', name: __('withdraw')}]

let headers = [
    {name: 'id', sortable: true, searchable: true},
    {name: 'transaction.type', label: 'type', sortable: true, searchable: {options: typeOptions}},
    {name: 'transaction.amount', label: 'amount', sortable: true},
    {name: 'notes', searchable: true, sortable: true},
    {name: 'transaction.employee.name', label: 'employee', sortable: true, searchable: true},
    {name: 'created_at', sortable: true, searchable: {name: 'created_at', type: 'date-range'}}]
</script>
<style>


</style>
