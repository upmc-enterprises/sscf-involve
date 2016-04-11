( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('OrganizationCtrl', OrganizationCtrl);

  OrganizationCtrl.$inject = ['$state', '$stateParams', 'EventService'];

  function OrganizationCtrl($state, $stateParams, EventService) {

    var vm = this;

    vm.organization = $stateParams.organization;

    EventService
      .getEventsForOrganization(vm.organization)
      .then(function(response) {
        if(response.data) {
          vm.organization.events = response.data
        }
      });

    vm.goToEvent = function(event) {
      $state.go('app.event', { event: event } );
    };
  }
})();
