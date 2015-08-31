'use strict';

angular.module('angularAdmin.controllers', [])
    .controller('SourceListController', ['$scope', 'Sources', function($scope, Sources){
        Sources.get(function(data){
            $scope.sources = data.res;
        });

        $scope.orderProp = 'atime';
    }])
    .controller('SourceDetailController', ['$scope', 'Source', function($scope, Source){
        Source.get(function(data){
            $scope.sources = data.res;
        });
    }]);
