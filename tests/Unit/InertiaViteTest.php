<?php

namespace Tests\Unit;

use App\Support\InertiaVite;
use Tests\TestCase;

class InertiaViteTest extends TestCase
{
    public function test_home_uses_folder_index_entry(): void
    {
        $this->assertSame(
            'resources/js/pages/Home/index.tsx',
            InertiaVite::pageEntry('Home'),
        );

        $this->assertSame([
            'resources/css/app.css',
            'resources/js/app.tsx',
            'resources/js/pages/Home/index.tsx',
        ], InertiaVite::entries(['component' => 'Home']));
    }

    public function test_about_uses_page_file_entry(): void
    {
        $this->assertSame(
            'resources/js/pages/About.tsx',
            InertiaVite::pageEntry('About'),
        );
    }

    public function test_unknown_page_omits_page_entry(): void
    {
        $this->assertNull(InertiaVite::pageEntry('DoesNotExist'));

        $this->assertSame([
            'resources/css/app.css',
            'resources/js/app.tsx',
        ], InertiaVite::entries(['component' => 'DoesNotExist']));
    }
}
