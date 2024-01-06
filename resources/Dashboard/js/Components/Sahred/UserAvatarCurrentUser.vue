<script setup>
import {computed} from "vue";
import {usePage} from "@inertiajs/vue3";
import UserAvatar from "./UserAvatar.vue";
console.log(usePage().props);
const userName = computed(() => usePage().props.user.userable.name);
console.log(userName.value);
</script>

<template>
    <UserAvatar
        :username="userName"
        api="initials"
    >
        <slot/>
    </UserAvatar>
</template>
