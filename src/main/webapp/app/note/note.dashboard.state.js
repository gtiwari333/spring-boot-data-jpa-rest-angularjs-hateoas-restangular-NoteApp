(function () {
    'reader strict';

    angular.module('noteApp')
        .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];


    function stateConfig($stateProvider) {
        $stateProvider.state('note-dashboard', {

            parent: 'dashboard',
            url: "/note-dashboard",
            data: {},
            views: {
                'content@': {
                    templateUrl: 'app/note/note.dashboard.html',
                    controller: 'NoteDashboardController',
                    controllerAs: 'vm'
                }
            }

        });


    }


})();
