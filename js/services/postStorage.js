angular.module('spacebook')
  .factory('postStorage', function ($http, $injector) {
    'use strict';

    // Detect if an API backend is present. If so, return the API module, else
    // hand off the localStorage adapter
    return $http.get('/api')
      .then(function () {
        return $injector.get('api');
      }, function () {
        return $injector.get('localStorage');
      });
  })

  .factory('localStorage', function ($q) {
    'use strict';

    var STORAGE_ID = 'posts-angularjs';

    var store = {
      posts: [],

      _getFromLocalStorage: function () {
        return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
      },

      _saveToLocalStorage: function (posts) {
        localStorage.setItem(STORAGE_ID, JSON.stringify(posts));
      },

      delete: function (post) {
        var deferred = $q.defer();

        store.posts.splice(store.posts.indexOf(post), 1);

        store._saveToLocalStorage(store.posts);
        deferred.resolve(store.posts);

        return deferred.promise;
      },

      get: function () {
        var deferred = $q.defer();

        angular.copy(store._getFromLocalStorage(), store.posts);
        deferred.resolve(store.posts);

        return deferred.promise;
      },

      insert: function (post) {
        var deferred = $q.defer();

        store.posts.push(post);

        store._saveToLocalStorage(store.posts);
        deferred.resolve(store.posts);

        return deferred.promise;
      },

      put: function (post, index) {
        var deferred = $q.defer();

        store.posts[index] = post;

        store._saveToLocalStorage(store.posts);
        deferred.resolve(store.posts);

        return deferred.promise;
      }
    };

    return store;
  });