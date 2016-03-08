angular.module('mean').controller('mainCtrl',function($scope, mvCourse){
	$scope.courses= mvCourse.query();
})