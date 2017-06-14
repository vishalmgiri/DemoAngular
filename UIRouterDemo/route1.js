// Main route configuration file used with generic controller and nested states and views
app.config
    (function ($stateProvider, $urlMatcherFactoryProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise("/index");
        $urlMatcherFactoryProvider.caseInsensitive(true);
        $stateProvider
            .state("user", {                                // Main Parent State
                controller: 'userController',
                controllerAs: "userCtrl",
                url: "/user",
                cache: false,
                reloadOnSearch: true,
                templateProvider: ['$templateFactory', function ($templateFactory) {
                    return $templateFactory.fromUrl('templates/tabs/tabset/tabtest.tpl.html');
                }],
                onEnter: function ($state, $stateParams) {
                    console.log("Entered user");
                },
                onExit: function () {
                    console.log("Exited user");
                },
            })
            .state("user.tab", {                                // Child State
                url: "/tab/{TableId:int}/{ViewId:int}",
                cache: false,
                reloadOnSearch: true,
                params: { TableId: null, ShowFilter: true, ShowList: true, ShowForm: true, FromTableId: 0, TableMetaTableId: 4050, ColumnMetaTableId: 4082, QueryMetaTableId: 4053, ParamMetaTableId: 4054, ViewId: 0, HelpTableId: 0, HeaderTableId: 0, SubTableId: 0 },
                templateProvider: ['$templateFactory', function ($templateFactory) {
                    return $templateFactory.fromUrl('templates/tabs/tabset/scadtabs.tpl.html');
                }],
                resolve: {
                    TableId: ['$stateParams', function ($stateParams) {
                        return $stateParams.TableId;
                    }]
                },
                controller: 'userController',
                controllerAs: "userCtrl"
            })
            .state("user.tab.forms", {                          // Child State
                url: "/Forms",
                cache: false,
                reloadOnSearch: true,
                params: { TableId: null, ShowFilter: true, ShowList: true, ShowForm: true, FromTableId: 0, TableMetaTableId: 4050, ColumnMetaTableId: 4082, QueryMetaTableId: 4053, ParamMetaTableId: 4054, ViewId: 0, HelpTableId: 0, HeaderTableId: 0, SubTableId: 0 },
                views: {
                    'filters@user.tab': {
                        templateProvider: ['$stateParams', '$templateFactory', function ($stateParams, $templateFactory) {
                            console.log("user.tab.forms : " + $stateParams.TableId);
                            return $templateFactory.fromUrl('templates/user/creditapp.html');
                        }]
                    },
                    'list@user.tab': {
                        templateProvider: ['$stateParams', '$templateFactory', function ($stateParams, $templateFactory) {
                            return $templateFactory.fromUrl('templates/user/purposeofapp.tpl.html');
                        }]
                    },
                    'form@user.tab': {
                        templateProvider: ['$stateParams', '$templateFactory', function ($stateParams, $templateFactory) {
                            return $templateFactory.fromUrl('templates/tabs/tabset/scadtabs.tpl.html');
                        }]
                    }
                },
                // The following two events are used to get the state parameters when switching tabs - currently R&D is in progress 
                onEnter: function ($state, $stateParams) {
                    //if ($state.current.name === "user.tab.forms")
                    //{
                    //    $state.go('user.tab.forms')
                    //}
                    // $state.go('user.tab.forms', { 'TableId': $stateParams.TableId, 'ViewId': $stateParams.ViewId});
                    //  $state.reload($state.current);
                    //$state.transitionTo($state.current, $stateParams, {
                    //    reload: true, inherit: true, notify: true
                    //});
                    // $state.transitionTo($state.current, angular.copy($stateParams), { reload: true, inherit: false, notify: false });
                    console.log("Entered user.forms");
                    console.log($stateParams.TableId + "," + $stateParams.ViewId);
                },
                onExit: function () {
                    console.log("Exited user.forms");
                },
                // end of code block - R&D in progress
                controller: 'userController',
                controllerAs: "userCtrl"
            })

        //This is used to set html5mode to remove # from URLs
        $locationProvider.html5Mode(true);
    })

// The following two events are used to check the state parameters when switching tabs - currently R&D is in progress 
//.run(['$rootScope', '$state', '$stateParams',
//    function ($rootScope, $state, $stateParams) {
//        $rootScope.$state = $state;
//        $rootScope.$stateParams = $stateParams;
//    }
//])
//.run(function ($rootScope) {
//    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
//        console.log('$stateChangeStart:', arguments);
//    });
//    $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
//        console.log('$stateChangeSuccess:', arguments);
//    });
//});
// end of code block - R&D in progress
