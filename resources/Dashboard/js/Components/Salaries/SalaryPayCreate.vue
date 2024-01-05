<template>
    <CardBoxModal v-if="can(`salary-actions.create`)" :button-label="__('create')" :has-cancel="isModal"
        :has-errors="form.hasErrors" :is-form="true" :is-modal="isModal" :model-value="true"
        :title="__('create_field', { field: 'salary' })" @cancel="showCreateSalaryPay = false" @confirm="submit">



        <div class="grid grid-flow-row-dense grid-cols-2 gap-5 m-5">
            <FormControl label="amount" v-model="salary" :icon="mdiCash" :min="0" is-disabled autocomplete="amount"
                name="amount" />

            <FormControl label="month" v-model="salaryMonth" />
        </div>

        <FormField v-if="data.current_month_loan_actions > 0" :errors="form.errors.amount" :label="__('loan')">
            <FormControl v-model="loan" is-disabled :icon="mdiCash" :min="0" autocomplete="amount" name="loan" />
        </FormField>

        <div v-if="data.current_month_loan_actions > 0" class="grid grid-flow-row-dense grid-cols-3">
            <div>
                <input id="one" v-model="form.picked" type="radio" value="total_loan" />
                <label class="mr-4" for="one">سداد السلف بالكامل</label>
            </div>
            <div>
                <input id="two" v-model="form.picked" type="radio" value="partial_loan" />
                <label class="mr-4" for="two">سداد جزئي </label>
            </div>


        </div>
        <FormControl v-if="form.picked == 'partial_loan' && data.current_month_loan_actions > 0"
            :max="data.current_month_loan_actions" v-model="form.paid_loan" :icon="mdiCash" :min="0" autocomplete="amount"
            name="paid_loan" />



    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import { mdiCalendar, mdiCalendarMonth, mdiCash } from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import { useForm } from "@inertiajs/vue3";
import { __ } from "../../Globals.js";
import { inject, ref, computed } from "vue";
import { Model } from "../../Utils/index.js";
import { watchEffect } from "vue";
import collect from "collect.js";
import moment from "moment";

let props = defineProps({
    operation: String,
    data: Object,
    type: String,
    isModal: {
        type: Boolean,
        default: true
    }
})
let showCreateSalaryPay = inject('showCreateSalaryPay');

let salary = ref();
let loan = ref();
let data = props.data;
console.log(data.salary_transactions);
let salaryMonth = ref();
if (data.salary_transactions.length === 0) {
    salaryMonth.value = moment().format('YYYY-MM');

}

else
    salaryMonth.value = moment(collect(data.salary_actions).firstWhere('reason','salary').date,'MM-YYYY').add('M',1).format('MM-YYYY');


// const form  = this.form
// ({
//     employee_id: props.data.id,
// });
let form = useForm({
    employee_id: props.data.id,
    paid_loan: null,
    picked: null,
});

watchEffect(() => {
    salary = data.salary.net_amount - data.current_month_withhold_actions + data.current_month_giving_actions

    if (form.picked === 'partial_loan') {
        salary -= (form.paid_loan ?? 0);
        loan.value = form.paid_loan ? (loan.value - form.paid_loan) : data.current_month_loan_actions;

    } else if (form.picked === 'total_loan') {
        salary = salary - (data.current_month_loan_actions);
        loan.value = 0;
        form.paid_loan = data.current_month_loan_actions;
    }
    loan.value = form.paid_loan ? data.current_month_loan_actions - form.paid_loan : data.current_month_loan_actions;

})

console.log(data);


const submit = () => {

    form.post(route('dashboard.salary-actions.salary-payment'), {
        preserveScroll: true,
        preserveState: (page) => Object.keys(page.props.errors).length,
    })
}

</script>
<style scoped></style>
