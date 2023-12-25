
<template>
    <SectionTitleLineWithButton :icon="mdiLockAlertOutline" :title="__('salaries')" main model="salaries">
        <template #create>
            <SalaryCreate :data="data" />
        </template>
    </SectionTitleLineWithButton>
    <CardBox has-table>
        <BaseTable :headers="headers">
            <tr v-for="(item, key) in items" class="rtl:flex-row-reverse">
                <td :data-label="__('salary_amount')">
                    {{ item.salary_amount }}
                </td>
                <td :data-label="__('insurance_amount')">
                    {{ item.insurance_amount }}
                </td>
                <td :data-label="__('net_amount')">
                    {{ item.net_amount }}
                </td>
                <td :data-label="__('created_at')">
                    {{ moment(item.created_at).format('YYYY-MM-DD') }}
                </td>
            </tr>

        </BaseTable>
    </CardBox>
    <SalaryActionsList :actions="actions" :data="data" />
</template>

<script setup>

import CardBox from "../../Components/Sahred/CardBox.vue";
import BaseTable from "../../Components/Sahred/BaseTable.vue";
import { mdiLockAlertOutline } from "@mdi/js";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import moment from "moment";
import SalaryCreate from "./SalaryCreate.vue";
import SalaryActionsList from "./SalaryActionsList.vue";

import { ref } from "vue";

let edited = ref();
let props = defineProps({
    data: Object,
    items: Array,
    actions: Array,
    pagination: Object,
    searchable: {
        type: Boolean,
        default: true,
    },
})

let headers = ['salary_amount', 'insurance_amount', 'net_amount']
let items = props.data.salary ? [props.data.salary] : []
</script>
<style></style>
