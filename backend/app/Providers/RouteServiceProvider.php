<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Route;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * Define your route model bindings, pattern filters, etc.
     */
    public function boot(): void
    {
        parent::boot();

        // Charge les routes API
        Route::middleware('api')
            ->prefix('api')
            ->group(base_path('routes/api.php'));

        // Charge les routes web
        Route::middleware('web')
            ->group(base_path('routes/web.php'));
    }
}
