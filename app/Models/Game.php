<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
}
