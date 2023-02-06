(function () {
  "use strict";
  angular
    .module("Coursera_Assessment1", [])
    .controller("MyController", Assessment1Controller);

  Assessment1Controller.$inject = ["$scope", "$filter"];

  function Assessment1Controller($scope, $filter) {
    var click = "false";
    $scope.colortext = "black";
    $scope.text = "";
    $scope.val = 0;
    $scope.display = function () {
      if (click == "true") {
        if ($scope.val == 0) {
          $scope.colortext = "red";
          return "Please enter data first";
        } else if ($scope.val <= 3 && $scope.val > 0) {
          $scope.colortext = "green";
          return "Enjoy";
        } else {
          $scope.colortext = "green";
          return "Too much!";
        }
      } else return "";
    };

    $scope.response = function () {
      var tab = $scope.text.split(",");
      var compt = 0;
      click = "true";
      for (let i = 0; i < tab.length; i++) {
        if (tab[i] != "") {
          compt++;
        }
      }
      $scope.val = compt;
    };
  }
})();
