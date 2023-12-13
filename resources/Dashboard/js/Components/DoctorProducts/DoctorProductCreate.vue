<template>

    <CardBoxModal
        v-if="can(`doctor_products.create`)"
        :button-label="__('create')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__('create_field',{field:'doctor_products'})"
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
        <FormField :label="__('doctor_name')">
            <FormControl
                v-model="form.doctor_id"
                :icon="mdiDoctor"
                :is-disabled="data.doctor_id"
                :options="doctors"
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

        <FormField :label="__('product_name')">
            <FormControl
                v-model="product.name"
                :icon="mdiClipboardPulse"
                is-disabled
                required
                type="text"
            />
        </FormField>
        <FormField :label="__('available')">
            <FormControl
                v-model="product.available"
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
    products: {
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
    },
})

let showCreateDoctorProduct = inject('showCreateDoctorProduct');
let form = useForm({
    stock_id: props.data?.stock_id,
    doctor_id: props.data?.doctor_id,
    quantity: props.data?.quantity,

});

let product = reactive({});
let maxQuantity = ref();
const fetchPatients = debounce(async (stock_id) => {
    if (stock_id) {
        await Model.fetch('stocks', {id: stock_id}).then(
            result => {
                product.name = result[0]?.product?.name
                product.available = result[0]?.available ?? 0;
            }
        )
    } else {
        product.name = null
        product.available = 0
    }
    maxQuantity.value = product.available
}, 500);

onMounted(() => watchEffect(() => fetchPatients(form.stock_id)))


const submit = () => {
    Model.submit('create', 'doctor_products', form)
}

</script>
<style scoped>

</style>
