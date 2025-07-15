<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;

// Auth routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/user', [AuthController::class, 'user']);

    // CRUD Presence
    Route::apiResource('presences', App\Http\Controllers\PresenceController::class);
    // CRUD Cours
    Route::apiResource('cours', App\Http\Controllers\CoursController::class);
    // CRUD Filiere
    Route::apiResource('filieres', App\Http\Controllers\FiliereController::class);
    // CRUD Salle
    Route::apiResource('salles', App\Http\Controllers\SalleController::class);
    // CRUD Justificatif
    Route::apiResource('justificatifs', App\Http\Controllers\JustificatifController::class);

    // Exemple de protection par rôle (middleware à créer)
    // Route::middleware('role:professeur')->group(function () {
    //     Route::post('cours/{cours}/code', [CoursController::class, 'generateCode']);
    // });
});
