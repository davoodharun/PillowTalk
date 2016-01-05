angular.module('pillowtalk.showLog', [
  'pillowtalk.showLog',
  'pillowtalk.services',
  'ngRoute'
])
.controller('showLogController', function($scope, $routeParams, ShowLog){
  console.log($routeParams)
    $scope.tagid = $routeParams.tagId.split('-')[0];
    $scope.tagname = $routeParams.tagId.split('-')[1];
    $scope.logs = [];
    $scope.getTags = function(){
      ShowLog.showLog($scope.tagid).then(function(response){
        var logArray = response.data;
        var temp = [];
        for(var i = 0;i<logArray.length;i++){
          temp.push(logArray[i])
        }
        $scope.logs= temp;
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