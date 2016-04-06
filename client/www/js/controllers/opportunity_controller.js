( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('OpportunityCtrl', OpportunityCtrl);

  OpportunityCtrl.$inject = ['$state', '$stateParams'];

  function OpportunityCtrl($state, $stateParams) {

    var vm = this;

    vm.opportunity = $stateParams.opportunity;
  }
})();
