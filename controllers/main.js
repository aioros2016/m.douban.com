angular.module('mainMod', [])
.controller('mainController', function ($scope, $http, $location, $anchorScroll){
	$scope.page = 1;
	$scope.pageLen = 3;
	$scope.arr = [];
	$scope.loadPage = function(){
		$scope.page++;
		$scope.getData($scope.page);
		console.log($scope.arr);
	};
	
	$scope.getData = function(page){
		$http.get('json/main'+ page +'.json').success(function(res){
			$scope.list = res.list;
			for(var json in $scope.list){
		        $scope.arr.push($scope.list[json]);
		   };
		}).error(function(){
			alert("载入失败");
		});
	};
	$scope.getData(1);
	$scope.gotop = function() {
		$location.hash('top');
		$anchorScroll();
    };
});