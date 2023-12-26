<template>

    <SectionTitleLineWithButton :icon="mdiClipboardPulse" :title="__('services')" main model="services">
        <slot name="create">

        </slot>
        <template #create>
            <ProductCreate/>
        </template>
    </SectionTitleLineWithButton>
    <CardBox has-table>
        <BaseTable
            :headers="headers" :pagination="pagination"
            :searchable="searchable"
            :sortable="sortable"
        >
            <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
                <td data-label="# ">{{ item.id }}</td>
                <td :data-label="__('name')">
                    {{ item.name }}
                </td>

                <td :data-label="__('consumed')">
                    {{ item.consumed }}
                </td>
                <td :data-label="__('unit_price')">
                    {{ item.unit_price }}
                </td>


                <td :data-label="__('created_at')">
                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                </td>
                <td :data-label="__('options')">
                    <TableOptions :item="item" model="services" @edit="edited=item">
                        <template #edit>
                            <ServiceEdit :data="edited"/>
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
import {mdiClipboardPulse} from "@mdi/js";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import ServiceEdit from "./ServiceEdit.vue";
import moment from "moment";
import ProductCreate from "./ServiceCreate.vue";
import {ref} from "vue";

let edited = ref();
let props = defineProps({
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
    {name: 'name', sortable: true, searchable: true},
    {name: 'consumed', sortable: true},
    {name: 'unit_price', sortable: true},
    {name: 'created_at', sortable: true}
]
</script>
<style>


</style>
