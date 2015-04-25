'use strict';

angular.module('meventoApp')
.controller('EventsCtrl', function ($scope, Api) {
  $scope.events = [];

  var events = Api.events().query();
  events.$promise.then(function(data) {
    $scope.events = data;
  });
}).controller('EventsDetailCtrl', function ($scope, $routeParams, Api, User) {
  $scope.the_event = {};
  var eventSlug = $routeParams.eventSlug;

  var events = Api.events().get({ eventSlug: eventSlug });
  events.$promise.then(function(data) {
    $scope.the_event = data;
  });

  $scope.addComment = function () {
    var comment = {};
    comment.comment = $scope.comment;

    User.get().$promise.then(function (data){
        comment.user = data;
    });
    comment.eId = $scope.the_event._id;

    var newComment = Api.commentEvent();
    newComment.save(comment, function () {
        $scope.comment = '';
    });

    console.log(comment);

    $scope.the_event.comments.push(comment);

  };
});
