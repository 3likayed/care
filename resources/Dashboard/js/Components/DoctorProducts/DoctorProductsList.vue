<template>

  <SectionTitleLineWithButton :icon="mdiCashCheck"
                              :visit-data="visitData"
                              main
                              model="doctor-products">

    <template #create>
      <DoctorProductCreate :data="data" :doctors="doctors" :products="products"/>
    </template>
  </SectionTitleLineWithButton>
  <CardBox has-table>
    <BaseTable
        :headers="headers"
        :pagination="pagination"
        :searchable="searchable"
        :sortable="sortable"
    >
      <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
        <td :data-label="__('product_name')">
          <Link :href="Model.showLink('products',item.product.id)">
            {{ item.product.name }}
          </Link>
        </td>

        <td :data-label="__('quantity')">
          {{ item.quantity }}
        </td>
        <td :data-label="__('created_at')">
          {{ moment(item.created_at).format('YYYY-MM-DD') }}
        </td>
      </tr>

    </BaseTable>
  </CardBox>
</template>

<script setup>

import CardBox from "../../Components/Sahred/CardBox.vue";
import BaseTable from "../../Components/Sahred/BaseTable.vue";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import moment from "moment";
import DoctorProductCreate from "./DoctorProductCreate.vue";
import {Link} from "@inertiajs/vue3";
import {Model} from "../../Utils/index.js";
import {mdiCashCheck} from "@mdi/js";

let props = defineProps({
  data: Object,
  products: {
    type: Array,
    default: []
  },
  doctors: {
    type: Array,
    default: []
  },
  visitData: Object,
  items: Array,
  pagination: Object,
  searchable: {
    type: Boolean,
    default: true,
  },
  sortable: {
    type: Boolean,
    default: true,
  },
})

let headers = [
  {name: 'id', sortable: true, searchable: true},
  {
    name: 'product.name',
    label: 'product_name',
    sortable: true,
    searchable: {name: 'product.id', options: props.products}
  },
  {name: 'quantity', sortable: true},
];

</script>
<style>


</style>
