(function () {
    'reader strict';

    angular.module('noteApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider', 'AppConstants'];


    function stateConfig($stateProvider, AppConstants) {
        $stateProvider
            .state('person', {
                parent: 'entity',
                url: "/person",
                data: {
                    mode: AppConstants.VIEW_ALL
                },
                params : {
                    message : {}
                },
                views: {
                    'content@': {
                        templateUrl: 'app/person/person.html',
                        controller: 'PersonController',
                        controllerAs: 'vm'
                    }
                }

            })
            .state('person.detail', {
                parent: 'person',
                url: '/{id}/view',
                data: {
                    mode: AppConstants.VIEW
                },
                params : {
                    message : {}
                },
                views: {
                    'content@': {
                        templateUrl: 'app/person/person.detail.html',
                        controller: 'PersonDetailController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('person.new', {
                parent: 'person',
                url: '/new',
                data: {
                    mode: AppConstants.CREATE
                },
                params : {
                    message : {}
                },
                views: {
                    'content@': {
                        templateUrl: 'app/person/person.detail.html',
                        controller: 'PersonDetailController',
                        controllerAs: 'vm'

                    }
                }
            })
            .state('person.edit', {
                parent: 'person',
                url: '/{id}/edit',
                data: {
                    mode: AppConstants.EDIT
                },
                params : {
                    message : {}
                },
                views: {
                    'content@': {
                        templateUrl: 'app/person/person.detail.html',
                        controller: 'PersonDetailController',
                        controllerAs: 'vm'

                    }
                }
            });


    }


})();
