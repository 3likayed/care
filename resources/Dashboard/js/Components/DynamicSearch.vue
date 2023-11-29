<script setup>
import {__} from "../Globals.js";
import FormField from "./Sahred/FormField.vue";
import FormControl from "./Sahred/FormControl.vue";
import {computed, onMounted, reactive, watch} from "vue";
import {Search} from "../Utils/index.js";
import {debounce} from "lodash";

let props = defineProps({
    fields: {
        type: Array,
        default: [{name: 'search'}],
    },
    model: String
})


let searchParameters = computed(() => Search.getParameters())
let computedSearch = computed(() =>
    props.fields.reduce((accumulator, field, index) => {
        accumulator[field.name] = field.value ?? searchParameters.value.filter[field.name];
        return accumulator;
    }, {})
)


let fieldValues = []
props.fields.forEach((item) => {
    if (typeof item === 'string')
        fieldValues.push({name: item, label: item, type: 'text'})
    else {
        fieldValues.push({
            name: item.name,
            label: item.label ?? item.name,
            options: item.options ?? null,
            type: item.type ?? 'text',
            icon: item.icon ?? null,
        })
    }

});


let search = reactive(computedSearch.value);
const searchStart = debounce((key, value) => {
    let newValue = {[key]: value}
    Object.assign(search, newValue)
    Search.start(search, props.model)
}, 500)

onMounted(() => {
        watch(computedSearch, (value) => {
            Object.assign(search, value)
        })
    }
)
</script>

<template>
    <div class=" grid  md:grid-cols-3 w-full gap-x-5">
        <FormField
            v-for="(field,key) in fieldValues"
            :key="key"
            :label="__(field.label)">

            <FormControl
                v-model="search[field.name]"
                :autocomplete="field.name"
                :icon="field.icon"
                :name="field.name"
                :options="field.options"
                :type="field.type"
                required
                @update:model-value="value=>searchStart(field.name,value)"

            />
        </FormField>
        <slot/>
    </div>

</template>

<style scoped>

</style>
