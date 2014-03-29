angular.module('optinomic').controller('HomeCtrl',function($scope){


    $scope.patient = {
        firstName: 'Max',
        lastName: 'Muster',
    };

    console.log ('$scope', $scope);

});