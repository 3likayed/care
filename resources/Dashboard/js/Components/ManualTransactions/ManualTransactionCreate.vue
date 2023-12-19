<template>

    <CardBoxModal v-if="can(`manual-transactions.create`)"
                  :button-label="__('create')"
                  :has-cancel="isModal"
                  :has-errors="form.hasErrors"
                  :is-dirty="form.isDirty"
                  :is-form="true"
                  :is-modal="isModal"
                  :model-value="true"
                  :title=" __('create_field', {field: 'manual_transaction'})"
                  @cancel="showCreateManualTransaction=false"
                  @confirm="submit"
    >
        <FormField :errors="form.errors.amount" :label="__('amount')">
            <FormControl
                v-model="form.amount"
                :icon="mdiCash"
                :max="data?.max??null"
                :min="data?.min??0"
                autocomplete="amount"
                name="amount"
                required
            />
        </FormField>
        <FormField :errors="form.errors.type" :label="__('type')">
            <FormControl
                v-model="form.type"
                :icon="mdiCashSync"
                :options="typeOptions"
                autocomplete="type"
                name="type"
                required
            />
        </FormField>
        <FormField :errors="form.errors.notes" :label="__('notes')">
            <FormControl
                v-model="form.notes"
                :icon="mdiNote"
                autocomplete="notes"
                name="notes"
                required
                type="textarea"
            />
        </FormField>
    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiCash, mdiCashSync, mdiNote} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__, can} from "../../Globals.js";
import {inject} from "vue";
import {Model} from "../../Utils/index.js";

let props = defineProps({
    model: String,
    data: Object,
    isModal: {
        type: Boolean,
        default: true
    }
})
let showCreateManualTransaction = inject('showCreateManualTransaction');
let form = useForm({
    amount: props.data?.amount,
    type: props.data?.type,
    notes: props.data?.notes,
});
let typeOptions = [
    {id: 'deposit', name: __('deposit')},
    {id: 'withdraw', name: __('withdraw')}
]
const submit = () => {
    Model.submit('transaction', 'manual-transaction', form)
}


</script>
<style scoped>

</style>
