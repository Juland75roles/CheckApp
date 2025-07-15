<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Presence extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'cours_id',
        'date',
        'code',
        'statut',
        'justificatif',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function cours()
    {
        return $this->belongsTo(Cours::class);
    }

    public function justificatif()
    {
        return $this->hasOne(Justificatif::class);
    }
}
