angular.module('spacebook')
  .controller('PostCtrl', [
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

        $scope.saving = true;
        store.insert(newPost)
          .then(function success() {
            $scope.newPost = '';
          })
          .finally(function () {
            $scope.saving = false;
          });
      }

  }])