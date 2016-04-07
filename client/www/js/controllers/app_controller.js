( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('AppCtrl', AppCtrl);

  AppCtrl.$inject = ['$location', '$scope', '$ionicHistory', '$ionicModal', '$state', '$timeout', 'UserService', 'SessionService'];

  function AppCtrl($location, $scope, $ionicHistory, $ionicModal, $state, $timeout, UserService, SessionService) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    $scope.currentUser = SessionService.currentUser;

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Set currentUser to null
    $scope.logout = function() {
      $scope.loginData = {};
      SessionService.currentUser = null;
      $scope.currentUser = null;
      $ionicHistory.clearHistory();
      $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true,
      });
      $state.go('app.home');
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      UserService.signIn($scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.currentUser = SessionService.currentUser;
        $scope.closeLogin();
        if(SessionService.currentUser !== null) {
          $ionicHistory.clearHistory();
          $ionicHistory.nextViewOptions({
            disableAnimate: true,
            disableBack: true
          });
          $state.go('app.profile', null, {reload: true});
        }
      }, 500);
    };

    return {};
  }
})();