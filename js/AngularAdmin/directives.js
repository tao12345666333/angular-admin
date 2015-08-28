'use strict';

angular.module('angularAdmin.directives', [])
    .directive('turnpage', function(){
        return {
            restrict: 'E',
            replace: ture,
            template: '<h1>turn page</h1>'
        }
    });
