<template>
    <CardBoxModal :is-dirty="form.isDirty" v-if="can(`salary-actions.create`)" :button-label="__('create')" :has-cancel="isModal"
                  :has-errors="form.hasErrors" :is-form="true" :is-modal="isModal" :model-value="true"
                  :title="__('create_field', { field: type })" @cancel="showCreateSalaryAction = false"
                  @confirm="submit">

 
        <FormField v-if="type != 'salary'" :errors="form.errors.amount" :label="__('amount')">
            <FormControl v-model="form.amount" :icon="mdiCash" :min="0" autocomplete="amount" name="amount"/>
        </FormField>
        <div v-if="type == 'giving'" class="grid grid-flow-row-dense grid-cols-3">
            <div>
                <input id="one" v-model="form.picked" type="radio" value="now"/>
                <label class="mr-4" for="one">إعطاء المنحة فوري</label>
            </div>
            <div>
                <input id="two" v-model="form.picked" type="radio" value="later"/>
                <label class="mr-4" for="two">تأجيل لحين القبض</label>
            </div>


        </div>




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

const picked = ref();

let showCreateSalaryAction = inject('showCreateSalaryAction');

  
let form = useForm({
    employee_id: props.data.id,
    amount: null,
    reason: props.type,
    picked: 'other',
});


const submit = () => {
    Model.submit('create', 'salary-actions', form, props.data.id)
}

</script>
<style scoped></style>