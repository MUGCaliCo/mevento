'use strict';

angular.module('meventoApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/events', {
        templateUrl: 'app/events/events.html',
        controller: 'EventsCtrl'
      })
      .when('/events/:eventSlug', {
        templateUrl: 'app/events/eventDetail.html',
        controller: 'EventsDetailCtrl'
      });
  });
