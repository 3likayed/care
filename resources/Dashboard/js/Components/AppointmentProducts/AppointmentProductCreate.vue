<template>

  <CardBoxModal
      v-if="can('appointment_products.create')"
      :button-label="__('create')"
      :has-cancel="isModal"
      :has-errors="form.hasErrors"
      :is-form="true"
      :is-modal="isModal"
      :model-value="true"
      :title="__('create_field',{field:'appointment_products'})"
      @cancel="showCreateAppointmentProduct=false"
      @confirm="submit"
  >
    <FormField
        :errors="form.errors[`products`]"
        :label="__('product_name')"
        class-addon=" space-y-5"
    >
      <FormControl
          :icon="mdiBoxCutter"
          :options="productsOptions"
          name="product_id"
          required
          type="select"
          @update:model-value="(value)=>appendProduct(value)"
      />
      <FormField v-for="(products,key) in form.products" :key="key"
                 :label="form.products[key].name" class-addon="grid grid-cols-1 lg:grid-cols-2  gap-5 ">
        <FormControl
            v-model="form.products[key].quantity"
            :actions="{delete:{color:'danger' , icon:mdiTrashCanOutline  ,key:key} }"
            :errors="form.errors[`products.${key}.quantity`]"
            :icon="mdiCart"
            :max="form.products[key].available"
            :min="0"
            :placeholder="__('quantity')"
            class="lg:col-span-2"
            name="quantity[]"

            @action="(action )=>handleField(form,'products',action ,key)"

            @update:model-value="(value)=>setProductTotal(value,key)"

        />
        <FormControl
            v-model="form.products[key].available"
            :icon="mdiFormatLetterCase"
            is-disabled
            label="available"

        />
        <FormControl
            v-model="form.products[key].total"
            :icon="mdiFormatLetterCase"
            is-disabled
            label="total"

        />
      </FormField>

    </FormField>
  </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {mdiBoxCutter, mdiCart, mdiFormatLetterCase, mdiTrashCanOutline} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__, can, handleField, parsePrice} from "../../Globals.js";
import {inject, ref, watchEffect} from "vue";
import {Model} from "../../Utils/index.js";
import {collect} from "collect.js";

let props = defineProps({
  data: {
    type: Object,
    default: {}
  },
  suppliers: {
    type: Array,
    default: []
  },
  products: {
    type: Array,
    default: []
  },
  isModal: {
    type: Boolean,
    default: true
  },
  notes:
      {
        type: String,
        default: " "
      }
})

let showCreateAppointmentProduct = inject('showCreateAppointmentProduct');
let form = useForm({
  appointment_id: props.data?.appointment_id,
  products: props.data?.products ?? [],
});


const submit = () => {

  Model.submit('create', 'appointment_products', form)
}


const appendProduct = (product_id) => {
  let product = collect(props.products).firstWhere('id', '=', product_id)
  form.products.push({id: product.id, name: product.name, total: 0, available: product.pivot.available});


}
const setProductTotal = (value, key) => {
  let price = form.products[key].quantity *
      collect(props.products).where('id', '=', form.products[key].id).first().price
  let total = parsePrice(price)
  form.products[key].total = total > 0 ? total : 0;
}


let totalPrice = ref(0);
let remainingPrice = ref(0);
let productsOptions = ref();

watchEffect(() => {
  let total = collect(form.products).sum('total');
  total = total > 0 ? total : 0;
  totalPrice.value = total
  let remaining = total - form.paid_price;
  remainingPrice.value = remaining > 0 ? remaining : 0;
})
watchEffect(() => {

  productsOptions.value = collect(props.products)
      .whereNotIn('id', collect(form.products).pluck('id').all())
      .all()
})


/*let computedProducts = computed(() => collect(props.products).whereNotIn('id',
    collect(form.products).pluck('id').all()
).all());

let productsOptions = ref();

watchEffect(() => {
    productsOptions.value = computedProducts.value
})*/

</script>
<style scoped>

</style>
