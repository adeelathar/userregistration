'use strict';

angular.module('dashboardApp')
  .controller('LoginCtrl', ["$scope", "$http", "$log", "$modal", function ($scope, $http, $log, $uibModal, $modal) {
      $scope.message = 'Hello';

      // display signup modal
      //$scope.signupModalInstance = $uibModal.open({
      //    templateUrl: "signup.html",
      //    size: "sm",
      //    scope: $scope
      //});

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

  }]);
