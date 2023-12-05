<template>

    <CardBoxModal
        v-if="can(`purchase-transactions.create`)"
        :button-label="__('create')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__('create_field',{field:'PurchaseTransactions'})"
        @cancel="showCreatePurchaseTransaction=false"
        @confirm="submit"
    >
        <FormField :errors="form.errors.supplier_name" :label="__('supplier_name')">
            <FormControl
                v-model="form.supplier_id"
                :icon="mdiAccount"
                :options="suppliers"
                name="supplier_id"
                required
                type="select"

            />
        </FormField>

        <FormField :label="__('product_name')">
            <FormControl
                :icon="mdiBoxCutter"
                :options="productsOptions"
                name="product_id"
                required
                type="select"
                @update:model-value="(value)=>appendProduct(value)"

            />
        </FormField>

        <FormField
            :errors="form.errors[`products`]"
            :label="__('products')"
        >
            <div v-for="(products,key) in form.products" :key="key"
                 class="grid grid-cols-4 gap-5">
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
                    :icon="mdiStocking"
                    :placeholder="__('quantity')"
                    name="quantity[]"
                    @update:model-value="(value)=>setProductTotal(value,key)"

                />
                <FormControl
                    v-model="form.products[key].price"
                    :errors="form.errors[`products.${key}.price`]"
                    :icon="mdiCash"
                    :placeholder="__('price')"
                    name="product_price"

                />
                <FormControl
                    :actions="{delete:{color:'danger' , icon:mdiTrashCanOutline  ,key:key} }"
                    :icon="mdiCash"
                    :placeholder="__('total')"
                    is-disabled
                    @action="(action )=>handleField(form,'products',action ,key)"
                />

            </div>
        </FormField>


    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiAccount, mdiBoxCutter, mdiCash, mdiFormatLetterCase, mdiStocking, mdiTrashCanOutline} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__, handleField} from "../../Globals.js";
import {computed, inject, ref, watchEffect} from "vue";
import {Model} from "../../Utils/index.js";
import {collect} from "collect.js";

let props = defineProps({
    suppliers: {
        type: Array,
        default: []
    },
    products: {
        type: Array,
        default: []
    },
    isModal: {
        type: Boolean,
        default: true
    }
})

let showCreatePurchaseTransaction = inject('showCreatePurchaseTransaction');
let form = useForm({
    name: null,
    supplier_id: null,
    products: [],

});
const submit = () => {
    if (!form.quantity) {
        form.transform(data => {
            data.quantity = 0;
            return data
        })
    }
    Model.submit('create', 'purchasetransactions', form)
}

let computedProducts = computed(() => collect(props.products).whereNotIn('id',
    collect(form.products).pluck('id').all()
).all());

let productsOptions = ref();

watchEffect(() => {
    productsOptions.value = computedProducts.value
})

const appendProduct = (product_id) => {
    let product = collect(props.products).firstWhere('id', '=', product_id)
    form.products.push({id: product.id, name: product.name});

}
const setProductTotal = (value,key) =>{

}

</script>
<style scoped>

</style>
