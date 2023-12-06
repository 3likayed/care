<template>

    <SectionTitleLineWithButton :icon="mdiLockAlertOutline" :title="__('purchases')"
                                main model="purchases">
        <slot name="create">
        </slot>
        <template #create>
            <PurchaseCreate :products="products" :suppliers="suppliers"/>
        </template>
    </SectionTitleLineWithButton>
    <DynamicSearch v-if="searchable" :fields="[{name:'search'},{name:'name'}]"
                   model="purchases"/>
    <CardBox has-table>
        <BaseTable
            :headers="['#',{name:'supplier_name',sortable:true},{name:'total',sortable:true},{name:'created_at',sortable:true},'notes']"
            :pagination="pagination"
        >
            <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
                <td data-label="# ">{{ key + 1 }}</td>

                <td :data-label="__('supplier_name')">
                    {{ item.name }}
                </td>

                <td :data-label="__('total')">
                    {{ item.total }}
                </td>

                <td :data-label="__('created_at')">
                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                </td>
                <td :data-label="__('notes')">
                    {{ item.notes }}
                </td>
                <td :data-label="__('options')">
                    <TableOptions :item="item" model="purchases" @edit="edited=item">
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
import purchasetransactionEdit from "./PurchaseEdit.vue";
import moment from "moment";
import PurchaseCreate from "./PurchaseCreate.vue";
import {ref} from "vue";

let edited = ref();
let props = defineProps({
    suppliers: {
        type: Array,
        default: []
    },
    products: {
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
