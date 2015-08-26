'use strict';

//var angularadminControllers = angular.module('angularadminControllers', []);

//angularadminControllers.controller('SourceListCtrl', ['$scope', 'Source',
    //function($scope, Source) {
        //$scope.sources = [
            //{
                //'img': 'a.jpg',
                //'tiltle': 'testTitle',
                //'desc': 'testDesc',
                //'author': 'testAuthor',
                //'status': 'testStatus',
                //'rank': 'testRank',
                //'atime': 'testAtime'
            //},
            //{
                //'img': 'a.jpg',
                //'tiltle': 'testTitle1',
                //'desc': 'testDesc1',
                //'author': 'testAuthor1',
                //'status': 'testStatus1',
                //'rank': 'testRank1',
                //'atime': 'testAtime1'
            //}
    //];
//}])

function SourceListCtrl ($scope) {
    $scope.sources = [
        {
            'img': 'a.jpg',
            'tiltle': 'testTitle',
            'desc': 'testDesc',
            'author': 'testAuthor',
            'status': 'testStatus',
            'rank': 'testRank',
            'atime': 'testAtime'
        },
        {
            'img': 'a.jpg',
            'tiltle': 'testTitle1',
            'desc': 'testDesc1',
            'author': 'testAuthor1',
            'status': 'testStatus1',
            'rank': 'testRank1',
            'atime': 'testAtime1'
        }
    ]
}

//angularAdmin = angular.module('angularAdmin', [
    //'ngRoute',
    //'angularadminControllers'
//]);

//angularAdmin.config(['$routeProvider',
    //function($routeProvider) {
        //$routeProvider.
            //when('', {
                //templateUrl: 'partials/source-list.html',
                //controller: 'SourceListCtrl'
            //})
    //}    
//])
