<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" type="image/png" href="/images/logo-icon.png">
        <link rel="apple-touch-icon" href="/images/logo-icon.png">

        <title inertia>{{ config('app.name') }}</title>
        <meta name="description" content="MileSoftware is a modern ERP, POS, and business management platform connecting sales, inventory, accounting, procurement, HR, and CRM for retail, wholesale, pharmacy, restaurant, and service businesses — cloud, offline, or hybrid.">
        <meta name="theme-color" content="#0D0E10">

        {{-- Applied before first paint so there is no light/dark flash: mirrors the
             logic in resources/js/hooks/useTheme.tsx (same storage key). Defaults to
             the visitor's OS preference, falling back to dark (the site's primary look). --}}
        <script>
            (function () {
                try {
                    var stored = localStorage.getItem('milesoftwares-theme');
                    var theme = stored === 'light' || stored === 'dark'
                        ? stored
                        : (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
                    document.documentElement.classList.toggle('dark', theme === 'dark');
                    document.documentElement.style.colorScheme = theme;
                } catch (e) {
                    document.documentElement.classList.add('dark');
                }
            })();
        </script>

        @routes
        @viteReactRefresh
        @vite(['resources/css/app.css', 'resources/js/app.tsx', "resources/js/pages/{$page['component']}.tsx"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
