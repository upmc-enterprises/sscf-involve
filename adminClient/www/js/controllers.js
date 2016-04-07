angular.module('app.controllers', [])

    .controller('myEventsCtrl', function ($scope, EventsService) {
        $scope.events = EventsService.events;
    })

    .controller('myVolunteersCtrl', function ($scope) {

    })

    .controller('loginCtrl', function ($scope) {

    })

    .controller('modifyEventCtrl', function ($scope, $stateParams, EventsService) {
        $scope.event = EventsService.getEvent($stateParams.eventId);
    })

    .controller('eventSignInCtrl', function ($scope) {

    })

    .controller('eventsignupCtrl', function ($scope) {

    })

    .controller('volunteerDetailCtrl', function ($scope) {

    })

    .controller('manageCreditsCtrl', function ($scope) {

    })

    .controller('creditDetailsCtrl', function ($scope) {

    })

    .controller('login2Ctrl', function ($scope) {

    })
 