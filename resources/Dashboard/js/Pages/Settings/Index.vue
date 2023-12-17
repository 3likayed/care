<template>
    <SectionMain>
        <BreadCrumb
            :items="[{name: __('settings'), href: route(`dashboard.settings.edit`)}]"/>
        <CardBoxModal :is-dirty="form.isDirty"
            v-if="can(`settings.edit`)"
            :button-label="__('edit')"
            :has-cancel="isModal"
            :has-errors="form.hasErrors"
            :is-form="true"
            :is-modal="false"
            :model-value="true"
            :title="__('edit_field',{field:'settings'})"
            @cancel="showEdit=false"
            @confirm="submit"
        >
            <FormField :errors="form.errors.name" :label="__('name')">
                <FormControl
                    v-model="form.name"
                    :icon=" mdiAccount"
                    autocomplete="name"
                    name="phone"
                    required
                />
            </FormField>
            <FormField
                :actions="{append:{color:'success' , icon:mdiPlusCircle } }"
                :errors="form.errors.phone"
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
                :errors="form.errors.email"
                :label="__('email')"
                @action="(action , key)=>handleField(form,'email',action ) ">
                <FormControl
                    v-for="(email,key) in form.email"
                    :key="key"
                    v-model="form.email[key]"
                    :actions="{delete:{color:'danger' , icon:mdiTrashCanOutline  ,key:key} }"
                    :errors="form.errors[`email.${key}`]"
                    :icon="mdiAt"
                    autocomplete="email"
                    name="email[]"
                    type="email"
                    @action="(action )=>handleField(form,'email',action ,key)"
                />
            </FormField>
            <FormField
                :errors="form.errors.doctor_role"
                :label="__('doctor_role')"
            >
                <FormControl
                    v-model="form.doctor_role"
                    :errors="form.errors.doctor_role"
                    :icon="mdiLock"
                    autocomplete="email"
                    name="email[]"
                    type="select"
                    :options="roles"
                />
            </FormField>
        </CardBoxModal>
    </SectionMain>
</template>

<script setup>


import FormField from "../../Components/Sahred/FormField.vue";
import FormControl from "../../Components/Sahred/FormControl.vue";
import {mdiAccount, mdiAt, mdiLock, mdiPhone, mdiPlusCircle, mdiTrashCanOutline} from "@mdi/js";
import {__, handleField} from "../../Globals.js";
import CardBoxModal from "../../Components/Sahred/CardBoxModal.vue";
import SectionMain from "../../Components/Sahred/SectionMain.vue";
import BreadCrumb from "../../Components/Sahred/BreadCrumb.vue";
import {useForm, usePage} from "@inertiajs/vue3";
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

let form = useForm({
        name: props.data?.name,
        phone: props.data?.phone ?? [null],
        email: props.data?.email ?? [null],
        doctor_role: props.data?.doctor_role ?? null,


    })
;

let roles = usePage().props.roles

const submit = () => {
    Model.submit('edit', 'settings', form)
}

</script>
<style scoped>

</style>
