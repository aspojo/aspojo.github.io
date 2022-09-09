
var app = angular.module('demo', []).controller('DemoCtrl', function($scope) {
    $scope.modules = [
        {
            name: 'ngx-ui-split',
            desc: 'angular6 split 插件，类似jQuery layout，实现界面上下左右分区',
            src: 'https://github.com/aspojo/ngx-ui-split',
            home: 'https://aspojo.github.io/ngx-split/'
        },
        {
            name: 'angular-ui-bootstrap',
            desc: 'angular bootstrap 插件，支持ie8浏览器',
            src: 'https://github.com/aspojo/angular-ui-bootstrap',
            home: './angular-ui-bootstrap/'
        },
        {
            name: 'present-ionic-react',
            desc: 'present-ionic-react',
            src: 'https://github.com/aspojo/present-ionic-react',
            home: './present-ionic-react/'
        },
        {
            name: 'words-root',
            desc: 'words-root',
            src: 'https://github.com/aspojo/words-root',
            home: './words-root/'
        },
        {
            name: 'java-present',
            desc: 'java-presentt',
            src: 'https://github.com/aspojo/reveal.js/tree/java%E6%8A%80%E6%9C%AF%E5%88%86%E4%BA%AB',
            home: './java-present/'
        },

    ];

});
