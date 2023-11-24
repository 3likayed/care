<script setup>
import {computed, useSlots} from "vue";
import BaseIcon from "./BaseIcon.vue";
import IconRounded from "./IconRounded.vue";

defineProps({
    icon: {
        type: String,
        default: null,
    },
    title: {
        type: String,
        required: false,
    },
    main: Boolean,
});

const hasSlot = computed(() => useSlots().default);
</script>

<template>
    <section
        :class="{ 'justify-between' : title ,'justify-end':!title}"
        class="mb-6 flex items-center"
    >
        <div class="flex items-center justify-end">
            <IconRounded
                v-if="icon && main"
                :icon="icon"
                bg
                class="me-3"
                color="light"
            />
            <BaseIcon
                v-else-if="icon"
                :path="icon"
                class="me-2"
                size="20"
            />
            <h1
                v-if="title"
                :class="main ? 'text-2xl md:text-3xl' : 'text-lg mm:text-xl'"
                class="leading-tight"
            >
                {{ title }}
            </h1>
        </div>
        <slot v-if="hasSlot"/>
    </section>
</template>
