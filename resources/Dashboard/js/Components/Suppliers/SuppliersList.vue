<template>

    <SectionTitleLineWithButton :icon="mdiTruckDelivery"
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

                <td :data-label="__('total_remaining')">
                    {{ item.total_price }}
                </td>
                <td :data-label="__('total_paid')">
                    {{ item.total_paid }}
                </td>
                <td :data-label="__('total_remaining')">
                    {{ item.total_price - item.total_paid }}
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
    {name: 'total_price', sortable: true},
    {name: 'total_paid', sortable: true},
    {name: 'total_remaining'},
    'phone', 'address',
    {name: 'created_at', sortable: true}
]
</script>
<style>


</style>
