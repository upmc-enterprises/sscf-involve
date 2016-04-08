( function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('EventsCtrl', EventsCtrl);

  EventsCtrl.$inject = ['$state', 'EventService'];

  function EventsCtrl($state, EventService) {

    var vm = this;

    vm.events = [];

    EventService
      .getEvents()
      .then(function(response) {
        if (response.data) {
          vm.events = response.data;
        }
      });

    vm.goToEvent = function(event) {
    	$state.go('app.event', { event: event } )
    };
  }
})();
