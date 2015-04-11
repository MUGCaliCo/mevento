'use strict';

angular.module('meventoApp')
.controller('EventsCtrl', function ($scope, Api) {
  $scope.events = [];

  var events = Api.events().query();
  events.$promise.then(function(data) {
    $scope.events = data;
  });
});
