<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

Route::get('/wrap', function () {
    return Inertia::render('wrap');
})->name('wrap');

Route::get('/detail', function () {
    return Inertia::render('detail');
})->name('detail');

Route::get('/account/information', function () {
    return Inertia::render('account/information');
})->name('information');

Route::get('/account/history', function () {
    return Inertia::render('account/history');
})->name('history');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
