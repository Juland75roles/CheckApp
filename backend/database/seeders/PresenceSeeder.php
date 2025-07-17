<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Presence;
use App\Models\User;
use App\Models\Cours;

class PresenceSeeder extends Seeder
{
    public function run(): void
    {
        $etudiant = User::where('role', 'etudiant')->first();
        $cours = Cours::first();
        if ($etudiant && $cours) {
            Presence::create([
                'user_id' => $etudiant->id,
                'cours_id' => $cours->id,
                'date' => now()->toDateString(),
                'statut' => 'present',
            ]);
        }
    }
}
