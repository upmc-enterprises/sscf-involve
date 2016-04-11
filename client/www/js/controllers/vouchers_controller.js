( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('VouchersCtrl', VouchersCtrl);

  VouchersCtrl.$inject = ['$state', 'SessionService'];

  function VouchersCtrl($state, SessionService) {

    var vm = this;

    vm.vouchers = SessionService.currentUser.vouchers;

    vm.goToVoucher = function(voucher) {
    	$state.go('app.voucher', { voucher: voucher });
    };
  }
})();
