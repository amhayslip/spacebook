angular.module('spacebook')
  .factory('postStorage', function () {
    var STORAGE_ID = 'spaceface';

    var store = {
      posts: [],

      _saveToLocalStorage: function (posts) {
        localStorage.setItem(STORAGE_ID, JSON.stringify(posts));
      },

      insert: function (post) {
        store.posts.push(post);

        store._saveToLocalStorage(store.posts);
      }
    };

    return store;
  });