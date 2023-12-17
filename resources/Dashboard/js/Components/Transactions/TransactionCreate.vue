<template>

    <CardBoxModal v-if="can(`transactions.create`)"
                  :button-label="__('create')"
                  :has-cancel="isModal"
                  :has-errors="form.hasErrors"
                  :is-dirty="form.isDirty"
                  :is-form="true"
                  :is-modal="isModal"
                  :model-value="true"
                  :title="__('create_field',{field:'transaction'}) +' ( '+ __(model) +' - ' +data.id +' ) ' "
                  @cancel="showCreateTransaction=false"
                  @confirm="submit"
    >
        <FormField :errors="form.errors.amount" :label="__('amount')">
            <FormControl
                v-model="form.amount"
                :icon="mdiCash"
                :max="data.max"
                :min="0"
                autocomplete="amount"
                name="amount"
                required
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
    model: String,
    data: Object,
    isModal: {
        type: Boolean,
        default: true
    }
})

let showCreateTransaction = inject('showCreateTransaction');
let form = useForm({
    amount: props.data?.amount,
});
const submit = () => {
    Model.submit('transaction', props.model, form, props.data.id)
}


</script>
<style scoped>

</style>
