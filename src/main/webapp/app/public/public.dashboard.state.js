(function () {
    'reader strict';

    angular.module('noteApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];


    function stateConfig($stateProvider) {
        $stateProvider.state('public-dashboard', {

            parent: 'dashboard',
            url: "/public-dashboard",
            data: {},
            views: {
                'content@': {
                    templateUrl: 'app/public/public.dashboard.html',
                    controller: 'PublicDashboardController',
                    controllerAs: 'vm'
                }
            }

        });


    }


})();
