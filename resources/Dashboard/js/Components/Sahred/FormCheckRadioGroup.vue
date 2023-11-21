<script setup>
const props = defineProps({
  isColumn: Boolean,
  label: String,
  labelFor: String,
});

</script>

<template>
  <div>
    <label v-if="label" :for="labelFor" class="block font-bold mb-2">{{
        label
      }}</label>
    <div
        :class="{ 'flex-col': isColumn }"
        class="flex justify-start flex-wrap -mb-3"
    >
      <slot/>
    </div>
  </div>

</template>
