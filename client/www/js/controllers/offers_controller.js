( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('OffersCtrl', OffersCtrl);

  OffersCtrl.$inject = ['$state', 'OfferService'];

  function OffersCtrl($state, OfferService) {

    var vm = this;

    vm.offers = [];

    OfferService
      .getOffers()
      .then(function(response) {
        if (response.data) {
          vm.offers = response.data;
        }
      });

    vm.goToOffer = function(offer) {
    	$state.go('app.offer', { offer: offer });
    };
  }
})();
