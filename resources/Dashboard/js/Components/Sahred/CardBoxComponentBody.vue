<script setup>
defineProps({
    noPadding: Boolean,
});
</script>

<template>
    <div
        :class="{ 'p-6': !noPadding }"
        class="flex-1"
    >
        <slot/>
    </div>
</template>
