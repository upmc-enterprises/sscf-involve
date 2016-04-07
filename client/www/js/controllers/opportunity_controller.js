( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('OpportunityCtrl', OpportunityCtrl);

  OpportunityCtrl.$inject = ['$ionicHistory', '$ionicModal', '$rootScope', '$state', '$stateParams', 'SessionService'];

  function OpportunityCtrl($ionicHistory, $ionicModal, $rootScope, $state, $stateParams, SessionService) {

    var vm = this;

    vm.opportunity = $stateParams.opportunity;

    vm.closeModal = function() {
      vm.modal.hide();
      $ionicHistory.clearHistory();
      $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });
      $state.go('app.profile');
    };

    vm.signUpForOpportunity = function() {
      if(SessionService.currentUser) {
        SessionService.currentUser.opportunities.push(vm.opportunity);
        vm.modal.show();
      }
    };

    var scope = $rootScope.$new(true);
    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/thanks.html', {
      scope: angular.extend(scope, vm)
    }).then(function(modal) {
      vm.modal = modal;
    });
  }
})();
