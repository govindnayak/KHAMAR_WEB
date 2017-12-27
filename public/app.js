var app = angular.module("myApp", ['ngResource', 'ngRoute']);

app.config(function($routeProvider) {
  $routeProvider

  .when('/login', {
    templateUrl: 'views/login.html',
    controller: 'loginController'
  })
  .when('/topperform', {
    templateUrl: 'views/topperform.html',
    controller: 'topController'
  })
  .when('/accomplishment', {
    templateUrl: 'views/accomplishment.html',
    controller: 'accomplishController'
  })
  .when('/dashboard', {
    templateUrl: 'views/dashboard.html',
    controller: 'dashController'
  })
  .otherwise({
    redirectTo: '/login'
  })
});
