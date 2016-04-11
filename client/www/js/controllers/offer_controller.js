( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('OfferCtrl', OfferCtrl);

  OfferCtrl.$inject = ['$ionicHistory', '$ionicModal', '$rootScope', '$state', '$stateParams', 'CreditService', 'SessionService', 'VoucherService'];

  function OfferCtrl($ionicHistory, $ionicModal, $rootScope, $state, $stateParams, CreditService, SessionService, VoucherService) {

    var vm = this;

    vm.offer = $stateParams.offer;

    vm.closeModal = function() {
      vm.modal.hide();
      $ionicHistory.clearHistory();
      $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true
      });
      $state.go('app.profile');
    };

    vm.redeemOffer = function() {
      if(SessionService.currentUser) {
        CreditService.addBusinessIdToCredit(vm.offer);
        VoucherService.addVoucherToUser(vm.offer);
        vm.modal.show();
      }
    }

    var scope = $rootScope.$new(true);
    // Create the thanks modal to be used later
    $ionicModal.fromTemplateUrl('templates/voucher_thanks.html', {
      scope: angular.extend(scope, vm)
    }).then(function(modal) {
      vm.modal = modal;
    });
  }
})();
