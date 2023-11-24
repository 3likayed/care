import "../css/main.css";

import {createPinia} from "pinia";
import {useStyleStore} from "./Stores/style.js";
import {darkModeKey, styleKey} from "./config.js";
import {createApp, h} from "vue";
import {createInertiaApp} from "@inertiajs/vue3";
import Globals from "./Globals.js";
import 'vue-toast-notification/dist/theme-bootstrap.css';
import Layout from "./Layouts/Layout.vue";
import {resolvePageComponent} from "laravel-vite-plugin/inertia-helpers";
import PrimeVue from 'primevue/config';
import primeVuePt from "./primeVuePt.js";

const pinia = createPinia();
createInertiaApp({
    title: (title) => `${title}`,
    resolve: (name) => {
        let page = resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue'))
        return page.then((page) => {
            page.default.layout = page.default.layout || Layout
            return page
        })

    }
    ,
    setup({el, App, props, plugin}) {

        return createApp({render: () => h(App, props)})
            .use(plugin)
            .use(pinia)
            .use(PrimeVue, {pt:primeVuePt})
            .mixin(Globals)
            .mount(el);
    }
    ,
    progress: {
        color: "#4B5563",
    }
    ,
})
;

const styleStore = useStyleStore(pinia);

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
