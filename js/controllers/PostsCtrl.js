angular.module('spacebook')
  .controller('PostsCtrl', [
    '$scope', 
    '$routeParams',
    'postStorage',
    function($scope, $routeParams, postStorage){
      $scope.posts = postStorage.posts;

      $scope.addPost = function (post) {
        var newPost = {
          text: $scope.text,
          user: $scope.user,
          comments: []
        }

        if (!newPost.text) {
          return;
        }

        postStorage.insertPost(newPost);

        $scope.text = '';
        $scope.user = '';
      };

      $scope.removePost = function (post) {
        postStorage.delete(post);
      }
  }])