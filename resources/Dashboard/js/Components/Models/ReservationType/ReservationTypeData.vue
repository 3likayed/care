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
            :errors="form.errors.price"
            :label="__('price')"
            label-for="price"
        >
            <FormControl
                v-model="form.price"
                :icon="mdiAccount"
                autocomplete="price"
                name="price"
                required
                type="number"
            />
        </FormField>
    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../../Sahred/CardBoxModal.vue";
import {mdiAccount} from "@mdi/js";
import FormField from "../../Sahred/FormField.vue";
import FormControl from "../../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
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
let model = 'reservationType'

let form = useForm({
    name: props.data?.name,
    price: props.data?.price,
});

</script>
<style scoped>

</style>
