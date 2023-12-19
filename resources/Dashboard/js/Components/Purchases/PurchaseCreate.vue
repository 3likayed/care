    <template>

  <CardBoxModal :is-dirty="form.isDirty"
      v-if="can(`purchases.create`)"
      :button-label="__('create')"
      :has-cancel="isModal"
      :has-errors="form.hasErrors"
      :is-form="true"
      :is-modal="isModal"
      :model-value="true"
      :title="__('create_field',{field:'purchases'})"
      @cancel="showCreatePurchase=false"
      @confirm="submit"
  >
    <FormField :errors="form.errors.supplier_name" :label="__('supplier_name')">
      <FormControl
          v-model="form.supplier_id"
          :icon="mdiAccount"
          :is-disabled="data.supplier_id"
          :options="suppliers"
          name="supplier_id"
          required
          type="select"

      />
    </FormField>


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
      <div v-for="(products,key) in form.products" :key="key"
           class="grid grid-cols-1 lg:grid-cols-5  gap-5 ">
        <FormControl
            v-model="form.products[key].name"
            :errors="form.errors[`products.${key}.name`]"
            :icon="mdiFormatLetterCase"
            is-disabled
            name="product_name[]"

        />
        <FormControl
            v-model="form.products[key].quantity"
            :errors="form.errors[`products.${key}.quantity`]"
            :icon="mdiCart"
            :placeholder="__('quantity')"
            name="quantity[]"
            @update:model-value="(value)=>setProductTotal(value,key)"

        />
        <FormControl
            v-model="form.products[key].price"
            :errors="form.errors[`products.${key}.price`]"
            :icon="mdiCash"
            :placeholder="__('price')"
            name="product_price"
            required
            @update:model-value="(value)=>setProductTotal(value,key)"

        />
        <FormControl
            v-model="form.products[key].expires_at"
            :errors="form.errors[`products.${key}.expires_at`]"
            :icon="mdiCash"
            :placeholder="__('expires_at')"
            type="date"
        />
        <FormControl
            v-model="form.products[key].total"
            :actions="{delete:{color:'danger' , icon:mdiTrashCanOutline  ,key:key ,isDisabled:false} }"
            :icon="mdiCash"
            :placeholder="__('total')"
            is-disabled
            @action="(action )=>handleField(form,'products',action ,key)"
        />
      </div>

    </FormField>

    <FormField class="space-y-2">
      <FormControl
          v-model="form.paid_price"
          :errors="form.errors.paid_price"
          :icon="mdiCash" :label="__('paid_price')"
          :max="totalPrice"
          id="sss"
          :min="0"
          name="paid_price"
      />
      <FormControl
          v-model="totalPrice"
          :icon="mdiCash"
          :label="__('total_price')"
          is-disabled
          name="paid_price"
      />
      <FormControl
          v-model="remainingPrice"
          :icon="mdiCash"
          :label="__('remaining_price')"
          is-disabled
          name="paid_price"
      />
    </FormField>
    <FormField :errors="form.errors.notes" :label="__('notes')">
      <FormControl
          v-model="form.notes"
          :icon="mdiInformation"
          name="notes"
      />
    </FormField>
  </CardBoxModal>
</template>

<script setup>

import CardBoxModal from "../Sahred/CardBoxModal.vue";
import {
  mdiAccount,
  mdiBoxCutter,
  mdiCash,
  mdiFormatLetterCase,
  mdiInformation,
  mdiCart,
  mdiTrashCanOutline
} from "@mdi/js";
import FormField from "../Sahred/FormField.vue";
import FormControl from "../Sahred/FormControl.vue";
import {useForm} from "@inertiajs/vue3";
import {__, handleField} from "../../Globals.js";
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

let showCreatePurchase = inject('showCreatePurchase');
let form = useForm({
  supplier_id: props.data?.supplier_id,
  products: props.data?.products ?? [],
  notes: null,
  paid_price: ref(null),
  total: null

});

const submit = () => {

  Model.submit('create', 'purchases', form)
}

let productsOptions = ref(props.products);


const appendProduct = (product_id) => {
  let product = collect(props.products).firstWhere('id', '=', product_id)
  form.products.push({id: product.id, name: product.name, total: 0});

}
const setProductTotal = (value, key) => {
  let total = parseFloat(form.products[key].quantity * form.products[key].price).toFixed(2);
  form.products[key].total = total > 0 ? total : 0;
}


let totalPrice = ref(0);
let remainingPrice = ref(0);

watchEffect(() => {
  let total = collect(form.products).sum('total');
  total = total > 0 ? total : 0;
  totalPrice.value = total
  let remaining = total - form.paid_price;
  remainingPrice.value = remaining > 0 ? remaining : 0;

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
