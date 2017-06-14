// Main route configuration file used with static data for multiple tabs with different states
app.config(function ($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise("/index");
    $urlMatcherFactoryProvider.caseInsensitive(true);
    $stateProvider
        .state("user", {
            controller: 'userController',
            controllerAs: "userCtrl",
            url: "/user",
            templateProvider: ['$templateFactory', function ($templateFactory) {
                return $templateFactory.fromUrl('templates/user.html');
            }],
        })
        .state("user.creditapp", {
            controller: 'userController',
            url: "/credit-app/{TypeId:int}/{ViewId:int}",
            templateProvider: ['$templateFactory', function ($templateFactory) {
                return $templateFactory.fromUrl('templates/user/creditapp.html');
            }],
        })
        .state("user.purposeofapp", {
            controller: 'userController',
            controllerAs: "userCtrl",
            url: "/purpose-of-app/{TypeId:int}/{ViewId:int}",
            templateProvider: ['$templateFactory', function ($templateFactory) {
                return $templateFactory.fromUrl('templates/user/purposeofapp.html');
            }],
        })
        .state("user.creditapp.screditapp", {
            controller: 'userController',
            controllerAs: "userCtrl",
            url: "/creditapp",
            templateProvider: ['$templateFactory', function ($templateFactory) {
                return $templateFactory.fromUrl('templates/user/creditapp/screditapp.html');
            }],
        })
        .state("user.creditapp.sdetail", {
            controller: 'userController',
            controllerAs: "userCtrl",
            url: "/detail",
            templateProvider: ['$templateFactory', function ($templateFactory) {
                return $templateFactory.fromUrl('templates/user/creditapp/sdetail.html');
            }],
        })
        .state("user.purposeofapp.popcreditapp", {
            controller: 'userController',
            controllerAs: "userCtrl",
            url: "/creditapp",
            templateProvider: ['$templateFactory', function ($templateFactory) {
                return $templateFactory.fromUrl('templates/user/purposeofapp/popcreditapp.html');
            }],
        })
        .state("user.purposeofapp.popdetail", {
            controller: 'userController',
            controllerAs: "userCtrl",
            url: "/detail",
            templateProvider: ['$templateFactory', function ($templateFactory) {
                return $templateFactory.fromUrl('templates/user/purposeofapp/popdetail.html');
            }],
        })

    //This is used to set html5mode to remove # from URLs
    $locationProvider.html5Mode(true);
})