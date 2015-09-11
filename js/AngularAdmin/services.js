'use strict';

angular.module('angularAdmin.services', ['ngResource'])
    .factory('Sources', function($resource){
        return $resource('data.json', {}, {
            get: {method: 'GET', isArray: false}
        });
    })
    .factory('Source', function($resource){
        return $resource(':sourceId.json', {sourceId: '@sourceId'}, {
            get: {method: 'GET', isArray: false},
            save: {
                method: 'POST',
                params: {
                    name: '@name',
                    desc: '@desc',
                    author: '@author'
                }
            },
            update: {
                method: 'PUT',
                params: {
                    status: '@status'
                }
            },
            remove: {method: 'DELETE'}
        });
    });
