<template>
  <CardBoxModal
      v-if="computedValue"
      :button-label="__('continue')"
      :has-cancel="true"
      :model-value="computedValue"
      :title="__('are_you_sure')"
      button="danger"
      @cancel="computedValue=false ; emit('cancel')"
      @confirm="computedValue=false ; emit('confirm')"
  />
</template>

<script setup>

import CardBoxModal from "./CardBoxModal.vue";
import {computed, ref} from "vue";

let confirm = ref(true)
let props = defineProps({
  modelValue: Boolean
})
let emit = defineEmits(['update:modelValue', 'confirm', 'cancel'])
let computedValue = computed(
    {
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)

    }
);

</script>
<style scoped>

</style>
