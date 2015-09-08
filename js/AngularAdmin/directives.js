'use strict';

angular.module('angularAdmin.directives', [])
    .directive('sourceedit', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                element.on('click', function(){
                    console.log('edit click');
                });
            }
        };
    })
    .directive('sourcepass', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                element.on('click', function(){
                    console.log('pass');
                });
            }
        };
    })
    .directive('sourceonline', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                element.on('click', function(){
                    console.log('online');
                });
            }
        };
    })
    .directive('sourcerefuse', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                element.on('click', function(){
                    console.log('Refuse');
                });
            }
        };
    })
    .directive('sourcedelete', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                element.on('click', function(){
                    console.log('Delete');
                });
            }
        };
    });
