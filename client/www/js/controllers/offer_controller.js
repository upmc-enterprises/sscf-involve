( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('OfferCtrl', OfferCtrl);

  OfferCtrl.$inject = ['$state', '$stateParams', 'CreditService'];

  function OfferCtrl($state, $stateParams, CreditService) {

    var vm = this;

    vm.offer = $stateParams.offer;

    vm.redeemOffer = function() {
      CreditService.addBusinessIdToCredit(vm.offer);
    }
  }
})();
