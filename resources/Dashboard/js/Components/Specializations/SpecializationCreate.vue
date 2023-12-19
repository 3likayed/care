<template>

    <CardBoxModal :is-dirty="form.isDirty"
        v-if="can(`specializations.create`)"
        :button-label="__('create')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__('create_field',{field:'specialization'})"
        @cancel="showCreateSpecialization=false"
        @confirm="submit"
    >
        <FormField :errors="form.errors.name" :label="__('name')">
            <FormControl
                v-model="form.name"
                :icon="mdiAccount"
                autocomplete="name"
                name="phone"
            />
        </FormField>
    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiAccount} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__} from "../../Globals.js";
import {inject} from "vue";
import {Model} from "../../Utils/index.js";

let props = defineProps({
    operation: String,
    isModal: {
        type: Boolean,
        default: true
    }
})

let showCreateSpecialization = inject('showCreateSpecialization');
let form = useForm({
    name: null,

});
const submit = () => {
    Model.submit('create', 'specializations', form)
}

</script>
<style scoped>

</style>
