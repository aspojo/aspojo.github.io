
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

    ];

});
