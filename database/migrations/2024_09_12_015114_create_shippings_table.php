<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('shippings', function (Blueprint $table) {
            $table->id();
            $table->foreignId('order_id')->constrained()->onDelete('cascade');
            $table->text('shipping_address');
            $table->string('shipping_status');
            $table->timestamps();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('shippings');
    }
    
};
