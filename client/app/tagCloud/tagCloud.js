angular.module('pillowtalk.tagCloud', [
  'pillowtalk.tagCloud',
  'pillowtalk.services',
  'angular-jqcloud',
  'ngRoute'
])
.controller('tagCloudController', function($scope, Tags){

  $scope.display = 0;
  $scope.words = [];
  $scope.getTags = function(){
    Tags.getTags().then(function(response){
      var tagArray = response.data;
      var temp = [];
      for(var i = 0;i<tagArray.length;i++){
        temp.push(tagArray[i])
      }
      $scope.display = temp;

      for(var i = 0;i<temp.length;i++){
        var tempObj = {}
        tempObj.text = temp[i]['tagname'];
        tempObj.link = '#/tagsByLogs/'+ temp[i]['id'] + '-' + temp[i]['tagname'];
        tempObj.weight = Math.floor(Math.random() * 15) + 3
        $scope.words.push(tempObj);
      }

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