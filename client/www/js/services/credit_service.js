( function() {
  'use strict';

  angular
    .module('starter.services')
    .factory('CreditService', CreditService);

  CreditService.$inject = ['$http', 'SessionService'];

  function CreditService($http, SessionService) {

    var _baseUrl = 'http://involvemint-server.us-east-1.elasticbeanstalk.com';

    return {
      getCreditsForEventId: _getCreditsForEventId,
      getCreditsForUser: _getCreditsForUser,
      addBusinessIdToCredit: _addBusinessIdToCredit,
      assignCreditToUser: _assignCreditToUser
    };

    function _getCreditsForEventId(eventId) {
      return $http.get(_baseUrl + '/credits/event/' + eventId);
    };

    function _getCreditsForUser(user) {
      return $http.get(_baseUrl + '/credits/' + user.id);
    }

    function _addBusinessIdToCredit(offer) {
      return $http.put(_baseUrl + '/credits/' + SessionService.currentUser.credits[0].id +
                                  '/business/' + offer.businessId +
                                  '/offer/' + offer.id);
    }

    function _assignCreditToUser(credit) {
      return $http.put(_baseUrl + '/credits/' + credit.id +
                                  '/user/' + SessionService.currentUser.id);
    }
  }
})();
