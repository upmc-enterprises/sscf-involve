( function() {
  'use strict';

  angular
    .module('starter.services')
    .factory('VoucherService', VoucherService);

  VoucherService.$inject = ['SessionService'];

  function VoucherService(SessionService) {

    var _baseUrl = 'http://involvemint-server.us-east-1.elasticbeanstalk.com';

    return {
      addVoucherToUser: _addVoucherToUser
    };

    function _addVoucherToUser(offer) {
      if(!SessionService.currentUser.vouchers){
        SessionService.currentUser.vouchers = [];
      }
      SessionService.currentUser.vouchers.push({
        offer: offer
      })
    }
  }
})();
