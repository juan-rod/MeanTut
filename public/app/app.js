var app = angular.module("mean", ['ngRoute','ngResource']);






app.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider){
  	$locationProvider.html5Mode(true);
    $routeProvider
     .when('/',{
        templateUrl : "/partials/main",
        controller : "mainCtrl"
      })
     .otherwise({
        redirectTo: '/'
      });
   
  }
  ]);

app.controller('mainCtrl',function($scope){
	$scope.myVar = "Hello Angular";
})