<template>

    <CardBoxModal :is-dirty="form.isDirty"
        v-if="can(`services.create`)"
        :button-label="__('create')"
        :has-cancel="isModal"
        :has-errors="form.hasErrors"
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

let showCreateService = inject('showCreateService');
let form = useForm({
    name: null,
    quantity: null,
    price: null,
    type:"service"

});
const submit = () => {
    if (!form.quantity) {
        form.transform(data => {
            data.quantity = 0;
            return data
        })
    }
    Model.submit('create', 'services', form)
}

</script>
<style scoped>

</style>
