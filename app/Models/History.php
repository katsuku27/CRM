<?php

namespace App\Models;

use App\Models\Game;
use App\Models\User;
use App\Models\Currency;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class History extends Model
{
    /** @use HasFactory<\Database\Factories\HistoryFactory> */
    use HasFactory;

    protected $fillable = [
        'user_id',
        'game_id',
        'currency_id',
        'created_at',
        'updated_at',
    ];

    public function games()
    {
        return $this->belongsTo(Game::class);
    }

    public function users()
    {
        return $this->belongsTo(User::class);
    }

    public function currency()
    {
        return $this->belongsTo(Currency::class);
    }
}
