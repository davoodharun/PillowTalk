angular.module('pillowtalk.showLog', [
  'pillowtalk.showLog',
  'pillowtalk.services',
  'ngRoute'
])
.controller('showLogController', function($scope, $routeParams, ShowLog){
    $scope.tagid = $routeParams.tagId.split('-')[0];
    $scope.tagname = $routeParams.tagId.split('-')[1];
    $scope.logs = [];
    $scope.users = [];
    $scope.getTags = function(){
      ShowLog.showLog($scope.tagid).then(function(response){
        var logArray = response.data;
        var temp = [];
        for(var i = 0;i<logArray.length;i++){
          temp.push(logArray[i])
        }
        $scope.logs = temp;

        for(var i = 0; i<$scope.logs.length;i++){
          ShowLog.getUsername($scope.logs[i]['userid']).then(function(response){
            var tempusers = [];
            tempusers.push(response.data[0].username)
            $scope.users = tempusers;
          })

        }

      })


    }




  // $scope.display = 0;
  // $scope.getTags = function(){
  //   Tags.getTags().then(function(response){
  //     var tagArray = response.data;
  //     var temp = [];
  //     for(var i = 0;i<tagArray.length;i++){
  //       temp.push(tagArray[i])
  //     }
  //     $scope.display = temp;
  //   })
  // }

  // $scope.clickTag = function(){
  //   console.log('clicked el')
  // }
});