( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('OrganizationsCtrl', OrganizationsCtrl);

  OrganizationsCtrl.$inject = ['$state', 'OrganizationService'];

  function OrganizationsCtrl($state, OrganizationService) {

    var vm = this;

    vm.organizations = [];

    OrganizationService
      .getOrganizations()
      .then(function(response) {
        if (response.data) {
          vm.organizations = response.data;
        }
      });

    vm.goToOrganization = function(organization) {
      $state.go('app.organization', { organization: organization });
    };
  }
})();
