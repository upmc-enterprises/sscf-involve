( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('OfferCtrl', OfferCtrl);

  OfferCtrl.$inject = ['$state', '$stateParams'];

  function OfferCtrl($state, $stateParams) {

    var vm = this;

    vm.offer = $stateParams.offer;
  }
})();
