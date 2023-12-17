<template>

    <CardBoxModal :is-dirty="form.isDirty"
        v-if="can(`products.edit`)"
        :button-label="__('edit')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__('edit_field',{field:'product'})"
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
        <FormField :errors="form.errors.name" :label="__('price')">
            <FormControl
                v-model="form.price"
                :icon="mdiCash"
                name="price"
                required
            />
        </FormField>

    </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiAccount, mdiCash} from "@mdi/js";
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
    quantity: props.data.quantity,
    price: props.data.price,


});


const submit = () => {
    Model.submit('edit', 'products', form, props.data.id)
}

</script>
<style scoped>

</style>
