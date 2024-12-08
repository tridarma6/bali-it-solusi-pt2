<?php

namespace Database\Seeders;

use App\Models\Faq;
use Illuminate\Database\Seeder;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Faq::create([
            'question' => 'What product categories are available at Bali IT Solusi?',
            'answer' => 'We offer a wide range of tech products, including computers, laptops, computer accessories, networking devices, software, and more.',
        ]);

        Faq::create([
            'question' => 'Does Bali IT Solusi provide custom-built PCs?',
            'answer' => 'Yes, we offer services to build custom PCs according to your needs. You can contact us for consultation on the desired specifications.',
        ]);

        Faq::create([
            'question' => 'Are there any discounts on certain products?',
            'answer' => 'Yes, we regularly offer discounts on specific products. You can check the "On Sale" section on our homepage for the current deals.',
        ]);

        // Added FAQ
        Faq::create([
            'question' => 'Are all products sold at Bali IT Solusi original?',
            'answer' => 'Yes, all products we sell at Bali IT Solusi are original and come with official warranties from the respective distributors or manufacturers.',
        ]);
    }
}
