(function () {
    'use strict';

    angular
        .module('noteApp')
        .controller('PublicController', PublicController);

    PublicController.$inject = ['Restangular'];

    function PublicController(Restangular) {
        var vm = this;

        vm.description = "Public";

        var NoteService = Restangular.all('note');

        NoteService.customGET("search/findTop6ByOrderByViewCountDesc").then(function (resp) {
            vm.topFiveViewed = resp;
        });
        NoteService.customGET("search/findTop6ByOrderByIdDesc").then(function (resp) {
            vm.topFive = resp;
        });
    }
})();
