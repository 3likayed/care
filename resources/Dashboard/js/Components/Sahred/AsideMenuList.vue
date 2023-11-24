<script setup>
import AsideMenuItem from "./AsideMenuItem.vue";

let props = defineProps({
    isDropdownList: Boolean,
    menu: {
        type: Array,
        required: true,
    },
});

const emit = defineEmits(["menu-click"]);

const menuClick = (event, item) => {
    emit("menu-click", event, item);
};
</script>

<template>
    <ul>
        <AsideMenuItem
            v-for="(item, index) in menu"
            :key="index"
            :is-dropdown-list="isDropdownList"
            :item="item"
            @menu-click="menuClick"
        />
    </ul>
</template>
