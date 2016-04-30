(function () {
    'use strict';

    angular
        .module('noteApp')
        .controller('PersonDashboardController', PersonDashboardController);

    PersonDashboardController.$inject = ['Restangular'];

    function PersonDashboardController(Restangular) {
        var vm = this;

        vm.description = "Person";

        var PersonService = Restangular.all('person');

        // This will query /accounts and return a promise.
        PersonService.getList().then(function(persons) {
            vm.persons = persons;
        });

        var person = Restangular.one('person', 2);

        vm.thePerson = person;

        //person.active = false;
        //person.firstName = "hello";
        //
        //PersonService.post(person).then(function(resp){
        //   vm.response = resp;
        //});

    }
})();
