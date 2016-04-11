( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('EventCtrl', EventCtrl);

  EventCtrl.$inject = ['$ionicHistory', '$ionicModal', '$rootScope', '$state', '$stateParams', 'SessionService', 'EventLogService'];

  function EventCtrl($ionicHistory, $ionicModal, $rootScope, $state, $stateParams, SessionService, EventLogService) {

    var vm = this;

    vm.event = $stateParams.event;

    vm.closeModal = function() {
      vm.modal.hide();
      $ionicHistory.clearHistory();
      $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });
      $state.go('app.profile');
    };

    vm.signUpForEvent = function() {
      if(SessionService.currentUser) {
        EventLogService.createEventLog(SessionService.currentUser.id, vm.event.id);
        vm.modal.show();
      }
    };

    var scope = $rootScope.$new(true);
    // Create the thanks modal to be used later
    $ionicModal.fromTemplateUrl('templates/thanks.html', {
      scope: angular.extend(scope, vm)
    }).then(function(modal) {
      vm.modal = modal;
    });
  }
})();
