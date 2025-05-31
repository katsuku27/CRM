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

Route::get('/home', function () {
    return Inertia::render('home');
})->name('home');

Route::get('/wrap', function () {
    return Inertia::render('wrap');
})->name('wrap');

Route::get('/detail', function () {
    return Inertia::render('detail');
})->name('detail');

Route::get('/admindashboard', function () {
    return Inertia::render('admindashboard');
})->name('admindashboard');

Route::get('/userdashboard', function () {
    return Inertia::render('userdashboard');
})->name('userdashboard');

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
