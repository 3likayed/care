<template>

    <SectionTitleLineWithButton :icon="mdiStoreCheck" :title="__('products')" main>
        <slot name="create">

        </slot>
        <template #create>
            <productCreate/>
        </template>
    </SectionTitleLineWithButton>
    <DynamicSearch v-if="hasSearch" :fields="[{name:'search'},{name:'name'}]" model="products"/>
    <CardBox has-table>
        <BaseTable
            :headers="['#',{name:'name',sortable:true},{name:'quantity',sortable:true},{name:'created_at',sortable:true}]"
            :pagination="pagination"
        >
            <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
                <td data-label="# ">{{ key + 1 }}</td>
                <td :data-label="__('name')">
                    {{ item.name }}
                </td>
               
                <td :data-label="__('quantity')">
                    {{ item.quantity }}
                </td>
                

                <td :data-label="__('created_at')">
                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                </td>
                <td :data-label="__('options')">
                    <TableOptions :item="item" model="products" @edit="edited=item">
                        <template #edit>
                            <productEdit :data="edited"/>
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
import {mdiLockAlertOutline, mdiReproduction, mdiStoreCheck} from "@mdi/js";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import DynamicSearch from "../../Components/DynamicSearch.vue";
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import productEdit from "./ProductEdit.vue";
import moment from "moment";
import productCreate from "./ProductCreate.vue";
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
