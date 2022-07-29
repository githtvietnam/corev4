<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\PostCatalogueController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

/* DASHBOARD*/
Route::get('backend/dashboard/index', [DashboardController::class, 'index'])->name('dashboard.index');

/* POST CATALOGUE ROUTE */
Route::get('backend/post/catalogue/index', [PostCatalogueController::class, 'index'])->name('post.catalogue.index');
Route::get('backend/post/catalogue/create', [PostCatalogueController::class, 'create'])->name('post.catalogue.create');
Route::post('backend/post/catalogue/store', [PostCatalogueController::class, 'store'])->name('post.catalogue.store');
Route::get('backend/post/catalogue/edit', [PostCatalogueController::class, 'edit'])->name('post.catalogue.edit');
Route::get('backend/post/catalogue/destroy', [PostCatalogueController::class, 'create'])->name('post.catalogue.destroy');
