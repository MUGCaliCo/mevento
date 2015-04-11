'use strict';

angular.module('meventoApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.events = [];
    $scope.venues = [];

    $http.get('/api/events').success(function(events) {
      $scope.events = events;
    });

    $http.get('/api/venues').success(function(venues) {
      $scope.venues = venues;
    });

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };
  });
