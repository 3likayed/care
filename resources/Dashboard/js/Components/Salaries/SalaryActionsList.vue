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
                    <td :data-label="__('status')">
                        <StatusIcon :status="item.is_confirmed ? 'completed' : 'pending'"/>
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


    
    <div class="grid lg:grid-cols-3 gap-10 lg:gap-20 mb-5 mt-5">
        <CardBoxWidget
            :icon="mdiCashMinus"
            :label="__('withhold')"
            :number="data.current_month_withhold_actions"
            color="danger"

        />
        <CardBoxWidget
            :icon="mdiCashPlus"
            :label="__('giving')"
            :number="data.current_month_giving_actions"
            color="success"

        />
        <CardBoxWidget
            :icon="mdiCashMinus"
            :label="__('loan')"
            :number="Math.abs(data.current_month_loan_actions)"
            :number-color="data.current_month_loan_actions >=0  ? 'success' : 'danger' "
            color="info"

        />
    </div>
</template>

<script setup>

import CardBox from "../../Components/Sahred/CardBox.vue";
import BaseTable from "../../Components/Sahred/BaseTable.vue";
import { mdiCashPlus, mdiLockAlertOutline, mdiPackageCheck,mdiCashMinus } from "@mdi/js";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import moment from "moment";
import SalaryCreate from "./SalaryCreate.vue";
import { ref,computed } from "vue";
import { watchEffect } from "vue";
import collect from "collect.js";
import StatusIcon from "../Sahred/StatusIcon.vue";
import CardBoxWidget from "../../Components/Sahred/CardBoxWidget.vue";


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

let headers = ['amount', 'reason','status', 'notes', 'created_at'];
let actions = props.data.salary_actions;

</script>
<style></style>
