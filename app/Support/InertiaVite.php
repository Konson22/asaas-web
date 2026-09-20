<?php

namespace App\Support;

use Illuminate\Foundation\Vite;
use Illuminate\Support\Facades\File;

class InertiaVite
{
    /**
     * @param  array{component?: string}|string|null  $page
     * @return list<string>
     */
    public static function entries(array|string|null $page): array
    {
        $component = is_array($page)
            ? (string) ($page['component'] ?? '')
            : (string) $page;

        $entries = [
            'resources/css/app.css',
            'resources/js/app.tsx',
        ];

        $pageEntry = self::pageEntry($component);

        if ($pageEntry !== null) {
            $entries[] = $pageEntry;
        }

        return $entries;
    }

    public static function pageEntry(string $component): ?string
    {
        if ($component === '') {
            return null;
        }

        foreach ([
            "resources/js/pages/{$component}.tsx",
            "resources/js/pages/{$component}/index.tsx",
        ] as $path) {
            if (self::exists($path)) {
                return $path;
            }
        }

        return null;
    }

    private static function exists(string $path): bool
    {
        $vite = app(Vite::class);

        if ($vite->isRunningHot()) {
            return File::isFile(base_path($path));
        }

        $manifestPath = public_path('build/manifest.json');

        if (! File::isFile($manifestPath)) {
            return File::isFile(base_path($path));
        }

        /** @var array<string, mixed>|null $manifest */
        static $manifest = null;

        if ($manifest === null) {
            $decoded = json_decode(File::get($manifestPath), true);
            $manifest = is_array($decoded) ? $decoded : [];
        }

        return array_key_exists($path, $manifest);
    }
}
