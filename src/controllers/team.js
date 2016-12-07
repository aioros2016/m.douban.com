angular.module('teamMod', [])
.controller('teamController', function ($scope, $http){
	$http.get('json/team1.json').success(function(res){
		$scope.arr = res;
	}).error(function(){
		alert("载入失败");
	});
	$scope.getDateDiff = function(dateTimeStamp){
		var minute = 1000 * 60;
		var hour = minute * 60;
		var day = hour * 24;
		var halfamonth = day * 15;
		var month = day * 30;
		var now = new Date().getTime();
		var diffValue = now - dateTimeStamp;
		if(diffValue < 0){return;}
		var monthC = diffValue/month;
		var weekC = diffValue/(7*day);
		var dayC = diffValue/day;
		var hourC = diffValue/hour;
		var minC = diffValue/minute;
		if(monthC>=1){
			result="" + parseInt(monthC) + "月前更新：";
		}
		else if(weekC>=1){
			result="" + parseInt(weekC) + "周前更新：";
		}
		else if(dayC>=1){
			result=""+ parseInt(dayC) +"天前更新：";
		}
		else if(hourC>=1){
			result=""+ parseInt(hourC) +"小时前更新：";
		}
		else if(minC>=1){
			result=""+ parseInt(minC) +"分钟前更新：";
		}else{
			result="刚刚更新：";
		};
		return result;
	};
});