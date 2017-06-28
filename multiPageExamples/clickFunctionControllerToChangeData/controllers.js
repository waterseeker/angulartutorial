var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.firstname = "Mr.";
    $scope.changeName = function() {
        $scope.firstname = "Echo";
    }
});