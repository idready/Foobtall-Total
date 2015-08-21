
'use strict';

myApp.controller('HomeCtrl', ['$scope', '$timeout', '$rootScope', 'PlayersService', function($scope, $timeout, $rootScope, PlayersService){

    $scope.homePage = true;
    $rootScope.loading = true;

    var players = PlayersService.loadPlayers();
    players.then(
        function(datas){

        $scope.players = datas;
        console.log(datas);
        $rootScope.loading = false;
        },
        function(error){

        console.wran('Couldn\' load datas, check the PLayersService');
        }
    );

}]);


myApp.controller('PlayerCtrl', ['$scope', '$routeParams', '$rootScope', 'PlayersService', function($scope, $routeParams, $rootScope, PlayersService){

    $rootScope.loading = true;
    var player = PlayersService.getPlayer($routeParams.id);

    player.then(
        function(datas){

            $scope.player = datas;
            $rootScope.loading = false;
        },
        function(error){
           //@TODO: handle error
        }
    );

}]);


myApp.controller('LoginCtrl', ['$scope', '$rootScope', '$timeout', '$window', 'AuthService', function($scope, $rootScope, $timeout, $window, AuthService){

    // Wait for login to initiate loading
    $rootScope.loading = false;

    $scope.logUser = function logUser(e) {


        if (angular.isDefined(e)) {

        e.preventDefault();

        if ($scope.form.login.$valid) {

            console.log('checking');
            $rootScope.loading = true;
            // Remove login state when trying again
            $scope.login.failed = false;

            var email = $scope.login.email;
            var password = $scope.login.password;

            var login = AuthService.login(email, password);

            login.then(

                function(data){

                    if (data === true) {
                        console.log('true')
                        $rootScope.loading = false;
                        // redirect user to its page
                        $window.location = '/#/player/5/';
                    }
                },
                function(error){

                    $rootScope.loading = false;
                    $scope.login.failed = true;
                    $scope.login.error = error.message;
                }
            );

        }

      }


    }

}]);