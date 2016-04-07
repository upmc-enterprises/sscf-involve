( function() {
  'use strict';

  angular
    .module('starter.services')
    .factory('BusinessService', BusinessService);

  BusinessService.$inject = [];

  function BusinessService() {

    var _businesses = [
      {
        name: 'Manchester Craftsman\'s Guild',
        id: 1,
        description: '',
        address: '1815 Metropolitan Street Pittsburgh, PA 15233',
        phone: '412-332-173',
        hours: 'check our website',
        url: 'http://notarealsite.com',
        deals: [
          {
            name: 'Art Class',
            description: '2 Credits can be used to get a voucher for $10 off any adult art class',
            creditCost: 2
          }
        ]
      },
      {
        name: 'Arnold\'s Tea',
        id: 2,
        description: 'Arnold\'s Tea is a tea café/bar specializing in the business of selling a variety of hot and cold tea beverages and pastries. Our customers will experience a new style of tea house, offering classic and signature tea beverages prepared using uniquely blended premium whole leaf teas. The pastries and light food fare will be prepared by local artisans. Our customers are able to enjoy teas and pastries in modern/rustic environment designed for work and relaxation.',
        address: '502 E Ohio Street Pittsburgh, PA 15212',
        phone: '412-322-2494',
        hours: 'Monday-Friday 7:30am-6:00pm, Saturday 9:00am-6:00pm, Closed Sunday',
        url: 'http://notarealsite.com',
        deals: [
          {
            name: 'Tea and Sweets',
            description: '1 Credit can be used to get a voucher for tea of your choice and an item from our sweets menu',
            creditCost: 1
          }
        ]
      }
    ];

    return {
      getBusinesses: _getBusinesses
    };

    function _getBusinesses() {
      return _businesses;
    };
  }
})();
