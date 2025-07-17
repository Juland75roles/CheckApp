<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Salle;

class SalleSeeder extends Seeder
{
    public function run(): void
    {
        Salle::create(['nom' => 'Salle A', 'capacite' => 30]);
        Salle::create(['nom' => 'Salle B', 'capacite' => 40]);
        Salle::create(['nom' => 'Salle C', 'capacite' => 25]);
    }
}
