'use strict';

angular.module('angularAdmin.services', ['ngResource'])
    .factory('Sources', function($resource){
        return $resource('../../data.json', {}, {
            get: {method: 'GET', params: {}, isArray: false}
        });
    })
    .factory('Source', function($resource){
        return $resource('../../data.json', {}, {
            get: {method: 'GET', isArray: false}
        });
    });
