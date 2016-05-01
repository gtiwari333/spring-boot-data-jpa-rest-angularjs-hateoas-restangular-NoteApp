(function () {
    'reader strict';

    angular.module('noteApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider', 'AppConstants'];


    function stateConfig($stateProvider, AppConstants) {
        $stateProvider
            .state('note', {
                parent: 'entity',
                url: "/note/pid/{personId}",
                data: {
                    mode: AppConstants.VIEW_ALL
                },
                params : {
                    message : {}
                },
                views: {
                    'content@': {
                        templateUrl: 'app/note/note.html',
                        controller: 'NoteController',
                        controllerAs: 'vm'
                    }
                }

            })
            .state('note.detail', {
                parent: 'note',
                url: '/{id}/view',
                data: {
                    mode: AppConstants.VIEW
                },
                params : {
                    message : {}
                },
                views: {
                    'content@': {
                        templateUrl: 'app/note/note.detail.html',
                        controller: 'NoteDetailController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('note.duplicate', {
                parent: 'note',
                url: '/{id}/duplicate',
                data: {
                    mode: AppConstants.DUPLICATE
                },
                params : {
                    message : {}
                },
                views: {
                    'content@': {
                        templateUrl: 'app/note/note.detail.html',
                        controller: 'NoteDetailController',
                        controllerAs: 'vm'
                    }
                }
            })
            .state('note.new', {
                parent: 'note',
                url: '/new',
                data: {
                    mode: AppConstants.CREATE
                },
                params : {
                    message : {}
                },
                views: {
                    'content@': {
                        templateUrl: 'app/note/note.detail.html',
                        controller: 'NoteDetailController',
                        controllerAs: 'vm'

                    }
                }
            })
            .state('note.edit', {
                parent: 'note',
                url: '/{id}/edit',
                data: {
                    mode: AppConstants.EDIT
                },
                params : {
                    message : {}
                },
                views: {
                    'content@': {
                        templateUrl: 'app/note/note.detail.html',
                        controller: 'NoteDetailController',
                        controllerAs: 'vm'

                    }
                }
            });


    }


})();
