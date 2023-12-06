<script setup>

import CardBox from "../Sahred/CardBox.vue";

let props = defineProps({
    data: Object,
})
</script>

<template>
    <CardBox
        v-if="can(`purchase-transactiond.show`)"
        :has-confirm="false"
    >
        <div class="grid grid-cols-2">
            <div> {{ __('name') }}</div>
            <div> {{ data.name }}</div>
        </div>
    </CardBox>
</template>

<style scoped>

</style>
