(function() {

	window.app = angular.module('appPublic', ['ngRoute', 'ngCookies', 'ngAnimate']);
	
	window.app.config(function($routeProvider, $locationProvider) {
		
		$routeProvider
			.when('/', {
				templateUrl: '/pages/home.html'
			});

		$locationProvider.html5Mode(true);

	});

})();