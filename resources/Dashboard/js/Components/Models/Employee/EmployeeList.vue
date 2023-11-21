<template>
  <SectionTitleLineWithButton :icon="mdiAccountStarOutline" :title="__(`${Pluralize(model)}`)" main>

    <BaseButton :icon="mdiPlusCircle" color="success" @click="showCreate=true"/>

  </SectionTitleLineWithButton>

  <div v-if="hasSearch" class=" grid grid-cols-2 md:grid-cols-3 w-full md:w-fit gap-x-5">
    <FormField :label="__('search')">
      <FormControl
          v-model="search.search"
          autocomplete="search"
          name="search"

      />
    </FormField>
    <FormField :label="__('start')">
      <FormControl
          v-model="search.startDate"
          autocomplete="startDate"
          name="startDate"
          type="date"
      />

    </FormField>
    <FormField :label="__('end')">
      <FormControl
          v-model="search.endDate"
          autocomplete="endDate"
          name="endDate"
          type="date"
      />

    </FormField>
  </div>


  <CardBox has-table>
    <BaseTable :headers="['#',__('name'),__('phone'),__('address'),__('created_at')]"
               :pagination="pagination">
      <tr v-for="(item,key) in items" :key="key" class="rtl:flex-row-reverse">
        <td data-label="# ">{{ key + 1 }}</td>
        <td :data-label="__('name')" class="border-b-0 before:hidden justify-center  mx-auto ">
          {{ item.name }}
        </td>
        <td :data-label="__('phone')" class="">
          <ul class="list-decimal lg:ms-2 space-y-2 ">
            <li v-for="(phone , key) in item.phone" class="w-min">
              {{ phone }}
            </li>
          </ul>
        </td>
        <td :data-label="__('phone')">
          <ul class="list-decimal lg:ms-2 space-y-2 ">
            <li v-for="(address , key) in item.address">
              {{ address }}
            </li>
          </ul>
        </td>
        <td :data-label="__('created_at')">
          {{ item.created_at }}
        </td>
        <td :data-label="__('options')">
          <TableOptions :data="item" :model="model"/>
        </td>
      </tr>

    </BaseTable>
  </CardBox>
  <ModelData v-if="showCreate"
             :model="model"
             :show="showCreate"
             operation="create"
             @cancel="showCreate=false"/>
</template>


<script setup>

import ModelData from "../ModelData.vue";
import TableOptions from "../../Sahred/TableOptions.vue";
import BaseTable from "../../Sahred/BaseTable.vue";
import CardBox from "../../Sahred/CardBox.vue";
import {reactive, ref, watch} from "vue";
import {mdiAccountStarOutline, mdiPlusCircle} from "@mdi/js";
import Pluralize from "pluralize";
import SectionTitleLineWithButton from "../../Sahred/SectionTitleLineWithButton.vue";
import FormField from "../../Sahred/FormField.vue";
import BaseButton from "../../Sahred/BaseButton.vue";
import FormControl from "../../Sahred/FormControl.vue";
import {Search} from "../../../Utils/index.js";
import {debounce} from "lodash";


let props = defineProps({
  data: Object,
  hasPagination: Boolean,
  hasSearch: Boolean

})

let showCreate = ref(false);
let model = "employee";
let [items, pagination] = props.hasPagination ? [props.data.data, props.data.meta] : [props.data, null];


let search = reactive(Search.getParameters());
watch(search, debounce(function (value) {
  Search.start(value, model)
}, 500))


</script>
