var app = angular.module("mean", ['ngRoute','ngResource']);

app.config(['$routeProvider','$locationProvider',
  function($routeProvider,$locationProvider){
    var routeRoleChecks = {
      admin: {
          auth: function(mvAuth){
            return mvAuth.authorizeCurrentUserForRoute('admin')
          }
        }
    }

  	$locationProvider.html5Mode(true);

    $routeProvider
     .when('/',{
        templateUrl : "/partials/main/main",
        controller : "mainCtrl"
      })
     .when('/signup',{
        templateUrl : "/partials/account/signup",
        controller : "mvSignupCntrl"
      })
     .when('/admin/users',{
        templateUrl : "/partials/admin/user-list",
        controller : "mvUserListCtrl",
        resolve: routeRoleChecks.admin
      })
     .otherwise({
        redirectTo: '/'
      });
   
  }
  ]);

app.run(function($rootScope, $location){
  $rootScope.$on('$routeChangeError', function(evt, current, previous,rejection){
    if(rejection === 'not authorized'){
      $location.path('/');
    }
  })
})

