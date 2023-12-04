<template>

    <CardBoxModal
        v-if="can(`appointments.edit`)"
        :button-label="__('edit')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__('edit_field',{field:'appointment'})"
        @cancel="showEdit=false"
        @confirm="submit();"
    >
        <FormField :errors="form.errors.patient_id" :label="__('patient')">
            <FormControl
                v-model="computedData.patient_id"
                :icon="mdiAccount"
                :options="[computedData.patient]"
                autocomplete="patient"
                is-disabled
                name="patient"
                required
                type="select"
            />
        </FormField>
        <FormField :errors="form.errors.appointment_type_id" :label="__('appointment_type')">
            <FormControl
                v-model="form.appointment_type_id"
                :icon="mdiAccount"
                :options="appointmentTypes"
                autocomplete="appointment_type_id"
                name="appointment_type_id"
                required
                type="select"
            />
        </FormField>
        <FormField :errors="form.errors.date" :label="__('date')">
            <FormControl
                v-model="form.date"
                inline
                :icon="mdiCalendar"
                autocomplete="date"
                name="date"
                required
                type="datetime"
            />
        </FormField>
        <FormField :errors="form.errors.doctor_id" :label="__('doctor')">
            <FormControl
                v-model="form.doctor_id"
                :icon="mdiAccount"
                :is-disabled="!moment(form.date).isSame(moment(),'day')"
                :model-value="!moment(form.date).isSame(moment(),'day') ? null : form.doctor_id"
                :options="doctors"
                autocomplete="doctor_id"
                name="doctor_id"
                required
                type="select"
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
import {computed, inject, ref} from "vue";
import {Model} from "../../Utils/index.js";
import moment from "moment";
import {collect} from "collect.js";


let props = defineProps({
    data: Object,
    appointmentTypes: {
        type: Array,
        default: []

    },
    doctors: {
        type: Array,
        default: []

    },
    isModal: {
        type: Boolean,
        default: true
    }
})

let computedData = computed(() => props.data)
let showEdit = props.isModal ? inject('showEdit') : true;
let form = useForm({
    appointment_type_id: computedData.value.appointment_type_id,
    patient_id: computedData.value?.patient_id,
    doctor_id: computedData.value?.doctor_id,
    date: moment(computedData.value.date).format('YYYY-MM-DDTHH:mm'),

});
let price = ref(props.data.price);

const setPrice = (appointmentTypeId) => {
    price.value = collect(props.appointmentTypes).firstWhere('id', appointmentTypeId).price
}

const submit = () => {
    Model.submit('edit', 'appointments', form, props.data.id)
}

</script>
<style scoped>

</style>
