<template>

    <CardBoxModal
        v-if="can(`suppliers.create`)"
        :button-label="__('create')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__('create_field',{field:'supplier'})"
        @cancel="showCreateSupplier=false"
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

        <FormField
            :actions="{append:{color:'success' , icon:mdiPlusCircle } }"
            :errors="form.errors[`phone`]"
            :label="__('phone')"
            @action="(action , key)=>handleField(form,'phone',action ) ">
            <FormControl
                v-for="(phone,key) in form.phone"
                :key="key"
                v-model="form.phone[key]"
                :actions="{delete:{color:'danger' , icon:mdiTrashCanOutline  ,key:key} }"
                :errors="form.errors[`phone.${key}`]"
                :icon="mdiPhone"
                autocomplete="phone"
                name="phone[]"
                @action="(action )=>handleField(form,'phone',action ,key)"
            />
        </FormField>
        <FormField
            :actions="{append:{color:'success' , icon:mdiPlusCircle } }"
            :errors="form.errors[`address`]"
            :label="__('address')"
            @action="(action , key)=>handleField(form,'address',action ) ">
            <FormControl
                v-for="(address,key) in form.address"
                :key="key"
                v-model="form.address[key]"
                :actions="{delete:{color:'danger' , icon:mdiTrashCanOutline  ,key:key} }"
                :errors="form.errors[`address.${key}`]"
                :icon="mdiMapMarker"
                autocomplete="address"
                name="address[]"
                @action="(action )=>handleField(form,'address',action ,key)"
            />
        </FormField>
        <FormField :errors="form.errors.supplier_credit" :label="__('supplier_credit')">
            <FormControl
                v-model="form.supplier_credit"
                :icon="mdiCreditCardChip"
                name="supplier_credit"
                required
            />
        </FormField>
    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiAccount, mdiAt, mdiCalendar, mdiCreditCardChip, mdiMapMarker, mdiPhone, mdiPlusCircle, mdiTrashCanOutline} from "@mdi/js";
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

let showCreateSupplier = inject('showCreateSupplier');
let form = useForm({
    name: null,
    phone: [null],
    address: [null],
    supplier_credit: null

});
const submit = () => {
    Model.submit('create', 'suppliers', form)
}

</script>
<style scoped>

</style>
