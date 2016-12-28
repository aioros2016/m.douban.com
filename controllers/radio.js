angular.module('radioMod', [])
.controller('radioController', function ($scope, $http){
	var input = document.getElementById('input-wapper');
	$scope.storage = window.localStorage;
	$scope.list = $scope.storage.getItem("radioList");
	$scope.list = JSON.parse($scope.list);
	$scope.serialNum = 3;
	$scope.count = 140;
	$scope.isActive = false;
	$scope.warning = false;
	if($scope.list == null){
		$http.get('json/radio1.json').success(function(res){
			$scope.list = res.radio1;
		}).error(function(){
			alert("载入失败");
		});
	};
	
	$scope.sendRadio = function(){
		var oDate = new Date();
		if(input.innerHTML == '' || input.innerHTML.length > 140) return;
		$scope.serialNum++;
		$scope.json = {
			"id": $scope.serialNum,
			"face": "up95805238-16",
	    		"author": "豆瓣",
	    		"time": oDate.getTime(),
	    		"title": "",
	    		"content": input.innerHTML,
	    		"like": 0,
	    		"comment": 0,
	    		"retweet": 0
		};
		$scope.list.unshift($scope.json);
		$scope.list = angular.toJson($scope.list);
		$scope.storage.setItem("radioList", $scope.list);
		$scope.list = $scope.storage.getItem("radioList");
		$scope.list = JSON.parse($scope.list);
		input.innerHTML = '';
		$scope.closeRadio();
		$scope.count = 140;
		$scope.isActive = false;
	};
	
	$scope.counter = function(e){
		$scope.count = 140 - input.innerHTML.length;
		console.log(input.innerHTML.length);
        if(input.innerHTML == '' || input.innerHTML.length > 140){
        		$scope.isActive = false;
        }
        else{
        		$scope.isActive = true;
        };
        if(input.innerHTML.length > 140){
        		$scope.warning = true;
        }
        else{
        		$scope.warning = false;
        }
    };
});