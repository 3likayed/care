<template>

    <CardBoxModal v-if="can('appointment_services.create')"
                  :button-label="__('create')"
                  :has-cancel="isModal"
                  :has-errors="form.hasErrors"
                  :is-dirty="form.isDirty"
                  :is-form="true"
                  :is-modal="isModal"
                  :model-value="true"
                  :title="__('create_field',{field:'appointment_services'})"
                  @cancel="showCreateAppointmentService=false"
                  @confirm="submit"
    >

        <FormField
            :errors="form.errors.service_id"
            :label="__('service')"
        >
            <FormControl
                v-model="form.service_id"
                :icon="mdiTruckDelivery"
                :options="services"
                name="service"

            />
        </FormField>
        <FormField
            :errors="form.errors.tool_id"
            :label="__('tool')"
        >
            <FormControl
                v-model="form.tool_id"
                :icon="mdiTruckDelivery"
                :options="tools"
                name="service"

            />
        </FormField>
        <FormField
            :errors="form.errors.tool_consumption"
            :label="__('tool_consumption')"
        >
            <FormControl
                v-model="form.tool_consumption"
                :icon="mdiCart"
                :placeholder="__('tool_consumption')"
                name="tool_consumption"

            />
        </FormField>
    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiCart, mdiTruckDelivery} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__, can} from "../../Globals.js";
import {inject} from "vue";
import {Model} from "../../Utils/index.js";

let props = defineProps({
    data: {
        type: Object,
        default: {}
    },
    services: Array,
    tools: Array,
    isModal: {
        type: Boolean,
        default: true
    },
})

let showCreateAppointmentService = inject('showCreateAppointmentService', false);
let form = useForm({
    appointment_id: props.data.appointment_id,
    service_id: null,
    tool_id: null,
    tool_consumption: null,
});

const submit = () => {

    Model.submit('create', 'appointment_services', form, props.data.id)
}


</script>
<style scoped>

</style>
