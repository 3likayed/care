<template>

    <CardBoxModal :is-dirty="form.isDirty"
        v-if="can(`services.edit`)"
        :button-label="__('edit')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__('edit_field',{field:'service'})"
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
import {mdiAccount, mdiArrowAll, mdiCash} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__} from "../../Globals.js";
import {inject} from "vue";
import {Model} from "../../Utils/index.js";

let props = defineProps({
    data: {
        type: Object,
        default: {},
    },
    isModal: {
        type: Boolean,
        default: true
    }
})

let showEdit = props.isModal ? inject('showEdit') : true;


let form = useForm({
    name: props.data.name,
    unit_price: props.data.unit_price,


});


const submit = () => {
    Model.submit('edit', 'services', form, props.data.id)
}

</script>
<style scoped>

</style>
