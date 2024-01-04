<template>

  <SectionTitleLineWithButton :icon="mdiClipboardPulse"
                              :visit-data="visitData"
                              :has-create="hasCreate"
                              main
                              model="appointment-products">

    <template #create>
      <AppointmentProductCreate :data="data" :products="products" />
    </template>
  </SectionTitleLineWithButton>
  <!--    <DynamicSearch v-if="searchable" :fields="[{name:'search'},{name:'name'}]"
                     model="purchases"/>-->
  <CardBox has-table>
    <BaseTable
        :headers="headers"
        :pagination="pagination"
        :searchable="searchable"
        :sortable="sortable"
    >
      <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
        <td :data-label="__('product')">
          <Link :href="Model.showLink('products',item.product.id)">
            {{ item.product.name }}
          </Link>
        </td>
        <td :data-label="__('product')">
          <Link :href="Model.showLink('appointments',item.appointment.id)">
            {{ item.appointment.name }}
          </Link>
        </td>
        <td :data-label="__('quantity')">
          {{ item.quantity }}
        </td>
        <td :data-label="__('unit_price')">
          {{ item.unit_price }}
        </td>
        <td :data-label="__('total_price')">
          {{ item.total_price }}
        </td>
        <td>

          <TableOptions :has-show="false" :item="item" model="appointment-products" @edit="edited=item">
            <template #edit>
              <AppointmentProductEdit :data="edited"/>
            </template>
          </TableOptions>
        </td>

      </tr>

    </BaseTable>
  </CardBox>
</template>

<script setup>

import CardBox from "../../Components/Sahred/CardBox.vue";
import BaseTable from "../../Components/Sahred/BaseTable.vue";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import {ref} from "vue";
import {mdiCashCheck, mdiClipboardPulse} from "@mdi/js";
import AppointmentProductCreate from "./AppointmentProductCreate.vue";
import {Link} from "@inertiajs/vue3";
import {Model} from "../../Utils/index.js";
import AppointmentProductEdit from "./AppointmentProductEdit.vue";

let edited = ref();
let props = defineProps({
  data: Object,
  products: {
    type: Array,
    default: []
  },
  visitData: Object,
  hasCreate: {
      type : Boolean,
      default:true
  },
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
  {name: 'product.name', label: 'product', sortable: true, searchable: {name: 'product.id', options: props.products}},
  {name: 'appointment.id', label: 'appointment', sortable: true, searchable: {name: 'appointment.id'}},
  {name: 'quantity', sortable: true},
  {name: 'unit_price', sortable: true},
  {name: 'total_price', sortable: true}
];
</script>
<style>


</style>
