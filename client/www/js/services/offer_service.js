( function() {
  'use strict';

  angular
    .module('starter.services')
    .factory('OfferService', OfferService);

  OfferService.$inject = ['$http'];

  function OfferService($http) {

    var _baseUrl = 'http://involvemint-server.us-east-1.elasticbeanstalk.com';

    return {
      getOffers: _getOffers,
      getOffersForBusiness: _getOffersForBusiness
    };

    function _getOffers() {
      return $http.get(_baseUrl + '/offers');
    };

    function _getOffersForBusiness(business) {
      return $http.get(_baseUrl + '/offers/business/' + business.id);
    }
  }
})();
