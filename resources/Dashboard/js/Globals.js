import {usePage} from "@inertiajs/vue3";
import {default as ziggyRoute} from "ziggy-js";
import Pluralize from "pluralize"
import {snakeCase} from "lodash/string.js";


export function __(key, replace = {}) {
    key = key ?? '';
    var translation = usePage().props.language[key] ? usePage().props.language[key] : key
    Object.keys(replace).forEach(function (key) {
        translation = translation.replace(':' + key, __(replace[key]))
    });
    return String(translation)
}

export function tinyMcConfig(dir) {
    return {
        plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'help', 'wordcount', 'emoticons'
        ],
        toolbar: 'undo redo | blocks | bold italic backcolor color emoticons | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
        content_style: '@import url(\'https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&display=swap\'); body { font-family:Almarai,Arial,sans-serif; font-size:16px }',
        skin: 'snow',
        icons: 'thin',
        directionality: dir,

    }
}

export function route(name, params, absolute, config = usePage().props.ziggy) {
    return ziggyRoute(name, params, absolute, config)
}

export function can(permission) {
    let permissions = permission?.replace('_', '-');
    permissions = permissions?.split('|');
    return permission ? usePage().props.auth.permissions?.some(permission => permissions?.includes(permission)) : true;
}

export const localesObject = () => {
    let locales = usePage().props.locales;
    locales = locales.reduce((acc, curr) => (acc[curr] = null, acc), {});
    return locales;
}
export const localesObjectOfObjects = (value = {}) => {
    let locales = usePage().props.locales;
    locales = locales.reduce((acc, curr) => (acc[curr] = value, acc), {});
    return locales;
}

export function assignTranslatable(value) {

    if (value && value.constructor.name === "Object") {
        return value;
    }
    return localesObjectOfObjects(null);
}


export const handleField = (form, field, action, key, value = null) => {
    switch (action) {
        case 'append' :
            form[field][Object.keys(form[field]).length] = value;
            break;
        case 'delete' :
            form[field].splice(key, 1);
            break;
    }
}

export const modelResolver = (word) => {
    return snakeCase(Pluralize(word)).replace('_', '-')
}

export default {
    methods: {
        __,
        tinyMcConfig,
        handleField,
        can,
        route,
        Pluralize,
        localesObject,
        modelResolver,
    },


}


