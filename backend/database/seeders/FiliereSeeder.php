<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Filiere;

class FiliereSeeder extends Seeder
{
    public function run(): void
    {
        Filiere::create(['nom' => 'Informatique']);
        Filiere::create(['nom' => 'Mathématiques']);
        Filiere::create(['nom' => 'Physique']);
    }
}
