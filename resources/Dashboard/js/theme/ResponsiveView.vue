<script setup>
import SectionTitle from "../Components/Sahred/SectionTitle.vue";
import SectionMain from "../Components/Sahred/SectionMain.vue";
import LayoutAuthenticated from "../Layouts/LayoutAuthenticated.vue";
</script>

<template>
    <LayoutAuthenticated>
        <SectionTitle first>
            Mobile & Tablet
        </SectionTitle>

        <SectionMain>
            <div
                class="md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden"
            >
                <img
                    class="block"
                    src="https://static.justboil.me/templates/one/one-tailwind-vue-mobile.png"
                >
            </div>
        </SectionMain>

        <SectionTitle>Small laptop 1024px</SectionTitle>

        <SectionMain>
            <div
                class="md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden"
            >
                <img
                    class="block"
                    src="https://static.justboil.me/templates/one/one-tailwind-vue-1024.png"
                >
            </div>
        </SectionMain>

        <SectionMain>
            <div
                class="md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden"
            >
                <img
                    class="block"
                    src="https://static.justboil.me/templates/one/one-tailwind-vue-1024-menu-open.png"
                >
            </div>
        </SectionMain>

        <SectionTitle>Laptop & desktop</SectionTitle>

        <SectionMain>
            <div
                class="md:w-10/12 shadow-2xl md:mx-auto rounded-3xl border-8 border-white overflow-hidden"
            >
                <img
                    class="block"
                    src="https://static.justboil.me/templates/one/one-tailwind-vue-widescreen.png"
                >
            </div>
        </SectionMain>
    </LayoutAuthenticated>
</template>
