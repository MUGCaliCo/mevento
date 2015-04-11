'use strict';

angular.module('meventoApp')
  .factory('Api', function ($resource) {
    // Service logic
    // ...

    

    // Public API here
    return {
      venues: function () {
        return $resource('/api/venues/:venueId', {venueId:'@id'});
      },
      events: function () {
        return $resource('/api/events/:eventId', {eventId:'@id'});
      },
    };
  });
