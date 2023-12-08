<template>

    <CardBoxModal
        v-if="can(`salary-actions.create`)"
        :button-label="__('create')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__('create_field',{field:data.type})"
        @cancel="showCreateSalaryAction=false"
        @confirm="submit"
    >


        <FormField :errors="form.errors.amount" :label="__('amount')">
            <FormControl
                v-model="form.amount"
                :icon="mdiCash"
                :min="0"
                autocomplete="amount"
                name="amount"
            />
        </FormField>

    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiCash} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__} from "../../Globals.js";
import {inject} from "vue";
import {Model} from "../../Utils/index.js";

let props = defineProps({
    operation: String,
    data: Object,
    isModal: {
        type: Boolean,
        default: true
    }
})

let showCreateSalaryAction = inject('showCreateSalaryAction');

let form = useForm({
    employee_id: props.data.employee_id,
    amount: null,
    type: props.data.type,
});


const submit = () => {
    Model.submit('create', 'salary-actions', form, props.data.id)
}

</script>
<style scoped>

</style>
