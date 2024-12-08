<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            // order id
            $table->foreignId('order_id')->constrained(
                table: 'orders',
                indexName: 'order_items_order_id'
            );
            $table->foreignId('product_id')->constrained(
                table: 'products',
                indexName: 'order_items_product_id'
            );
            // product id
            $table->integer('quantity');
            $table->decimal('unit_price');
            $table->decimal('sub_total');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_items');
    }
};
