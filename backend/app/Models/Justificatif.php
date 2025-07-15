<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Justificatif extends Model
{
    use HasFactory;

    protected $fillable = [
        'presence_id',
        'motif',
        'fichier',
    ];

    public function presence()
    {
        return $this->belongsTo(Presence::class);
    }
}
