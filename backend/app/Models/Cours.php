<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Cours extends Model
{
    use HasFactory;

    protected $fillable = [
        'titre',
        'professeur_id',
        'filiere_id',
        'salle_id',
        'debut',
        'fin',
    ];

    public function professeur()
    {
        return $this->belongsTo(User::class, 'professeur_id');
    }

    public function filiere()
    {
        return $this->belongsTo(Filiere::class);
    }

    public function salle()
    {
        return $this->belongsTo(Salle::class);
    }

    public function presences()
    {
        return $this->hasMany(Presence::class);
    }
}
