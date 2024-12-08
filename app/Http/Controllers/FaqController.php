<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Inertia\Inertia;
use App\Models\Product;
use Inertia\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\FaqResource;
use App\Http\Resources\ProductResource;

class FaqController extends Controller
{
    public function index()
    {
        // Mengambil semua produk dengan pagination
        $products = Product::paginate(10);
        $faqs = Faq::all();
        // Mengembalikan data produk ke komponen Welcome
        return Inertia::render('Shopping', [
            
            'products' => ProductResource::collection($products),
            'faqs' => FaqResource::collection($faqs),
        ]);
    }
}
