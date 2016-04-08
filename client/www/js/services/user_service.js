( function() {
  'use strict';

  angular
    .module('starter.services')
    .factory('UserService', UserService);

  UserService.$inject = ['$filter', '$http', 'CreditService', 'SessionService'];

  function UserService($filter, $http, CreditService, SessionService) {

    /*var _users = [
      {
        username: 'cassattm',
        name: 'Mary Cassatt',
        phone: '',
        email: '',
        events: [],
        credits: [],
        vouchers: []
      },
      {
        username: 'ferrisg',
        name: 'George Ferris',
        phone: '',
        email: '',
        events: [],
        credits: [],
        vouchers: []
      },
      {
        username: 'bowmand',
        name: 'Darnell Bowman',
        phone: '',
        email: '',
        events: [],
        credits: [],
        vouchers: []
      },
      {
        username: 'smithk',
        name: 'Kelley Smith',
        phone: '',
        email: '',
        events: [],
        credits: [],
        vouchers: []
      },
      {
        username: 'robinsonj',
        name: 'Julie Robinson',
        phone: '',
        email: '',
        events: [],
        credits: [],
        vouchers: []
      },
      {
        username: 'wilsonb',
        name: 'Ben Wilson',
        phone: '',
        email: '',
        events: [],
        credits: [],
        vouchers: []
      }
    ];*/

    var _baseUrl = 'http://involvemint-server.us-east-1.elasticbeanstalk.com';

    return {
      getUsers: _getUsers,
      signIn: _signIn
    };

    function _getUsers() {
      //return _users;
      return $http.get(_baseUrl + '/users');
    };

    function _signIn(credentials) {
      // Find user with credentials.username
      $http
        .get(_baseUrl + '/users/' + credentials.username)
        .then(function(response) {
          if(response.data) {
            // Assign user to SessionService.currentUser
            SessionService.currentUser = response.data;

            // Get the user's credits
            CreditService
              .getCreditsForUser(SessionService.currentUser)
              .then(function(creditResponse) {
                if(response.data) {
                  SessionService.currentUser.credits = creditResponse.data
                }
              });

          }
        });
    };
  }
})();
