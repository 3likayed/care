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
        @cancel="showEdit=false"
        @confirm="submit() ; showEdit=false"
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
        <FormField :errors="form.errors.reservation_type_id" :label="__('reservation_type')">
            <FormControl
                v-model="form.reservation_type_id"
                :icon="mdiAccount"
                :options="reservationTypes"
                autocomplete="reservation_type_id"
                name="reservation_type_id"
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
import {computed, inject} from "vue";
import {Model} from "../../Utils/index.js";
import moment from "moment";


let props = defineProps({
    data: Object,
    reservationTypes: {
        type: Array,
        default: []

    },
    isModal: {
        type: Boolean,
        default: true
    }
})

let computedData = computed(() => props.data)
let showEdit = inject('showEdit');
let form = useForm({
    reservation_type_id: computedData.value.reservation_type_id,
    patient_id: computedData.value?.patient_id,
    date: moment(computedData.value.date).format('YYYY-MM-DDTHH:mm'),

});

const submit = () => {
    Model.submit('edit', 'reservations', form,props.data.id)
}

</script>
<style scoped>

</style>
