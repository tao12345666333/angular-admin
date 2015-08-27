'use strict';

angular.module('angularAdmin', [])
    .controller('SourceListController', function(){
        var sourceList = this;
        sourceList.sources = [
            {
                'img': 'a.jpg',
                'title': 'testTitle4',
                'desc': 'testDesc4',
                'author': 'testAuthor4',
                'status': 'testStatus4',
                'rank': 4,
                'atime': 'testAtime4'
            },
            {
                'img': 'a.jpg',
                'title': 'testTitle0',
                'desc': 'testDesc0',
                'author': 'testAuthor0',
                'status': 'testStatus0',
                'rank': 0,
                'atime': 'testAtime0'
            },
            {
                'img': 'a.jpg',
                'title': 'testTitle2',
                'desc': 'testDesc2',
                'author': 'testAuthor2',
                'status': 'testStatus2',
                'rank': 2,
                'atime': 'testAtime2'
            },
            {
                'img': 'a.jpg',
                'title': 'testTitle3',
                'desc': 'testDesc3',
                'author': 'testAuthor3',
                'status': 'testStatus3',
                'rank': 3,
                'atime': 'testAtime3'
            },
            {
                'img': 'a.jpg',
                'title': 'testTitle1',
                'desc': 'testDesc1',
                'author': 'testAuthor1',
                'status': 'testStatus1',
                'rank': 1,
                'atime': 'testAtime1'
            }
        ];
        sourceList.orderProp = 'rank'
    });
