if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
};

document.body.addEventListener('touchstart',function(){},false);

angular.module('singlePage', ["ngRoute","mainMod","movieMod","bookMod","radioMod","teamMod","detailMod"])
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
	).when(
		'/detail/:articleId', {
		    templateUrl: 'views/detail.html',
		    controller: 'detailController'
		}
	).otherwise(
		{
			redirectTo:"/main"
		}
	);
}]).controller('indexController', ['$scope', function($scope){
	$scope.unlockSrc = true;
	$scope.popSearch = true;
	$scope.popRadio = true;
	$scope.unlockSrc = true;
	$scope.closeSearch = function(){
		$scope.unlockSrc = true;
		$scope.popSearch = true;
	};
	$scope.openSearch = function(){
		$scope.unlockSrc = false;
		$scope.popSearch = false;
	}
	$scope.openRadio = function(){
		$scope.unlockSrc = false;
		$scope.popRadio = false;
	}
	$scope.closeRadio = function(){
		$scope.unlockSrc = true;
		$scope.popRadio = true;
	}
	$scope.iconSearch = {
		"background": "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABGdBTUEAALGPC/xhBQAABUlJREFUaAXdWT1oHEcU1unHR8ih0lZEKsWVkSrLkFaVQIYkJ93JBBUp0hm7sdMJbOlAnR0ICDdJk4AL6++wi8PChXAXMG6CMSmSTpZlFy7EmWBLQvm+5c3ydrTam9nblXQeWM2bN/N+vntvZ2afuro+sVZoB0+9Xv9qd3f3W+i4WCgUBg8ODgZB82HbAm8LvC3Qz/v6+h6Wy+V/g5kc/3gDWltbO7u/v38Njpbh17Cnby8Ast7T07M4OTn51lPWabkzoKWlpRKcuQkgP0FzyUn70Yua0HUHuu5OT083j17mP+MEaHl5eRLG70H9OX8TiRJvAOxqtVpdS1zlMZkICCAKKysrt6DvNukYvR/B24BTj9C/RCpt7e3t8Z3p6u3tHURq8n26ANlv0I/hOYMn0iB7AMZ8pVKpCR2Z9x3EORnoQIp9BuIPPJUYpdvg1Uql0v2JiYmdmPlDrEaj0d9sNmcwwR9owF4AMMsA/gNS8D97zmccC4jRQJotQVEEDIx+AG+hv7//5/Hx8fc+hsza9fX1z3d2dm5gPAs7RcNnT1CI1JV2IhULCGBuw9icNgZ6GylVnpqa+tPipxqurq5+jZSsQzgSLYCZwzs1n0ophA4B4gYA/gqjZJTCyF/d3d2XAWbT8LLoAepLgGpA14jRJ9GppN0oQqepkFszun/w6N2MkbmUNRjaYxNQz0DqSL3B+HyaLb2bSk3Dr3MTdAgG4w+SZplGxthjzx+KNmhL8c+JL4rlRoaAeANAmvHQ1G0hq3dGK7VpsbGg+fSFPmmeCx0CQi5fh4C+AWxzN3NRksUascXjwLQSfLpmBq59CAi/yHeWUC3t1mzpcRqKrZpeDJ94X/RqASDemiE1rCQ/8tBU42MhxSZvH6YNi29m3LIPAMkngF684XoD0ELt0mJzQ+uJ8U1PH6JNyl3UM9hheDc7kRZjO+JbK6cCQFBiPsrM+peGOIE+YjvGt0SXAkB4+SKAcC4EN+ZEyZwmbdu2b63MmpSLADKfAK2E85iPsR3xrZVNk3L8JglbsViMXInCiWMgYmx7+WJS7rX2FQfaF3p8nHSMba/ag4lQ5J2BUq8wZwk4xjYvqs7NRCgCCNIXnDVkv9C2/crHRAAIAs+1EHYW1gBOpNm2sW0/9XEkAMQioCU0xhqAxct9KDbHtCEAeqLHregAkFQ0X6jFZ6SgoVj5k2IzrAwBzCZqDH/7WDYpxwIFv+91u8WChmbkSYstVoTChvT7NRw4EiEgnNCLkGkquQGpzihWfqTY0p/hrCrRJ68WAmKtGVG6Y0nPsjpj8TIfio1ZS/FvqCm8s3gthyEgrkSI76IL932MizgX6ixktNSUcoEUSeq0pVTwGKmpsTMZAcQqC6J0FY++Cg0AVCMPUAKGZSydanT+xzTRoWAEEBlSD5snrdoIQD2DA5mlH3VRJ2yENTmx9whgHivbXmTsxQ/hZ5H+Afqq1obI5VoKFlv76GcA6oG27UrHAqIwi/UA8LsNShRnXqy3HE4N6khANCCRyvXfKQKEn/yX8fTImF0qUImAjPIc/+HF3YwbwGNkxBXQrDS1BerQpmBA6F42ivNIwTnw9eGrl/nQPDR/wTNiNgB5Z2bAY2RMI7j7AtbwEnunCGkN7fzTGD/IJtKY15lFAIg9NNuNlDcgDS7h3/rUyy9NHtKvAOQpnieuF812QLUFSIPLmk4L6tQC4g+UBtSpBpQG1KkH5AuqIwD5gOoYQK6gOgqQCyinmwIVnZaWcKMIvgw6DhB/WBsUDu2HQ0ND33Ou41KOTpsm51SVYEZHR3cN/5Pq/wfEdlFyq1lD2AAAAABJRU5ErkJggg==) no-repeat 50%",
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
}]).directive('onFinishRender', ['$timeout', function ($timeout) {
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
}]).filter('showAsHtml', ['$sce', function($sce){
	return function(input){
		return $sce.trustAsHtml(input);
	}
}]);