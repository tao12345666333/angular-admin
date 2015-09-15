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
    .factory('sourceUploadServices', ['$http', '$q', '$timeout', function($http, $q, $timeout){
        return {
            getToken: function(success, faild){
                $http.get('/api/souce/gettoken')
                    .then(success, faild);
            },
            uploadFile: function(token, file, key){
                $http.post(
                    'http://up.qiniu.com',
                    {
                        token: token,
                        file: file,
                        key: key
                    }
                )
                .then(function(res){
                    console.log('success');
                }, function(res){
                    console.log('faild');
                });
            }
        };
    }]);
