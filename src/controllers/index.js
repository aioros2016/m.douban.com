if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
};

document.body.addEventListener('touchstart',function(){},false);

angular.module('singlePage', ["ngRoute","mainMod","movieMod","bookMod","radioMod","teamMod"])
.config(['$routeProvider', function ($routeProvider){
	$routeProvider.when(
		'/main',{
			templateUrl: './views/main.html',
			controller: 'mainController'
		}
	).when(
		'/movie',{
			templateUrl: './views/movie.html',
			controller: 'movieController'
		}
	).when(
		'/book',{
			templateUrl: './views/book.html',
			controller: 'bookController'
		}
	).when(
		'/radio',{
			templateUrl: './views/radio.html',
			controller: 'radioController'
		}
	).when(
		'/team',{
			templateUrl: './views/team.html',
			controller: 'teamController'
		}
	).
	otherwise({
        redirectTo: '/main'
    });
}]).controller('indexController', function($scope){
	$scope.showPop = true;
	$scope.iconSearch = {
		"background": "url(../../img/search2.png) no-repeat 50%",
		"background-color": "#f3f3f3",
		"background-size": "auto 70%"
	};
	$scope.rnd = function(n, m){
		return parseInt(Math.random() * (m - n) + n);
	};
	$scope.rndColor = {
        "color" : "rgb("+ $scope.rnd(0, 255) +","+ $scope.rnd(0, 255) +","+ $scope.rnd(0, 255) +")"
    };
    $scope.quickMenu = document.querySelectorAll('.menu-box a');
    for(var i=0; i<$scope.quickMenu.length; i++){
    		$scope.r = $scope.rnd(0,255);
    		$scope.g = $scope.rnd(0,255);
    		$scope.b = $scope.rnd(0,255);
    		$scope.quickMenu[i].style.color = "rgb("+ $scope.r +","+ $scope.g +","+ $scope.b +")";
    };
}).directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit('ngRepeatFinished');
                });
            };
        }
    };
});