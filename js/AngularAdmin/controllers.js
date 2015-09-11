'use strict';

angular.module('angularAdmin.controllers', [])
    .controller('SourceListController', ['$scope', '$sce', 'Sources', function($scope, $sce, Sources){
        Sources.get(function(data){
            //for video
            angular.forEach(data.res, function(v, i){
                v.src = $sce.trustAsResourceUrl(v.src);
            });
            $scope.sources = data.res;
        });

        $scope.orderProp = 'atime';
    }])
    .controller('SourceDetailController', ['$scope', '$stateParams', '$sce', 'Source', function($scope, $stateParams, $sce, Source){
        Source.get({sourceId: $stateParams.sourceId}, function(data){
            $scope.source = data.res;
            $scope.videosrc = $sce.trustAsResourceUrl(data.res.src);
        });
    }]);
