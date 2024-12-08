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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('price', 10, 2);
            $table->integer('stock');
            $table->text('description');
            $table->string('image');
            $table->integer('sold');
            $table->string('detail');
            $table->string('specification');
            $table->string('important_information');
            $table->decimal('original_price', 10, 2);
            $table->decimal('discount', 10, 2);
            $table->boolean('sale');
            // category id
            $table->foreignId('category_id')->constrained(
                table:'categories',
                indexName: 'products_category_id',
            );
            // brand id
            $table->foreignId('brand_id')->constrained(
                table: 'brands',
                indexName: 'products_brand_id'
            );
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
