<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Inertia\Response;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class PageController extends Controller
{
    /** @var list<string> */
    private const PRODUCT_IDS = [
        'pos',
        'pharmacy',
        'restaurant',
        'distribution',
        'services',
        'inventory',
    ];

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

    public function productDetail(string $productId): Response
    {
        if (! in_array($productId, self::PRODUCT_IDS, true)) {
            throw new NotFoundHttpException;
        }

        return Inertia::render('ProductDetail', [
            'productId' => $productId,
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
