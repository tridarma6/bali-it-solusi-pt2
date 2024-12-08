<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'total_amount',
        'status',
        'order_date',
    ];

    public function user_id(): BelongsTo {
        return $this->belongsTo(User::class);
    }
    // Relasi ke Payment
    public function payment()
    {
        return $this->hasOne(Payment::class);
    }

    // Relasi ke Shipping
    public function shipping()
    {
        return $this->hasOne(Shipping::class);
    }
}
