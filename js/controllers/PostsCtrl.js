angular.module('spacebook')
  .controller('PostsCtrl', [
    '$scope', 
    '$routeParams',
    'store',
    function($scope, $routeParams, store){
      var posts = $scope.posts = store.posts;

      $scope.addPost = function (post) {
        var newPost = {
          text: $scope.text,
          user: $scope.user
        }

        if (!newPost.text) {
          return;
        }

        store.insert(newPost)
          .then(function success() {
            $scope.text = '';
            $scope.user = '';
          });
      }
  }])