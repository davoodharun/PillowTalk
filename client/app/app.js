angular.module('pillowtalk', [
  'pillowtalk.makeLog',
  'pillowtalk.services',
  'pillowtalk.tagCloud',
  'pillowtalk.showLog',
  'angular-jqcloud',
  'ngTagsInput',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider){
  $routeProvider
  .when('/makeLog', {
    templateUrl: 'app/makeLog/makeLog.html',
    controller:'makeLogController'
  })
  .when('/tagCloud', {
    templateUrl: 'app/tagCloud/tagCloud.html',
    controller:'tagCloudController'
  })
  .when('/tagsByLogs/:tagId', {
      templateUrl: 'app/showLog/showLog.html',
      controller: 'showLogController'
  })
  .when('/', {
      templateUrl: 'app/home.html',
      controller: ''
  });


});