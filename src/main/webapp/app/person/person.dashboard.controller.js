(function () {
    'use strict';

    angular
        .module('noteApp')
        .controller('PersonDashboardController', PersonDashboardController);

    PersonDashboardController.$inject = [];

    function PersonDashboardController() {
        var vm = this;

        vm.description = "Person";
    }
})();
