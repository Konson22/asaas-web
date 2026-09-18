<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" style="color-scheme: light">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" type="image/png" href="/images/logo-icon.png">
        <link rel="apple-touch-icon" href="/images/logo-icon.png">

        <title inertia>{{ config('app.name') }}</title>
        <meta name="description" content="MileSoftware is a modern ERP, POS, and business management platform connecting sales, inventory, accounting, procurement, HR, and CRM for retail, wholesale, pharmacy, restaurant, and service businesses — cloud, offline, or hybrid.">
        <meta name="theme-color" content="#4139A0">

        @routes
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
