angular.module('spacebook', ['ngRoute', 'ngResource'])
  .config(function ($routeProvider) {g
    var routeConfig = {
      controller: 'PostsCtrl',
      templateUrl: 'spacebook-index.html'
    };

    $routeProvider
      .when('/', routeConfig)
      .when('/:status', routeConfig)
      .otherwise({
        redirectTo: '/'
      });
  });
