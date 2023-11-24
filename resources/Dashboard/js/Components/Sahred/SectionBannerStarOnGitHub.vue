<script setup>
import {mdiGithub} from "@mdi/js";
import BaseButton from "./BaseButton.vue";
import SectionBanner from "./SectionBanner.vue";
import {gradientBgPinkRed} from "../../colors.js";
</script>

<template>
    <SectionBanner :class="gradientBgPinkRed">
        <h1 class="text-3xl text-white mb-6">
            Like the project? Please star on <b>GitHub</b> ;-)
        </h1>
        <div>
            <BaseButton
                :icon="mdiGithub"
                href="https://github.com/justboil/employee-one-vue-tailwind"
                label="GitHub"
                rounded-full
                target="_blank"
            />
        </div>
    </SectionBanner>
</template>
