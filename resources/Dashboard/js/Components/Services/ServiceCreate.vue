<template>

    <CardBoxModal v-if="can(`services.create`)"
                  :button-label="__('create')"
                  :has-cancel="isModal"
                  :has-errors="form.hasErrors"
                  :is-dirty="form.isDirty"
                  :is-form="true"
                  :is-modal="isModal"
                  :model-value="true"
                  :title="__('create_field',{field:'service'})"
                  @cancel="showCreateService=false"
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

        <FormField :errors="form.errors.unit_price" :label="__('unit_price')">
            <FormControl
                v-model="form.unit_price"
                :icon="mdiCash"
                name="unit_price"
                required
            />
        </FormField>
        <FormField :errors="form.errors.consumed" :label="__('consumed')">
            <FormControl
                v-model="form.consumed"
                :icon="mdiArrowAll"
                name="unit_price"
                required
            />
        </FormField>


    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiAccount, mdiArrowAll, mdiCash} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__} from "../../Globals.js";
import {inject} from "vue";
import {Model} from "../../Utils/index.js";

let props = defineProps({
    isModal: {
        type: Boolean,
        default: true
    }
})

let showCreateService = inject('showCreateService');
let form = useForm({
    name: null,
    unit_price: null,
    consumed: null,
});
const submit = () => {
    Model.submit('create', 'services', form)
}

</script>
<style scoped>

</style>
