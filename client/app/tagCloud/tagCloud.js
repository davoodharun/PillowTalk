angular.module('pillowtalk.tagCloud', [
  'pillowtalk.tagCloud',
  'pillowtalk.services',
  'ngRoute'
])
.controller('tagCloudController', function($scope, Tags){

  $scope.display = 0;
  $scope.getTags = function(){
    Tags.getTags().then(function(response){
      var tagArray = response.data;
      var temp = [];
      for(var i = 0;i<tagArray.length;i++){
        temp.push(tagArray[i])
      }
      $scope.display = temp;
    })
  }


  // $scope.postLog = function(){
  //   var data = {
  //   user: $scope.user,
  //   title: $scope.title,
  //   text: $scope.logtext,
  //   tags: $scope.tags
  //   }
  //   console.log('getting into getLogs')
  //   Logs.addLog(data).then(function(response){
  //     console.log(response)

  //   })
  // }

});