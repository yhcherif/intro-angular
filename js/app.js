// js/app.js

(function () {
    "use strict";
    var module = angular.module("Demo",["ngRoute"]);
    module.config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'templates/index.tmpl.html',
            controller: 'demoController',
            controllerAs: "demo"
        });

        $routeProvider.when('/status', {
            templateUrl: 'templates/status.tmpl.html',
            controller: 'statusController'
        });

        $routeProvider.otherwise({redirectTo: '/'});
        //$routeProvider.html5Mode(false);

    });
    module.controller("demoController", function(){
        var demo = this;
        demo.msg = "My first demo test";
        demo.age  = 23;

    })
})();