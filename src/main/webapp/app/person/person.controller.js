(function () {
    'use strict';

    angular
        .module('noteApp')
        .controller('PersonController', PersonController);

    PersonController.$inject = ['Restangular', '$state', '$stateParams'];

    function PersonController(Restangular, $state, $stateParams) {
        var vm = this;
        var PersonService = Restangular.all('person');

        vm.message = $stateParams.message;
        vm.description = "Person";

        var refreshList = function () {
            PersonService.getList().then(function (persons) {
                vm.persons = persons;
            });
        }

        vm.remove = function (person) {
            var personId = person.id;
            person.remove().then(function () {

                angular.forEach(vm.persons, function (n, i) {
                    if (n.id == personId) {
                        vm.persons.splice(i, 1);
                        vm.message = {body: "Removed ! !", type: "success"};
                        return;
                    }
                });

            }, function (resp) {
                vm.message = {body: "Error when deleting " + personId, type: "error"};
            });

        }

        refreshList();
    }
})();
