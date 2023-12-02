<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" >
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title inertia>{{ settings()->name ?? "" }}</title>
        <!-- Scripts -->
        @routes
        @vite(['resources/Dashboard/js/app.js', "resources/Dashboard/js/Pages/{$page['component']}.vue"])
    </head>
    <body dir="{{app()->getLocale()=="ar" ? "rtl" : "ltr"}}" class="font-main antialiased">
        @inertia
    </body>
</html>
