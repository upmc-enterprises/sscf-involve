angular.module('app.services', [])

    .factory('BlankFactory', [function () {

    }])

    .service('BlankService', [function () {

    }])

    .service('VolunteersService', function() {
        var volunteers = [
            {
                name: "Steve Sloka"
            },
            {
                name: "Some guy"
            }
        ];

        return {
            volunteers: volunteers,
            getVolunteer: function (volunteerId) {
                return events[volunteerId];
            }
        }
    })

    .service('EventsService', function () {
        var events = [
            {
                eventName: "Clean Highland Park Playground",
                eventOverview: "desc1",
                duration: 5,
                notes: "fkdsldkskld s;kd;sd",
                isFamilyFriendly: true,
                minAge: 15,
                volunteers: [
                    { name: "Steve Sloka" },
                    { name: "User 2" },
                    { name: "User Five" }
                ]
            },
            {
                eventName: "Paint Kid's Room at St. Mary's Church",
                eventOverview: "desc2",
                duration: 15,
                notes: "something else",
                isFamilyFriendly: false,
                minAge: 90,
                volunteers: [
                    { name: "User 2" },
                    { name: "User Five" }
                ]
            },
            {
                eventName: "Make cards for Vets",
                eventOverview: "desc3",
                duration: 56,
                notes: "fkyet another!!",
                isFamilyFriendly: true,
                minAge: 21,
                volunteers: [
                    { name: "User 82" },
                    { name: "User Seven" }
                ]
            }

        ];

        return {
            events: events,
            getEvent: function (eventId) {
                return events[eventId];
            }
        }

    });

