<template>

    <CardBoxModal
        v-if="can(`roles.edit`)"
        :button-label="__('edit')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__('edit_field',{field:'role'})"
        @cancel="showEdit=false"
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
        <FormWithLabelField v-for="(model,pKey) in formPermissions" :cols="{lg:1}" :label="__(pKey)">
            <FormCheckRadioGroup>
                <FormCheckRadio v-for="(permission,iKey) in model"
                                :key="iKey"
                                v-model="form.permissions[permission.key].checked"
                                :checked="form.permissions[permission.key].checked"
                                :label="__(permission.name)"
                                :value="permission.id"
                />
            </FormCheckRadioGroup>

        </FormWithLabelField>

    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiAccount} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm, usePage} from "@inertiajs/vue3";
import FormCheckRadioGroup from "../Sahred/FormCheckRadioGroup.vue";
import FormCheckRadio from "../Sahred/FormCheckRadio.vue";
import {__} from "../../Globals.js";
import FormWithLabelField from "../Sahred/FormWithLabelField.vue";
import {computed, inject} from "vue";
import {Model} from "../../Utils/index.js";

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

let showEdit = inject('showEdit');

let computedData = computed(() => props.data)
let emit = defineEmits(['cancel'])


let allPermissions = usePage().props.permissions;
let formPermissions = {};


allPermissions.map(function (item, key) {
    let splitted = item.name.split('.');
    (formPermissions[splitted[0]] = formPermissions[splitted[0]] || []).push({
        name: splitted[1],
        checked: Boolean(computedData.value.permissions?.find((permission) => permission.id === item.id)),
        id: item.id,
        key: key
    });

})
let form = useForm({
    name: computedData.value.name,
    permissions: allPermissions.map(item => {
        item.checked = Boolean(computedData.value.permissions?.find((permission) => permission.id === item.id));
        return item;
    })
});


const submit = () => {
    Model.submit('edit','roles',form,computedData.value.id)
}

</script>
<style scoped>

</style>
