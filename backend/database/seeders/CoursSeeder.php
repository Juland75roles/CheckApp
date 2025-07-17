<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Cours;
use App\Models\Filiere;
use App\Models\Salle;

class CoursSeeder extends Seeder
{
    public function run(): void
    {
        $info = Filiere::where('nom', 'Informatique')->first();
        $maths = Filiere::where('nom', 'Mathématiques')->first();
        $salleA = Salle::where('nom', 'Salle A')->first();
        $salleB = Salle::where('nom', 'Salle B')->first();
        $prof = \App\Models\User::where('role', 'professeur')->first();
        
        Cours::create([
            'nom' => 'Programmation PHP',
            'titre' => 'Développement Web',
            'professeur_id' => $prof ? $prof->id : 2,
            'filiere_id' => $info ? $info->id : 1,
            'salle_id' => $salleA ? $salleA->id : 1,
            'debut' => '2025-09-01 08:00:00',
            'fin' => '2025-09-01 10:00:00',
        ]);
        Cours::create([
            'nom' => 'Analyse Mathématique',
            'titre' => 'Mathématiques Avancées',
            'professeur_id' => $prof ? $prof->id : 2,
            'filiere_id' => $maths ? $maths->id : 2,
            'salle_id' => $salleB ? $salleB->id : 2,
            'debut' => '2025-09-02 10:00:00',
            'fin' => '2025-09-02 12:00:00',
        ]);
    }
}
