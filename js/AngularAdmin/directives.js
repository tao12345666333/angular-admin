'use strict';

angular.module('angularAdmin.directives', [])
    .directive('sourceEdit', function(){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                element.on('click', function(){
                    console.log('edit click');
                });
            }
        };
    })
    .directive('sourcePass', ['Source', function(Source){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                element.on('click', function(){
                    console.log('pass');
                    Source.update({
                        sourceId: element.parent().data.id,
                        status: 'pass'
                    }, function(data){
                        console.log(data);
                    });
                });
            }
        };
    }])
    .directive('sourceOnline', ['Source', function(Source){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                element.on('click', function(){
                    console.log('online');
                    Source.update({
                        sourceId: element.parent().data.id,
                        status: 'online'
                    }, function(data){
                        console.log(data);
                    });
                });
            }
        };
    }])
    .directive('sourceRefuse', ['Source', function(Source){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                element.on('click', function(){
                    console.log('Refuse');
                    Source.update({
                        sourceId: element.parent().data.id,
                        status: 'refuse'
                    }, function(data){
                        console.log(data);
                    });
                });
            }
        };
    }])
    .directive('sourceDelete', ['Source', function(Source){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                element.on('click', function(){
                    console.log('Delete');
                    var sourceId = element.parent().data.id;
                    Source.remove({
                        sourceId: sourceId,
                    }, function(data){
                        console.log(data);
                        element.parents('#'+sourceId).remove();
                    });
                });
            }
        };
    }])
    .directive('sourceUpload', ['$http', '$rootScope', 'sourceUploadServices', function($http, $rootScope, SourceUploadServices){
        return {
            restrict: 'A',
            link: function(scope, element, attrs){
                element.bind('change', function(e){
                    var file = e.target.files[0];

                    if (file === undefined){
                        return false;
                    }

                    sourceUploadServices.getToken(function(res){
                        console.log('success function');
                        var form = new FormData();
                        form.append('token', res.data.res.uptoken);
                        form.append('file', file);
                        form.append('key', res.data.res.key);
                        $rootScope.loading = true;

                        //upload file
                        $http.post('http://up.qiniu.com', form, {
                            headers: {'Content-Type': undefined}
                        }).success(function(data){
                            $rootScope.loading = false;

                            scope.$watch(function(){
                                scope.source.id = data.key;
                                scope.source.src = 'http://bucket.qiniu.com/' + data.key + '?wsiphost=local';
                            });
                        });
                    });
                });
            }
        };
    }]);
