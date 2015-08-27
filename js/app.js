'use strict';

angular.module('angularAdmin', [])
    .controller('SourceListController', ['$http', function($http){
        var sourceList = this;

        $http.get('http://127.0.0.1/angular').success(function(data){
            sourceList.sources = data.res.sources
        })
        sourceList.orderProp = 'rank'
    }]);
