'use strict';

angular.module('angularAdmin.controllers', [])
    .controller('SourceListController', ['$scope', 'Sources', function($scope, Sources){
        Sources.get(function(data){
            $scope.sources = data.res.sources;
        });

        $scope.orderProp = 'rank';
    }])
    .controller('SourceDetailController', ['$scope', 'Source', function($scope, Source){
        Source.get(function(data){
            $scope.sources = data.res.sources;
        });
    }]);
