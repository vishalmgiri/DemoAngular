// Main generic controller shared between multiple views/tabs
app.controller("userController", ['$scope', '$state', '$stateParams',
    function ($scope, $state, $stateParams) {
        $scope.TestData = {
            Name: "Hello"
        };
        $scope.scad = {};
        // The following initialises tabs with parameters
        $scope.scad.tabData = [
         {
             heading: 'Credit App',
             route: 'user.tab.forms', //user.creditapp', -- This commented line is to check output with static data for multiple tab, purposefully kept
             params: {
                 TableId: 5140,
                 ViewId: 0
             }
         },
         {
             heading: 'Purpose Of App',
             route: 'user.tab.forms', //user.creditapp', -- This commented line is to check output with static data for multiple tab, purposefully kept
             params: {
                 TableId: 5141,
                 ViewId: 0
             }
         },
         {
             heading: 'Country Of Risk',
             route: 'user.tab.forms', //user.creditapp', -- This commented line is to check output with static data for multiple tab, purposefully kept
             params: {
                 TableId: 5142,
                 ViewId: 0
             }
         },
         {
             heading: 'Facilities Borrower',
             route: 'user.tab.forms',//user.creditapp', -- This commented line is to check output with static data for multiple tab, purposefully kept
             params: {
                 TableId: 5143,
                 ViewId: 0
             }
         },
         {
             heading: 'Facilities Individual',
             route: 'user.tab.forms',//user.creditapp', -- This commented line is to check output with static data for multiple tab, purposefully kept
             params: {
                 TableId: 5144,
                 ViewId: 0
             }
         }
        ];

        // This is used to initialise the data
        $scope.scad.TableId = $stateParams.TableId;
        $scope.scad.CanAccess = true;
        $scope.testState = $state.current.params;

        // The following commented code is used to check output with static data for multiple tabs, purposefully kept
        // This is used to set the parameters to display as default tab with static data for multiple tab
        //if ($state.current.name === 'user') {
        //    $state.go('user.creditapp');
        //};
        //$scope.tabAccountsData = [
        //   {
        //       heading: 'Credit App',
        //       route: 'user.tab.forms'//user.purposeofapp.popcreditapp' -- This commented line is to check output with static data for multiple tab, purposefully kept
        //   },
        //   {
        //       heading: 'Details',
        //       route: 'user.tab.forms'//user.purposeofapp.popdetail' -- This commented line is to check output with static data for multiple tab, purposefully kept
        //   }
        //];
        // This is used to set the parameters to display default tab for nested view with static data for multiple tab, purposefully kept
        //if ($state.current.name === 'user.purposeofapp') {
        //    $state.go('user.purposeofapp.popcreditapp');
        //};       
        //$scope.tabSettingsData = [
        //   {
        //       heading: 'Credit App',
        //       route: 'user.tab.forms'//user.creditapp.screditapp'
        //   },
        //   {
        //       heading: 'Details',
        //       route: 'user.tab.forms'//user.creditapp.sdetail'
        //   }
        //];
        //if ($state.current.name === 'user.creditapp') {
        //    $state.go('user.creditapp.screditapp');
        //};
        //$scope.go = function (route) {
        //    $state.go(route);
        //};
        //$scope.active = function (route) {
        //    return $state.is(route);
        //};
        //$scope.$on("$stateChangeSuccess", function () {
        //    $scope.tabs.forEach(function (tab) {
        //        tab.active = $scope.active(tab.route);
        //    });
        //});
    }]);