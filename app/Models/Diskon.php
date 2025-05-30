<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Diskon extends Model
{
    /** @use HasFactory<\Database\Factories\DiskonFactory> */
    use HasFactory;

    protected $fillable = [
        'game_id',
        'percentage',
        'start_date',
        'end_date',
    ];
}
