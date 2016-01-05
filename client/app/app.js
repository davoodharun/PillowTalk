angular.module('pillowtalk', ['ngRoute', 'pillowtalk.makeLog'])
.config(function ($routeProvider, $httpProvider){
  $routeProvider
  .when('/makeLog', {
    templateUrl: 'app/makeLog/makeLog.html',
    controller:'makeLogController'
  });


});