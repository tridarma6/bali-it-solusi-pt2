<?php

namespace App\Http\Controllers;

use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    function index(){

        $categories = Category::all();

    }

    function show($id){
        $category = Category::find($id);
        $otherCategory = Category::all()->take(7);
        $products = Product::all();
        return Inertia::render('Category', [
            'category' => $category,
            'otherCategory' => $otherCategory,
            'products' => ProductResource::collection($products),
        ]);
    }
}
