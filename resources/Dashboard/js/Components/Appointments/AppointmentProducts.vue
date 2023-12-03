<script setup>

import {__, handleField} from "../../Globals.js";
import {mdiPhone, mdiPlusCircle, mdiStocking, mdiTrashCanOutline} from "@mdi/js";
import {useForm} from "@inertiajs/vue3";
import CardBoxModal from "../Sahred/CardBoxModal.vue";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {Model} from "../../Utils/index.js";
import {ref} from "vue";
import {debounce} from "lodash";

let props = defineProps({
    appointment_id: Array,
})
let form = useForm({
    products: [{id: null, quantity: null}]
});
let productsOptions = ref();
const fetchProducts = debounce((value) => {
    if (value) {

        Model.fetch('products', {name: value}).then(
            data => productsOptions.value = data
        )
    }
}, 500);
const submit = () => {
    Model.submit('create', 'appointment-product', form, [])
};
</script>

<template>
    <CardBoxModal
        v-if="can(`appointment-product.show`)"
        :button-label="__('add')"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="false"
        :model-value="true"
        @confirm="submit() "
    >

        <FormField
            :actions="{append:{color:'success' , icon:mdiPlusCircle } }"
            :errors="form.errors.products"
            :label="__('products')"
            @action="(action , key)=>handleField(form,'products',action ,null,{id:null,quantity:null}) ">
            <div v-for="(product,key) in form.products" :key="key" class="grid grid-cols-2 gap-5">
                <FormControl
                    v-model="form.products[key].id"
                    :errors="form.errors[`products.${key}.id`]"
                    :icon="mdiPhone"
                    :options="productsOptions"
                    :placeholder="__('product_name')"
                    name="product[]"
                    type="select"
                    @filter="(value)=>fetchProducts(value)"
                />
                <FormControl
                    v-model="form.products[key].quantity"
                    :actions="{delete:{color:'danger' , icon:mdiTrashCanOutline  ,key:key} }"
                    :errors="form.errors[`products.${key}.quantity`]"
                    :icon="mdiStocking"
                    :placeholder="__('quantity')"
                    autocomplete="quantity"
                    name="quantity"
                    @action="(action )=>handleField(form,'products',action ,key)"
                />
            </div>
        </FormField>
    </CardBoxModal>
</template>

<style scoped>

</style>
