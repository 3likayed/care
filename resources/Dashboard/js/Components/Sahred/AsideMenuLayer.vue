<script setup>
import {mdiClose, mdiLogout} from "@mdi/js";
import {computed} from "vue";
import {useStyleStore} from "../../Stores/style.js";
import AsideMenuList from "./AsideMenuList.vue";
import AsideMenuItem from "./AsideMenuItem.vue";
import BaseIcon from "./BaseIcon.vue";
import {__} from "../../Globals.js";

defineProps({
    menu: {
        type: Array,
        required: true,
    },
});

const emit = defineEmits(["menu-click", "aside-lg-close-click"]);

const styleStore = useStyleStore();

const logoutItem = computed(() => ({
    label: __('logout'),
    icon: mdiLogout,
    color: "info",
    isLogout: true,
}));

const menuClick = (event, item) => {
    emit("menu-click", event, item);
};

const asideLgCloseClick = (event) => {
    emit("aside-lg-close-click", event);
};
</script>

<template>
    <aside
        id="aside"
        class="lg:pe-2 w-64 fixed flex z-40 top-0 h-screen transition-position overflow-hidden"
    >
        <div
            :class="styleStore.asideStyle"
            class=" flex-1 flex flex-col overflow-hidden dark:bg-slate-900"
        >
            <div
                :class="styleStore.asideBrandStyle"
                class="flex flex-row h-14 items-center justify-between dark:bg-slate-900"
            >
                <div
                    class="text-center flex-1"
                >
                    <b class="font-black">{{ __('dashboard') }}</b>
                </div>
                <button
                    class="hidden lg:inline-block xl:hidden p-3"
                    @click.prevent="asideLgCloseClick"
                >
                    <BaseIcon :path="mdiClose"/>
                </button>
            </div>
            <div
                :class="
          styleStore.darkMode
            ? 'aside-scrollbars-[slate]'
            : styleStore.asideScrollbarsStyle
        "
                class="flex-1 overflow-y-auto overflow-x-hidden"
            >
                <AsideMenuList
                    :menu="menu"
                    @menu-click="menuClick"
                />
            </div>

            <ul>
                <AsideMenuItem
                    item-class="w-full"
                    :item="logoutItem"
                    @menu-click="menuClick"
                />
            </ul>
        </div>
    </aside>
</template>
