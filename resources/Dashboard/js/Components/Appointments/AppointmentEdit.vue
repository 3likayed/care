<template>

    <CardBoxModal
        :button-label="__('edit')"
        :has-cancel="isModal"
        :has-confirm="!isDisabled"
        :has-errors="form.hasErrors"
        :is-form="!isDisabled"
        :is-modal="isModal"
        :model-value="true"
        :title="title ?? __('edit_field',{field:'appointment'})"
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
                @update:model-value="(value)=>setPrice(value)"
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
                :icon="mdiCalendar"
                autocomplete="date"
                inline
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
import {__, can} from "../../Globals.js";
import {computed, inject, provide, ref} from "vue";
import {Model} from "../../Utils/index.js";
import moment from "moment";
import {collect} from "collect.js";


let props = defineProps({
    data: Object,
    appointmentTypes: {
        type: Array,
        default: []

    },
    isDisabled: Boolean,
    title: String,
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
provide('isDisabled', props.isDisabled || !can(`appointments.edit`));

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
