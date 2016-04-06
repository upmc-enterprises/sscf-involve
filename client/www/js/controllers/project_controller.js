( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('ProjectCtrl', ProjectCtrl);

  ProjectCtrl.$inject = ['$state', '$stateParams', 'ProjectService'];

  function ProjectCtrl($state, $stateParams, ProjectService) {

    var vm = this;

    vm.project = $stateParams.project;
  }
})();
