<template>

    <CardBoxModal
        v-if="can(`patients.edit`)"
        :button-label="__('edit')"
        :has-cancel="isModal"
        :has-confirm="!isDisabled"
        :has-errors="form.hasErrors"
        :is-form="!isDisabled"
        :is-modal="isModal"
        :model-value="true"
        :title="__('edit_field',{field:'patient'})"
        @cancel="showEdit=false"
        @confirm="submit"
    >
        <FormField :errors="form.errors.name" :label="__('name')">
            <FormControl
                v-model="form.name"
                :icon="mdiAccount"
                :is-disabled="isDisabled"
                autocomplete="name"
                name="phone"
                required
            />
        </FormField>
        <FormField :errors="form.errors.email" :label="__('email')">
            <FormControl
                v-model="form.email"
                :icon="mdiAt"
                :is-disabled="isDisabled"
                autocomplete="email"
                name="email"
                required
            />
        </FormField>
        <FormField :errors="form.errors.birthday" :label="__('birthday')">
            <FormControl
                v-model="form.birthday"
                :icon="mdiCalendar"
                :is-disabled="isDisabled"
                autocomplete="birthday"
                name="birthday"
                required
                type="date"
            />
        </FormField>
        <FormField
            :actions="{append:{color:'success' , icon:mdiPlusCircle } }"
            :errors="form.errors[`phone`]"
            :is-disabled="isDisabled"
            :label="__('phone')"
            @action="(action , key)=>handleField(form,'phone',action ) ">
            <FormControl
                v-for="(phone,key) in form.phone"
                :key="key"
                v-model="form.phone[key]"
                :actions="{delete:{color:'danger' , icon:mdiTrashCanOutline  ,key:key} }"
                :errors="form.errors[`phone.${key}`]"
                :icon="mdiPhone"
                :is-disabled="isDisabled"
                autocomplete="phone"
                name="phone[]"
                @action="(action )=>handleField(form,'phone',action ,key)"
            />
        </FormField>
        <FormField
            :actions="{append:{color:'success' , icon:mdiPlusCircle } }"
            :errors="form.errors[`address`]"
            :is-disabled="isDisabled"
            :label="__('address')"
            @action="(action , key)=>handleField(form,'address',action ) ">
            <FormControl
                v-for="(address,key) in form.address"
                :key="key"
                v-model="form.address[key]"
                :actions="{delete:{color:'danger' , icon:mdiTrashCanOutline  ,key:key} }"
                :errors="form.errors[`address.${key}`]"
                :icon="mdiMapMarker"
                :is-disabled="isDisabled"
                autocomplete="address"
                name="address[]"
                @action="(action )=>handleField(form,'address',action ,key)"
            />
        </FormField>
    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiAccount, mdiAt, mdiCalendar, mdiMapMarker, mdiPhone, mdiPlusCircle, mdiTrashCanOutline} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__, handleField} from "../../Globals.js";
import {inject} from "vue";
import {Model} from "../../Utils/index.js";
import moment from "moment";

let props = defineProps({
    data: {
        type: Object,
        default: {},
    },
    isDisabled: Boolean,
    isModal: {
        type: Boolean,
        default: true
    }
})

let showEdit = props.isModal ? inject('showEdit') : true;


let form = useForm({
    name: props.data.name,
    email: props.data.email,
    phone: props.data.phone,
    address: props.data.address,
    birthday: moment(props.data.birthday).format('YYYY-MM-DD'),

});


const submit = () => {
    Model.submit('edit', 'patients', form, props.data.id)
}

</script>
<style scoped>

</style>
