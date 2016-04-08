( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('ProfileCtrl', ProfileCtrl);

  ProfileCtrl.$inject = ['$state', 'CreditService', 'EventLogService', 'SessionService'];

  function ProfileCtrl($state, CreditService, EventLogService, SessionService) {

    var vm = this;

    vm.user = SessionService.currentUser;

    EventLogService
      .getEventLogsForUser(vm.user)
      .then(function(response) {
        if(response.data) {
          vm.user.eventLogs = response.data
        }
      });

    vm.goToOpportunity = function(opportunity) {
      $state.go('app.opportunity', { opportunity: opportunity } );
    };
  }
})();
