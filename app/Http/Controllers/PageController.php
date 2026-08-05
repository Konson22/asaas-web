<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PageController extends Controller
{
    public function home(): Response
    {
        return Inertia::render('Home');
    }

    public function industries(): Response
    {
        return Inertia::render('Industries');
    }

    public function products(): Response
    {
        return Inertia::render('Products');
    }

    /**
     * Fetched server-side (unlike the rest of this catalogue's client-fetched pages) so a
     * missing/inactive product genuinely 404s and per-product SEO tags are present at render
     * time. `productId` in the URL is really the central platform's product `slug`.
     */
    public function productDetail(string $productId): Response
    {
        $platformUrl = rtrim((string) config('app.platform_url'), '/');

        $response = Http::acceptJson()->get("{$platformUrl}/api/v1/marketing/products/{$productId}");

        if ($response->notFound()) {
            throw new NotFoundHttpException;
        }

        if (! $response->successful()) {
            abort(503, 'Product catalogue is temporarily unavailable.');
        }

        return Inertia::render('ProductDetail', [
            'product' => $response->json('product'),
        ]);
    }

    public function pricing(): Response
    {
        return Inertia::render('Pricing');
    }

    public function faq(): Response
    {
        return Inertia::render('Faq');
    }

    public function contact(): Response
    {
        return Inertia::render('Contact');
    }

    public function privacy(): Response
    {
        return Inertia::render('Privacy');
    }

    public function terms(): Response
    {
        return Inertia::render('Terms');
    }
}
