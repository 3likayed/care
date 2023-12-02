<template>

    <CardBoxModal
        v-if="can(`products.create`)"
        :button-label="__('create')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__('create_field',{field:'product'})"
        @cancel="showCreate=false"
        @confirm="submit"
    >
        <FormField :errors="form.errors.name" :label="__('name')">
            <FormControl
                v-model="form.name"
                :icon="mdiAccount"
                autocomplete="name"
                name="name"
                required
            />
        </FormField>

        <FormField :errors="form.errors.name" :label="__('quantity')">
            <FormControl
                v-model="form.quantity"
                :icon="mdiStocking"
                name="quantity"
                required
            />
        </FormField>
        <FormField
            :actions="{append:{color:'success' , icon:mdiPlusCircle } }"
            :errors="form.errors[`product`]"
            :label="__('product')"
            @action="(action , key)=>handleField(form,'product',action ,null,{name:null,quantity:null}) ">
            <div v-for="(product,key) in form.product" :key="key" class="grid grid-cols-2 gap-5">
                <FormControl
                    v-model="form.product[key].name"
                    :errors="form.errors[`product.${key}`]"
                    :icon="mdiPhone"
                    autocomplete="product"
                    name="product[]"
                />
                <FormControl
                    v-model="form.product[key].quantity"
                    :errors="form.errors[`product.${key}`]"
                    :icon="mdiPhone"
                    autocomplete="product"
                    :actions="{delete:{color:'danger' , icon:mdiTrashCanOutline  ,key:key} }"
                    @action="(action )=>handleField(form,'product',action ,key)"
                    name="product[]"
                />
            </div>
        </FormField>


    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiAccount, mdiPhone, mdiPlusCircle, mdiStocking, mdiTrashCanOutline} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__, handleField} from "../../Globals.js";
import {inject} from "vue";
import {Model} from "../../Utils/index.js";

let props = defineProps({
    isModal: {
        type: Boolean,
        default: true
    }
})

let showCreate = inject('showCreate');
let form = useForm({
    name: null,
    quantity: 0,
    product: [{name: null, quantity: null}],


});
const submit = () => {
    if (!form.quantity) {
        form.transform(data => {
            data.quantity = 0;
            return data
        })
    }
    Model.submit('create', 'products', form)
}

</script>
<style scoped>

</style>
