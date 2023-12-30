<template>

  <SectionTitleLineWithButton :icon="mdiClipboardPulse" :title="__('tools')" main model="tools">
    <slot name="create">

    </slot>
    <template #create>
      <Toolreate/>
    </template>
  </SectionTitleLineWithButton>
  <CardBox has-table>
    <BaseTable
        :headers="headers" :pagination="pagination"
        :searchable="searchable"
        :sortable="sortable"
    >
      <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
        <td data-label="# ">{{ item.id }}</td>
        <td :data-label="__('name')">
          {{ item.name }}
        </td>
        <td :data-label="__('consumed_quantity')">
          {{ item.consumed_quantity }}
        </td>
        <td :data-label="__('quantity')">
          {{ item.available }}
        </td>
        <td :data-label="__('observe_quantity')">
          {{ item.observe_quantity }}
        </td>
        <td :data-label="__('unit_price')">
          {{ item.unit_price }}
        </td>
        <td :data-label="__('created_at')">
          {{ moment(item.created_at).format('YYYY-MM-DD') }}
        </td>
        <td :data-label="__('options')">
          <TableOptions :item="item" model="tools" @edit="edited=item">
            <template #edit>
              <toolEdit :data="edited"/>
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
import {mdiClipboardPulse} from "@mdi/js";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import toolEdit from "./ToolEdit.vue";
import moment from "moment";
import Toolreate from "./ToolCreate.vue";
import {ref} from "vue";

let edited = ref();
let props = defineProps({
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
  {name: 'name', sortable: true, searchable: true},
  {name: 'consumed_quantity', searchable: true},
  {name: 'stocks_sum_available', label: 'available', sortable: true},
  {name: 'observe_quantity', sortable: true},
  {name: 'unit_price', sortable: true},
  {name: 'created_at', sortable: true}
]
</script>
<style>


</style>
