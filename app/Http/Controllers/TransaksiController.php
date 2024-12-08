<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class TransaksiController extends Controller
{
    public function checkout(Request $request) {
        $request->validate([
            'name' => 'required',
            'address' => 'required',
            'phone_number' => 'required',
            'productId' => 'required',
            'quantity' => 'required',
        ]);
    
        $product = Product::findOrFail($request->productId);
    
        $waUrl = "https://api.whatsapp.com/send?phone=6281338453011&text=" . urlencode(
            "Nama : {$request->name}\n" .
            "No.Wa : {$request->phone_number}\n" .
            "Alamat : {$request->address}\n\n" .
            "Nama Produk : {$product->name}\n" .
            "Harga : Rp. " . number_format($product->price) . "\n\n" .
            "Jumlah : {$request->quantity}\n" .
            "Harga Total : Rp. " . number_format($product->price * $request->quantity) . "\n\n" .
            "URL : " . url()->previous()
        );
    
        return response()->json(['waUrl' => $waUrl]);
    }
    
}
