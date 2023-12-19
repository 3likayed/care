<template>

    <CardBoxModal
        :button-label="__('edit')"
        :has-cancel="isModal"
        :has-confirm="!isDisabled"
        :has-errors="form.hasErrors"
        :is-dirty="form.isDirty"
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
                :options="appointmentTypes"
                autocomplete="appointment_type_id"
                name="appointment_type_id"
                required
                type="select"
                @update:model-value="(value)=>setPrice(value)"
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
                @update:model-value="(value) => !moment(value).isSame(moment(),'day') ? form.doctor_id=null :'' "
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
        <FormField :label="__('total_price')">
            <FormControl
                v-model="total_price"
                :icon="mdiCash"
                autocomplete="total_price"
                is-disabled
                name="total_price"
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
provide('isDisabled', props.isDisabled || !can(`appointments.edit`) || props.data.doctor_id);

let form = useForm({
    appointment_type_id: computedData.value.appointment_type_id,
    patient_id: computedData.value?.patient_id,
    doctor_id: computedData.value?.doctor_id,
    date: moment(computedData.value.date).format('YYYY-MM-DDTHH:mm'),

});

let total_price = ref(props.data.total_price);

const setPrice = (appointmentTypeId) => {
    total_price.value = collect(props.appointmentTypes).firstWhere('id', appointmentTypeId).price
}

const submit = () => {
    Model.submit('edit', 'appointments', form, props.data.id)
}

</script>
<style scoped>

</style>
