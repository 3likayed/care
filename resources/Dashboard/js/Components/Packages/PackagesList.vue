<template>

    <SectionTitleLineWithButton :icon="mdiClipboardPulse" :title="__('packages')" main model="packages">
        <slot name="create">

        </slot>
        <template #create>
            <ProductCreate :services="services"/>
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

                <td :data-label="__('min')">
                    {{ item.min }}
                </td>
                <td :data-label="__('max')">
                    {{ item.max }}
                </td>
                <td :data-label="__('unit_price')">
                    {{ item.unit_price }}
                </td>


                <td :data-label="__('created_at')">
                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                </td>
                <td :data-label="__('options')">
                    <TableOptions :has-show="false" :item="item" model="packages" @edit="edited=item">
                        <template #edit>
                            <PackageEdit :data="edited" :services="services"/>
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
import PackageEdit from "./PackageEdit.vue";
import moment from "moment";
import ProductCreate from "./PackageCreate.vue";
import {ref} from "vue";

let edited = ref();
let props = defineProps({
    items: Array,
    services: Array,
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
    {name: 'min', sortable: true},
    {name: 'max', sortable: true},
    {name: 'unit_price', sortable: true},
    {name: 'created_at', sortable: true}
]
</script>
<style>


</style>
