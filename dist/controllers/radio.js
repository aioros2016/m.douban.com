angular.module('radioMod', [])
.controller('radioController', function ($scope, $http){
	$http.get('json/radio1.json').success(function(res){
		$scope.list = res.radio1;
	}).error(function(){
		alert("载入失败");
	});
});