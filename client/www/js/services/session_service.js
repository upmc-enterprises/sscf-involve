( function() {
  'use strict';

  angular
    .module('starter.services')
    .factory('SessionService', SessionService);

  SessionService.$inject = [];

  function SessionService() {

    var _currentUser = null;

    return {
      currentUser: _currentUser
    };
  }
})();
