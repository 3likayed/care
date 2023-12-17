<script setup>

import {__, handleField} from "../../Globals.js";
import {mdiBoxCutter, mdiFormatLetterCase, mdiCart, mdiTrashCanOutline} from "@mdi/js";
import {useForm} from "@inertiajs/vue3";
import CardBoxModal from "../Sahred/CardBoxModal.vue";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {Model} from "../../Utils/index.js";
import {ref, watchEffect} from "vue";
import {collect} from "collect.js";

let props = defineProps({
    products: Array,
})
let form = useForm({
    products: []
});
let productsOptions = ref(props.products);


const appendProduct = (product_id) => {
    let product = collect(props.products).firstWhere('id', '=', product_id)
    form.products.push({id: product.id, name: product.name, total: ''});

}
const setProductTotal = (value, key) => {
    let total = form.products[key].quantity * form.products[key].price;
    form.products[key].total = total > 0 ? total : '';
}


let totalPrice = ref();
let remainingPrice = ref();

watchEffect(() => {
    let total = collect(form.products).sum('total');
    total = total > 0 ? total : '';
    totalPrice.value = total
    let remaining = total - form.paid_price;
    remainingPrice.value = remaining > 0 ? remaining : '';
})

const submit = () => {
    Model.submit('create', 'appointment-product', form, [])
};
</script>

<template>
    <CardBoxModal :is-dirty="form.isDirty"
        v-if="can(`appointment-product.show`)"
        :button-label="__('add')"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="false"
        :model-value="true"
        :title="__('field_data',{field:'products'})"
        @confirm="submit() ">

        <FormField
            :errors="form.errors[`products`]"
            :label="__('product_name')"
            class-addon=" space-y-5"
        >
            <FormControl
                :icon="mdiBoxCutter"
                :options="productsOptions"
                name="product_id"
                required
                type="select"
                @update:model-value="(value)=>appendProduct(value)"
            />
            <div v-for="(products,key) in form.products" :key="key"
                 class="grid grid-cols-1 lg:grid-cols-2  gap-5 ">
                <FormControl
                    v-model="form.products[key].name"
                    :errors="form.errors[`products.${key}.name`]"
                    :icon="mdiFormatLetterCase"
                    is-disabled
                    name="product_name[]"

                />
                <FormControl
                    v-model="form.products[key].quantity"
                    :errors="form.errors[`products.${key}.quantity`]"
                    :icon="mdiCart"
                    :placeholder="__('quantity')"
                    name="quantity[]"
                    @update:model-value="(value)=>setProductTotal(value,key)"
                    :actions="{delete:{color:'danger' , icon:mdiTrashCanOutline  ,key:key} }"
                    @action="(action )=>handleField(form,'products',action ,key)"

                />
            </div>

        </FormField>
    </CardBoxModal>
</template>

<style scoped>

</style>
