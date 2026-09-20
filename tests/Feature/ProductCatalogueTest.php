<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

class ProductCatalogueTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @return array<string, mixed>
     */
    private function pharmacyCard(): array
    {
        return [
            'slug' => 'asas-pharmacy',
            'code' => 'pharmacy',
            'name' => 'Asas Pharmacy',
            'short_name' => 'Pharmacy',
            'tagline' => 'Complete pharmacy management, online and offline.',
            'short_description' => 'A complete pharmacy management and POS solution.',
            'category' => 'Healthcare',
            'icon' => null,
            'status' => 'published',
            'is_featured' => true,
            'trial_days' => 30,
            'capabilities' => ['cloud', 'offline'],
            'starting_price' => [
                'amount' => 25,
                'currency' => 'USD',
                'formatted' => 'USD 25.00',
                'is_custom' => false,
            ],
        ];
    }

    /**
     * @return array<string, mixed>
     */
    private function pharmacyDetail(): array
    {
        return [
            ...$this->pharmacyCard(),
            'seo' => ['title' => 'Asas Pharmacy', 'description' => 'A pharmacy platform.'],
            'capability_badges' => ['cloud', 'offline'],
            'audiences' => [],
            'benefits' => [],
            'capabilities' => [],
            'highlighted_features' => [],
            'feature_groups' => [],
            'deployment_options' => [],
            'requirements' => [],
            'implementation_items' => [],
            'addons' => [],
            'related_products' => [],
        ];
    }

    private function fakeSuccessfulCatalogue(): void
    {
        Http::fake([
            '*/api/v1/marketing/products/asas-pharmacy' => Http::response([
                'product' => $this->pharmacyDetail(),
            ], 200),
            '*/api/v1/marketing/products' => Http::response([
                'products' => [$this->pharmacyCard()],
            ], 200),
            '*/api/v1/marketing/registerable-applications' => Http::response([
                'applications' => ['pharmacy'],
            ], 200),
        ]);
    }

    public function test_products_page_renders_catalogue_from_central_app(): void
    {
        $this->fakeSuccessfulCatalogue();

        $this->get('/products')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('Products')
                ->has('products', 1)
                ->where('products.0.slug', 'asas-pharmacy')
                ->where('products.0.name', 'Asas Pharmacy')
                ->where('registerableApplications', ['pharmacy'])
                ->where('catalogueError', false));
    }

    public function test_home_page_shares_central_catalogue_products(): void
    {
        $this->fakeSuccessfulCatalogue();

        $this->get('/')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                // Home is pages/Home/index.tsx, not pages/Home.tsx
                ->component('Home', false)
                ->has('products', 1)
                ->where('products.0.code', 'pharmacy'));
    }

    public function test_products_page_fails_gracefully_when_central_is_unreachable(): void
    {
        Http::fake([
            '*/api/v1/marketing/*' => Http::response(null, 500),
        ]);

        $this->get('/products')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('Products')
                ->where('products', [])
                ->where('catalogueError', true));
    }

    public function test_products_page_uses_cached_catalogue_when_central_is_down(): void
    {
        Cache::put('central-catalogue.products', [$this->pharmacyCard()], 600);
        Cache::put('central-catalogue.registerable', ['pharmacy'], 600);

        Http::fake([
            '*/api/v1/marketing/*' => Http::response(null, 500),
        ]);

        $this->get('/products')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('Products')
                ->has('products', 1)
                ->where('products.0.slug', 'asas-pharmacy')
                ->where('catalogueError', false));
    }

    public function test_catalog_proxy_returns_product_detail_from_central_app(): void
    {
        $this->fakeSuccessfulCatalogue();

        $this->getJson('/api/catalog/products/asas-pharmacy')
            ->assertOk()
            ->assertJsonPath('product.slug', 'asas-pharmacy')
            ->assertJsonPath('product.name', 'Asas Pharmacy');
    }

    public function test_catalog_proxy_returns_404_for_unknown_product(): void
    {
        Http::fake([
            '*/api/v1/marketing/products/missing' => Http::response(null, 404),
            '*/api/v1/marketing/products' => Http::response(['products' => []], 200),
            '*/api/v1/marketing/registerable-applications' => Http::response(['applications' => []], 200),
        ]);

        $this->getJson('/api/catalog/products/missing')->assertNotFound();
    }

    public function test_product_detail_page_serves_stale_cache_when_central_is_down(): void
    {
        Cache::put('central-catalogue.product.asas-pharmacy', $this->pharmacyDetail(), 600);
        Cache::put('central-catalogue.products', [$this->pharmacyCard()], 600);
        Cache::put('central-catalogue.registerable', ['pharmacy'], 600);

        Http::fake([
            '*/api/v1/marketing/*' => Http::response(null, 500),
        ]);

        $this->get('/products/asas-pharmacy')
            ->assertOk()
            ->assertInertia(fn ($page) => $page
                ->component('ProductDetail')
                ->where('product.slug', 'asas-pharmacy'));
    }
}
