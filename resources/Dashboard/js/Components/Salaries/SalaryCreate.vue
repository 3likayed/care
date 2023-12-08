<template>

    <CardBoxModal
        v-if="can(`salaries.create`)"
        :button-label="__('create')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__('create_field',{field:'salary'})"
        @cancel="showCreateSalary=false"
        @confirm="submit"
    >


        <FormField :errors="form.errors.salary_amount" :label="__('salary_amount')">
            <FormControl
                v-model="form.salary_amount"
                :icon="mdiCash"
                :min="0"
                autocomplete="salary_amount"
                name="salary_amount"
            />
        </FormField>
        <FormField :errors="form.errors.insurance_amount" :label="__('insurance_amount')">
            <FormControl
                v-model="form.insurance_amount"
                :icon="mdiCash"
                :max="computedSalaryAmount"
                :min="0"
                autocomplete="insurance_amount"
                name="insurance_amount"
            />
        </FormField>
        <FormField :label="__('net_amount')">
            <FormControl
                v-model="netAmount"
                :icon="mdiCash"
                is-disabled
            />
        </FormField>

    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiCash} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm, usePage} from "@inertiajs/vue3";
import {__} from "../../Globals.js";
import {inject, ref, watchEffect} from "vue";
import {Model} from "../../Utils/index.js";

let props = defineProps({
    operation: String,
    data: Object,
    isModal: {
        type: Boolean,
        default: true
    }
})
let netAmount = ref();

let showCreateSalary = inject('showCreateSalary');
let form = useForm({
    employee_id: props.data.id,
    salary_amount: null,
    insurance_amount: null,
});
let computedSalaryAmount = ref(0)
watchEffect(() => {
    netAmount.value = form.salary_amount - form.insurance_amount;
    computedSalaryAmount.value = parseFloat(form.salary_amount);
});

const submit = () => {
    Model.submit('create', 'salaries', form, props.data.id)
}

</script>
<style scoped>

</style>
