
'use strict';

myApp.service('StorageService', [function() {


    var self = this;

    if (localStorage === undefined) {
        console.log('localStorage unsupported');
        return false;
    }

    self.getItem = function getItem(key) {

        localStorage.getItem(key);
    };

    self.setItem = function setItem(key, value) {

        localStorage.setItem(key, JSON.stringify(value));
    };

    self.removeItem = function removeItem(key) {

        localStorage.removeItem(key);
    };

    self.clearStorage = function clearStorage() {

        localStorage.clear();
    };

}]);
