<?php

namespace Database\Seeders;

use App\Models\Brand;
use Illuminate\Database\Seeder;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Seed some brands for the computer store
        Brand::create([
            'name' => 'ASUS',
            'description' => 'A leading brand for laptops, motherboards, and gaming components.',
            'image' => '/assets/images/brands/asus.png',
        ]);
        
        Brand::create([
            'name' => 'Acer',
            'description' => 'Manufacturer of laptops and desktop PCs known for quality and affordable products.',
            'image' => '/assets/images/brands/acer.png',
        ]);
        
        Brand::create([
            'name' => 'HP (Hewlett-Packard)',
            'description' => 'One of the global brands for laptops, printers, and desktop computers.',
            'image' => '/assets/images/brands/hp.png',
        ]);
        
        Brand::create([
            'name' => 'Dell',
            'description' => 'A brand known for business laptops and PCs as well as workstations.',
            'image' => '/assets/images/brands/dell.png',
        ]);
        
        Brand::create([
            'name' => 'Lenovo',
            'description' => 'A popular manufacturer of laptops and desktops, especially for business and gaming segments.',
            'image' => '/assets/images/brands/lenovo.png',
        ]);
        
        Brand::create([
            'name' => 'MSI',
            'description' => 'Known for gaming products such as laptops, GPUs, motherboards, and gaming PCs.',
            'image' => '/assets/images/brands/msi.png',
        ]);
        
        Brand::create([
            'name' => 'Apple',
            'description' => 'A premium brand for products like MacBooks, iMacs, and various related accessories.',
            'image' => '/assets/images/brands/apple.png',
        ]);
        
        Brand::create([
            'name' => 'Samsung',
            'description' => 'Famous for products like monitors, SSDs, RAM, and other electronic devices.',
            'image' => '/assets/images/brands/samsung.png',
        ]);
        
        Brand::create([
            'name' => 'Gigabyte',
            'description' => 'A well-known manufacturer of motherboards, graphics cards, and various PC components.',
            'image' => '/assets/images/brands/gigabyte.png',
        ]);
        
        Brand::create([
            'name' => 'Corsair',
            'description' => 'A leading brand for gaming peripherals, power supplies, cases, and RAM.',
            'image' => '/assets/images/brands/corsair.png',
        ]);
        
        Brand::create([
            'name' => 'Logitech',
            'description' => 'A leading brand for computer accessories.',
            'image' => '/assets/images/brands/logitech.png',
        ]);
        
        Brand::create([
            'name' => 'Rexus',
            'description' => 'A leading brand for computer accessories.',
            'image' => '/assets/images/brands/rexus.png',
        ]);
        
        Brand::create([
            'name' => 'Microsoft',
            'description' => 'A leading technology company known for software like Windows, Office, and Azure services.',
            'image' => '/assets/images/brands/microsoft.png',
        ]);

        Brand::create([
            'name' => 'Intel',
            'description' => 'A leading brand for computer components.',
            'image' => '/assets/images/brands/intel.png',
        ]);

        Brand::create([
            'name' => 'Seagate',
            'description' => 'A global leader in data storage solutions, including hard drives and SSDs.',
            'image' => '/assets/images/brands/seagate.png',
        ]);

        Brand::create([
            'name' => 'Kingston',
            'description' => 'A trusted brand known for high-performance memory and storage solutions.',
            'image' => '/assets/images/brands/kingston.png',
        ]);

        Brand::create([
            'name' => 'TP-Link',
            'description' => 'Global leader in networking products, including routers, switches, and Wi-Fi solutions.',
            'image' => '/assets/images/brands/tp-link.png',
        ]);
        
        Brand::create([
            'name' => 'D-Link',
            'description' => 'Leading provider of networking hardware including routers, switches, and wireless solutions.',
            'image' => '/assets/images/brands/d-link.png',
        ]);

        Brand::create([
            'name' => 'Sony',
            'description' => 'A leading brand in electronics, known for high-quality cameras, audio equipment, and consumer electronics.',
            'image' => '/assets/images/brands/sony.png',
        ]);

        Brand::create([
            'name' => 'Canon',
            'description' => 'Famous for high-quality cameras, camcorders, and imaging products.',
            'image' => '/assets/images/brands/canon.png',
        ]);
    }
}
