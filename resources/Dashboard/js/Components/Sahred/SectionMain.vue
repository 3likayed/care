<script setup>
import {containerFluidMaxW, containerMaxW} from "../../config.js";

let props = defineProps({
    fluid: {
        type: Boolean,
        default: false
    }
})
</script>

<template>
    <section
        :class="fluid?containerFluidMaxW: containerMaxW"
        class="p-6"
    >
        <slot/>
    </section>
</template>
