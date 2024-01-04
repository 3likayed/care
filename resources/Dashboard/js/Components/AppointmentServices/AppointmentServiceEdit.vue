<template>

  <CardBoxModal :is-dirty="form.isDirty"
      v-if="can('appointment_products.edit')"
      :button-label="__('edit')"
      :has-cancel="isModal"
      :has-errors="form.hasErrors"
      :is-form="true"
      :is-modal="isModal"
      :model-value="true"
      :title="__('edit_field',{field:'appointment_products'})"
      @cancel="showEdit=false"
      @confirm="submit"
  >
    <FormField
        :errors="form.errors.quantity"
        :label="__('quantity')"
    >
      <FormControl
          v-model="form.quantity"
          :icon="mdiCart"
          :placeholder="__('quantity')"
          name="quantity"

      />
    </FormField>
  </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiCart} from "@mdi/js";
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
  isModal: {
    type: Boolean,
    default: true
  },
})

let showEdit = props.isModal ? inject('showEdit') : true;
let form = useForm({
  appointment_id: props.data?.appointment_id,
  quantity: props.data?.quantity,
});

const submit = () => {

  Model.submit('edit', 'appointment_products', form, props.data.id)
}


</script>
<style scoped>

</style>
