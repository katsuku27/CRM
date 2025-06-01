<?php

namespace App\Models;

use App\Models\Game;
use App\Models\Currency;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Currency extends Model
{
    /** @use HasFactory<\Database\Factories\CurrencyFactory> */
    use HasFactory;

    protected $fillable = [
        'name',
        'icon',
        'currency',
        'price',
        'game_id',
        'created_at',
        'updated_at',
    ];

    public function game()
    {
        return $this->belongsTo(Game::class);
    }

    public function currencies()
    {
    return $this->hasMany(Currency::class);
    }
}
