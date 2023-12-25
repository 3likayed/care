<template>
    <CardBoxModal  v-if="can(`salary-actions.create`)" :button-label="__('create')" :has-cancel="isModal"
                  :has-errors="form.hasErrors" :is-form="true" :is-modal="isModal" :model-value="true"
                  :title="__('create_field', { field: 'salary' })" @cancel="showCreateSalaryPay = false"
                  @confirm="submit">


        

        <FormControl 
                     v-model="salary "
                     :icon="mdiCash"
                     :min="0"
                     is-disabled
                     autocomplete="amount"
                     name="amount"/>
                     <FormField v-if=" data.current_month_loan_actions > 0"  :errors="form.errors.amount" :label="__('loan')">
                        <FormControl v-model="loan" is-disabled :icon="mdiCash" :min="0" autocomplete="amount" name="loan"/>
                    </FormField>   

                     <div v-if=" data.current_month_loan_actions > 0" class="grid grid-flow-row-dense grid-cols-3">
                        <div>
                            <input id="one" v-model="picked" type="radio" value="total_loan"/>
                            <label class="mr-4" for="one">سداد السلف بالكامل</label>
                        </div>
                        <div>
                            <input id="two" v-model="picked" type="radio" value="partial_loan"/>
                            <label class="mr-4" for="two">سداد جزئي  </label>
                        </div>
            

                    </div>
                    <FormControl v-if="picked == 'partial_loan' && data.current_month_loan_actions >0 " :max="data.current_month_loan_actions"   v-model="paid_loan"  :icon="mdiCash" :min="0" autocomplete="amount" name="paid_loan"/>



    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiCash} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__} from "../../Globals.js";
import {inject, ref,computed} from "vue";
import {Model} from "../../Utils/index.js";
import { watchEffect } from "vue";
import collect from "collect.js";

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

let picked = ref();
let salary = ref();
let paid_loan = ref ();
let loan = ref ();
let data = props.data;
let form = useForm({
    employee_id: props.data.id,
    amount: null,
});

watchEffect(()=>{
salary= data.salary.net_amount- data.current_month_withhold_actions+data.current_month_giving_actions 

if (picked.value === 'partial_loan') { 
    salary -= (paid_loan.value??0);
    loan.value = paid_loan.value ?  (loan.value - paid_loan.value) : data.current_month_loan_actions;
    
} else if (picked.value === 'total_loan')  {
    salary = salary - (data.current_month_loan_actions);
    loan.value = 0;
}
loan.value =paid_loan.value ?  data.current_month_loan_actions - paid_loan.value : data.current_month_loan_actions ;

}) 




const submit = () => {
    Model.submit('pay', 'salary-actions', form, props.data.id)
}

</script>
<style scoped></style>
