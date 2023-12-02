<template>

    <SectionTitleLineWithButton :icon="mdiLockAlertOutline" :title="__('suppliers')" main>
        <slot name="create">

        </slot>
        <template #create>
            <supplierCreate/>
        </template>
    </SectionTitleLineWithButton>
    <DynamicSearch v-if="hasSearch" :fields="[{name:'search'},{name:'name'}]" model="suppliers"/>
    <CardBox has-table>
        <BaseTable
            :headers="['#',{name:'name',sortable:true},'phone','address',{name:'supplier_credit',sortable:true},'created_at']"
            :pagination="pagination"
        >
            <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
                <td data-label="# ">{{ key + 1 }}</td>
                <td :data-label="__('name')">
                    {{ item.name }}
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
                <td :data-label="__('supplier_credit')">
                    {{ item.supplier_credit }}
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
import {mdiLockAlertOutline} from "@mdi/js";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import DynamicSearch from "../../Components/DynamicSearch.vue";
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import supplierEdit from "./SupplierEdit.vue";
import moment from "moment";
import supplierCreate from "./SupplierCreate.vue";
import {ref} from "vue";

let edited = ref();
let props = defineProps({
    items: Array,
    pagination: Object,
    hasSearch: {
        type: Boolean,
        default: true,
    },
})
</script>
<style>


</style>
