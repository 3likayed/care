<template>
    <div class="mt-20">
        <CardBox has-table>
            <BaseTable :headers="headers">
                <tr v-for="(item, key) in actions" class="rtl:flex-row-reverse">
                    <td :data-label="__('amount')">
                        {{ item.amount }}
                    </td>
                    <td :data-label="__('reason')">
                        {{ item.reason }}
                    </td>
                    <td :data-label="__('notes')">
                        {{ item.notes }}
                    </td>
                    <td :data-label="__('created_at')">
                        {{ moment(item.created_at).format('YYYY-MM-DD') }}
                    </td>
                </tr>

            </BaseTable>
        </CardBox>
    </div>


    <div class=" mt-6 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h1>total actions for this month </h1>
        <p>total withold = </p>
        <p>total giving = </p>
        <p>total loan = </p>
    </div>
</template>

<script setup>

import CardBox from "../../Components/Sahred/CardBox.vue";
import BaseTable from "../../Components/Sahred/BaseTable.vue";
import { mdiLockAlertOutline } from "@mdi/js";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import moment from "moment";
import SalaryCreate from "./SalaryCreate.vue";
import { ref } from "vue";

let edited = ref();
let props = defineProps({
    data: Object,
    actions: Array,
    pagination: Object,
    searchable: {
        type: Boolean,
        default: true,
    },
})

let headers = ['amount', 'reason', 'notes', 'created_at']


</script>
<style></style>
