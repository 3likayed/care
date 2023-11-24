<script setup>

import FormField from "./FormField.vue";
import FormControl from "./FormControl.vue";
import {computed, watch} from "vue";
import {router} from "@inertiajs/vue3";
import {debounce} from "lodash";

let props = defineProps({
    parameters: {
        type: Array,
        default: ['search']
    }
})
let params = new URLSearchParams(document.location.search);
let searchParameters = computed(() => {
    return Object.fromEntries(props.parameters.map((item) => {
            if (typeof item === 'string')
                return [item, {
                    value: params.get(item), type: 'text', attributes: {},
                }];
            else if (typeof item === 'object')
                return [item.name, {
                    value: params.get(item.name), type: item.type ?? 'text', attributes: item.attributes ?? {}
                }];
        }
    ))
});

watch(searchParameters, debounce(function (value) {
    console.log('sassa')
    let data = {};
    for (const [key, val] of Object.entries(value)) {
        data[key] = val.value
    }

    router.visit('', {
        replace: true,
        preserveState: true,
        data: data
    })
}, 500), {deep: true})

</script>

<template>
    <div class=" grid grid-cols-2 md:grid-cols-3 w-full md:w-fit gap-x-5">
        <FormField
            v-for="(parameter,key) in searchParameters"
            :label="__(key)"
        >
            <FormControl
                v-model="parameter.value"
                :autocomplete="key"
                :errors="$page.props.errors[key]"
                :max="parameter.attributes.max"
                :min="parameter.attributes.min"
                :name="key"
                :type="parameter.type"
            />
        </FormField>
    </div>
</template>

<style scoped>

</style>
