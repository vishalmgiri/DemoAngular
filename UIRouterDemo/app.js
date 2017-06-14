/// <reference path="Scripts/angular.js" />
/// <reference path="Scripts/angular-ui-router.js" />
/// <reference path="Scripts/angular-ui-router-tabs/ui-router-tabs.js" />
var app;
(function () {
    'use strict';
    app = angular.module('demoapp', ['ui.router', 'ngAnimate', 'ngSanitize', 'ui.bootstrap','ui.router.tabs'])
})();
