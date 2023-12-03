<template>

    <CardBoxModal
        v-if="can(`appointment-types.create`)"
        :button-label="__('create')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__('create_field',{field:'appointment-type'})"
        @cancel="showCreateAppointmentType=false"
        @confirm="submit"
    >
        <FormField :errors="form.errors.name" :label="__('name')">
            <FormControl
                v-model="form.name"
                :icon="mdiAccount"
                autocomplete="name"
                name="phone"
            />
        </FormField>
        <FormField :errors="form.errors.price" :label="__('price')">
            <FormControl
                v-model="form.price"
                :icon="mdiCash"
                autocomplete="price"
                name="price"

            />
        </FormField>
    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiAccount, mdiAt, mdiCash} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__} from "../../Globals.js";
import {inject} from "vue";
import {Model} from "../../Utils/index.js";

let props = defineProps({
    operation: String,
    isModal: {
        type: Boolean,
        default: true
    }
})

let showCreateAppointmentType = inject('showCreateAppointmentType');
let form = useForm({
    name: null,
    price: null,

});
const submit = () => {
    Model.submit('create', 'appointment-types', form)
}

</script>
<style scoped>

</style>
