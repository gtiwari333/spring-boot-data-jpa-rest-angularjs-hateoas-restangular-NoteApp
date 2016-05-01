(function () {
    'use strict';

    angular
        .module('noteApp')
        .controller('PersonDetailController', PersonDetailController);

    PersonDetailController.$inject = ['Restangular', '$state', '$stateParams', 'AppConstants'];

    function PersonDetailController(Restangular, $state, $stateParams, AppConstants) {
        var vm = this;
        vm.mode = $state.$current.data.mode;
        vm.person = {};
        vm.editable = false;
        vm.message = {};

        var personId = $stateParams.id;
        var PersonService = Restangular.all('person');

        vm.goBack = function (param) {
            $state.go("^", param);
        };

        vm.clear = function () {
            vm.person.firstName = "";
            vm.person.midName = "";
            vm.person.lastName = "";
            vm.person.email = "";
            vm.person.firstName = "";
        };

        vm.save = function () {

            console.log(" Saving ... ");

            PersonService.post(vm.person).then(function () {
                vm.goBack({message: {body: "Saved !", type: "success"}});

            }, function (resp) {
                vm.message = {body: "Error on saving ! " + resp, type: "error"};
            });


        };

        var init = function () {

            console.log(" Current mode: " + vm.mode);

            /* field enable/disable control according to mode */
            if (vm.mode == AppConstants.VIEW) {
                vm.editable = false;
            } else {
                vm.editable = true;
            }

            /* initialize person entity */
            if (vm.mode == AppConstants.CREATE) {
                vm.person = {};
            } else {

                var person_ = PersonService.get(personId).$object;
                if (vm.mode == AppConstants.DUPLICATE) {
                    vm.person = angular.copy(person_);
                    vm.person.id = "";
                } else {
                    vm.person = person_;
                }

            }
        }


        init();

    }
})();
