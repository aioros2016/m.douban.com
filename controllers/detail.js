angular.module('detailMod', [])
.controller('detailController', function ($scope, $http, $routeParams){
	$scope.storage = window.localStorage;
	$scope.articleId = $routeParams.articleId;
	$scope.detail = [];
	$scope.s = $scope.storage.getItem("likes"+$scope.articleId);
	$http.get('json/detail'+ $scope.articleId +'.json').success(function(res){
		$scope.detail = res.data;
		if(!$scope.s){
			$scope.storage.setItem("likes"+$scope.articleId, $scope.detail.likes);
			$scope.s = $scope.detail.likes;
		}
		window._bd_share_main.init();
	});
	
	$scope.iLike=function (){
		$scope.parseInt = parseInt;
		$scope.s++;
		$scope.storage.setItem("likes"+$scope.articleId, parseInt($scope.s));
	};
}).directive('showfull', function (){
	return {
		restrict: 'A',
		replace: true,
		template:
		'<div class="content-box" style="height: {{showfull?\'auto\':\'60em\'}};">\
			<div class="text" ng-bind-html="detail.content|showAsHtml"></div>\
			<div class="likes " ng-click="iLike()">{{s}}</div>\
		</div>'
	};
});