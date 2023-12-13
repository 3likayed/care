<script setup>

import BaseButton from "./BaseButton.vue";


defineProps({
    label: {
        type: String,
        default: null,
    },
    errors: String,
    cols: {
        type: Object,
        default: null,
    },
    button: {
        type: Object,
        default: null,
    },
});


</script>

<template>
    <div class="mt-5 last:mb-0 p-2 rounded-md dark:border-slate-800 border-gray-200 border">
        <div class="flex items-center justify-between">
            <label
                v-if="label"
                class="font-extrabold rounded px-5 me-3 mb-2 inline-flex justify-center p-1.5 items-center border text-black bg-gray-50 dark:bg-slate-800 dark:text-white dark:border-gray-700 "
            >
                {{ __(label) }}</label>
            <BaseButton
                v-if="button"
                :color="button.color"
                :icon="button.icon"
                color="whiteDark"
                @click="$emit('buttonClick')"
            />
        </div>
        <div :class="`grid gap-x-5 grid-cols-${cols?.sm ??'1'} lg:grid-cols-${(cols?.lg) ?? 1 }`">
            <slot/>
        </div>
        <div
            v-if="errors"
            class="text-xs text-red-500 dark:text-red-400 mt-1"
        >
            {{ errors }}
        </div>
    </div>
</template>
