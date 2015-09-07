'use strict';

angular.module('angularAdmin.controllers', [])
    .controller('SourceListController', ['$scope', 'Sources', function($scope, Sources){
        Sources.get(function(data){
            $scope.sources = data.res;
        });

        $scope.orderProp = 'atime';
    }])
    .controller('SourceDetailController', ['$scope', '$stateParams', 'Source', function($scope, $stateParams, Source){
        Source.get({sourceId: $stateParams.sourceId}, function(data){
            $scope.source = data.res;
        });
    }]);
