( function() {
  'use strict';

  // Ionic Starter App

  // angular.module is a global place for creating, registering and retrieving Angular modules
  // 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
  // the 2nd parameter is an array of 'requires'
  // 'starter.controllers' is found in controllers.js
  angular
    .module('starter', [
      'ionic',
      'starter.controllers',
      'starter.services'
    ])
    .run(function($ionicPlatform) {
      $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })
    .config(function($stateProvider, $urlRouterProvider) {
      $stateProvider
        .state('app', {
          url: '/app',
          abstract: true,
          templateUrl: 'templates/menu.html',
          controller: 'AppCtrl'
        })
        .state('app.home', {
          url: '/home',
          views: {
            'menuContent': {
              templateUrl: 'templates/home.html'
            }
          }
        })
        .state('app.merchants', {
          url: '/merchants',
          views: {
            'menuContent': {
              templateUrl: 'templates/merchants.html'
            }
          }
        })
        .state('app.projects', {
            url: '/projects',
            views: {
              'menuContent': {
                controller: 'ProjectsCtrl',
                controllerAs: 'ProjectsCtrl',
                templateUrl: 'templates/projects.html'
              }
            }
        })
        .state('app.project', {
            url: '/project',
            params: {
              project: null
            },
            views: {
              'menuContent': {
                controller: 'ProjectCtrl',
                controllerAs: 'ProjectCtrl',
                templateUrl: 'templates/project.html'
              }
            }
        })
        .state('app.opportunity', {
            url: '/opportunity',
            params: {
              opportunity: null
            },
            views: {
              'menuContent': {
                controller: 'OpportunityCtrl',
                controllerAs: 'OpportunityCtrl',
                templateUrl: 'templates/opportunity.html'
              }
            }
        })
        .state('app.wallet', {
          url: '/wallet',
          views: {
            'menuContent': {
              templateUrl: 'templates/user/wallet.html'
            }
          }
        })
        .state('app.settings', {
          url: '/settings',
          views: {
            'menuContent': {
              templateUrl: 'templates/user/settings.html'
            }
          }
        })
        .state('app.profile', {
          url: '/profile',
          views: {
            'menuContent': {
              controller: 'ProfileCtrl',
              controllerAs: 'ProfileCtrl',
              templateUrl: 'templates/user/profile.html'
            }
          }
        });
      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/app/home');
    });
})();
