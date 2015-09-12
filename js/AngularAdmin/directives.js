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
    .directive('sourceUpload', ['sourceUploadServices', function(SourceUploadServices){
        return {
            restrict: 'AE',
            link: function(scope, element, attrs){
                element.on('click', function(){
                    console.log('SourceUpload');
                });
            }
        };
    }]);
