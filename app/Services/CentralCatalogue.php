<?php

namespace App\Services;

use Illuminate\Http\Client\PendingRequest;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Log;
use RuntimeException;
use Throwable;

/**
 * Read-only public catalogue from central-app. Cached so marketing pages do not
 * depend on Central being reachable on every request.
 */
class CentralCatalogue
{
    private ?array $resolvedProducts = null;

    private bool $listFailed = false;

    /** @var list<string>|null */
    private ?array $resolvedRegisterable = null;

    /**
     * @return list<array<string, mixed>>
     */
    public function products(): array
    {
        if ($this->resolvedProducts !== null) {
            return $this->resolvedProducts;
        }

        $cacheKey = 'central-catalogue.products';
        $cached = Cache::get($cacheKey);

        try {
            $payload = $this->getJson('/api/v1/marketing/products');
            $products = array_values($payload['products'] ?? []);
            Cache::put($cacheKey, $products, $this->ttl());
            $this->resolvedProducts = $products;
            $this->listFailed = false;

            return $this->resolvedProducts;
        } catch (Throwable $e) {
            $this->logFailure('products', $e);
            $this->listFailed = true;
            $this->resolvedProducts = is_array($cached) ? array_values($cached) : [];

            return $this->resolvedProducts;
        }
    }

    public function listUnavailable(): bool
    {
        $this->products();

        return $this->listFailed && $this->resolvedProducts === [];
    }

    /**
     * @return list<string>
     */
    public function registerableCodes(): array
    {
        if ($this->resolvedRegisterable !== null) {
            return $this->resolvedRegisterable;
        }

        $cacheKey = 'central-catalogue.registerable';
        $cached = Cache::get($cacheKey);

        try {
            $payload = $this->getJson('/api/v1/marketing/registerable-applications');
            $codes = array_values(array_map('strval', $payload['applications'] ?? []));
            Cache::put($cacheKey, $codes, $this->ttl());
            $this->resolvedRegisterable = $codes;

            return $this->resolvedRegisterable;
        } catch (Throwable $e) {
            $this->logFailure('registerable-applications', $e);
            $this->resolvedRegisterable = is_array($cached) ? array_values($cached) : [];

            return $this->resolvedRegisterable;
        }
    }

    public function product(string $slug): CatalogueProductLookup
    {
        $cacheKey = "central-catalogue.product.{$slug}";
        $cached = Cache::get($cacheKey);

        try {
            $response = $this->client()->get("/api/v1/marketing/products/{$slug}");

            if ($response->notFound()) {
                return CatalogueProductLookup::missing();
            }

            if (! $response->successful()) {
                return CatalogueProductLookup::unavailable(is_array($cached) ? $cached : null);
            }

            $product = $response->json('product');

            if (! is_array($product)) {
                return CatalogueProductLookup::unavailable(is_array($cached) ? $cached : null);
            }

            Cache::put($cacheKey, $product, $this->ttl());

            return CatalogueProductLookup::found($product);
        } catch (Throwable $e) {
            $this->logFailure("products/{$slug}", $e);

            return CatalogueProductLookup::unavailable(is_array($cached) ? $cached : null);
        }
    }

    /**
     * @return array<string, mixed>
     */
    private function getJson(string $path): array
    {
        $response = $this->client()->get($path);

        if (! $response->successful()) {
            throw new RuntimeException("Catalogue request failed with HTTP {$response->status()}.");
        }

        return $response->json() ?? [];
    }

    private function client(): PendingRequest
    {
        return Http::baseUrl(rtrim((string) config('app.platform_url'), '/'))
            ->acceptJson()
            ->timeout(5)
            ->connectTimeout(3);
    }

    private function ttl(): int
    {
        return max(0, (int) config('app.catalogue_cache_seconds', 600));
    }

    private function logFailure(string $path, Throwable $e): void
    {
        Log::warning('Central catalogue request failed.', [
            'path' => $path,
            'message' => $e->getMessage(),
        ]);
    }
}
