<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AdminLog extends Model
{
    use HasFactory;

    protected $fillable = ['admin_id', 'activity'];

    // Relasi ke Admin (User yang berperan sebagai Admin)
    public function admin()
    {
        return $this->belongsTo(User::class, 'admin_id');
    }
}
