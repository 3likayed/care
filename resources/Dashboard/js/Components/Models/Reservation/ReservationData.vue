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
                :icon="mdiFormatListBulleted"
                :options="reservationTypes"
                name="reservation_type_id"
                required
                type="select"
                @update:model-value="(reservationTypeId)=>changePrice(reservationTypeId)"
            />
        </FormField>

        <FormField
            :errors="form.errors.patient_id"
            :label="__('patient')"
            label-for="patient"
        >
            <FormControl
                v-model="form.patient_id"
                :icon="mdiAccount"
                :is-disabled="options?.disabled?.includes('patient_id')"
                :options="patients"
                autocomplete="patient"
                name="patient"
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
                :min="moment().format('YYYY-MM-DDTHH:MM')"
                autocomplete="date"
                name="date"
                required
                type="datetime-local"
            />
        </FormField>
        <FormField
            :errors="form.errors.date"
            :label="__('price')"
            label-for="date"
        >
            <FormControl
                v-model="price"
                :icon="mdiAccount"
                autocomplete="price"
                is-disabled
                name="price"
            />
        </FormField>
    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../../Sahred/CardBoxModal.vue";
import {mdiAccount, mdiFormatListBulleted} from "@mdi/js";
import FormField from "../../Sahred/FormField.vue";
import FormControl from "../../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {Model} from "../../../Utils/index.js";
import {onMounted, ref, watch} from "vue";
import {debounce} from "lodash";
import moment from "moment";
import {can, modelResolver} from "../../../Globals.js";

let props = defineProps({
    data: {
        type: Object,
        default: {},
    },
    options: {
        type: Object,
        default: {}
    },
    show: Boolean,
    operation: String,
    isModal: {
        type: Boolean,
        default: true
    }
})
let model = 'reservation'

let form = useForm({
    date: moment(props.data?.date).format('YYYY-MM-DDTHH:MM'),
    patient_id: props.data?.patient_id,
    reservation_type_id: props.data?.reservation_type_id
});


let reservationTypes = ref();
let patients = ref()
let patientFilterValue = ref()
let price = ref(props.data.price);

function changePrice(reservationTypeId) {
    price.value = reservationTypes.value.find(reservationType => reservationType.id === reservationTypeId).price
}

onMounted(() => {

    const fetchPatients = (searchData) => {
        searchData.id = form.patient_id ?? ''
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
