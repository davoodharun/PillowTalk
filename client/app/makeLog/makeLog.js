angular.module('pillowtalk.makeLog', [
  'pillowtalk.makeLog',
  'pillowtalk.services',
  'ngRoute'
])
.controller('makeLogController', function($scope, Logs){

  $scope.display = 0;
  $scope.getLogsFromUser = function(){
    Logs.getAllLogsFromUser().then(function(response){
      $scope.display = response.data
    })
  }

  $scope.postLog = function(){
    var data = {
    user: $scope.user,
    title: $scope.title,
    text: $scope.logtext,
    tags: $scope.tags
    }
    console.log('getting into getLogs')
    Logs.addLog(data).then(function(response){
      console.log(response)

    })
    $scope.user = '';
    $scope.title = '';
    $scope.logtext = '';
    $scope.tags = '';
  }

});