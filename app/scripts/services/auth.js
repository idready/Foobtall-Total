
'use strict';

myApp.service('AuthService', ['$q', '$http', '$timeout', function($q, $http, $timeout) {


  var self = this;
  var deffered = $q.defer();

  self.login = function login(email, password) {

    $timeout(function(){

        console.warn('checking login');
        // @TODO: Replace with call on backend service
        if (email == 'admin@gmail.com' && password == 'password') {
            console.log(email, password);
            deffered.resolve(true);
        } else {

            deffered.reject({message: "Email ou mot de passe incorrecte."});
        }

        // NB: This caused errors because...the promise was return after $timeout but was immediately needed by client.
        //return deffered.promise;
    }, 1500);

    return deffered.promise;
  }

}]);
