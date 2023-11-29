<template>

    <CardBoxModal
        v-if="can(`reservations.create`)"
        :button-label="__('create')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__('create_field',{field:'reservation'})"
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
        <FormField :errors="form.errors.reservation_type_id" :label="__('reservation_type')">
            <FormControl
                v-model="form.reservation_type_id"
                :icon="mdiAccount"
                :options="reservationTypes"
                autocomplete="reservation_type"
                name="reservation_type"
                required
                type="select"
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
    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiAccount, mdiCalendar} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__} from "../../Globals.js";
import {inject, ref} from "vue";
import {Model} from "../../Utils/index.js";
import {debounce} from "lodash";


let props = defineProps({
    data :Object,
    reservationTypes: {
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
    reservation_type_id: props.data?.reservation_type_id,
    date: null,

});


let patientOptions = ref(props.patients);
const fetchPatients = debounce((search) => {
    if (search) {
        console.log(search)
        Model.fetch('patients', {name: search}).then(
            data => patientOptions.value = data
        )
    }

}, 500)
const submit = () => {
    Model.submit('create', 'reservations', form)
}

</script>
<style scoped>

</style>
