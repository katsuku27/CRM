<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/frontend/login', function () {
    return view('frontend.login');
});

Route::get('/frontend/register', function () {
    return view('frontend.register');
});

Route::get('/frontend/home', function () {
    return view('frontend.home');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
