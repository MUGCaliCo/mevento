'use strict';

angular.module('meventoApp')
.controller('AdminEventsCtrl', function ($scope, $http, Api) {
  $scope.venues = [];
  $scope.event = {};

  var venues = Api.venues().query();
  venues.$promise.then(function(data) {
    $scope.venues = data;
  });
  
  $scope.save = function (){
    var newEvent = new Api.events();
    newEvent.save($scope.event);
  }

});
