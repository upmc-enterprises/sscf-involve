( function() {
  'use strict';

  angular
    .module('starter.services')
    .factory('UserService', UserService);

  UserService.$inject = ['$filter', 'SessionService'];

  function UserService($filter, SessionService) {

    var _users = [
      {
        username: 'cassatm',
        name: 'Mary Cassat',
        phone: '',
        email: '',
        opportunities: [],
        credits: []
      },
      {
        username: 'ferrisg',
        name: 'George Ferris',
        phone: '',
        email: '',
        opportunities: [],
        credits: []
      },
      {
        username: 'bowmand',
        name: 'Darnell Bowman',
        phone: '',
        email: '',
        opportunities: [],
        credits: []
      },
      {
        username: 'smithk',
        name: 'Kelley Smith',
        phone: '',
        email: '',
        opportunities: [],
        credits: []
      },
      {
        username: 'robinsonj',
        name: 'Julie Robinson',
        phone: '',
        email: '',
        opportunities: [],
        credits: []
      },
      {
        username: 'wilsonb',
        name: 'Ben Wilson',
        phone: '',
        email: '',
        opportunities: [],
        credits: []
      }
    ];

    return {
      getUsers: _getUsers,
      signIn: _signIn
    };

    function _getUsers() {
      return _users;
    };

    function _signIn(credentials) {
      // Find user with credentials.username
      var filtered_array = $filter('filter')(_users, function(u) {
        return u.username === credentials.username;
      });
      // Assign user to SessionService.currentUser
      SessionService.currentUser = filtered_array[0];
    };
  }
})();
