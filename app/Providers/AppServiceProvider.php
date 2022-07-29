<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */

     public $bindings = [
         'App\Services\Interfaces\PostCatalogueServiceInterface' => 'App\Services\PostCatalogueService',
         'App\Repositories\Interfaces\PostCatalogueRepositoryInterface' => 'App\Repositories\PostCatalogueRepository',
     ];


   public function register()
   {
         foreach($this->bindings as $key => $val)
         {
           $this->app->bind($key, $val);
         }
         
   }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
