<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Justificatif;
use App\Models\User;

class JustificatifSeeder extends Seeder
{
    public function run(): void
    {
        $etudiant = User::where('role', 'etudiant')->first();
        $presence = \App\Models\Presence::first();
        if ($etudiant && $presence) {
            Justificatif::create([
                'user_id' => $etudiant->id,
                'presence_id' => $presence->id,
                'motif' => 'Maladie',
                'date' => now()->toDateString(),
                'statut' => 'en_attente',
            ]);
        }
    }
}
