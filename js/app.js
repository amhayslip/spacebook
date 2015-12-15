angular.module('spacebook', ['ngRoute', 'ngResource'])
  .config(function ($routeProvider) {
    'use strict';

    var routeConfig = {
      controller: 'PostsCtrl',
      templateUrl: 'spacebook-index.html',
      resolve: {
        store: function (postStorage) {
          return postStorage;
        }
      }
    };

    $routeProvider
      .when('/', routeConfig)
      .when('/:status', routeConfig)
      .otherwise({
        redirectTo: '/'
      });
  });
