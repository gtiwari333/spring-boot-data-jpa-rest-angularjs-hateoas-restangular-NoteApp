(function () {
    'use strict';

    angular
        .module('noteApp', ['ui.router' , 'restangular'])
        .run(main);

    main.$inject = ['$state'];

    function main($state) {
        console.log("running ...")

        console.log($state.get());

        $state.go('public-dashboard');
    }
})();
