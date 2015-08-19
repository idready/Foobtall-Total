
'use strict';

myApp.service('PlayersService', ['$q', '$http', '$timeout', function($q, $http, $timeout) {

  console.log('service called');

  var self = this;
  var players = {};



  self.loadPlayers = function getPlayers() {

    var deffered = $q.defer();

    //avoid multiple load of available ressource
    if ( angular.isDefined(self.getPlayers()) ) {

      // return already loaded  players
      deffered.resolve(self.getPlayers());
    } else {

      $http.get('ajax/ressources/players.json')
      .success(function(datas, status){

        // just to show off loader
        $timeout(function(){

          self.setPlayers(datas);
          deffered.resolve(datas);
        }, 1500);

      })
      .error(function(errors, status){

        deffered.reject('Erreur: '+status+' avec ce message: '+errors);
      });
    }

    return deffered.promise;
  }

  self.setPlayers = function setPlayers(datas) {

    self.players = datas;
  }

  self.getPlayers = function getPlayers(datas) {

    return self.players;
  }

  self.getPlayer = function getPlayer(id) {

    var deffered = $q.defer();

    if ( angular.isDefined(self.getPlayers()) ) {

      // load players
      var players = self.loadPlayers();
      players.then(

        function(datas){

          self.setPlayers(datas);
          deffered.resolve(datas[id]);
        },
        function(error){

          deffered.reject('Erreur: '+status+' avec ce message: '+errors);
        }
      )

    } else {

      // return the right player
      deffered.resolve(self.getPlayers()[parseInt(id, 10)]);
    }

    return deffered.promise;
  }

} ]);
