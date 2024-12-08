<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\FaqController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\TransaksiController;
use App\Http\Controllers\AdminDashboardController;
use App\Models\AdminLog;

Route::group([], function(){
    Route::get('/', [ProductController::class, 'index'])->name('Welcome');
    Route::resource('product', ProductController::class);
});

Route::group([], function(){
    Route::get('/shopping', [FaqController::class, 'index'])->name('shopping');
    Route::resource('product', FaqController::class);
});


Route::middleware(['auth', 'verified'])->group(function(){
    Route::get('/dashboard', fn() => Inertia::render('Profile/Edit'))->name('dashboard');
    Route::get('/admin/dashboard', [AdminDashboardController::class, 'index'])->name('admin.dashboard');
    Route::resource('product', ProductController::class);
    Route::get('/api/dashboard/data', [AdminDashboardController::class, 'getDashboardData']);

    Route::get('/admin/addBrand', [AdminDashboardController::class, 'addBrand'])->name('addBrand');
    Route::post('/admin/addBrand', [AdminDashboardController::class, 'storeBrand'])->name('admin.storeBrand');
    Route::get('/admin/brand', [AdminDashboardController::class, 'showBrands'])->name('admin.showBrand');
    Route::put('/admin/updateBrand/{id}', [AdminDashboardController::class, 'updateBrand']);
    Route::delete('/admin/deleteBrand/{id}', [AdminDashboardController::class, 'deleteBrand']);
    
    Route::get('/admin/addCategory', [AdminDashboardController::class, 'addCategory'])->name('addCategory');
    Route::get('/admin/categories', [AdminDashboardController::class, 'showCategories'])->name('admin.showCategories');
    Route::post('/category/store', [AdminDashboardController::class, 'storeCategory'])->name('category.storeCategory');
    Route::put('/admin/updateCategory/{id}', [AdminDashboardController::class, 'updateCategory']);
    Route::delete('/admin/deleteCategory/{id}', [AdminDashboardController::class, 'deleteCategory']);

    Route::get('/admin/addProduct', [AdminDashboardController::class, 'addProduct'])->name('addProduct');
    Route::get('/admin/product', [AdminDashboardController::class, 'showProducts'])->name('admin.showProduct');
    Route::post('/product/store', [AdminDashboardController::class, 'storeProduct'])->name('product.storeProduct');
    Route::put('/admin/updateProduct/{id}', [AdminDashboardController::class, 'updateProduct'])->name('updateProduct');
    Route::delete('/admin/deleteProduct/{id}', [AdminDashboardController::class, 'deleteProduct'])->name('deleteProduct');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');   
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Route::middleware(['auth', 'role:admin'])->group(function () {
//     Route::get('/admin/dashboard', [AdminDashboardController::class, 'index'])->name('admin.dashboard');
// });

Route::get('/', [ProductController::class, 'index'])->name('Welcome');
Route::resource('products', ProductController::class);

// Menambahkan route khusus untuk detail produk
Route::get('/products/{product}', [ProductController::class, 'showDetail'])->name('products.showDetail');

Route::get('/categories/{category}', [CategoryController::class, 'show'])->name('categories.show');

Route::get('/api/faqs', [FaqController::class, 'index']);

Route::get('/products', [ProductController::class, 'showProducts']);

Route::get('/search', [ProductController::class, 'search'])->name('search');

Route::post('/checkout', [TransaksiController::class, 'checkout'])->name('checkout');
require __DIR__.'/auth.php';
