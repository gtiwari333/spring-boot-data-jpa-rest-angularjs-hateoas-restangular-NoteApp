(function () {
    'use strict';

    angular
        .module('noteApp')
        .controller('NoteDashboardController', NoteDashboardController);

    NoteDashboardController.$inject = [ ];

    function NoteDashboardController( ) {
        var vm = this;

        vm.description = "Note";
    }
})();
