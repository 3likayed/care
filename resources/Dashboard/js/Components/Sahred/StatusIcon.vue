<script setup>

import {mdiCheck, mdiClock, mdiClockOutline, mdiClose, mdiMinus} from "@mdi/js";
import IconRounded from "./IconRounded.vue";


let props = defineProps({
    status: String,
    label: String
})
</script>

<template>



    <div class="flex justify-center">
        <IconRounded v-if="status==='completed'" :icon='mdiCheck' bg color="success" h="h-7" w="w-7"/>
        <IconRounded v-else-if="status==='pending'" :icon='mdiClockOutline' bg color="warning" h="h-7" w="w-7"/>
        <IconRounded v-else-if="status==='not_completed'" :icon='mdiMinus' bg color="info" h="h-7" w="w-7"/>
        <IconRounded v-else-if="status==='canceled'" :icon='mdiClose' bg color="danger" h="h-7" w="w-7"/>
    </div>
    <p class="text-center">
        {{ __(label ??'') }}
    </p>


</template>

<style scoped>

</style>
