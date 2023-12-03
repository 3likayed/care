<template>

    <CardBoxModal
        v-if="can(`purchase-transactions.create`)"
        :button-label="__('create')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__('create_field',{field:'Service'})"
        @cancel="showCreateService=false"
        @confirm="submit"
    >
        <FormField :errors="form.errors.name" :label="__('supplier_name')">
            <FormControl
                v-model="form.supplier_id"
                :icon="mdiAccount"
                autocomplete="name"
                name="name"
                type="select"
                :options="suppliers"
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
            :errors="form.errors[`Service`]"
            :label="__('Service')"
            @action="(action , key)=>handleField(form,'Service',action ,null,{name:null,quantity:null}) ">
            <div v-for="(Service,key) in form.Service" :key="key" class="grid grid-cols-2 gap-5">
                <FormControl
                    v-model="form.Service[key].name"
                    :errors="form.errors[`Service.${key}`]"
                    :icon="mdiPhone"
                    autocomplete="Service"
                    name="Service[]"
                />
                <FormControl
                    v-model="form.Service[key].quantity"
                    :errors="form.errors[`Service.${key}`]"
                    :icon="mdiPhone"
                    autocomplete="Service"
                    :actions="{delete:{color:'danger' , icon:mdiTrashCanOutline  ,key:key} }"
                    @action="(action )=>handleField(form,'Service',action ,key)"
                    name="Service[]"
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
    suppliers : {
        type : Array ,
        default : []
    },
    isModal: {
        type: Boolean,
        default: true
    }
})

let showCreateService = inject('showCreateService');
let form = useForm({
    name: null,
    supplier_id : null ,
    quantity: 0,
    Service: [{name: null, quantity: null}],


});
const submit = () => {
    if (!form.quantity) {
        form.transform(data => {
            data.quantity = 0;
            return data
        })
    }
    Model.submit('create', 'Services', form)
}

</script>
<style scoped>

</style>
