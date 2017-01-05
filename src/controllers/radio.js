angular.module('radioMod', [])
.controller('radioController', ['$scope', '$http', '$filter', function ($scope, $http, $filter){
	$scope.input = document.getElementById('input-wapper');
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
		console.log($scope.bReady);
		var oDate = new Date();
		if($scope.count == 140 || $scope.input.innerHTML.length > 140) return;
		if($scope.txt.length == 0){
			$scope.$emit('fromRadio', '输入不能全为空');
			return;
		}
		$scope.serialNum++;
		$scope.json = {
			"id": $scope.serialNum,
			"face": "up95805238-16",
	    		"author": "豆瓣",
	    		"time": oDate.getTime(),
	    		"title": "",
	    		"content": $scope.input.innerHTML,
	    		"like": 0,
	    		"comment": 0,
	    		"retweet": 0
		};
		$scope.list.unshift($scope.json);
		$scope.list = angular.toJson($scope.list);
		$scope.storage.setItem("radioList", $scope.list);
		$scope.list = $scope.storage.getItem("radioList");
		$scope.list = JSON.parse($scope.list);
		$scope.closeRadio();
		$scope.input.innerHTML = '';
		$scope.count = 140;
		$scope.isActive = false;
	};
	
	$scope.counter = function(e){
		$scope.txt = $scope.input.innerHTML;
		$scope.txt = $filter('filterInput')($scope.txt);
		$scope.count = 140 - $scope.txt.length;
		console.log($scope.count);
		while($scope.txt.lastIndexOf(" ") >= 0){
			$scope.txt = $scope.txt.replace(" ","");
		}
		console.log($scope.txt.length);
        if($scope.count == 140 || $scope.txt.length > 140){
        		$scope.isActive = false;
        }
        else{
        		$scope.isActive = true;
        };
        if($scope.txt.length > 140){
        		$scope.warning = true;
        }
        else{
        		$scope.warning = false;
        };
    };
    $scope.addClass = function(){
    		var aDiv = $scope.input.getElementsByTagName('div');
    		for(var i=0; i<aDiv.length; i++){
    			aDiv[i].className = "needsclick";
    		}
    }
}]);