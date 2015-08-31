'use strict';

angular.module('angularAdmin.services', ['ngResource'])
    .factory('Sources', function($resource){
        return $resource('http://127.0.0.1/angular', {}, {
            get: {method: 'GET', params: {skip:0, limit:20}, isArray: false}
        });
    })
    .factory('Source', function($resource){
        return $resource('http://127.0.0.1/angular/:souceId', {}, {
            get: {method: 'GET', isArray: false}
        });
    });
