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

    vm.goToEventLog = function(eventLog) {
      $state.go('app.eventlog', { eventLog: eventLog } );
    };

    vm.goToVoucher = function(voucher) {
      $state.go('app.voucher', { voucher: voucher } );
    };
  }
})();
