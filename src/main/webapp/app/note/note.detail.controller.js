(function () {
    'use strict';

    angular
        .module('noteApp')
        .controller('NoteDetailController', NoteDetailController);

    NoteDetailController.$inject = ['Restangular', '$state', '$stateParams', 'AppConstants'];

    function NoteDetailController(Restangular, $state, $stateParams, AppConstants) {
        var vm = this;
        vm.mode = $state.$current.data.mode;
        vm.note = {};
        vm.editable = false;
        vm.message = {};

        var noteId = $stateParams.id;
        var personId = $stateParams.personId;
        var NoteService = Restangular.all('note');

        vm.goBack = function (param) {
            $state.go("^", param);
        };

        vm.clear = function () {
            vm.note.title = "";
            vm.note.url = "";
            vm.note.description = "";
            vm.note.completedDate = "";
        };

        vm.save = function () {

            console.log(" Saving ... " + personId);

            Restangular.one("person", personId).get().then(function (person_) {

                vm.note.person = person_._links.self.href; //hateoas :)
                vm.note.status = "DRAFT";

                NoteService.post(vm.note).then(function () {
                    vm.goBack({message: {body: "Saved !", type: "success"}});

                }, function (resp) {
                    vm.message = {body: "Error on saving ! ", type: "danger", resp: resp};
                });

            }, function (resp) {
                vm.message = {body: "Error on saving ! ", type: "danger", resp: resp};
            });


            //Restangular.one("person", personId).post("note", vm.note);


        };

        var init = function () {

            console.log(" Current mode: " + vm.mode);

            /* field enable/disable control according to mode */
            if (vm.mode == AppConstants.VIEW) {
                vm.editable = false;
            } else {
                vm.editable = true;
            }

            /* initialize note entity */
            if (vm.mode == AppConstants.CREATE) {
                vm.note = {};
            } else {

                Restangular.one("note", noteId).get().then(function (note_) {
                    if (vm.mode == AppConstants.DUPLICATE) {
                        vm.note = angular.copy(note_);
                        vm.note.id = "";
                    } else {
                        vm.note = note_;
                    }

                    console.log(vm.note);
                });
            }
        }


        init();

    }
})();
