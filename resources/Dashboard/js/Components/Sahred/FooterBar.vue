<script setup>
import {containerMaxW} from "../../config.js";
import BaseLevel from "./BaseLevel.vue";


const year = new Date().getFullYear();
</script>

<template>
    <footer :class="containerMaxW" class="py-2 px-6">
        <BaseLevel>
            <div class="text-center md:text-start">
                <slot/>
            </div>
            <div class="md:py-2">
            </div>
        </BaseLevel>
    </footer>
</template>
