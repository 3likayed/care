<template>
    <CardBoxModal
        v-if="can(`${modelResolver(model)}.${operation}`)"
        :button-label="__(operation)"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__(operation+'_field',{field:model})"
        @cancel="$emit('cancel')"
        @confirm="Model.submit(operation,model,form,data.id)"
    >
        <FormField
            :errors="form.errors.name"
            :label="__('name')"
            label-for="name"
        >
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
            :errors="form.errors.birthday"
            :label="__('birthday')"
            label-for="birthday"
        >
            <FormControl
                v-model="form.birthday"
                :icon="mdiAccount"
                autocomplete="birthday"
                name="birthday"
                required
                type="date"
            />
        </FormField>
    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../../Sahred/CardBoxModal.vue";
import {mdiAccount, mdiHome, mdiPhone, mdiPlusCircle, mdiTrashCanOutline} from "@mdi/js";
import FormField from "../../Sahred/FormField.vue";
import FormControl from "../../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {handleField} from "../../../Globals.js";
import {Model} from "../../../Utils/index.js";


let props = defineProps({
    data: {
        type: Object,
        default: {},
    },
    show: Boolean,
    operation: String,
    isModal: {
        type: Boolean,
        default: true
    }
})
let model = 'patient'

let form = useForm({
    name: props.data?.name,
    address: props.data?.address ?? [null],
    phone: props.data?.phone ?? [null],
    birthday: props.data?.birthday,
    blood: props.data?.blood,
});

</script>
<style scoped>

</style>
