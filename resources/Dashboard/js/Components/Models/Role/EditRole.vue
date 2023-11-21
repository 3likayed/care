<template>

    <CardBoxModal
        :button-label="__('edit')"
        :has-cancel="true"
        :hasErrors="form.hasErrors"
        :is-form="true"
        :model-value="showEditRole"
        :title="__('edit_field',{field:'role'})"
        @cancel="showEditRole=false"
        @confirm="submit">
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

import CardBoxModal from "../../Sahred/CardBoxModal.vue";
import {computed, inject} from "vue";
import {mdiAccount} from "@mdi/js";
import FormField from "../../Sahred/FormField.vue";
import FormControl from "../../Sahred/FormControl.vue";
import {useForm, usePage} from "@inertiajs/vue3";
import FormCheckRadioGroup from "../../Sahred/FormCheckRadioGroup.vue";
import FormCheckRadio from "../../Sahred/FormCheckRadio.vue";
import {__} from "../../../Globals.js";
import FormWithLabelField from "../../Sahred/FormWithLabelField.vue";


let showEditRole = inject('showEditRole');
const page = usePage();
let allPermissions = page.props.permissions;

let formPermissions = {};
allPermissions.map(function (item, key) {
    let splitted = item.name.split('.');
    (formPermissions[splitted[0]] = formPermissions[splitted[0]] || []).push({
        name: splitted[1],
        checked: Boolean(props.role.permissions.find((permission) => permission.id === item.id)),
        id: item.id,
        key: key
    });

})
let props = defineProps({
    role: Object
});

let form = useForm({
    name: props.role.name,
    permissions: allPermissions.map(item => {
        item.checked = Boolean(props.role.permissions.find((permission) => permission.id === item.id));
        return item;
    })
});

function submit() {
    form.put(route('dashboard.roles.update', props.role.id), {
        preserveScroll: true,
        preserveState: (page) => Object.keys(page.props.errors).length,
        onSuccess: () => {
            showEditRole.value = false;
        },
        onError: () => console.log(form.permissions)
    })
}
</script>
<style scoped>

</style>
