<?php

namespace App\Http\Middleware;

use App\Services\CentralCatalogue;
use Illuminate\Http\Request;
use Inertia\Middleware;

class HandleInertiaRequests extends Middleware
{
    protected $rootView = 'app';

    public function version(Request $request): ?string
    {
        return parent::version($request);
    }

    /**
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        return array_merge(parent::share($request), [
            'name' => config('app.name'),
            'platformUrl' => rtrim((string) config('app.platform_url'), '/'),
            'products' => fn () => app(CentralCatalogue::class)->products(),
            'registerableApplications' => fn () => app(CentralCatalogue::class)->registerableCodes(),
            'catalogueError' => fn () => app(CentralCatalogue::class)->listUnavailable(),
            'flash' => [
                'status' => fn () => $request->session()->get('status'),
                'error' => fn () => $request->session()->get('error'),
            ],
        ]);
    }
}
