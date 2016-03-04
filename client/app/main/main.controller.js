'use strict';

angular.module('dashboardApp').controller('MainCtrl', ["$scope", "$http", "$log", "$modal", function ($scope, $http, $log, $uibModal, $modal) {

    // display signup modal
    $scope.toggleSignup = function (size) {
        $scope.signupModalInstance = $uibModal.open({
            templateUrl: "signup.html",
            size: size,
            scope: $scope
        });
    }

    $scope.hideSignup = function () {
        $scope.signupModalInstance.close();
    };

    //$scope.awesomeThings = [];

    //$http.get('/api/things').success(function(awesomeThings) {
    //  $scope.awesomeThings = awesomeThings;
    //});

}]);
