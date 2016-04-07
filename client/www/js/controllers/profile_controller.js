( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('ProfileCtrl', ProfileCtrl);

  ProfileCtrl.$inject = ['$state', 'SessionService'];

  function ProfileCtrl($state, SessionService) {

    var vm = this;

    vm.user = SessionService.currentUser;

    vm.goToOpportunity = function(opportunity) {
      $state.go('app.opportunity', { opportunity: opportunity } );
    };
  }
})();
