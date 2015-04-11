'use strict';

angular.module('meventoApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/admin/events', {
        templateUrl: 'app/admin/events/events.html',
        controller: 'AdminEventsCtrl'
      });
  });
