<?php

namespace App\Http\Controllers;

use App\Services\CentralCatalogue;
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
     * Fetched from central-app (cached) so a missing/inactive product genuinely 404s and
     * per-product SEO tags are present at render time. `productId` is the product `slug`.
     */
    public function productDetail(string $productId): Response
    {
        $lookup = app(CentralCatalogue::class)->product($productId);

        if ($lookup->isMissing()) {
            throw new NotFoundHttpException;
        }

        if ($lookup->product === null) {
            abort(503, 'Product catalogue is temporarily unavailable.');
        }

        return Inertia::render('ProductDetail', [
            'product' => $lookup->product,
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

    public function about(): Response
    {
        return Inertia::render('About');
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
