<script setup>
import {computed, ref} from "vue";
import {Link, usePage} from "@inertiajs/vue3";
import {useStyleStore} from "../../Stores/style.js";
import {mdiChevronDown} from "@mdi/js";
import {getButtonColor} from "../../colors.js";
import BaseIcon from "./BaseIcon.vue";
import AsideMenuList from "./AsideMenuList.vue";
import {__, can} from "../../Globals.js";

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
            if (props.item.menu[i].components?.includes(usePage().component))
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
const itemHref = computed(() => {
        let itemRoute = typeof props.item.route === 'string' ? [props.item.route] : props.item.route
        return props.item.route ? route(itemRoute[0], itemRoute[1]) : props.item.href ?? null;
    }
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
const label = (label) => {
    return Array.isArray(label) ? __(label[0], label[1]) : __(label);
}
</script>

<template>
    <li v-if="canSee">
        <div class="flex justify-between items-center cursor-pointer" @click="menuClick ">
            <component
                :is="item.route ? Link : 'a'"
                :class="[componentClass , activeInactiveStyle ]"
                :href="itemHref"
                :preserve-state="true"
                :target="item.target ?? null"
                :to="item.to ?? null"
                class="flex px-2  "
            >
                <BaseIcon
                    v-if="item.icon"
                    :path="item.icon"
                    :size="18"
                    class="flex-none pe-2"
                />
                <span
                    class="grow text-ellipsis line-clamp-1"
                >{{ label(item.label) }}</span>

            </component>
            <BaseIcon
                v-if="hasDropdown"
                :class="activeInactiveStyle"
                :path="mdiChevronDown"
                class="flex-none text-white"
                w="w-12"
            />
        </div>

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
