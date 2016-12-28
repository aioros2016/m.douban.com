angular.module('movieMod', [])
.controller('movieController', ['$scope', '$http', function($scope, $http) {
	$http.get('json/movie1.json').success(function(res){
		$scope.json = res;
		$scope.$on('ngRepeatFinished', function(ngRepeatFinishedEvent) {
			$scope.swiper = new Swiper('.rank1', {
		        slidesPerView: 'auto',
		        freeMode: true,
		        observer: true,
		        observeParents: true,
		        resistanceRatio:0
			});
		    $scope.swiper2 = new Swiper('.rank2', {
		        slidesPerView: 'auto',
		        freeMode: true,
		        observer: true,
		        observeParents: true,
		        resistanceRatio:0
		    });
		    $scope.swiper3 = new Swiper('.rank3', {
		        slidesPerView: 'auto',
		        freeMode: true,
		        observer: true,
		        observeParents: true,
		        resistanceRatio:0
		    });
		    $scope.swiper4 = new Swiper('.find-movie', {
		        direction: 'horizontal',
		        slidesPerView: 'auto',
		        freeMode: true,
		        observer: true,
		        observeParents: true,
		        resistanceRatio:0
		    });
		});
	}).error(function(){
		alert("载入失败");
	});
}]);
