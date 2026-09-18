<?php

namespace App\Http\Controllers;

use App\Services\CentralCatalogue;
use Illuminate\Http\JsonResponse;

class CatalogController extends Controller
{
    public function show(string $slug, CentralCatalogue $catalogue): JsonResponse
    {
        $lookup = $catalogue->product($slug);

        if ($lookup->isMissing()) {
            abort(404);
        }

        if ($lookup->product === null) {
            return response()->json([
                'message' => 'Product catalogue is temporarily unavailable.',
            ], 503);
        }

        return response()->json([
            'product' => $lookup->product,
        ]);
    }
}
