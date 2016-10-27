
'use strict';

myApp.service('AuthService', ['$q', '$http', '$timeout', function($q, $http, $timeout) {

  var self = this;
  var deffered = $q.defer();

  self.login = function login(email, password) {

    $timeout(function(){

        console.warn('checking login');
        console.log(email, password);
        deffered.notify('Checking user...');
        // @TODO: Replace with call on backend service
        if (email.trim() === 'admin@gmail.com' && password === 'password') {

            var user = {
                '_id': '55de1f7a383dfa5824d3a7b9',
                'index': 0,
                'isActive': true,
                'picture': 'http://api.adorable.io/avatars/200/trunks@adrable.png',
                'age': 24,
                'name': 'Ford Parker',
                'gender': 'male',
                'company': 'NIKUDA',
                'email': 'fordparker@nikuda.com',
                'registered': '2014-08-15T01:23:57 -02:00'
            };

            deffered.resolve(user);
        } else {

            deffered.reject({message: 'Email ou mot de passe incorrecte.'});
        }

        // NB: This caused errors because...the promise was return after $timeout but was immediately needed by client.
        //return deffered.promise;
    }, 1500);

    return deffered.promise;
  };

}]);
