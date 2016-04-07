angular.module('app.routes', [])

    .config(function ($stateProvider, $urlRouterProvider) {

        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider

            .state('menu.myEvents', {
                url: '/myevents',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/myEvents.html',
                        controller: 'myEventsCtrl'
                    }
                }
            })

            .state('menu.myVolunteers', {
                url: '/myvolunteers',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/myVolunteers.html',
                        controller: 'myVolunteersCtrl'
                    }
                }
            })

            .state('menu', {
                url: '/side-menu21',
                templateUrl: 'templates/menu.html',
                abstract: true
            })

            .state('menu.login', {
                url: '/login',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/login.html',
                        controller: 'loginCtrl'
                    }
                }
            })

            .state('menu.modifyEvent', {
                url: '/modifyevent/:eventId',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/modifyEvent.html',
                        controller: 'modifyEventCtrl'
                    }
                }
            })

            .state('menu.eventSignIn', {
                url: '/eventsignin',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/eventSignIn.html',
                        controller: 'eventSignInCtrl'
                    }
                }
            })

            .state('menu.eventsignup', {
                url: '/eventsignup',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/eventsignup.html',
                        controller: 'eventsignupCtrl'
                    }
                }
            })

            .state('menu.volunteerDetail', {
                url: '/volunteerdetail',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/volunteerDetail.html',
                        controller: 'volunteerDetailCtrl'
                    }
                }
            })

            .state('manageCredits', {
                url: '/managecredits',
                templateUrl: 'templates/manageCredits.html',
                controller: 'manageCreditsCtrl'
            })

            .state('menu.creditDetails', {
                url: '/creditdetails',
                views: {
                    'side-menu21': {
                        templateUrl: 'templates/creditDetails.html',
                        controller: 'creditDetailsCtrl'
                    }
                }
            })

            .state('login2', {
                url: '/page14',
                templateUrl: 'templates/login2.html',
                controller: 'login2Ctrl'
            })

        $urlRouterProvider.otherwise('/side-menu21/myevents')


    });