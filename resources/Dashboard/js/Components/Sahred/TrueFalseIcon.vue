<script setup>

import {mdiCheck, mdiClose} from "@mdi/js";
import IconRounded from "./IconRounded.vue";
let props = defineProps({
    isTrue : Boolean|Object ,
})
</script>

<template>

    <IconRounded v-if="isTrue" :icon='mdiCheck' bg color="success" h="h-7" w="w-7"/>
    <IconRounded v-else :icon='mdiClose' bg color="danger" h="h-7" w="w-7"/>

</template>

<style scoped>

</style>
