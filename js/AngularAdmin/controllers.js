'use strict';

angular.module('angularAdmin.controllers', [])
    .controller('SourceListController', ['$scope', 'Sources', function($scope, Sources){
        Sources.get(function(data){
            $scope.sources = data.res.sources;
        });

        $scope.orderProp = 'rank';
    }]);
