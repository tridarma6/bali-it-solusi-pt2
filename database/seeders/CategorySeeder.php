<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Category;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Seed some products for the computer store
        Category::create([
            'name' => 'Laptop',
            'description' => 'A variety of laptops from various brands and specifications.',
            'image' => '/assets/images/products/laptop.png'
        ]);

        Category::create([
            'name' => 'Desktop Computer',
            'description' => 'Desktop PCs suitable for various needs, from office to gaming.',
            'image' => '/assets/images/products/dell_xps.png'
        ]);
        
        Category::create([
            'name' => 'Monitor',
            'description' => 'Monitors with various sizes and resolutions, including HD, Full HD, and 4K.',
            'image' => '/assets/images/products/monitor.png'
        ]);
        
        Category::create([
            'name' => 'Computer Components',
            'description' => 'Components such as motherboards, CPUs, RAM, and GPUs for upgrade and assembly needs.',
            'image' => '/assets/images/products/component.png'
        ]);
        
        Category::create([
            'name' => 'Computer Accessories',
            'description' => 'Accessories for computers such as mice, keyboards, and headsets.',
            'image' => '/assets/images/products/accessories.png'
        ]);
        
        
        Category::create([
            'name' => 'Storage',
            'description' => 'A variety of storage devices such as SSDs, HDDs, and external storage.',
            'image' => '/assets/images/products/storage.png'
        ]);
        
        Category::create([
            'name' => 'Networking',
            'description' => 'Networking devices such as routers, switches, and modems.',
            'image' => '/assets/images/products/networking.png'
        ]);
        
        Category::create([
            'name' => 'Printer & Scanner',
            'description' => 'Various types of printers and scanners for business and personal use.',
            'image' => '/assets/images/products/printer.png'
        ]);
        
        Category::create([
            'name' => 'Software',
            'description' => 'Software and licenses for operating systems, applications, and security software.',
            'image' => '/assets/images/products/office-365.png'
        ]);
        
        Category::create([
            'name' => 'Peripherals & Cables',
            'description' => 'Various peripherals such as USB hubs, HDMI cables, and other connectors.',
            'image' => '/assets/images/products/cables.png'
        ]);
    }
}
