(function () {
    'use strict';

    angular
        .module('noteApp')
        .controller('NavBarController', NavBarController);

    NavBarController.$inject = ['Restangular'];

    function NavBarController(Restangular) {
        var vm = this;

        var PersonService = Restangular.all('person');

        PersonService.customGET("search/findTop3PosterBasedOnPostViewCount").then(function (resp) {
            vm.topFiveViewed = resp;
        });
        PersonService.customGET("search/findTop3PosterBasedOnPostCount").then(function (resp) {
            vm.topFivePersonBasedOnPostCount = resp;
        });
    }
})();
