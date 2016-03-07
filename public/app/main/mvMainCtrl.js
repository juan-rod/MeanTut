angular.module('mean').controller('mainCtrl',function($scope){
	$scope.courses=[
		{name: 'C# for Sociopaths', featured: true, published: new Date('1/1/2016')},
		{name: 'C# for Non-Sociopaths', featured: true, published: new Date('2/15/2016')},
		{name: 'Super Duper Expert C#', featured: false, published: new Date('5/3/2016')},
		{name: 'Visual Basic For Visual Basic Developers', featured: true, published: new Date('4/2/2016')},
		{name: 'Pedantic C++', featured: true, published: new Date('10/6/2016')},
		{name: 'JavaScript for People over 20', featured: true, published: new Date('4/28/2016')},
		{name: 'Maintainable Code for Cowards', featured: true, published: new Date('4/22/2016')},
		{name: 'A Survival Guide to Code Reviews', featured: false, published: new Date('3/12/2016')},
		{name: 'How to Job Hunt Without Alerting Your Boss', featured: true, published: new Date('6/11/2016')},
		{name: 'How to Keep Your Soul and go into Management', featured: true, published: new Date('8/18/2016')}
	]
})