'use strict';

angular.module('meventoApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/events', {
        templateUrl: 'app/events/events.html',
        controller: 'EventsCtrl'
      });
  });
