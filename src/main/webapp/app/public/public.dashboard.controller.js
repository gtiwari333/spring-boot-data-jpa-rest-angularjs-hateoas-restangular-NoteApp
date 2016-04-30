(function () {
    'use strict';

    angular
        .module('noteApp')
        .controller('PublicDashboardController', PublicDashboardController);

    PublicDashboardController.$inject = [ ];

    function PublicDashboardController( ) {
        var vm = this;

        vm.description = "Public";
    }
})();
