<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admin = Role::find(1);
        $customer = Role::find(2);
        $user = User::create([
            'name' => 'Tri Darma',
            'email' => 'triidarma06@gmail.com',
            'password' => Hash::make('iniadalahaku6'),
            'phone_number' => '081333486847',
            'address' => 'Jalan Ngurah Rai no.52 Singaraja, Bali',
        ]);
        $user->roles()->attach($admin);

        $user = User::create([
            'name' => 'Candra',
            'email' => 'candrawikananta@gmail.com',
            'password' => Hash::make('bayar2ribu'),
            'phone_number' => '081338453011',
            'address' => 'Jalan Tukad Banyusari no. 100A, Bali',
        ]);
        $user->roles()->attach($customer);

        User::create([
            'name' => 'Evan Adhiguna',
            'email' => 'evanadhiguna@gmail.com',
            'password' => Hash::make('vancy123'),
            'phone_number' => '081239319841',
            'address' => 'Jalan Kebo Iwa, Denpasar Barat',
        ]);
        $user->roles()->attach($admin);
    }
}
