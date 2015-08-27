'use strict';

angular.module('angularAdmin', [
        'ngRoute',
        'angularAdmin.filters',
        'angularAdmin.services',
        'angularAdmin.directives',
        'angularAdmin.controllers'
    ])
    .config(['$routeProvider', function($routeProvider){
        $routeProvider
            .when('/', {
                templateUrl: 'partials/source-list.html',
                controller: 'SourceListController'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
