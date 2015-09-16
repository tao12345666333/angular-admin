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

angular.module('angularAdmin.uploadServices', [])
    .factory('sourceUploadServices', ['$http', function($http){
        return {
            getToken: function(success, faild){
                $http.get('/api/souce/gettoken')
                    .then(success, faild);
            },
            uploadData: function(data){
                $http({
                    url: '/api/source/upload',
                    method: 'POST',
                    data: $.param(data),
                    headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                })
                .then(function(response){
                    console.log('success');
                    angular.element('.upload-success.modal').modal('show');
                }, function(response){
                    console.log('faild');
                    angular.element('.upload-faild.modal').modal('show');
                });
            }
        };
    }]);
