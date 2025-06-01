<?php

namespace App\Models;

use App\Models\History;
use App\Models\Currency;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Game extends Model
{
    /** @use HasFactory<\Database\Factories\GameFactory> */
    use HasFactory;
    protected $fillable = [
        'name',
        'slug',
        'description',
        'release_date',
        'developer',
        'publisher',
        'cover_image',
        'banner',
        'image'
    ];

    public function currencies()
    {
        return $this->hasMany(Currency::class);
    }

    public function histories()
    {
        return $this->hasMany(History::class);
    }
}
