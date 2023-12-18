<template>

    <CardBoxModal v-if="can(`transactions.create`)"
                  :button-label="__('create')"
                  :has-cancel="isModal"
                  :has-errors="form.hasErrors"
                  :is-dirty="form.isDirty"
                  :is-form="true"
                  :is-modal="isModal"
                  :model-value="true"
                  :title="title()"
                  @cancel="showCreateTransaction=false"
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
        <FormField v-if="!props.data" :errors="form.errors.type" :label="__('type')">
            <FormControl
                v-model="form.type"
                :icon="mdiCashSync"
                :options="typeOptions"
                autocomplete="type"
                name="type"
                required
            />
        </FormField>
    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiCash, mdiCashSync} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__} from "../../Globals.js";
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
const title = () => {
    let title = __('create_field', {field: 'transaction'})
    if (props.data && props.model) {
        title += ' ( ' + __(props.model) + ' - ' + props.data.id + ' ) '
    }
    return title;
}
let showCreateTransaction = inject('showCreateTransaction');
let form = useForm({
    amount: props.data?.amount,
    type: props.data?.type,
});
let typeOptions = [
    {id: 'deposit', name: __('deposit')},
    {id: 'withdraw', name: __('withdraw')}
]
const submit = () => {
    if (props.model) {
        Model.submit('transaction', props.model, form, props.data.id)
    } else {
        Model.submit('create', 'transactions', form)
    }
}


</script>
<style scoped>

</style>
