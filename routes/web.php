<?php

use App\Http\Controllers\PageController;
use Illuminate\Support\Facades\Route;

Route::controller(PageController::class)->group(function () {
    Route::get('/', 'home')->name('home');
    Route::get('/platform', 'platform')->name('platform');
    Route::get('/industries', 'industries')->name('industries');
    Route::get('/products', 'products')->name('products');
    Route::get('/products/{productId}', 'productDetail')->name('products.show');
    Route::get('/pricing', 'pricing')->name('pricing');
    Route::get('/faq', 'faq')->name('faq');
    Route::get('/contact', 'contact')->name('contact');
    Route::get('/privacy-policy', 'privacy')->name('privacy');
    Route::get('/terms-of-service', 'terms')->name('terms');
});
