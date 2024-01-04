<template>

    <SectionTitleLineWithButton :icon="mdiLockAlertOutline" :title="__('patients')" main model="patients">
        <template #create>
            <PatientCreate/>
        </template>
    </SectionTitleLineWithButton>

    <CardBox has-table>
        <BaseTable
            :headers="headers"
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
                    <TableOptions :item="item" model="patients" @edit="edited=item">
                        <template #edit>
                            <PatientEdit :data="edited"/>
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
import DynamicSearch from "../../Components/DynamicSearch.vue";
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import PatientEdit from "./PatientEdit.vue";
import moment from "moment";
import PatientCreate from "./PatientCreate.vue";
import {ref} from "vue";
import {mdiLockAlertOutline} from "@mdi/js";

let edited = ref();
let props = defineProps({
    items: Array,
    pagination: Object,
    searchable: {
        type: Boolean,
        default: true,
    },
})
let headers = [{name: 'id', sortable: true, searchable: true},
    {name: 'name', sortable: true, searchable: true},
    {name: 'email', sortable: true, searchable: true},
    {name: 'phone', searchable: true},
    {name: 'address', searchable: true},
    {name: 'birthday', sortable: true, searchable: {type: 'date-range'}},
    {name: 'created_at', sortable: true, searchable: {type: 'date-range'}}]
</script>
<style>


</style>
