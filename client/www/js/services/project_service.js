( function() {
  'use strict';

  angular
    .module('starter.services')
    .factory('ProjectService', ProjectService);

  ProjectService.$inject = [];

  function ProjectService() {

    var _projects = [
      {
        name: 'YouthPlaces',
        id: 1,
        address: '711 West Commons Pittsburgh, PA 15212',
        phone: '412.434.0851',
        description: 'Making a difference in the lives of thousands of teens by promoting positive development and providing a safe place for youth to engage in a range of experiences.'
      },
      {
        name: 'Manchester Citizens Corporation',
        id: 2,
        address: '1319 Allegheny Avenue, 1st Floor Pittsburgh, PA 15233',
        phone: '(412)-323-1743',
        description: 'Our Mission is to plan, build, promote and maintain a thriving community representative of the residents of Manchester.'
      },
      {
        name: 'Western PA Humane Society',
        id: 3,
        address: '1101 Western Avenue Pittsburgh PA 15233',
        phone: '412.321.4625',
        description: 'The mission of the Western Pennsylvania Humane Society is to provide the most comprehensive, compassionate and humane services to enhance the lives of companion animals for families and the community; to educate and to prevent the cruelty of all animals in the region we serve.'
      }
    ];

    return {
      getProjects: _getProjects
    };

    function _getProjects() {
      return _projects;
    }
  }
})();
