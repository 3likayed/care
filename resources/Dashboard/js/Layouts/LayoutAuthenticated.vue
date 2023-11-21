<script setup>
import {mdiBackburger, mdiForwardburger, mdiMenu} from "@mdi/js";
import {ref} from "vue";
import menuAside from "../menuAside.js";
import menuNavBar from "../menuNavBar.js";
import {useStyleStore} from "../Stores/style.js";
import BaseIcon from "../Components/Sahred/BaseIcon.vue";
import FormControl from "../Components/Sahred/FormControl.vue";
import NavBar from "../Components/Sahred/NavBar.vue";
import NavBarItemPlain from "../Components/Sahred/NavBarItemPlain.vue";
import AsideMenu from "../Components/Sahred/AsideMenu.vue";
import FooterBar from "../Components/Sahred/FooterBar.vue";
import {router} from "@inertiajs/vue3";


router.on("navigate", () => {
  isAsideMobileExpanded.value = false;
  isAsideLgActive.value = false;
});

const layoutAsidePadding = "xl:ps-60";

const styleStore = useStyleStore();


const isAsideMobileExpanded = ref(false);
const isAsideLgActive = ref(false);


const menuClick = (event, item) => {
  if (item.isToggleLightDark) {
    styleStore.setDarkMode();
  }

  if (item.isLogout) {
    router.post(route("dashboard.logout"));
  }
};
</script>

<template>
  <div
      id="authenticated"
      :class="{
      dark: styleStore.darkMode,
      'overflow-hidden lg:overflow-visible': isAsideMobileExpanded,
    }"
  >
    <div
        :class="[layoutAsidePadding, { 'ms-60 lg:me-0': isAsideMobileExpanded }]"
        class="pt-14 min-h-screen w-screen transition-position lg:w-auto bg-gray-100 dark:bg-slate-800 dark:text-slate-100"
    >
      <NavBar
          :class="[
                          layoutAsidePadding,
                          { 'ms-60 lg:me-0': isAsideMobileExpanded },
                         ]"
          :menu="menuNavBar"
          @menu-click="menuClick"
      >
        <NavBarItemPlain
            display="flex lg:hidden"
            @click.prevent="isAsideMobileExpanded = !isAsideMobileExpanded"
        >
          <BaseIcon
              :path="isAsideMobileExpanded ? mdiBackburger : mdiForwardburger"
              size="24"
          />
        </NavBarItemPlain>
        <NavBarItemPlain
            display="hidden lg:flex xl:hidden"
            @click.prevent="isAsideLgActive = true"
        >
          <BaseIcon :path="mdiMenu" size="24"/>
        </NavBarItemPlain>
        <NavBarItemPlain use-margin>
          <FormControl
              borderless
              ctrl-k-focus
              placeholder="Index (ctrl+k)"
              transparent
          />
        </NavBarItemPlain>
      </NavBar>
      <AsideMenu
          :is-aside-lg-active="isAsideLgActive"
          :is-aside-mobile-expanded="isAsideMobileExpanded"
          :menu="menuAside"
          @menu-click="menuClick"
          @aside-lg-close-click="isAsideLgActive = false"
      />
      <slot/>


      <FooterBar/>
    </div>
  </div>
</template>
