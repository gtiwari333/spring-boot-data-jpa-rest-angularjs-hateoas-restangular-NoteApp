(function () {
    'use strict';

    angular
        .module('noteApp')
        .controller('NoteController', NoteController);

    NoteController.$inject = ['Restangular', '$state', '$stateParams'];

    function NoteController(Restangular, $state, $stateParams) {
        var vm = this;

        vm.message = $stateParams.message;
        vm.description = "Note";
        vm.person = {};

        var personId = $stateParams.personId;
        var NoteService;
        if(personId == undefined){
            NoteService = Restangular.all('note');
        } else {
            NoteService = Restangular.one('person', personId).all("notes");
        }

        var refreshList = function () {
            NoteService.getList().then(function (notes) {
                vm.notes = notes;
            });

            /* init person */
            Restangular.one("person", personId).get().then(function (person_) {
                vm.person = person_;
            }, function (resp) {
                vm.message = {body: "Error on retrieving person " + personId, type: "danger", resp: resp};
            });

        }

        vm.remove = function (note) {
            var noteId = note.id;

            Restangular.one('note', noteId).remove().then(function () {

                angular.forEach(vm.notes, function (n, i) {
                    if (n.id == noteId) {
                        vm.notes.splice(i, 1);
                        vm.message = {body: "Removed ! !", type: "success"};
                        return;
                    }
                });

            }, function (resp) {
                vm.message = {body: "Error when deleting " + noteId, type: "danger", resp : resp};
            });

        }

        refreshList();
    }
})();
