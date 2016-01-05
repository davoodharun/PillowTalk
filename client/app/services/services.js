angular.module('pillowtalk.services', [])
.factory('Logs', function ($http){
  var getAllLogsFromUser = function (){
    console.log('get for logs')
    return $http({
      method: 'GET',
      url: 'api/logs'
    })
  }

  var addLog = function (data){
    console.log(data)
    return $http({
      method:'POST',
      url: '/api/logs',
      data: data
    }).then(function (resp){
      console.log(resp)
    })

  }
  return {
    getAllLogsFromUser: getAllLogsFromUser,
    addLog: addLog
  }
})