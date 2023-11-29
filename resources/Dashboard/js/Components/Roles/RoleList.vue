<script setup>

import {ref} from "vue";
import BaseTable from "../Sahred/BaseTable.vue";
import TableOptions from "../Sahred/TableOptions.vue";
import CardBox from "../Sahred/CardBox.vue";


let props = defineProps({
    data: Object,
    hasPagination: Boolean,
    hasSearch: Boolean

})

let showCreate = ref(false);
let model = "Role";

</script>

<template>
    <CardBox has-table>
        <BaseTable :headers="['#',__('name'),__('created_at')]">
            <tr
                v-for="(item,key) in data"
                class="rtl:flex-row-reverse"
            >
                <td data-label="# ">
                    {{ key + 1 }}
                </td>
                <td
                    :data-label="__('name')"
                    class="border-b-0 lg:w-6 before:hidden w-24 mx-auto "
                >
                    {{ item.name }}
                </td>
                <td :data-label="__('created_at')">
                    {{ item.created_at }}
                </td>
                <td :data-label="__('options')">
                    <TableOptions
                        :data="item"
                        :has-show="false"
                        :model="model"
                    />
                </td>
            </tr>
        </BaseTable>
    </CardBox>
</template>

<style scoped>

</style>
