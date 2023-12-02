<template>

    <CardBoxModal
        v-if="can(`employees.edit`)"
        :button-label="__('edit')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__('edit_field',{field:'employee'})"
        @cancel="showEdit=false"
        @confirm="submit"
    >
        <FormField :errors="form.errors.name" :label="__('name')">
            <FormControl
                v-model="form.name"
                :icon="mdiAccount"
                autocomplete="name"
                name="phone"
                required
            />
        </FormField>
        <FormField :errors="form.errors.email" :label="__('email')">
            <FormControl
                v-model="form.email"
                :icon="mdiAt"
                autocomplete="email"
                name="email"
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
        <FormField :errors="form.errors.password" :label="__('password')">
            <FormControl
                v-model="form.password"
                :icon="mdiFormTextboxPassword"
                autocomplete="password"
                name="password"
                required
                type="password"
            />
        </FormField>
        <FormField :errors="form.errors.password" :label="__('password_confirmation')">
            <FormControl
                v-model="form.password_confirmation"
                :icon="mdiFormTextboxPassword"
                autocomplete="password_confirmation"
                name="password_confirmation"
                required
                type="password"
            />
        </FormField>
        <FormField
            :actions="{append:{color:'success' , icon:mdiPlusCircle } }"
            :errors="form.errors[`address`]"
            :label="__('adress')"
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
        <FormField :errors="form.errors.role" :label="__('role')">
            <FormControl
                v-model="form.role"
                :icon="mdiLock"
                :options="roles"
                autocomplete="role"
                name="role"
                required
                type="select"
            />
        </FormField>
    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {
    mdiAccount,
    mdiAt,
    mdiFormTextboxPassword,
    mdiLock,
    mdiMapMarker,
    mdiPhone,
    mdiPlusCircle,
    mdiTrashCanOutline
} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm, usePage} from "@inertiajs/vue3";
import {__, handleField} from "../../Globals.js";
import {inject} from "vue";
import {Model} from "../../Utils/index.js";

let props = defineProps({
    data: {
        type: Object,
        default: {},
    },
    isModal: {
        type: Boolean,
        default: true
    }
})

let showEdit = inject('showEdit');



let roles = usePage().props.roles;
let form = useForm({
    name: props.data.name,
    email: props.data.email,
    phone: props.data.phone,
    address: props.data.address,
    role: props.data.role.id,
    password: null,
    password_confirmation: null,

});


const submit = () => {
    Model.submit('edit', 'employees', form, props.data.id)
}

</script>
<style scoped>

</style>
