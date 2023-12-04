<template>

    <SectionTitleLineWithButton :icon="mdiLockAlertOutline" :title="__('purchase-transactions')"
                                main model="purchase-transactions">
        <slot name="create">
        </slot>
        <template #create>
            <PurchaseTransactionCreate :suppliers="suppliers"/>
        </template>
    </SectionTitleLineWithButton>
    <DynamicSearch v-if="searchable" :fields="[{name:'search'},{name:'name'},{name:'email'}]"
                   model="purchase-transactions"/>
    <CardBox has-table>
        <BaseTable
            :headers="['#',{name:'name',sortable:true},{name:'email',sortable:true},'phone','address','birthday',{name:'created_at',sortable:true}]"
            :pagination="pagination"
        >
            <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
                <td data-label="# ">{{ key + 1 }}</td>
                <td :data-label="__('name')">
                    {{ item.name }}
                </td>
                <td :data-label="__('email')">
                    {{ item.email }}
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
                <td :data-label="__('birthday')">
                    {{ item.birthday }} ( {{ moment(item.birthday).fromNow(1) }} )
                </td>

                <td :data-label="__('created_at')">
                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                </td>
                <td :data-label="__('options')">
                    <TableOptions :item="item" model="purchaseTransaction" @edit="edited=item">
                        <template #edit>
                            <purchasetransactionEdit :data="edited"/>
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
import purchasetransactionEdit from "./PurchaseTransactionEdit.vue";
import moment from "moment";
import PurchaseTransactionCreate from "./PurchaseTransactionCreate.vue";
import {ref} from "vue";

let edited = ref();
let props = defineProps({
    suppliers: {
        type: Array,
        default: []
    },
    items: Array,
    searchable: Boolean,
    pagination: Object,
    searchable: {
        type: Boolean,
        default: true,
    },
})
</script>
<style>


</style>
