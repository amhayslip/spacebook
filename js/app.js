angular.module('spacebook', ['ngRoute', 'ngResource'])
  .config(function ($routeProvider) {
    'use strict';

    var routeConfig = {
      controller: 'PostCtrl',
      templateUrl: 'spacebook-index.html',
      resolve: {
        store: function (postStorage) {
          // Get the correct module (API or localStorage).
          return postStorage.then(function (module) {
            module.get(); // Fetch the todo records in the background.
            return module;
          });
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
