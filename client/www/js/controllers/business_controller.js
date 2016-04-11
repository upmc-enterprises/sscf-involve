( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('BusinessCtrl', BusinessCtrl);

  BusinessCtrl.$inject = ['$state', '$stateParams', 'OfferService'];

  function BusinessCtrl($state, $stateParams, OfferService) {

    var vm = this;

    vm.business = $stateParams.business;

    OfferService
      .getOffersForBusiness(vm.business)
      .then(function(response) {
        if(response.data) {
          vm.business.offers = response.data
        }
      });

    vm.goToOffer = function(offer) {
      $state.go('app.offer', { offer: offer } );
    };
  }
})();
