<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class OrderDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'order_id',
        'product_id',
        'quantity',
        'unit_price',
        'sub_total',
        
    ];

    public function order_id(): BelongsTo {
        return $this->belongsTo(Order::class);

    }
    
    public function product_id(): BelongsTo {
        return $this->belongsTo(Product::class);
    }
}
