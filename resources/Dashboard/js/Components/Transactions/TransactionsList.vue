<template>

    <SectionTitleLineWithButton :create-permission="`${modelResolver(model)}.transactions`"
                                :has-create="hasCreate"
                                :icon="mdiSafe"
                                primary-model="transaction"
                                :model="model"
                                :title="__('transactions')"
                                :visit-data="visitData"
                                main>
        <template #create>
            <TransactionCreate :data="data" :model="model"/>
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
                    {{ __(item.type) }}
                </td>
                <td :data-label="__('amount')">
                    {{ item.amount }}
                </td>
                <td :data-label="__('model_name')">
                    {{ __(item.model.name) }}
                </td>
                <td :data-label="__('model_id')">

                    <Link :href="route(`dashboard.${modelResolver(item.model.name)}.show`,item.model.id)">
                        {{ item.name }}
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
import {mdiSafe} from "@mdi/js";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import moment from "moment";
import TransactionCreate from "./TransactionCreate.vue";
import {computed, ref} from "vue";
import {Link} from "@inertiajs/vue3";
import {__, modelResolver} from "../../Globals.js"


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
    {name: 'type', sortable: true, searchable: {options: typeOptions}},
    {name: 'amount', sortable: true},
    {
        name: 'transactionable_type',
        label: 'model_type',
        sortable: true,
        searchable: {options: props.transactionableTypeOptions}
    },
    {name: 'transactionable_id', label: 'model_id', sortable: true, searchable: true},
    {name: 'employee.name', label: 'employee', sortable: true, searchable: {name: 'employee.name'}},
    {name: 'created_at', sortable: true, searchable: {name: 'created_at', type: 'date-range'}}]
</script>
<style>


</style>
