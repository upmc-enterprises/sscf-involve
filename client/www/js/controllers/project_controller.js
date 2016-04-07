( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('ProjectCtrl', ProjectCtrl);

  ProjectCtrl.$inject = ['$state', '$stateParams'];

  function ProjectCtrl($state, $stateParams) {

    var vm = this;

    vm.project = $stateParams.project;

    vm.goToOpportunity = function(opportunity) {
      $state.go('app.opportunity', { opportunity: opportunity } );
    };
  }
})();
