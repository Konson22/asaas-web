<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Http;
use Tests\TestCase;

/**
 * `PageController::productDetail` fetches the central platform's catalogue API
 * server-side — stubbed here with Http::fake() so tests never make a real
 * cross-app HTTP call.
 */
class ProductDetailPageTest extends TestCase
{
    use RefreshDatabase;

    public function test_renders_product_detail_page_with_data_from_central_platform(): void
    {
        Http::fake([
            '*/api/v1/marketing/products/asas-pharmacy' => Http::response([
                'product' => [
                    'slug' => 'asas-pharmacy',
                    'code' => 'pharmacy',
                    'name' => 'Asas Pharmacy',
                    'tagline' => 'Complete pharmacy management, online and offline.',
                    'seo' => ['title' => 'Asas Pharmacy — Complete pharmacy management', 'description' => 'A pharmacy platform.'],
                    'status' => 'published',
                    'trial_days' => 30,
                    'capability_badges' => ['cloud', 'offline'],
                    'starting_price' => ['amount' => 25, 'currency' => 'USD', 'formatted' => 'USD 25.00', 'is_custom' => false],
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
                ],
            ], 200),
        ]);

        $response = $this->get('/products/asas-pharmacy');

        $response->assertOk();
        $response->assertInertia(fn ($page) => $page
            ->component('ProductDetail')
            ->where('product.slug', 'asas-pharmacy')
            ->where('product.name', 'Asas Pharmacy'));
    }

    public function test_returns_404_when_central_platform_does_not_have_the_product(): void
    {
        Http::fake([
            '*/api/v1/marketing/products/does-not-exist' => Http::response(null, 404),
        ]);

        $this->get('/products/does-not-exist')->assertNotFound();
    }

    public function test_returns_503_when_central_platform_is_unreachable(): void
    {
        Http::fake([
            '*/api/v1/marketing/products/asas-pharmacy' => Http::response(null, 500),
        ]);

        $this->get('/products/asas-pharmacy')->assertStatus(503);
    }
}
