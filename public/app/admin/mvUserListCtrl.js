angular.module('mean').controller('mvUserListCtrl', function($scope, mvUser){
	$scope.users = mvUser.query();
})