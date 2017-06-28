var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    $scope.x1 = "JoHn";
    $scope.x2 = angular.lowercase($scope.x1); //.lowercase changes the string to all lowercase letters. 
    $scope.x3 = angular.uppercase($scope.x1); //.uppercase changes the string to all uppercase letters. 

});