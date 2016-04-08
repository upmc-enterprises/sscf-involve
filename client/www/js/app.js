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
          cache: false,
          views: {
            'menuContent': {
              cache: false,
              templateUrl: 'templates/home.html'
            }
          }
        })
        .state('app.businesses', {
          url: '/businesses',
          cache: false,
          views: {
            'menuContent': {
              cache: false,
              controller: 'BusinessesCtrl',
              controllerAs: 'BusinessesCtrl',
              templateUrl: 'templates/businesses.html'
            }
          }
        })
        .state('app.business', {
            url: '/business',
            params: {
              business: null
            },
            cache: false,
            views: {
              'menuContent': {
                cache: false,
                controller: 'BusinessCtrl',
                controllerAs: 'BusinessCtrl',
                templateUrl: 'templates/business.html'
              }
            }
        })
        .state('app.events', {
            url: '/events',
            cache: false,
            views: {
              'menuContent': {
                cache: false,
                controller: 'EventsCtrl',
                controllerAs: 'EventsCtrl',
                templateUrl: 'templates/events.html'
              }
            }
        })
        .state('app.event', {
            url: '/event',
            params: {
              event: null
            },
            cache: false,
            views: {
              'menuContent': {
                cache: false,
                controller: 'EventCtrl',
                controllerAs: 'EventCtrl',
                templateUrl: 'templates/event.html'
              }
            }
        })
        .state('app.offers', {
            url: '/offers',
            cache: false,
            views: {
              'menuContent': {
                cache: false,
                controller: 'OffersCtrl',
                controllerAs: 'OffersCtrl',
                templateUrl: 'templates/offers.html'
              }
            }
        })
        .state('app.offer', {
            url: '/offer',
            params: {
              offer: null
            },
            cache: false,
            views: {
              'menuContent': {
                cache: false,
                controller: 'OfferCtrl',
                controllerAs: 'OfferCtrl',
                templateUrl: 'templates/offer.html'
              }
            }
        })
        .state('app.organizations', {
            url: '/organizations',
            cache: false,
            views: {
              'menuContent': {
                cache: false,
                controller: 'OrganizationsCtrl',
                controllerAs: 'OrganizationsCtrl',
                templateUrl: 'templates/organizations.html'
              }
            }
        })
        .state('app.organization', {
            url: '/organization',
            params: {
              organization: null
            },
            cache: false,
            views: {
              'menuContent': {
                cache: false,
                controller: 'OrganizationCtrl',
                controllerAs: 'OrganizationCtrl',
                templateUrl: 'templates/organization.html'
              }
            }
        })
        .state('app.vouchers', {
          url: '/vouchers',
          cache: false,
          views: {
            'menuContent': {
              cache: false,
              controller: 'VouchersCtrl',
              controllerAs: 'VouchersCtrl',
              templateUrl: 'templates/vouchers.html'
            }
          }
        })
        .state('app.voucher', {
            url: '/voucher',
            params: {
              voucher: null
            },
            cache: false,
            views: {
              'menuContent': {
                cache: false,
                controller: 'VoucherCtrl',
                controllerAs: 'VoucherCtrl',
                templateUrl: 'templates/voucher.html'
              }
            }
        })
        .state('app.settings', {
          url: '/settings',
          cache: false,
          views: {
            'menuContent': {
              cache: false,
              templateUrl: 'templates/user/settings.html'
            }
          }
        })
        .state('app.profile', {
          url: '/profile',
          cache: false,
          views: {
            'menuContent': {
              cache: false,
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
