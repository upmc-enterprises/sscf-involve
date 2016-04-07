angular.module('app.controllers', [])

    .controller('myEventsCtrl', function ($scope, EventsService, VolunteersService) {
        EventsService.events().then(function (response) {
            $scope.events = response.data;
            console.log('events: ', $scope.events);
        });
        $scope.volunteers = VolunteersService.volunteers;


    })

    .controller('myVolunteersCtrl', function ($scope) {

    })

    .controller('loginCtrl', function ($scope) {

    })

    .controller('modifyEventCtrl', function ($scope, $stateParams, EventsService) {
        EventsService.getEvent($stateParams.eventId).then(function (response) {
            var event = response.data;

            if (parseInt(event.isFamilyFriendly) === 1) {
                event.isFamilyFriendly = true;
            } else {
                event.isFamilyFriendly = false;
            }

            $scope.event = event;
        });
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
 