(function() {
	'use strict';

	angular.module('noteApp').config(stateConfig);

	stateConfig.$inject = [ '$stateProvider' ];

	function stateConfig($stateProvider) {
		$stateProvider.state('app', {
			abstract : true,
			views : {
				'navbar@' : {
					templateUrl : 'app/layouts/navbar/navbar.html'
				}
			}
		});
	}
})();
