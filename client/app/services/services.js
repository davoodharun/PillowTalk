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

.factory('Tags', function($http){
  var getTags = function (){
    return $http({
      method: 'GET',
      url: 'api/tag'
    })
  }

  return {
    getTags: getTags
  }
})
.factory('ShowLog', function($http){
  var showLog = function (tagid){
    console.log(tagid)
    return $http({
      method: 'GET',
      url: 'api/tagsByLogs/' + tagid
    })
  }

  return {
    showLog: showLog
  }
})