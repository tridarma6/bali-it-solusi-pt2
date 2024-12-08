<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'description', 'price', 'sale', 'sold', 'stock', 'image', 'detail', 'specification', 'important_information', 'original_price', 'discount', 'category_id', 'brand_id'
    ];

    public function category_id(): BelongsTo {
        return $this->belongsTo(Category::class);
    }

    public function brand_id(): BelongsTo {
        return $this->belongsTo(Brand::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}


