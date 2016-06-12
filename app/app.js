'use strict';

// Declare app level module which depends on views, and components
angular.module('flickrApp', [
  'ngRoute',
  'flickrApp.displayPictures',
  'infinite-scroll'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/displayPictures'});
}]);
