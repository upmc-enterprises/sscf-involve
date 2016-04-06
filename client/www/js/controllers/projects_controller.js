( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('ProjectsCtrl', ProjectsCtrl);

  ProjectsCtrl.$inject = ['$state', 'ProjectService'];

  function ProjectsCtrl($state, ProjectService) {

    var vm = this;

    vm.projects = ProjectService.getProjects();

    vm.goToProject = function(project) {
    	$state.go('app.project', { project: project } )
    };
  }
})();
