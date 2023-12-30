<template>

    <CardBoxModal v-if="can(`patient_services.create`)"
                  :button-label="__('create')"
                  :has-cancel="isModal"
                  :has-errors="form.hasErrors"
                  :is-dirty="form.isDirty"
                  :is-form="true"
                  :is-modal="isModal"
                  :model-value="true"
                  :title="__('create_field',{field:'patient_services'})"
                  @cancel="showCreateDoctorProduct=false"
                  @confirm="submit"
    >
        <FormField :errors="form.errors.stock_id" label="stock_id">
            <FormControl
                v-model="form.stock_id"
                :icon="mdiCart"
                :is-disabled="data.stock_id"
                required
            />
        </FormField>
        <FormField :label="__('patient_name')">
            <FormControl
                v-model="form.patient_id"
                :icon="mdiDoctor"
                :is-disabled="data.patient_id"
                :options="patients"
                required
                type="select"
            />
        </FormField>
        <FormField :errors="form.errors.quantity" label="quantity">
            <FormControl
                v-model="form.quantity"
                :icon="mdiStocking"
                :is-disabled="data.quantity"
                :max="maxQuantity"
                :min="0"
                required
            />
        </FormField>

        <FormField :label="__('service_name')">
            <FormControl
                v-model="service.name"
                :icon="mdiClipboardPulse"
                is-disabled
                required
                type="text"
            />
        </FormField>
        <FormField :label="__('available')">
            <FormControl
                v-model="service.available"
                :icon="mdiClipboardPulse"
                is-disabled
                required
                type="text"
            />
        </FormField>


    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiCart, mdiClipboardPulse, mdiDoctor, mdiStocking} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__} from "../../Globals.js";
import {inject, onMounted, reactive, ref, watchEffect} from "vue";
import {Model} from "../../Utils/index.js";
import {debounce} from "lodash";


let props = defineProps({
    data: {
        type: Object,
        default: {}
    },
    packages: {
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
    },
})

let showCreateDoctorProduct = inject('showCreateDoctorProduct');
let form = useForm({
    stock_id: props.data?.stock_id,
    patient_id: props.data?.patient_id,
    quantity: props.data?.quantity,

});

let service = reactive({});
let maxQuantity = ref();
const fetchPatients = debounce(async (stock_id) => {
    if (stock_id) {
        await Model.fetch('stocks', {id: stock_id}).then(
            result => {
                service.name = result[0]?.service?.name
                service.available = result[0]?.available ?? 0;
            }
        )
    } else {
        service.name = null
        service.available = 0
    }
    maxQuantity.value = service.available
}, 500);

onMounted(() => watchEffect(() => fetchPatients(form.stock_id)))


const submit = () => {
    Model.submit('create', 'patient_services', form)
}

</script>
<style scoped>

</style>
