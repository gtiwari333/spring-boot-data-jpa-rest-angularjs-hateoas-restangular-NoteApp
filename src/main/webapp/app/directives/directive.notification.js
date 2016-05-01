(function () {
    'use strict';

    angular
        .module('noteApp')
        .directive('notification', notification);

    function notification($timeout) {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                message: '='
            },
            templateUrl: 'app/directives/directive.notification.html',
            link: function (scope, element, attrs) {
                $timeout(function () {
                    element.remove();
                    scope.message = {};
                }, 4000);
            }
        }
    }
})();
