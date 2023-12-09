<template>

    <SectionTitleLineWithButton :has-create="false"
                                :icon="mdiCart" :title="__('stocks')"
                                :visit-data="visitData"
                                main model="stocks">
    </SectionTitleLineWithButton>
    <CardBox has-table>
        <BaseTable
            :headers="headers"
            :pagination="pagination"
            :searchable="searchable"
            :sortable="sortable"
        >
            <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
                <td data-label="# ">{{ item.id }}</td>
                <td :data-label="__('purchase_id')">
                    <Link :href="Model.showLink('purchase',item.purchase.id)">
                        {{ item.purchase.id }}
                    </Link>
                </td>

                <td :data-label="__('supplier_name')">
                    <Link :href="Model.showLink('supplier',item.supplier.id)">
                        {{ item.supplier.name }}
                    </Link>
                </td>
                <td :data-label="__('product_name')">
                    {{ item.product.name }}
                </td>
                <td :data-label="__('quantity')">
                    {{ item.quantity }}
                </td>
                <td :data-label="__('quantity')">
                    {{ item.available }}
                </td>
                <td :data-label="__('exipres_at')">

                    {{ item.expires_at ? moment(item.expires_at).format('YYYY-MM-DD') : '' }}
                </td>
                <td :data-label="__('created_at')">
                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                </td>
            </tr>

        </BaseTable>
    </CardBox>
</template>

<script setup>

import CardBox from "../../Components/Sahred/CardBox.vue";
import BaseTable from "../../Components/Sahred/BaseTable.vue";
import {mdiCart} from "@mdi/js";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import moment from "moment";
import {ref} from "vue";
import {Link} from "@inertiajs/vue3"
import {Model} from "../../Utils/index.js";

let edited = ref();
let props = defineProps({
    items: Array,
    suppliers: Array,
    products: Array,
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

    {
        name: 'purchase.id',
        label: 'purchase_id',
        sortable: true,
        searchable: {name: 'purchase.id'}
    },
    {
        name: 'supplier.id',
        label: 'supplier_name',
        sortable: true,
        searchable: {name: 'supplier.id', options: props.suppliers}
    },
    {
        name: 'product.name',
        label: 'product_name',
        sortable: true,
        searchable: {name: 'product.id', options: props.products}
    },

    {name: 'quantity', sortable: true},
    {name: 'available', sortable: true},
    {name: 'expires_at', sortable: true, searchable: {type: 'date-range'}},
    {name: 'created_at', sortable: true, searchable: {type: 'date-range'}},
]
</script>
<style>


</style>
