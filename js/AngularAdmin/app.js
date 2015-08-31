'use strict';

angular.module('angularAdmin', [
        'ui.router',
        'angularAdmin.filters',
        'angularAdmin.services',
        'angularAdmin.directives',
        'angularAdmin.controllers'
    ])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
        $urlRouterProvider.otherwise('/source');
        
        $stateProvider
            .state('sources', {
                url: '/source',
                views: {
                    'main@': {
                        templateUrl: 'partials/source-list.html',
                        controller: 'SourceListController'
                    }
                }
            })
            .state('detail', {
                url: '/source/:sourceId',
                views: {
                    'main@': {
                        templateUrl: 'partials/source-detail.html',
                        controller: 'SourceDetailController'
                    }
                }
            });
    }]);
