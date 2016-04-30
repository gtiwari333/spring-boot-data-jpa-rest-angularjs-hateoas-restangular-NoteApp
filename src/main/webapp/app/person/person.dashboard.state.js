(function () {
    'reader strict';

    angular.module('noteApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];


    function stateConfig($stateProvider) {
        $stateProvider.state('person-dashboard', {

            parent: 'dashboard',
            url: "/person-dashboard",
            data: {},
            views: {
                'content@': {
                    templateUrl: 'app/person/person.dashboard.html',
                    controller: 'PersonDashboardController',
                    controllerAs: 'vm'
                }
            }

        });


    }


})();
