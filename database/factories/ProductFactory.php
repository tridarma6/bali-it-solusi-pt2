<?php

namespace Database\Factories;

use App\Models\Product;
use App\Models\Category;
use App\Models\Brand;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Product::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->word(),
            'price' => $this->faker->randomFloat(2, 100, 10000),
            'stock' => $this->faker->numberBetween(1, 100),
            'description' => $this->faker->paragraph(),
            'image' => $this->faker->imageUrl(640, 480, 'tech'),
            'category_id' => Category::inRandomOrder()->first()->id, // Mengambil category_id yang sudah ada
            'brand_id' => Brand::inRandomOrder()->first()->id, // Mengambil brand_id yang sudah ada
        ];
    }
}
