<script setup>
import {computed, ref, useSlots} from "vue";
import {mdiPlusCircle} from "@mdi/js";

import {__, can, modelResolver} from "../Globals.js";
import BaseButton from "./Sahred/BaseButton.vue";
import SectionTitleLineWithButton from "./Sahred/SectionTitleLineWithButton.vue";
import CardBox from "./Sahred/CardBox.vue";
import BaseTable from "./Sahred/BaseTable.vue";
import TableOptions from "./Sahred/TableOptions.vue";
import DynamicData from "./DynamicData.vue";
import DynamicSearch from "./DynamicSearch.vue";

let props = defineProps({
    resolver: Object,
    icon: String,
    model: String,
    hasCreate: {
        type: Boolean,
        default: true,
    }
});
let computedListResolver = computed(() => props.resolver.list);
let computedSearchResolver = computed(() => props.resolver.search);

let labels = ["#"].concat(computedListResolver.value.fields.map(item => {
        if (typeof item === 'string') {
            return __(item);
        } else if (typeof item === 'object' && 'name' in item) {

            return __(item.label || item.name);
        }
    })
);

let showCreate = ref(false);
let emit = defineEmits(['create'])

const fieldValue = (fieldKey, itemKey) => {
    const keys = (typeof fieldKey === 'object' ? fieldKey.name : fieldKey).split('.');

    let value = computedListResolver.value.items[itemKey];

    keys.forEach(function (key) {
        value = value[key];
    });
    return value
};

const fieldData = (fieldKey, dataKey, defaultKey = 'name') => {
    const k = (typeof fieldKey === 'object' ? (fieldKey[dataKey] ?? fieldKey[defaultKey]) : fieldKey)
    return __(k)
};


let slots = useSlots()
let customCreate = slots['create'];
const click = () => {
    if (!customCreate) {
        showCreate.value = true
    } else {
        emit('create');
    }
}


</script>

<template>
    <SectionTitleLineWithButton
        :icon="icon"
        :title="__(modelResolver(model))"
        main
    >
        <BaseButton
            v-if="can(`${modelResolver(model)}.create`) && hasCreate"
            :icon="mdiPlusCircle"
            color="success"
            @click="click"
        />
    </SectionTitleLineWithButton>


    <DynamicSearch v-if="computedSearchResolver" :model="model" :resolver="computedSearchResolver"/>
    <slot name="search">

    </slot>
    <CardBox has-table>
        <BaseTable
            :headers="labels"
            :pagination="computedListResolver.pagination"
        >
            <tr
                v-for="(item,itemKey) in computedListResolver.items"
                :key="itemKey"
                class="rtl:flex-row-reverse"
            >
                <td data-label="# ">
                    {{ itemKey + 1 }}
                </td>
                <td v-for="(field,fieldKey) in computedListResolver.fields " :data-label="fieldData(field,'label')">
                    {{ fieldValue(field, itemKey) }}
                </td>
                <td :data-label="__('options')">
                    <TableOptions
                        :edit-resolver="resolver.edit"
                        :has-destroy="resolver.list.hasDestroy"
                        :has-edit="resolver.list.hasEdit"
                        :has-show="resolver.list.hasShow"
                        :item="item"
                        :model="model"
                    />
                </td>
            </tr>
        </BaseTable>
    </CardBox>

    <slot name="create">
        <DynamicData
            v-if="showCreate && !customCreate && resolver.create "
            :item="resolver.create?.item"
            :model="model"
            :resolver="resolver.create"
            :show="showCreate"
            operation="create"
            @cancel="showCreate=false"
            v-on="resolver.create.on??{}"
        />
    </slot>
</template>

<style scoped>

</style>
