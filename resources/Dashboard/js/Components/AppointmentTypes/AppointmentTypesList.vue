<template>

    <SectionTitleLineWithButton model="appointment-types"  :icon="mdiLockAlertOutline" :title="__('appointment-types')" main>
        <slot name="create">

        </slot>
        <template #create>
            <CreateAppointmentType/>
        </template>
    </SectionTitleLineWithButton>
    <DynamicSearch v-if="searchable" :fields="[{name:'name'}]" model="appointment-types"/>
    <CardBox has-table>
        <BaseTable
            :headers="['#',{name:'name',sortable:true},{name:'price',sortable:true},{name:'created_at',sortable:true}]"
            :pagination="pagination"
        >
            <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
                <td data-label="# ">{{ key + 1 }}</td>
                <td :data-label="__('name')">
                    {{ item.name }}
                </td>
                <td :data-label="__('price')">
                    {{ item.price }}
                </td>

                <td :data-label="__('created_at')">
                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                </td>
                <td :data-label="__('options')">
                    <TableOptions :has-show="false" :item="item" model="appointment-types" @edit="edited=item">
                        <template #edit>
                            <EditAppointmentType :data="edited"/>
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
import EditAppointmentType from "./AppointmentTypeEdit.vue";
import CreateAppointmentType from "./AppointmentTypeCreate.vue";
import moment from "moment";

let props = defineProps({
    items: Array,
    pagination: Object,
    searchable: {
        type: Boolean,
        default: true,
    },
})
</script>
<style>


</style>
