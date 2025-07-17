<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin',
            'email' => 'admin@example.com',
            'password' => bcrypt('password'),
            'role' => 'responsable',
        ]);
        User::create([
            'name' => 'Professeur Demo',
            'email' => 'prof@example.com',
            'password' => bcrypt('password'),
            'role' => 'professeur',
        ]);
        User::create([
            'name' => 'Etudiant Demo',
            'email' => 'etu@example.com',
            'password' => bcrypt('password'),
            'role' => 'etudiant',
        ]);
    }
}
