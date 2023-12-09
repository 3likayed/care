<template>

    <SectionTitleLineWithButton :icon="mdiCashCheck"
                                :title="__('purchases')"
                                :visit-data="visitData"
                                main
                                model="purchases">

        <template #create>
            <PurchaseCreate :data="data" :products="products" :suppliers="suppliers"/>
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
                <td data-label="# ">{{ item.id }}</td>

                <td :data-label="__('supplier_name')">
                    <Link :href="Model.showLink('suppliers',item.supplier.id)">
                        {{ item.supplier.name }}
                    </Link>
                </td>

                <td :data-label="__('total')">
                    {{ item.total_price }}
                </td>
                <td :data-label="__('total')">
                    {{ item.total_paid }}
                </td>
                <td :data-label="__('total')">
                    {{ item.total_remaining }}
                </td>
                <td :data-label="__('notes')">
                    {{ item.notes }}
                </td>
                <td :data-label="__('created_at')">
                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                </td>
                <td :data-label="__('options')">
                    <TableOptions :item="item" model="purchases" @edit="edited=item">
                        <template #edit>
                            <!--                            <purchasetransactionEdit :data="edited"/>-->
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
import moment from "moment";
import PurchaseCreate from "./PurchaseCreate.vue";
import {ref} from "vue";
import {Link} from "@inertiajs/vue3";
import {Model} from "../../Utils/index.js";
import {mdiCashCheck} from "@mdi/js";

let edited = ref();
let props = defineProps({
    data: Object,
    suppliers: {
        type: Array,
        default: []
    },
    products: {
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
    {name: 'id', sortable: true, searchable: true},
    {
        label: 'supplier_name',
        name: 'supplier.name',
        sortable: true,
        searchable: {name: 'supplier.id', options: props.suppliers}
    },
    {name: 'total_price', sortable: true},
    {name: 'transactions_sum_amount', label: 'total_paid', sortable: true},
    {name: 'total_remaining', sortable: true},
    {name: 'notes', searchable: true},
    {name: 'created_at', sortable: true, searchable: {name: 'created_at', type: 'date-range'}}
];
</script>
<style>


</style>
