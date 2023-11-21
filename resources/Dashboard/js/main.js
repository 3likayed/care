import {createApp} from "vue";
import {createPinia} from "pinia";

import App from "./App.vue";
import router from "./router";
import {useMainStore} from "@/Stores/main.js";
import {useStyleStore} from "@/Stores/style.js";
import {darkModeKey, styleKey} from "@/config.js";

import "./css/main.css";

/* Init Pinia */
const pinia = createPinia();

/* Create Vue app */
createApp(App).use(router).use(pinia).mount("#app");

/* Init Pinia Stores */
const mainStore = useMainStore(pinia);
const styleStore = useStyleStore(pinia);

/* Fetch sample data */
mainStore.fetch("clients");
mainStore.fetch("history");

/* App style */
styleStore.setStyle(localStorage[styleKey] ?? "basic");

/* Dark mode */
if (
    (!localStorage[darkModeKey] &&
        window.matchMedia("(prefers-color-scheme: dark)").matches) ||
    localStorage[darkModeKey] === "1"
) {
    styleStore.setDarkMode(true);
}

/* Default title tag */
const defaultDocumentTitle = "Employee One Vue 3 Tailwind";

/* Set document title from route meta */
router.afterEach((to) => {
    document.title = to.meta?.title
        ? `${to.meta.title} — ${defaultDocumentTitle}`
        : defaultDocumentTitle;
});
