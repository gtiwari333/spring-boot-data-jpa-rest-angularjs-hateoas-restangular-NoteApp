(function () {
    'use strict';

    angular
        .module('noteApp')
        .controller('PublicController', PublicController);

    PublicController.$inject = [ ];

    function PublicController( ) {
        var vm = this;

        vm.description = "Public";
    }
})();
