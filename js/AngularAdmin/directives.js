'use strict';

angular.module('angularAdmin.directives', [])
    .directive('turnpage', function(){
        return {
            restrict: 'AE',
            replace: true,
            transclude: true,
            template: '<button>pre page</button>' + '<button>next page</button>'
        };
    })
    .directive('sourceEdit', function(){
        return {
            restrict: 'AE',
            replace: true,
            transclude: true,
            template: ''
        };
    });

