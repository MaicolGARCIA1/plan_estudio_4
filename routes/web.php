<?php


use App\Http\Controllers\IdentificacionController;
use Illuminate\Support\Facades\Route;

// Redirigir a la página de login
Route::get('/', function () {
    return redirect()->route('login');
});

// Rutas de autenticación
Route::get('/login', function () {
    return view('auth.login');
})->name('login');

// Rutas del Dashboard
Route::get('/select-format', function () {
    return view('select-format');
})->name('select-format');

Route::get('/dashboard', function () {
    return view('dashboard');
})->name('dashboard');

Route::get('/dashboard-plan-aprendizaje', function () {
    return view('dashboard-plan-aprendizaje');
})->name('dashboard-plan-aprendizaje');

// Rutas para la Identificación
Route::get('/identificacion', function () {
    return view('identificacion');
});

Route::post('/identificaciones', [IdentificacionController::class, 'store']);
Route::get('/identificaciones', [IdentificacionController::class, 'index']);

// Rutas para autenticación con Google
Route::get('/auth/google', 'App\Http\Controllers\Auth\LoginController@redirectToGoogle')->name('auth.google');
Route::get('/auth/google/callback', 'App\Http\Controllers\Auth\LoginController@handleGoogleCallback');

// use App\Http\Controller\IdentificacionController;
// use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return redirect()->route('login');
// });

// Route::get('/login', function () {
//     return view('auth.login');
// })->name('login');

// Route::get('/select-format', function () {
//     return view('select-format');
// })->name('select-format');

// Route::get('/dashboard', function () {
//     return view('dashboard');
// })->name('dashboard');

// Route::get('/dashboard-plan-aprendizaje', function () {
//     return view('dashboard-plan-aprendizaje');
// })->name('dashboard-plan-aprendizaje');


// Route::get('/identificacion', function () {
//     return view('identificacion');
// });


// Route::post('/identificaciones',[IdentificacionController::class, 'store']);

// Route::get('/identificaciones',[IdentificacionController::class, 'index']);

// // Rutas para autenticación con Google utilizando namespace absoluto
// Route::get('/auth/google', 'App\Http\Controllers\Auth\LoginController@redirectToGoogle')->name('auth.google');
// Route::get('/auth/google/callback', 'App\Http\Controllers\Auth\LoginController@handleGoogleCallback');
