<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Inertia\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;
use App\Http\Resources\ProductResource;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Resources\BrandResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\FaqResource;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Faq;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    /**
     * Display a listing of the products.
     */
    public function index()
    {
        // Mengambil semua produk dengan pagination
        $products = Product::paginate(10);
        $faqs = Faq::all();
        $categories = Category::all();
        $brands = Brand::all();
        // Mengembalikan data produk ke komponen Welcome
        return Inertia::render('Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'products' => ProductResource::collection(resource: $products),
            'faqs' => FaqResource::collection($faqs),
            'categories' => CategoryResource::collection($categories),
            'brands' => BrandResource::collection($brands),
        ]);
    }

    public function showDetail($id) {
        $product = Product::find($id);
        $otherProducts = Product::where('id', '!=', $id)->take(4)->get(); // Ambil 4 produk lainnya selain produk utama
        $categories = Category::all();
        return Inertia::render('ProductDetail', [
            'product' => $product,
            'otherProducts' => $otherProducts,
            'categories' => CategoryResource::collection($categories),
            'auth' => Auth::user(),
        ]);
    }
    
    public function store(Request $request): JsonResponse
    {
        $validatedData = $request->validate([
            'name' => 'required|string|max:255',
            'price' => 'required|numeric',
            'stock' => 'required|integer',
            'description' => 'nullable|string',
            'image' => 'required|string',
            'sold' => 'required|integer',
            'detail' => 'required|string',
            'specification' => 'required|string',
            'important_information' => 'required|string',
            'original_price' => 'required|numeric',
            'discount' => 'required|numeric',
            'category_id' => 'required|exists:categories,id',
            'brand_id' => 'required|exists:brands,id',
        ]);

        $product = Product::create($validatedData);

        return response()->json($product, 201);
    }

    /**
     * Display the specified product.
     */
    public function show(Product $product): JsonResponse
    {
        $product->load(['category_id', 'brand_id']);
        return response()->json($product);
    }

    /**
     * Update the specified product in storage.
     */
    public function update(Request $request, Product $product): JsonResponse
    {
        $validatedData = $request->validate([
            'name' => 'sometimes|required|string|max:255',
            'price' => 'sometimes|required|numeric',
            'stock' => 'sometimes|required|integer',
            'description' => 'nullable|string',
            'image' => 'sometimes|required|string',
            'sold' => 'sometimes|required|integer',
            'detail' => 'sometimes|required|string',
            'specification' => 'sometimes|required|string',
            'important_information' => 'sometimes|required|string',
            'original_price' => 'sometimes|required|numeric',
            'discount' => 'sometimes|required|numeric',
            'category_id' => 'sometimes|required|exists:categories,id',
            'brand_id' => 'sometimes|required|exists:brands,id',
        ]);

        $product->update($validatedData);

        return response()->json($product);
    }

    /**
     * Remove the specified product from storage.
     */
    public function destroy(Product $product): JsonResponse
    {
        $product->delete();
        return response()->json(['message' => 'Product deleted successfully.']);
    }

    public function showProducts(){
        $products = Product::all();
        $category = Category::all();
        return Inertia::render('Product', [
            'products' => $products,
            'category' => $category,
        ]);
    }

    public function search(Request $request)
    {
        $query = $request->input('q'); // Mengambil input pencarian 
        // Melakukan pencarian berdasarkan nama produk
        $products = Product::with(['category_id', 'brand_id'])
        ->where('name', 'like', '%' . $query . '%')
        ->orWhereHas('category', function ($q) use ($query) {
            $q->where('name', 'like', '%' . $query . '%');
        })
        ->get();
        $categories = Category::all();
        $product = Product::paginate(10);
        
        // Mengirim hasil pencarian ke komponen Product
        return Inertia::render('Product', [
            'search' => $products,
            'categories' => CategoryResource::collection($categories),
            'query' => $query,
            'product' => ProductResource::collection($product),
        ]);
    }
    
}
