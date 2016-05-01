(function () {
    'use strict';

    angular
        .module('noteApp')
        .controller('NoteController', NoteController);

    NoteController.$inject = ['Restangular', '$state', '$stateParams'];

    function NoteController(Restangular, $state, $stateParams) {
        var vm = this;

        var personId = $stateParams.personId;
        var NoteService;
        if(personId == undefined){
            NoteService = Restangular.all('note');
        } else {
            NoteService = Restangular.one('person', personId).all("notes");
        }

        vm.message = $stateParams.message;
        vm.description = "Note";

        var refreshList = function () {
            NoteService.getList().then(function (notes) {
                vm.notes = notes;
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
