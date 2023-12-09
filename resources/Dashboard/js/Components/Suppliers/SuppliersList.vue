<template>

    <SectionTitleLineWithButton :icon="mdiTruckDelivery"
                                :title="__('suppliers')"
                                :visit-data="visitData"
                                main
                                model="suppliers">
        <slot name="create">

        </slot>
        <template #create>
            <supplierCreate/>
        </template>
    </SectionTitleLineWithButton>
    <CardBox has-table>
        <BaseTable
            :headers="headers"
            :pagination="pagination"
        >
            <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
                <td data-label="# ">{{ item.id }}</td>
                <td :data-label="__('name')">
                    {{ item.name }}
                </td>


                <td :data-label="__('supplier_credit')">
                    {{ item.transactions_sum_amount }}
                </td>
                <td :data-label="__('total_remaining')">
                    {{ item.purchases_sum_total_remaining }}
                </td>
                <td :data-label="__('phone')">

                    <ul class="list-decimal">
                        <li v-for="(phone,key) in item.phone">
                            {{ phone }}
                        </li>
                    </ul>
                </td>
                <td :data-label="__('address')">
                    <ul class="list-decimal">
                        <li v-for="(address,key) in item.address">
                            {{ address }}
                        </li>
                    </ul>
                </td>

                <td :data-label="__('created_at')">
                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                </td>
                <td :data-label="__('options')">
                    <TableOptions :item="item" model="suppliers" @edit="edited=item">
                        <template #edit>
                            <supplierEdit :data="edited"/>
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
import {mdiTruckDelivery} from "@mdi/js";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import supplierEdit from "./SupplierEdit.vue";
import moment from "moment";
import supplierCreate from "./SupplierCreate.vue";
import {ref} from "vue";

let edited = ref();
let props = defineProps({
    items: Array,
    pagination: Object,
    visitData: Object,
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
    {name: 'id', sortable: true, searchable: true},
    {name: 'name', sortable: true, searchable: true},
    {name: 'transactions_sum_amount', label: 'total_paid', sortable: true},
    {name: 'purchases_sum_total_remaining', label: 'total_remaining', sortable: true},
    'phone', 'address', 'created_at']
</script>
<style>


</style>
