<script setup>
import {computed} from "vue";
import {usePage} from "@inertiajs/vue3";
import NotificationBarInCard from "./NotificationBarInCard.vue";

const errors = computed(() => usePage().props.errors);

const hasErrors = computed(() => Object.keys(errors.value).length > 0);
</script>

<template>
    <NotificationBarInCard
        v-if="hasErrors"
        color="danger"
    >
        <div class="grid text-start">
            <b>للأسف!! هناك شيء غير صحيح.</b>
            <span
                v-for="(error, key) in errors"
                :key="key"
            >{{ error }}</span>
        </div>
    </NotificationBarInCard>
</template>
