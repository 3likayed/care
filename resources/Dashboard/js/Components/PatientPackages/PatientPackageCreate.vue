<template>

    <CardBoxModal v-if="can(`patient_packages.create`)"
                  :button-label="__('create')"
                  :has-cancel="isModal"
                  :has-errors="form.hasErrors"
                  :is-dirty="form.isDirty"
                  :is-form="true"
                  :is-modal="isModal"
                  :model-value="true"
                  :title="__('create_field',{field:'patient_packages'})"
                  @cancel="showCreatePatientPackage=false"
                  @confirm="submit"
    >
        <FormField :label="__('package')">
            <FormControl
                v-model="form.package_id"
                :icon="mdiDoctor"
                :is-disabled="data.package_id"
                :options="packages"
                required
                type="select"
            />
        </FormField>
        <FormField :label="__('patient')">
            <FormControl
                v-model="form.patient_id"
                :icon="mdiDoctor"
                :is-disabled="data.patient_id"
                :options="patients"
                required
                type="select"
            />
        </FormField>
        <FormField  class-addon="grid grid-cols-2 md:grid-cols-4 gap-3">
            <FormControl
                label="service"
                v-model="service.name"
                :icon="mdiInformation"
                is-disabled
                type="text"
            />
            <FormControl
                v-model="service.min"
                :icon="mdiInformation"
                is-disabled
                :label="__('min')"
                type="text"
            />
            <FormControl
                v-model="service.max"
                :icon="mdiInformation"
                is-disabled
                :label="__('max')"
                type="text"
            />
            <FormControl
                v-model="service.unit_price"
                :icon="mdiInformation"
                is-disabled
                :label="__('unit_price')"
                required
                type="text"
            />
        </FormField>
        <FormField :errors="form.errors.quantity" label="quantity">
            <FormControl
                v-model="form.quantity"
                :icon="mdiStocking"
                :max="service.max"
                :min="0"
                required
            />
        </FormField>

        <FormField :label="__('amount')">
            <FormControl
                v-model="service.price"
                :icon="mdiInformation"
                is-disabled
                required
                type="text"
            />
        </FormField>
    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiInformation, mdiDoctor, mdiStocking} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__, parsePrice} from "../../Globals.js";
import {inject, reactive, watchEffect} from "vue";
import {Model} from "../../Utils/index.js";
import {collect} from "collect.js";


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

let showCreatePatientPackage = inject('showCreatePatientPackage');
let form = useForm({
    stock_id: props.data?.stock_id,
    package_id: props.data?.package_id,
    patient_id: props.data?.patient_id,
    quantity: props.data?.quantity,

});

let service = reactive({});

watchEffect(() => {
    let selectedPackage = collect(props.packages).firstWhere('id', form.package_id ?? null)
    if (selectedPackage) {
        service.name = selectedPackage.service.name
        service.min = selectedPackage.min
        service.max = selectedPackage.max
        service.unit_price = selectedPackage.unit_price
        service.price = parsePrice(form.quantity * selectedPackage.unit_price)
    } else {
        Object.assign(service, {min: null, max: null, name: null , price:null})
    }
})
const submit = () => {
    Model.submit('create', 'patient_packages', form)
}

</script>
<style scoped>

</style>
