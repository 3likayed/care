<script setup>
import AsideMenuLayer from "./AsideMenuLayer.vue";
import OverlayLayer from "./OverlayLayer.vue";

defineProps({
    menu: {
        type: Array,
        required: true,
    },
    isAsideMobileExpanded: Boolean,
    isAsideLgActive: Boolean,
});

const emit = defineEmits(["menu-click", "aside-lg-close-click"]);

const menuClick = (event, item) => {
    emit("menu-click", event, item);
};

const asideLgCloseClick = (event) => {
    emit("aside-lg-close-click", event);
};
</script>

<template>
    <AsideMenuLayer
        :class="[
      isAsideMobileExpanded ? 'start-0' : '-start-64 lg:start-0',
      { 'lg:hidden xl:flex': !isAsideLgActive },
    ]"
        :menu="menu"
        @menu-click="menuClick"
        @aside-lg-close-click="asideLgCloseClick"
    />
    <OverlayLayer
        v-show="isAsideLgActive"
        z-index="z-30"
        @overlay-click="asideLgCloseClick"
    />
</template>
