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
        <FormField :label="__('doctor_name')">
            <FormControl
                v-model="form.doctor_id"
                :icon="mdiClipboardPulse"
                :is-disabled="data.doctor_id"
                :options="doctors"
                required
                type="select"
            />
        </FormField>
        <FormField :label="__('product_name')">
            <FormControl
                v-model="product_id"
                :icon="mdiClipboardPulse"
                :is-disabled="data.product_id"
                :options="products"
                required
                type="select"
                @update:model-value="fetchStocks"
            />
        </FormField>

        <FormField :label="__('stock')">
            <FormControl
                v-model="form.stock_id"
                :icon="mdiStocking"
                :options="stockOptions"
                required
                type="select"
            />
        </FormField>
    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiClipboardPulse, mdiStocking} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__} from "../../Globals.js";
import {inject, ref, watchEffect} from "vue";
import {Model} from "../../Utils/index.js";


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
    notes:
        {
            type: String,
            default: " "
        }
})

let showCreateDoctorProduct = inject('showCreateDoctorProduct');
let form = useForm({
    stock_id: props.data?.stock_id,
    doctor_id: props.data?.doctor_id,
    quantity: props.data?.quantity,

});

let product_id = ref(props.data.product_id);
let stockOptions = ref();

watchEffect(() => {
    if (product_id.value) {
        Model.fetch('stocks', {product_id: product_id.value}).then(
            result => {
                stockOptions.value = result
                console.log(result);
                form.stock_id = null;
            }
        )
    }
})
const fetchStocks = (value) => {

}
const submit = () => {
    Model.submit('create', 'doctor_products', form)
}

</script>
<style scoped>

</style>
