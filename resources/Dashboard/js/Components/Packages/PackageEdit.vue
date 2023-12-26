<template>

    <CardBoxModal v-if="can(`packages.edit`)"
                  :button-label="__('edit')"
                  :has-cancel="isModal"
                  :has-errors="form.hasErrors"
                  :is-dirty="form.isDirty"
                  :is-form="true"
                  :is-modal="isModal"
                  :model-value="true"
                  :title="__('edit_field',{field:'package'})"
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
        <FormField :errors="form.errors.service_id" :label="__('service')">
            <FormControl
                v-model="form.service_id"
                :icon="mdiTruck"
                :options="services"
                autocomplete="service"
                name="service"
                required
                type="select"
            />
        </FormField>
        <FormField :errors="form.errors.min" :label="__('min')">
            <FormControl
                v-model="form.min"
                :icon="mdiInformationBox"
                :min="0"
                name="min"
                required
            />
        </FormField>
        <FormField :errors="form.errors.max" :label="__('max')">
            <FormControl
                v-model="form.max"
                :icon="mdiInformationBox"
                :min="0"
                name="max"
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


    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiAccount, mdiCash, mdiInformationBox, mdiTruck} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__} from "../../Globals.js";
import {inject} from "vue";
import {Model} from "../../Utils/index.js";

let props = defineProps({
    data: Object,
    services: Array,
    isModal: {
        type: Boolean,
        default: true
    }
})

let showEdit = inject('showEdit');
let form = useForm({
    name: props.data.name,
    unit_price: props.data.unit_price,
    service_id: props.data.service_id,
    min: props.data.min,
    max: props.data.max,
});
const submit = () => {
    Model.submit('edit', 'packages', form,props.data.id)
}

</script>
<style scoped>

</style>
