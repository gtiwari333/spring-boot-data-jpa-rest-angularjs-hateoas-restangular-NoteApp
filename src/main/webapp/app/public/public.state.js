(function () {
    'reader strict';

    angular.module('noteApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];


    function stateConfig($stateProvider) {
        $stateProvider.state('public', {

            parent: 'entity',
            url: "/public",
            data: {},
            views: {
                'content@': {
                    templateUrl: 'app/public/public.html',
                    controller: 'PublicController',
                    controllerAs: 'vm'
                }
            }

        });


    }


})();
