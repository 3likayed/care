<template/>
<script setup>
import {computed, watch} from "vue";
import {usePage} from "@inertiajs/vue3";
import Swal from "sweetalert2";
import 'sweetalert2/src/sweetalert2.scss'
import {useStyleStore} from "../../Stores/style.js";
import {__} from "../../Globals.js";

const flash = computed(() => usePage().props.flash);

function handleFlash(flashValue) {
    if (flashValue.error || flashValue.success) {
        let isDark = useStyleStore().darkMode;
        let backColor = isDark ? "rgb(15 23 42 )" : ''
        let color = isDark ? "rgb(241, 245, 249)" : ''
        let icon = flashValue.error ? 'error' : 'success';
        let title = flashValue.error ?? flashValue.success;
        Swal.fire({
            title: title,
            icon: icon,
            target: '#app',
            background: backColor,
            color: color,
            confirmButtonText: __('continue'),
            confirmButtonColor: 'rgb(59, 130, 246)'
        }).then(
            e => {
                usePage().props.errors = {};
                usePage().props.success = {}
            }
        );
    }
}

handleFlash(flash.value)
watch(flash, (newValue, oldValue) => {
    handleFlash(newValue);
}, {deep: true})


</script>

