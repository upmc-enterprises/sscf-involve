( function() {
  'use strict';

  angular
    .module('starter.services')
    .factory('EventService', EventService);

  EventService.$inject = ['$http'];

  function EventService($http) {

    var _baseUrl = 'http://involvemint-server.us-east-1.elasticbeanstalk.com';

    return {
      getEvents: _getEvents,
      getEventsForOrganization: _getEventsForOrganization
    };

    function _getEvents() {
      return $http.get(_baseUrl + '/events');
    };

    function _getEventsForOrganization(organization) {
      return $http.get(_baseUrl + '/events/organization/' + organization.id);
    }
  }
})();
