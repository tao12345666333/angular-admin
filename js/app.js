'use strict';

angular.module('angularAdmin', [])
    .controller('SourceListController', function(){
        var sourceList = this;
        sourceList.sources = [
            {
                'img': 'a.jpg',
                'title': 'testTitle',
                'desc': 'testDesc',
                'author': 'testAuthor',
                'status': 'testStatus',
                'rank': 'testRank',
                'atime': 'testAtime'
            },
            {
                'img': 'a.jpg',
                'title': 'testTitle1',
                'desc': 'testDesc1',
                'author': 'testAuthor1',
                'status': 'testStatus1',
                'rank': 'testRank1',
                'atime': 'testAtime1'
            }
        ];
    });
