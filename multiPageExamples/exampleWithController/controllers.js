
        var app = angular.module('myApp', []);
        app.controller('myCtrl', function ($scope) {
            $scope.firstName = "John"; //sets the initial value of firstName within this $scope
            $scope.lastName = "Doe";
        });