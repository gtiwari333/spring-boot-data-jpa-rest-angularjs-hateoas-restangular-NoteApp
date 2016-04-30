(function () {
    'use strict';

    angular
        .module('noteApp', ['ui.router'])
        .run(main);

    main.$inject = ['$state'];

    function main($state) {
        console.log("running ...")

        console.log($state.get());

        $state.go('public-dashboard');
    }
})();
