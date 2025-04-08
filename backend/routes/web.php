<?php

/** @var \Laravel\Lumen\Routing\Router $router */

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/


//matches localhost:8888/lumen/public/
$router->get('/', function () use ($router) {
    return $router->app->version();
});

//News
$router->get('/news', 'NewsController@getMainInfo');
$router->get('/news-cards', 'NewsController@getCards');
$router->get('/news/{id}', 'NewsController@getOne');
$router->get('/news-card/{id}', 'NewsController@getOneCard');
$router->post('/news/add', 'NewsController@save');
$router->post('/news/edit/{id}', 'NewsController@update');
$router->delete('/news/delete/{id}', 'NewsController@delete');

//Events
$router->get('/events', 'EventController@getMainInfo');
$router->get('/events-cards', 'EventController@getCards');
$router->get('/events/{id}', 'EventController@getOne');
$router->get('/events-card/{id}', 'EventController@getOneCard');
// $router->get('/events/latest-event', 'EventController@getLatest');
$router->post('/events/add', 'EventController@save');
$router->post('/events/edit/{id}', 'EventController@update');
$router->delete('/events/delete/{id}', 'EventController@delete');

//Joined table Media for Events
$router->get('/media', 'MediaController@getMedia');

//Combined Articles
$router->get('/articles', 'ArticlesController@getAll');
$router->get('/articles/latest', 'ArticlesController@getLatest');
$router->get('/articles/latest-news', 'ArticlesController@getLatestNews');
$router->get('/articles/latest-events', 'ArticlesController@getLatestEvents');

//Volunteers
$router->get('/volunteers', 'VolunteerController@getAll');
$router->get('/volunteers/{id}', 'VolunteerController@getOne');
$router->post('/volunteers/add', 'VolunteerController@save');
$router->post('/volunteers/edit/{id}', 'VolunteerController@update');
$router->delete('/volunteers/delete/{id}', 'VolunteerController@delete');

//Newsletters
$router->get('/newsletters', 'NewsletterController@getAll');
$router->get('/newsletters/{id}', 'NewsletterController@getOne');
$router->post('/newsletters/add', 'NewsletterController@save');
$router->post('/newsletters/edit/{id}', 'NewsletterController@update');
$router->delete('/newsletters/delete/{id}', 'NewsletterController@delete');

//Donors
$router->get('/donors', 'DonorController@getAll');
$router->get('/donors/{id}', 'DonorController@getOne');
$router->post('/donors/add', 'DonorController@save');
$router->post('/donors/edit/{id}', 'DonorController@update');
$router->delete('/donors/delete/{id}', 'DonorController@delete');

//Battles
$router->get('/battles', 'BattleController@getAll');
$router->get('/battles/{id}', 'BattleController@getOne');

//Battles-section
$router->get('/battles-sections', 'BattleSectionController@getAll');













