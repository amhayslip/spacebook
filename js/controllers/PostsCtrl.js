angular.module('spacebook')
  .controller('PostsCtrl', [
    '$scope', 
    '$routeParams',
    'postStorage',
    function($scope, $routeParams, postStorage){
      var posts = $scope.posts = postStorage.posts;

      $scope.addPost = function (post) {
        var newPost = {
          text: $scope.text,
          user: $scope.user
        }

        if (!newPost.text) {
          return;
        }

        postStorage.insert(newPost)
      }
  }])