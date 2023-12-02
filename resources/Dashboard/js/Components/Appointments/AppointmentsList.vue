<template>

  <SectionTitleLineWithButton :icon="mdiFormatListBulleted" :title="__('appointments')" main>

    <template #create>
      <slot name="create">
        <AppointmentCreate :appointmentTypes="appointmentTypes"/>
      </slot>

    </template>
  </SectionTitleLineWithButton>
  <DynamicSearch v-if="hasSearch"
                 :fields="searchFields"
                 model="appointments">
    <div class="col-span-full">
      <FormField :label="__('days')" class-addon="grid md:grid-cols-3 gap-5">
        <FormControl
            v-model="daysInterval"
            autocomplete="search"
            name="search"
        >
        </FormControl>
        <BaseButton :icon="mdiCalendarToday" :label="__('next')"
                    color="success"
                    @click="Search.start(Search.dateInterval({ interval:daysInterval }),'appointments',true)"/>
        <BaseButton :icon="mdiCalendarToday" :label="__('previous')"
                    color="danger"
                    @click="Search.start(Search.dateInterval({ interval:daysInterval,mode:-1 }),'appointments',true)"/>
      </FormField>
    </div>
  </DynamicSearch>
  <CardBox has-table>
    <BaseTable
        :headers="headerFields"
        :pagination="pagination"
        :sortable="sortable"
    >
      <tr v-for="(item,key) in items" class="rtl:flex-row-reverse">
        <td data-label="# ">{{ key + 1 }}</td>
        <td :data-label="__('patient')">
          <Link :href="route('dashboard.patients.show',item.patient.id)">
            {{ item.patient.name }}
          </Link>

        </td>
        <td :data-label="__('appointment_type')">
          {{ item.appointment_type.name }}
        </td>
        <td :data-label="__('price')">

          {{ item.price }}
        </td>
        <td :data-label="__('date')">
          {{ moment(item.date).format("YYYY-MM-DD") }}
        </td>
        <td :data-label="__('time')">
          {{ moment(item.date).format("h:mm A") }}
        </td>
        <td :data-label="__('created_at')">
          {{ moment(item.created_at).format('YYYY-MM-DD') }}
        </td>
        <td :data-label="__('options')">
          <TableOptions :item="item" model="appointments" @edit="edited=item">
            <template #edit>
              <AppointmentEdit :appointmentTypes="appointmentTypes" :data="edited"/>
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
import {mdiCalendarToday, mdiFormatListBulleted} from "@mdi/js";
import SectionTitleLineWithButton from "../../Components/Sahred/SectionTitleLineWithButton.vue";
import DynamicSearch from "../../Components/DynamicSearch.vue";
import TableOptions from "../../Components/Sahred/TableOptions.vue";
import AppointmentEdit from "./AppointmentEdit.vue";
import moment from "moment";
import AppointmentCreate from "./AppointmentCreate.vue";
import {computed, ref} from "vue";
import {Link, usePage} from "@inertiajs/vue3";
import BaseButton from "../Sahred/BaseButton.vue";
import FormControl from "../Sahred/FormControl.vue";
import FormField from "../Sahred/FormField.vue";
import {Search} from "../../Utils/index.js";


let daysInterval = ref();
let edited = ref();
let appointmentTypes = computed(() => usePage().props.appointment_types);

let props = defineProps({
  data: Object,
  items: Array,
  pagination: Object,
  sortable: {
    type: Boolean,
    default: true,
  },
  hasSearch: {
    type: Boolean,
    default: true,
  },
})
let searchFields = [
  {name: 'start', type: 'date'},
  {name: 'end', type: 'date'},
  {name: 'patient'},
  {name: 'appointment_type_id', label: 'appointment-type', type: 'select', options: appointmentTypes.value}
]

let headerFields = [
  '#',
  {name: 'patients.name', label: 'patient', sortable: true},
  {name: 'appointment_types.name', label: 'appointment_type', sortable: true},
  {name: 'price', sortable: true},
  {name: 'date', sortable: true},
  'time',
  {name: 'created_at', sortable: true}]
</script>
<style>


</style>
