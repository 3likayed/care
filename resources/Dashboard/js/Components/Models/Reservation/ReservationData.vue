<template>
    <CardBoxModal
        v-if="can(`${modelResolver(model)}.${operation}`)"
        :button-label="__(operation)"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__(operation+'_field',{field:model})"
        @cancel="$emit('cancel')"
        @confirm="Model.submit(operation,model,form,data.id)"
    >

        <FormField
            :errors="form.errors.reservation_type_id"
            :label="__('reservationType')"
            label-for="reservation_type_id"
        >
            <FormControl
                v-model="form.reservation_type_id"
                :icon="mdiAccount"
                :options="reservationTypes"
                name="reservation_type_id"
                required
                type="select"
            />
        </FormField>
        <FormField
            :errors="form.errors.patient_id"
            :label="__('select')"
            label-for="select"
        >
            <FormControl
                v-model="form.patient_id"
                :icon="mdiAccount"
                :options="patients"
                autocomplete="name"
                name="name"
                required
                type="select"
                @filter="(value)=>  patientFilterValue = value.value"
            />
        </FormField>
        <FormField
            :errors="form.errors.date"
            :label="__('date')"
            label-for="date"
        >
            <FormControl
                v-model="form.date"
                :icon="mdiAccount"
                :min="moment().format('YYYY-MM-DDTHH:MM')"
                autocomplete="name"
                name="date"
                required
                type="datetime-local"
            />
        </FormField>
    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../../Sahred/CardBoxModal.vue";
import {mdiAccount} from "@mdi/js";
import FormField from "../../Sahred/FormField.vue";
import FormControl from "../../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {Model} from "../../../Utils/index.js";
import {onMounted, ref, watch} from "vue";
import {debounce} from "lodash";
import moment from "moment";

let props = defineProps({
    data: {
        type: Object,
        default: {},
    },
    addonData: Object,
    show: Boolean,
    operation: String,
    isModal: {
        type: Boolean,
        default: true
    }
})
let model = 'reservation'
let form = useForm({
    date: props.data?.date,
    patient_id: props.data?.patient_id,
    reservation_type_id: props.data.reservation_type_id
});


let reservationTypes = ref();
let patients = ref()
let patientFilterValue = ref()


onMounted(() => {

    const fetchPatients = (searchData) => {
        searchData.id = form.patient_id
        Model.fetch('patients', searchData)
            .then(data => patients.value = data)
    }

    Model.fetch('reservationType')
        .then(data => reservationTypes.value = data);

    fetchPatients({})

    watch(patientFilterValue, debounce(async function (value) {
        if (value)
            fetchPatients({search: value})
    }, 500))
})


</script>
<style scoped>

</style>
