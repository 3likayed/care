<template>


    <div v-if="hasSearch" class=" grid  md:grid-cols-3 w-full gap-x-5">

        <FormField :label="__('search')">
            <FormControl
                v-model="search.search"
                autocomplete="search"
                name="search"
            />
        </FormField>
        <FormField :label="__('start')">
            <FormControl
                v-model="search.start"
                autocomplete="start"
                name="start"
                type="date"
            />
        </FormField>
        <FormField :label="__('end')">
            <FormControl
                v-model="search.end"
                autocomplete="end"
                name="end"
                type="date"
            />
        </FormField>
        <div class="col-span-full ">
            <FormField :label="__('days')" class-addon="grid md:grid-cols-3 gap-5">
                <FormControl
                    v-model="daysInterval"
                    autocomplete="search"
                    name="search"
                >
                </FormControl>
                <BaseButton :icon="mdiCalendarToday" :label="__('next')"
                            color="success"
                            @click="[search.start,search.end]=Search.dateInterval({ interval:daysInterval })"/>
                <BaseButton :icon="mdiCalendarToday" :label="__('previous')"
                            color="danger"
                            @click="[search.start,search.end]=Search.dateInterval({interval:daysInterval , mode:-1 })"/>
            </FormField>


        </div>
    </div>

    <CardBox has-table>
        <BaseTable
            :headers="['#',__('patient'),__('reservation_type'),__('price'),__('date'),__('created_at')]"
            :pagination="pagination"
        >
            <tr
                v-for="(item,key) in data"
                :key="key"
                class="rtl:flex-row-reverse"
            >
                <td data-label="# ">
                    {{ key + 1 }}
                </td>
                <td :data-label="__('patient')"
                    class="border-b-0 before:hidden justify-center  mx-auto "
                >
                    <Link :href="Model.showLink('patient',item.patient.id)">
                        {{ item.patient.name }}
                    </Link>
                </td>
                <td :data-label="__('reservation_type')">
                    {{ item.reservation_type.name }}
                </td>
                <td :data-label="__('price')">
                    {{ item.price }}
                </td>
                <td :data-label="__('date')">
                    {{ item.date }}
                </td>
                <td :data-label="__('created_at')">
                    {{ item.created_at }}
                </td>
                <td :data-label="__('options')">
                    <TableOptions
                        :data="item"
                        :model="model"
                    />
                </td>
            </tr>
        </BaseTable>
    </CardBox>

</template>


<script setup>

import TableOptions from "../../Sahred/TableOptions.vue";
import BaseTable from "../../Sahred/BaseTable.vue";
import CardBox from "../../Sahred/CardBox.vue";
import {reactive, ref, watch} from "vue";
import FormField from "../../Sahred/FormField.vue";
import FormControl from "../../Sahred/FormControl.vue";
import {Model, Search} from "../../../Utils/index.js";
import {debounce} from "lodash";
import BaseButton from "../../Sahred/BaseButton.vue";
import {mdiCalendarToday} from "@mdi/js";
import {Link} from "@inertiajs/vue3";

let daysInterval = ref(null);
let props = defineProps({
    data: Object,
    pagination: Object | Boolean,
    hasSearch: Boolean
})

let model = 'reservation'
let search = reactive(Search.getParameters());
watch(search, debounce(function (value) {
    Search.start(value, model)
}, 500))


</script>
