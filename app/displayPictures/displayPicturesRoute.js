'use strict';

angular.module('flickrApp.displayPictures', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/displayPictures', {
    templateUrl: 'displayPictures/displayPictures.html',
    controller: 'DisplayPicturesController',
    controllerAs: 'dpc'
  });
}]);

