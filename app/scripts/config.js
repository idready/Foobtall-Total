
'use strict';

// Routes
// @TODO: check out $locationProvider for clean urls
myApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
    .when('/', {templateUrl: 'pages/home.html', controller: 'HomeCtrl'})
    .when('/player/:id', {templateUrl: 'pages/player.html', controller: 'PlayerCtrl'})
    .when('/login/', {templateUrl: 'pages/login.html', controller: 'LoginCtrl'})
    .otherwise({redirectTo: '/'});
}]);
