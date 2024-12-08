<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        // return parent::toArray($request);
        return [
            'id' => $this->id,
            'name' => $this->name,
            'price' => $this->price,
            'stock' => $this->stock,
            'description' => $this->description,
            'image' => $this->image,
            'sold' => $this->sold,
            'detail' => $this->detail,
            'specification' => $this->specification,
            'important_information' => $this->important_information,
            'original_price' => $this->original_price,
            'discount' => $this->discount,
            'sale' => $this->sale,
            'category_id' => $this->category_id,
            'brand_id' => $this->brand_id,
        ];
    }
}
