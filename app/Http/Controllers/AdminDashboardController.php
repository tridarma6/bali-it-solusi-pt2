<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Brand;
use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Http\Resources\FaqResource;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\BrandResource;
use Illuminate\Support\Facades\Route;
use App\Http\Resources\ProductResource;
use App\Http\Resources\CategoryResource;

class AdminDashboardController extends Controller
{
    public function index()
    {
        $products = Product::paginate(10);
        $faqs = Faq::all();
        $categories = Category::all();
        $brands = Brand::all();
        $users = User::all();

        return Inertia::render('Admin/Dashboard', [
            'products' => ProductResource::collection(resource: $products),
            'faqs' => FaqResource::collection($faqs),
            'categories' => CategoryResource::collection($categories),
            'brands' => BrandResource::collection($brands),
            'auth' => Auth::user(),
            'isadmin' => Auth::user()->roles,
            'users' => $users
        ]);

    }

    public function getDashboardData()
    {
        // Mengambil data jumlah produk, kategori, dan brand
        $productCount = Product::count();
        $categoryCount = Category::count();
        $brandCount = Brand::count();

        // Mengembalikan data dalam format JSON
        return response()->json([
            'products' => $productCount,
            'categories' => $categoryCount,
            'brands' => $brandCount,
        ]);
    }

    public function addBrand(){
        $brand = Brand::all();
        return Inertia::render('Admin/AddBrand', [
            'brandArr' => [
                'brands' => $brand
            ] ,
        ]); 
    }

    public function storeBrand(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'required|string'
        ]);

        // Simpan data ke database
        Brand::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'image' => $request->input('image'),  // Simpan path atau URL gambar
        ]);

        return response()->json(['message' => 'Brand created successfully'], 200);
    }

    public function showBrands(){
        $brands = Brand::paginate(10);
        return Inertia::render('Admin/Brand',[
            'brands' => $brands
        ]);
    }
    
    public function updateBrand(Request $request, $id)
    {
        $brand = Brand::findOrFail($id);
    
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string', // Validasi deskripsi
        ]);
    
        $brand->update([
            'name' => $request->name,
            'description' => $request->description,
        ]);
    
        return redirect()->back()->with('success', 'Brand updated successfully!');
    }

    public function deleteBrand($id)
    {
        $brand = Brand::find($id); // Find brand by ID
        $brand->delete();

        return redirect()->back()->with('success', 'Brand deleted successfully!');
    }

    public function storeCategory(Request $request)
    {
        // Validasi input
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'image' => 'required|string', // Menerima string URL atau path gambar
        ]);

        // Menyimpan data kategori ke database, termasuk path gambar
        Category::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'image' => $request->input('image'),  // Simpan path atau URL gambar
        ]);

        return response()->json(['message' => 'Category created successfully'], 200);
    }


    public function addProduct(){
        $products = Product::all();
        $brands = Brand::all();
        $categories = Category::all();
        return Inertia::render('Admin/AddProduct', [
            'products' => $products,
            'brands' => $brands,
            'categories' => $categories,
        ]); 
    }

    public function showProducts(Request $request){
        $itemsPerPage = $request->input('itemsPerPage', 10); 
        $product = product::paginate($itemsPerPage)->appends(['itemsPerPage' => $itemsPerPage]);
        return Inertia::render('Admin/Product',[
            'products' => $product
        ]);
    }

    public function updateProduct(Request $request, $id)
    {
        $product = Product::findOrFail($id);

        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'price' => 'required|numeric', // Atau decimal:2 jika perlu
            'stock' => 'required|integer',
            'image' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048', // Menggunakan nullable jika gambar tidak wajib
            'detail' => 'required|string',
            'specification' => 'required|string',
            'important_information' => 'required|string',
            'original_price' => 'required|numeric', // Bisa juga decimal:2 jika diperlukan
            'discount' => 'required|numeric', // Memastikan discount adalah angka
            'category_id' => 'required|integer',
            'brand_id' => 'required|integer',
        ]);

        // Update produk dengan data yang diterima dari request
        $product->update([
            'name' => $request->name,
            'description' => $request->description,
            'price' => $request->price,
            'stock' => $request->stock,
            'image' => $request->image ? $request->image : $product->image, // Cek jika ada gambar baru
            'detail' => $request->detail,
            'specification' => $request->specification,
            'important_information' => $request->important_information,
            'original_price' => $request->original_price,
            'discount' => $request->discount,
            'category_id' => $request->category_id,
            'brand_id' => $request->brand_id,
        ]);

        return redirect()->back()->with('success', 'Product updated successfully!');
    }


    public function deleteProduct($id)
    {
        $product = Product::find($id); // Find product by ID
        $product->delete();

        return redirect()->back()->with('success', 'Product deleted successfully!');
    }

    public function storeProduct(Request $request){
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string', // Validasi deskripsi
            'original_price' => 'required|decimal:0,max',
            'stock' => 'required|integer',
            'sold' => 'nullable|integer',
            'image' => 'required|string',
            'detail' => 'required|string',
            'specification' => 'required|string',
            'important_information' => 'required|string',
            'discount' => 'required|decimal:0,max',
            'category_id' => 'required|integer',
            'brand_id' => 'required|integer',
        ]);
        $price = $request->original_price - ($request->original_price * $request->discount / 100);
        $sold = 0;
        $sale = true;
        Product::create([
            'name' => $request->input('name'),
            'description' => $request->input('description'),
            'price' => $price,
            'sold' => $sold,
            'sale' => $sale,
            'stock' => $request->input('stock'),
            'image' => $request->input('image'),
            'detail' => $request->input('detail'),
            'specification' => $request->input('specification'),
            'important_information' => $request->input('important_information'),
            'original_price' => $request->input('original_price'),
            'discount' => $request->input('discount'),
            'category_id' => $request->input('category_id'),
            'brand_id' => $request->input('brand_id'),
        ]);
        return response()->json([
            'message' => 'Product added successfully!',
        ], 200);
    }

    public function addCategory(){
        $category = Category::all();
        return Inertia::render('Admin/AddCategory', [
            'categoryArr' => [
                'categories' => $category
            ] ,
        ]); 
    }

    public function showCategories(){
        $categories = Category::paginate(10);
        return Inertia::render('Admin/Category',[
            'categories' => $categories
        ]);
    }

    public function updateCategory(Request $request, $id)
    {
        $category = Category::findOrFail($id);
    
        $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'required|string', // Validasi deskripsi
        ]);
    
        $category->update([
            'name' => $request->name,
            'description' => $request->description,
        ]);
    
        return redirect()->back()->with('success', 'Category updated successfully!');
    }

    public function deleteCategory($id)
    {
        $category = Category::find($id); // Find category by ID
        $category->delete();

        return redirect()->back()->with('success', 'Category deleted successfully!');
    }
}
