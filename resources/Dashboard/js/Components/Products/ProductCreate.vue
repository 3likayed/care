<template>

    <CardBoxModal
        v-if="can(`products.create`)"
        :button-label="__('create')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
        :is-form="true"
        :is-modal="isModal"
        :model-value="true"
        :title="__('create_field',{field:'product'})"
        @cancel="showCreateProduct=false"
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

        <FormField :errors="form.errors.quantity" :label="__('quantity')">
            <FormControl
                v-model="form.quantity"
                :icon="mdiCart"
                name="quantity"
                required
            />
        </FormField>
        <FormField :errors="form.errors.price" :label="__('price')">
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
import {mdiAccount, mdiCash, mdiPhone, mdiPlusCircle, mdiCart, mdiTrashCanOutline} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__, handleField} from "../../Globals.js";
import {inject} from "vue";
import {Model} from "../../Utils/index.js";

let props = defineProps({
    isModal: {
        type: Boolean,
        default: true
    }
})

let showCreateProduct = inject('showCreateProduct');
let form = useForm({
    name: null,
    quantity: 0,
    price: null,
    type:'product'

});
const submit = () => {
    Model.submit('create', 'products', form)
}

</script>
<style scoped>

</style>
