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
                name="supplier_id"
                type="select"
                :options="suppliers"
                required
                
            />
        </FormField>

        <FormField :errors="form.errors.product_name" :label="__('product_name')">
            <FormControl
                v-model="form.product_id"
                :icon="mdiBoxCutter"
                name="product_id"
                type="select"
                :options="products"
                @update:model-value="setProductName"
                required
                
            />
        </FormField>

        <FormField
            :actions="{append:{color:'success' , icon:mdiPlusCircle } }"
            :errors="form.errors[`purchasetransaction`]"
            :label="__('products')"
            @action="(action , key)=>handleField(form,'purchasetransaction',action ,null,{name:null,quantity:null
                ,price:null,total:null}) ">
            <div v-for="(purchasetransaction,key) in form.purchasetransaction" :key="key" class="grid grid-cols-4 gap-5">
                <FormControl
                    v-model="form.purchasetransaction[key].name"
                    :errors="form.errors[`purchasetransaction.${key}`]"
                    :icon="mdiFormatLetterCase"
                    is-disabled
                    name="product_name[]"
                    
                />
                <FormControl
                    v-model="form.purchasetransaction[key].quantity"
                    :errors="form.errors[`purchasetransaction.${key}`]"
                    :icon="mdiStocking"
                    name="quantity[]"
                    
                />
                <FormControl
                    v-model="form.purchasetransaction[key].name"
                    :errors="form.errors[`purchasetransaction.${key}`]"
                    :icon="mdiCash"
                    name="product_name[]"
                    
                />
                <FormControl
                    v-model="form.purchasetransaction[key].quantity"
                    :errors="form.errors[`quantity.${key}`]"
                    :icon="mdiCash"
                    :actions="{delete:{color:'danger' , icon:mdiTrashCanOutline  ,key:key} }"
                    @action="(action )=>handleField(form,'purchasetransaction',action ,key)"
                    name="quantity[]"
                />
                
            </div>
        </FormField>


    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiAccount, mdiBagPersonal, mdiBox, mdiBoxCutter, mdiCash, mdiFormatLetterCase, mdiPhone, mdiPlusCircle, mdiStocking, mdiTrashCanOutline} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__, handleField} from "../../Globals.js";
import {inject,ref} from "vue";
import {Model} from "../../Utils/index.js";
import {collect} from "collect.js";

let props = defineProps({
    suppliers : {
        type : Array ,
        default : []
    },
    products : {
        type : Array ,
        default : []
    },
    isModal: {
        type: Boolean,
        default: true
    }
})

let showCreatePurchaseTransaction = inject('showCreatePurchaseTransaction');
let form = useForm({
    name: null,
    supplier_id : null ,
    product_id : null,
    purchasetransaction: [{name: null, quantity: null,price:null,total:null}],


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

let price = ref();

const setProductName = (product_id) => {
    price.value = collect(props.products).firstWhere('id',product_id).form.purchasetransaction[key].name
}

</script>
<style scoped>

</style>
