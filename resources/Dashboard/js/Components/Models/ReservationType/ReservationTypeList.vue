<template>


    <div
        v-if="hasSearch"
        class=" grid grid-cols-2 md:grid-cols-3 w-full md:w-fit gap-x-5"
    >
        <FormField :label="__('search')">
            <FormControl
                v-model="search.search"
                autocomplete="search"
                name="search"
            />
        </FormField>
    </div>

    <CardBox has-table>
        <BaseTable
            :headers="['#',__('name'),__('price'),__('created_at')]"
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
                <td :data-label="__('name')"
                    class="border-b-0 before:hidden justify-center  mx-auto "
                >
                    {{ item.name }}
                </td>
                <td :data-label="__('price')">
                    {{ item.price }}
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
import {reactive, watch} from "vue";
import FormField from "../../Sahred/FormField.vue";
import FormControl from "../../Sahred/FormControl.vue";
import {Search} from "../../../Utils/index.js";
import {debounce} from "lodash";


let props = defineProps({
    data: Object,
    pagination: Object | Boolean,
    hasSearch: Boolean

})

let model = 'reservationType'
let search = reactive(Search.getParameters());
watch(search, debounce(function (value) {
    Search.start(value, model)
}, 500))


</script>
