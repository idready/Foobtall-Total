
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

    console.log($routeParams.id);
    console.log('Player controller');
    console.log(PlayersService.getPlayer($routeParams.id));

    $rootScope.loading = true;

    var player = PlayersService.getPlayer($routeParams.id);
    player.then(
      function(datas){

        console.log(datas);
        $scope.player = datas;
        $rootScope.loading = false;
      },
      function(error){

      }
    );

}]);
