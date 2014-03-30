angular.module('optinomic').controller('HomeCtrl',function($scope, directoryList){


    $scope.directives = directoryList;

    $scope.patient = {
        firstName: 'Max',
        lastName: 'Muster',
    };



    console.log ('HomeCtrl - $scope', $scope);

});