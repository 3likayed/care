<template>

    <CardBoxModal :is-dirty="form.isDirty"
        :button-label="__('edit')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-modal="isModal"
        :model-value="true"
        :title="__('edit_field',{field:'doctor'})"
        @cancel="showEdit=false"
        @confirm="submit"
    >
        <StepsComponent
            v-model="step"
            :steps="steps"
        />
        <section v-if="step===0">
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
                :label="__('addresss')"
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
            <FormField :errors="form.errors.specializations" :label="__('specializations')">
                <FormControl
                    v-model="form.specializations"
                    :icon="mdiTab"
                    :options="specializations"
                    autocomplete="specializations"
                    is-multiple
                    name="specializations"
                    required
                    type="select"
                />
            </FormField>
        </section>
        <section v-if="step===1">
            <FormField :errors="form.errors['user.email']" :label="__('email')">
                <FormControl
                    v-model="form.user.email"
                    :icon="mdiAt"
                    autocomplete="email"
                    name="email"
                    required
                    type="email"
                />
            </FormField>
            <FormField :errors="form.errors['user.role']" :label="__('role')">
                <FormControl
                    v-model="form.user.role"
                    :icon="mdiLock"
                    :options="roles"
                    autocomplete="role"
                    name="role"
                    required
                    type="select"
                />
            </FormField>
            <FormField :errors="form.errors['user.password']" :label="__('password')">
                <FormControl
                    v-model="form.user.password"
                    :icon="mdiFormTextboxPassword"
                    autocomplete="password"
                    name="password"
                    required
                    type="password"
                />
            </FormField>
            <FormField :errors="form.errors['user.password_confirmation']"
                       :label="__('password_confirmation')">
                <FormControl
                    v-model="form.user.password_confirmation"
                    :icon="mdiFormTextboxPassword"
                    autocomplete="password_confirmation"
                    name="password_confirmation"
                    required
                    type="password"
                />
            </FormField>

        </section>
    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {
    mdiAccount,
    mdiAt,
    mdiFormTextboxPassword, mdiLock,
    mdiMapMarker,
    mdiPhone,
    mdiPlusCircle,
    mdiTab,
    mdiTrashCanOutline
} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm, usePage} from "@inertiajs/vue3";
import {__, can, handleField} from "../../Globals.js";
import {computed, inject, ref,provide} from "vue";
import {Model} from "../../Utils/index.js";
import StepsComponent from "../Sahred/StepsComponent.vue";
import {collect} from "collect.js";
import {useStepStore} from "../../Stores/step.js";

let props = defineProps({
    data: Object,
    operation: String,
    isDisabled: Boolean,
    isModal: {
        type: Boolean,
        default: true
    }
})

let disabled = computed(() => props.isDisabled || !can(`doctors.edit`));
provide('isDisabled', disabled.value);

let showEdit = props.isModal ? inject('showEdit') : true;
let specializations = usePage().props.specializations;
let roles = usePage().props.roles;
let form = useForm({
    name: props.data.employee.name,
    phone: props.data.employee.phone,
    address: props.data.employee.address,
    specializations: collect(props.data.specializations).pluck('id'),
    user: {
        email: props.data.employee.user.email,
        role: props.data.employee.user.role.id,
        password: null,
        password_confirmation: null,
    }

});

const submit = () => {
    Model.submit('edit', 'doctors', form, props.data.id)

}
let steps = ref([__('data'), __('user_data')]);
let step = ref(useStepStore().getStep());


</script>
<style scoped>


</style>
