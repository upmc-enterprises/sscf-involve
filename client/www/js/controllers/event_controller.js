( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('EventCtrl', EventCtrl);

  EventCtrl.$inject = ['$ionicHistory', '$ionicModal', '$rootScope', '$state', '$stateParams', 'SessionService'];

  function EventCtrl($ionicHistory, $ionicModal, $rootScope, $state, $stateParams, SessionService) {

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
        SessionService.currentUser.opportunities.push(vm.event);
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
