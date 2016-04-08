( function() {
  'use strict';

  angular
    .module('starter.services')
    .factory('EventLogService', EventLogService);

  EventLogService.$inject = ['$http'];

  function EventLogService($http) {

    var _baseUrl = 'http://involvemint-server.us-east-1.elasticbeanstalk.com';

    return {
      getEventlogs: _getEventLogs,
      getEventLogsForUser: _getEventLogsForUser
    };

    function _getEventLogs() {
      return $http.get(_baseUrl + '/event_log');
    };

    function _getEventLogsForUser(user) {
      return $http.get(_baseUrl + '/event_log/user/' + user.id);
    }
  }
})();
