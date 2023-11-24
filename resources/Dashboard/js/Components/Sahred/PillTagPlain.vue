<script setup>
import BaseIcon from "./BaseIcon.vue";

defineProps({
    label: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        default: null,
    },
    small: Boolean,
});
</script>

<template>
    <div
        :class="[small ? 'text-xs' : 'text-sm']"
        class="inline-flex items-center capitalize leading-none"
    >
        <BaseIcon
            v-if="icon"
            :class="small ? 'ms-1' : 'ms-2'"
            :path="icon"
            :size="small ? 14 : null"
            h="h-4"
            w="w-4"
        />
        <span>{{ label }}</span>
    </div>
</template>
