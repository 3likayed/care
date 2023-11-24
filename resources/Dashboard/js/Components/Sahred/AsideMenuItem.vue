<script setup>
import {computed, ref} from "vue";
import {Link, usePage} from "@inertiajs/vue3";
import {useStyleStore} from "../../Stores/style.js";
import {mdiMinus, mdiPlus} from "@mdi/js";
import {getButtonColor} from "../../colors.js";
import BaseIcon from "./BaseIcon.vue";
import AsideMenuList from "./AsideMenuList.vue";
import {can} from "../../Globals.js";

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
    isDropdownList: Boolean,
});

const emit = defineEmits(["menu-click"]);

const styleStore = useStyleStore();

const hasColor = computed(() => props.item && props.item.color);
const asideMenuItemActiveStyle = computed(() =>
    hasColor.value ? "" : styleStore.asideMenuItemActiveStyle
);

const hasDropdown = computed(() => !!props.item.menu);
const dropDownActive = () => {
    if (hasDropdown.value) {
        for (let i in props.item.menu) {
            if (props.item.menu[i].components.includes(usePage().component))
                return true;
        }
    }
    return false;
}


const isDropdownActive = ref(dropDownActive());
const componentClass = computed(() => [
    props.isDropdownList ? "py-3 ps-10 text-sm" : "py-3 ps-5",
    hasColor.value
        ? getButtonColor(props.item.color, false, true)
        : styleStore.asideMenuItemStyle,
]);
// Add itemHref
const itemHref = computed(() =>
    props.item.route ? route(props.item.route) : props.item.href
);

// Add activeInactiveStyle
const activeInactiveStyle = computed(() =>
    props.item.components?.includes(usePage().component) || isDropdownActive.value
        ? styleStore.asideMenuItemActiveStyle
        : ''
);

const canSee = computed(() => {
    if (hasDropdown.value) {
        for (let i in props.item.menu) {
            if (can(props.item.menu[i].permission))
                return true;
        }
    } else {
        return can(props.item.permission);
    }

});

const menuClick = (event) => {
    emit("menu-click", event, props.item);
    if (hasDropdown.value) {
        isDropdownActive.value = !isDropdownActive.value;
    }
};
</script>

<template>
    <li v-if="canSee">
        <component
            :is="item.route ? Link : 'a'"
            v-slot="vSlot"
            :class="[componentClass , activeInactiveStyle ]"
            :href="itemHref"
            :preserve-state="true"
            :target="item.target ?? null"
            :to="item.to ?? null"
            class="flex cursor-pointer px-2  "
            @click="menuClick"
        >
            <BaseIcon
                v-if="item.icon"
                :path="item.icon"
                :size="18"
                class="flex-none pe-2"
            />
            <span
                class="grow text-ellipsis line-clamp-1"
            >{{ __(item.label) }}</span>
            <BaseIcon
                v-if="hasDropdown"
                :class="[vSlot && vSlot.isExactActive ? asideMenuItemActiveStyle : '']"
                :path="activeInactiveStyle ? mdiMinus : mdiPlus"
                class="flex-none"
                w="w-12"
            />
        </component>

        <AsideMenuList
            v-if="hasDropdown"
            :class="[
        styleStore.asideMenuDropdownStyle,
        isDropdownActive ? 'block dark:bg-slate-800/50' : 'hidden',
      ]"
            :is-dropdown-list="hasDropdown"
            :menu="item.menu"
        />
    </li>
</template>
