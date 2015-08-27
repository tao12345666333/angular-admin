'use strict';

angular.module('angularAdmin.controllers', [])
    .controller('SourceListController', ['$scope', '$http', function($scope, $http){

        $http.get('http://127.0.0.1/angular').success(function(data){
            $scope.sources = data.res.sources
        });

        $scope.orderProp = 'rank';
    }]);
