'use strict';

angular.module('angularAdmin', [
        'ui.router',
        'angularAdmin.filters',
        'angularAdmin.services',
        'angularAdmin.directives',
        'angularAdmin.controllers'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/')
        
        $stateProvider
            .state('sources', {
                url: '/',
                views: {
                    'main@': {
                        templateUrl: 'partials/source-list.html',
                        controller: 'SourceListController'
                    }
                }
            })
    }]);
