angular.module('pillowtalk', [
  'pillowtalk.makeLog',
  'pillowtalk.services',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider){
  $routeProvider
  .when('/makeLog', {
    templateUrl: 'app/makeLog/makeLog.html',
    controller:'makeLogController'
  });


});