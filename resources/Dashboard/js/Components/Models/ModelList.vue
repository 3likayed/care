<script setup>
import {defineAsyncComponent} from "vue";

let props = defineProps({
  data: {
    type: Object,
    default: {},
  },
  model: String,
  hasPagination: Boolean,
  hasSearch: Boolean,
});

const firstLetter = props.model.charAt(0)
const firstLetterCap = firstLetter.toUpperCase()
const remainingLetters = props.model.slice(1)

const capitalizedWord = firstLetterCap + remainingLetters

//example "./Employee/EmployeeList.vue"
let component = defineAsyncComponent(() => import(`./${capitalizedWord}/${capitalizedWord}List.vue`))

</script>

<template>
  <component :is="component"
             :data="data"
             :has-pagination="hasPagination"
             :has-search="hasSearch"
  />
</template>

<style scoped>

</style>
