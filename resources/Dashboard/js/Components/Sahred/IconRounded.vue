<script setup>
import {colorsBgLight, colorsText} from "../../colors.js";
import BaseIcon from "./BaseIcon.vue";

defineProps({
    icon: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        default: null,
    },
    w: {
        type: String,
        default: "w-12",
    },
    h: {
        type: String,
        default: "h-12",
    },
    bg: Boolean,
});
</script>

<template>
    <BaseIcon
        :class="
      bg
        ? colorsBgLight[color]
        : [colorsText[color], 'bg-gray-50 dark:bg-slate-800']
    "
        :h="h"
        :path="icon"
        :w="w"
        class="rounded-full"
        size="24"
    />
</template>
