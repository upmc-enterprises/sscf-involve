( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('EventLogCtrl', EventLogCtrl);

  EventLogCtrl.$inject = ['$q', '$ionicHistory', '$ionicModal', '$rootScope', '$state', '$stateParams', 'CreditService', 'EventLogService', 'UserService'];

  function EventLogCtrl($q, $ionicHistory, $ionicModal, $rootScope, $state, $stateParams, CreditService, EventLogService, UserService) {

    var vm = this;

    vm.eventLog = $stateParams.eventLog;

    vm.creditsForEvent = [];

    CreditService
      .getCreditsForEventId(vm.eventLog.eventId)
      .then(function(response) {
      	if(response.data) {
          vm.creditsForEvent = response.data;
      	}
      });

    vm.closeModal = function() {
      vm.modal.hide();
      $ionicHistory.clearHistory();
      $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });
      $state.go('app.profile');
    };

    vm.checkIn = function() {
      vm.modal.show();
    	var promises = [];
    	if(vm.creditsForEvent.length > 1) {
        for(var i = 0; i < 2; i++) {
        	promises.push(CreditService.assignCreditToUser(vm.creditsForEvent[i]));
        }
      }
      $q.all(promises).then(function() {
        UserService.updateCurrentUsersCredits();
      });
    };

    var scope = $rootScope.$new(true);
    // Create the thanks modal to be used later
    $ionicModal.fromTemplateUrl('templates/event_log_thanks.html', {
      scope: angular.extend(scope, vm)
    }).then(function(modal) {
      vm.modal = modal;
    });
  }
})();
