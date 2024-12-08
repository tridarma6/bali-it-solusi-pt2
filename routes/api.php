<?php

use App\Http\Controllers\FaqController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

Route::middleware('api')->group(function () {
    Route::apiResource('products', ProductController::class);
    Route::apiResource('faqs', FaqController::class);
});
