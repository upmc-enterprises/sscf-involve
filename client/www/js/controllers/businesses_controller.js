( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('BusinessesCtrl', BusinessesCtrl);

  BusinessesCtrl.$inject = ['$state', 'BusinessService'];

  function BusinessesCtrl($state, BusinessService) {

    var vm = this;

    vm.businesses = [];

    BusinessService
      .getBusinesses()
      .then(function(response) {
        if (response.data) {
          vm.businesses = response.data;
        }
      });

    vm.goToBusiness = function(business) {
    	$state.go('app.business', { business: business } )
    };
  }
})();
