
'use strict';

// Routes
// @TODO: check out $locationProvider for clean urls
myApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
    .when('/', {templateUrl: 'pages/home.html', controller: 'HomeCtrl'})
    .when('/players/', {templateUrl: 'pages/players.html', controller: 'PlayersCtrl'})
    .when('/player/:id', {templateUrl: 'pages/player.html', controller: 'PlayerCtrl'})
    .otherwise({redirectTo: '/'});
}]);
