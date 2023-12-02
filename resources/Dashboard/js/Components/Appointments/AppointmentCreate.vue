<template>

    <CardBoxModal
        v-if="can(`appointments.create`)"
        :button-label="__('create')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__('create_field',{field:'appointment'})"
        @cancel="showCreate=false"
        @confirm="submit"
    >
        <FormField :errors="form.errors.patient_id" :label="__('patient')">
            <FormControl
                v-model="form.patient_id"
                :icon="mdiAccount"
                :options="patientOptions"
                autocomplete="patient"
                name="patient"
                required
                type="select"
                @filter="(search)=> !patients.length ? fetchPatients(search) :''"
            />
        </FormField>
        <FormField :errors="form.errors.appointment_type_id" :label="__('appointment_type')">
            <FormControl
                v-model="form.appointment_type_id"
                :icon="mdiAccount"
                :options="appointmentTypes"
                autocomplete="appointment_type"
                name="appointment_type"
                required
                type="select"
                @update:model-value="setPrice"
            />
        </FormField>
        <FormField :errors="form.errors.date" :label="__('date')">
            <FormControl
                v-model="form.date"
                :icon="mdiCalendar"
                autocomplete="date"
                name="date"
                required
                type="datetime-local"
            />
        </FormField>
        <FormField :label="__('price')">
            <FormControl
                v-model="price"
                :icon="mdiCash"
                autocomplete="price"
                is-disabled
                name="price"
                required
            />
        </FormField>
    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiAccount, mdiCalendar, mdiCash} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__} from "../../Globals.js";
import {inject, ref} from "vue";
import {Model} from "../../Utils/index.js";
import {debounce} from "lodash";
import {collect} from "collect.js";


let props = defineProps({
    data: Object,
    appointmentTypes: {
        type: Array,
        default: []

    },
    patients: {
        type: Array,
        default: []

    },
    isModal: {
        type: Boolean,
        default: true
    }
})

let showCreate = inject('showCreate');
let form = useForm({
    patient_id: props.data?.patient_id,
    appointment_type_id: props.data?.appointment_type_id,
    date: null,

});
let patientOptions = ref(props.patients);
const fetchPatients = debounce((search) => {
    if (search) {
        Model.fetch('patients', {name: search}).then(
            data => patientOptions.value = data
        )
    }

}, 500)

let price = ref();

const setPrice = (appointmentTypeId) => {
    price.value = collect(props.appointmentTypes).firstWhere('id', appointmentTypeId).price
}
const submit = () => {
    Model.submit('create', 'appointments', form)
}

</script>
<style scoped>

</style>
