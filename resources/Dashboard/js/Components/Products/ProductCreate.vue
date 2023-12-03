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
        @cancel="showCreate=false"
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

        <FormField :errors="form.errors.name" :label="__('quantity')">
            <FormControl
                v-model="form.quantity"
                :icon="mdiStocking"
                name="quantity"
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
import {mdiAccount, mdiCash, mdiPhone, mdiPlusCircle, mdiStocking, mdiTrashCanOutline} from "@mdi/js";
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

let showCreate = inject('showCreate');
let form = useForm({
    name: null,
    quantity: 0,
    price: null,
    type:'product'

});
const submit = () => {
    if (!form.quantity) {
        form.transform(data => {
            data.quantity = 0;
            return data
        })
    }
    Model.submit('create', 'products', form)
}

</script>
<style scoped>

</style>
