<template>

    <CardBoxModal :is-dirty="form.isDirty"
        :button-label="__('create')"
        :has-cancel="true"
        :hasErrors="form.hasErrors"
        :is-form="true"
        :model-value="true"
        :title="__('create_field',{field:'role'})"
        @cancel="showCreateRole=false"
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

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {inject} from "vue";
import {mdiAccount} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm, usePage} from "@inertiajs/vue3";
import FormCheckRadioGroup from "../Sahred/FormCheckRadioGroup.vue";
import FormCheckRadio from "../Sahred/FormCheckRadio.vue";
import {__} from "../../Globals.js";
import FormWithLabelField from "../Sahred/FormWithLabelField.vue";
import {Model} from "../../Utils/index.js";


let showCreateRole = inject('showCreateRole');
const page = usePage()
const allPermissions = page.props.permissions

let formPermissions = {};
allPermissions.map(function (item, key) {
    let splitted = item.name.split('.');
    (formPermissions[splitted[0]] = formPermissions[splitted[0]] || []).push({
        name: splitted[1],
        checked: false,
        id: item.id,
        key: key
    });
})


let form = useForm({
    name: null,
    permissions: allPermissions.map(item => {
        item.checked = false
        return item;
    })
});

function submit() {
    Model.submit('create', 'roles', form)
}
</script>
<style scoped>

</style>
