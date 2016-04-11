( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('VoucherCtrl', VoucherCtrl);

  VoucherCtrl.$inject = ['$state', '$stateParams'];

  function VoucherCtrl($state, $stateParams) {

    var vm = this;

    vm.voucher = $stateParams.voucher;
  }
})();
