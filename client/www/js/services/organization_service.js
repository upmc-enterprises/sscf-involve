( function() {
  'use strict';

  angular
    .module('starter.services')
    .factory('OrganizationService', OrganizationService);

  OrganizationService.$inject = ['$http'];

  function OrganizationService($http) {

    /*var _organizations = [
      {
        name: 'YouthPlaces',
        id: 1,
        address: '711 West Commons Pittsburgh, PA 15212',
        phone: '412.434.0851',
        description: 'Making a difference in the lives of thousands of teens by promoting positive development and providing a safe place for youth to engage in a range of experiences.',
        opportunities: [
          {
            name: 'Come help out a crew in the Summer Community Service organization',
            description: 'Every summer we gather 500 young adults (male; ages 16-25) to participate in a 6-week long community service organization within their neighborhood. We’d like to invite volunteers from throughout the northside to be a part of this impactful organization and connect with your fellow community members! organizations range from painting murals to setting up a community garden.',
            when: 'Every Saturday beginning at 10am',
            where: 'Meet at corner of West Ave and Manchester St.',
            howLong: '2-4 hours',
            numberNeeded: 35,
            numberScheduled: 25
          },
          {
            name: 'Join as a mentor in our Resume/Cover Letter Prep Sessions',
            description: 'As part of our career development program we run a weekly open session for young adults to drop in and get guidance and feedback on any materials they are preparing for pursuing career interests. We rely on the help of 5 weekly volunteers to help edit the materials together with the participants. This is a widely popular session that fills up quickly!',
            when: 'Every Sunday; 1-3pm',
            where: 'Carnegie Library; 1230 Federal St, Pittsburgh PA',
            howLong: '2 hours',
            numberNeeded: 5,
            numberScheduled: 3
          }
        ]
      },
      {
        name: 'Manchester Citizens Corporation',
        id: 2,
        address: '1319 Allegheny Avenue, 1st Floor Pittsburgh, PA 15233',
        phone: '(412)-323-1743',
        description: 'Our Mission is to plan, build, promote and maintain a thriving community representative of the residents of Manchester.',
        opportunities: [
          {
            name: 'Help out in the guest booth at Manchester House Tour',
            description: 'We’re running our 3rd annual Manchester house tour and we’re looking for volunteers to help out at several of our booths. We’ll be handing out maps, answering questions about the tour, and also selling some refreshments and merchandise to help offset the cost of the tour.',
            when: 'Sunday, May 15, 1 PM - 5 PM',
            where: 'Meet at corner of West Ave and Manchester St.',
            howLong: '1-4 hours',
            numberNeeded: 14,
            numberScheduled: 13
          }
        ]
      },
      {
        name: 'Western PA Humane Society',
        id: 3,
        address: '1101 Western Avenue Pittsburgh PA 15233',
        phone: '412.321.4625',
        description: 'The mission of the Western Pennsylvania Humane Society is to provide the most comprehensive, compassionate and humane services to enhance the lives of companion animals for families and the community; to educate and to prevent the cruelty of all animals in the region we serve.',
        opportunities: [
          {
            name: 'Become a Dog Walker',
            description: 'The Western Humane Society relies on volunteers to make sure our dogs are getting enough exercise and getting a chance to practice good leash etiquette. Walking our dogs keeps them happy and reduces stress.  And don’t worry if you have little experience, we match you with a dog based on your comfort (and arm strength)! This is a recurring volunteer opportunity so we have a formal registration process and one quick and easy training class to show you the ropes! ',
            when: 'flexible hours',
            where: 'Western PA Humane Society',
            howLong: '1-2 hours; at least once per week',
            numberNeeded: 10,
            numberScheduled: 0
          }
        ]
      }
    ];*/

    var _baseUrl = 'http://involvemint-server.us-east-1.elasticbeanstalk.com';

    return {
      getOrganizations: _getOrganizations
    };

    function _getOrganizations() {
      //return _organizations;
      return $http.get(_baseUrl + '/organizations');
    }
  }
})();
