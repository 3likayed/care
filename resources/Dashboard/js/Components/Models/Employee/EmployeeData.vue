<template>
    <CardBoxModal
        v-if="can(`${modelResolver(model)}.${operation}`)"
        :button-label="__(operation)"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__(operation+'_field',{field:'employee'})"
        @cancel="$emit('cancel')"
        @confirm="Model.submit(operation,'patient',form,data.id)"
    >
        <FormField
            :errors="form.errors.name"
            :label="__('name')"
            label-for="name"
        >
            <FormControl
                v-model="form.name"
                :icon="mdiAccount"
                :is-disabled="options.disabled?.includes('name')"
                autocomplete="name"
                name="name"
                required
            />
        </FormField>
        <FormField
            :errors="form.errors.email"
            :label="__('email')"
            label-for="email"
        >
            <FormControl
                :is-disabled="options.disabled?.includes('email')"
                v-model="form.email"
                :icon="mdiAccount"
                autocomplete="email"
                name="email"
                required
            />
        </FormField>
        <FormField
            :actions="{append:{color:'success' , icon:mdiPlusCircle } }"
            :label="__('address')"
            class-addon="space-y-4"
            has-border
            label-for="address"
            @action="(action , key)=>handleField(form,'address',action )"
        >
            <FormControl
                v-for="(address,key) in form.address"
                :key="key"
                v-model="form.address[key]"
                :actions="{delete:{color:'danger' , icon:mdiTrashCanOutline ,key:key} }"
                :errors="form.errors[`address.${key}`]"
                :icon="mdiHome"
                autocomplete="address"
                name="address"
                required
                @action="(action , key)=>handleField(form,'address',action ,key)"
            />
        </FormField>
        <FormField
            :actions="{append:{color:'success' , icon:mdiPlusCircle } }"
            :label="__('phone')"

            class-addon="space-y-4"
            has-border
            label-for="phone"
            @action="(action , key)=>handleField(form,'phone',action )"
        >
            <FormControl
                v-for="(phone,key) in form.phone"
                v-model="form.phone[key]"
                :actions="{delete:{color:'danger' , icon:mdiTrashCanOutline ,key:key} }"
                :errors="form.errors[`phone.${key}`]"
                :icon="mdiPhone"
                autocomplete="phone"
                name="phone"
                required
                @action="(action , key)=>handleField(form,'phone',action ,key)"
            />
        </FormField>
        <FormField
            :errors="form.errors.password"
            :label="__('password')"
            label-for="password_confirmation"
        >
            <FormControl
                v-model="form.password"
                :icon="mdiFormTextboxPassword"
                autocomplete="password"
                name="password"
                required
                type="password"
            />
        </FormField>
        <FormField
            :errors="form.errors.password_confirmation"
            :label="__('password_confirmation')"
            label-for="password_confirmation"
        >
            <FormControl
                v-model="form.password_confirmation"
                :icon="mdiFormTextboxPassword"
                autocomplete="password_confirmation"
                name="password_confirmation"
                required
                type="password"
            />
        </FormField>
        <FormField>
            <FormCheckRadioGroup
                :label="__('role')"
                label-for="role"
            >
                <FormCheckRadio
                    v-for="(role,key) in roles"
                    :key="key"
                    v-model="form.role"
                    :checked="role.id === form.role"
                    :label="role.name"
                    :value="role.id"
                    name="role"
                    type="radio"
                />
            </FormCheckRadioGroup>
        </FormField>
    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../../Sahred/CardBoxModal.vue";
import {mdiAccount, mdiFormTextboxPassword, mdiHome, mdiPhone, mdiPlusCircle, mdiTrashCanOutline} from "@mdi/js";
import FormField from "../../Sahred/FormField.vue";
import FormControl from "../../Sahred/FormControl.vue";
import {useForm, usePage} from "@inertiajs/vue3";
import FormCheckRadioGroup from "../../Sahred/FormCheckRadioGroup.vue";
import FormCheckRadio from "../../Sahred/FormCheckRadio.vue";
import {handleField, modelResolver} from "../../../Globals.js";
import {Model} from "../../../Utils";

let props = defineProps({
    data: {
        type: Object,
        default: {},
    },
    show: Boolean,
    options : Object,
    operation: String,
    isModal: {
        type: Boolean,
        default: true
    }
})
let form = useForm({
    name: props.data?.name,
    email: props.data?.email,
    address: props.data?.address ?? [null],
    phone: props.data?.phone ?? [null],
    password: null,
    password_confirmation: null,
    role: props.data?.role?.id,
});


let roles = usePage().props.roles;
let model = 'employee'
</script>
<style scoped>

</style>
