(function() {
	'use strict';

	angular.module('noteApp').config(stateConfig);

	stateConfig.$inject = [ '$stateProvider' ];

	function stateConfig($stateProvider) {
		$stateProvider.state('home', {
			parent: 'app',
			url: '/',
			data: {
				pageTitle: 'Home Page'
			},
			views: {
				'content@': {
					templateUrl: 'app/home/home.html'
				}
			}
		});
	}
})();
