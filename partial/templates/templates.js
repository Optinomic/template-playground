angular.module('optinomic').controller('TemplatesCtrl',function($scope, $routeParams){



    // Get current directives info - the stupid way
    for (var i = 0; i < $scope.directives.length; i++) {
        if ($scope.directives[i].id === $routeParams.id) {
            $scope.current_directive = $scope.directives[i];
            //console.log ('current=', $scope.current_directive);
        }
    };


    $scope.current_directive_id = $routeParams.id;
    $scope.current_directive_include = 'partial/templates/sub/' + $routeParams.id + '.html';

    $scope.templates_titel_titel_1 = 'Lebenszufriedenheit und Glück';
    $scope.templates_titel_titel_2 = 'Persönliche Verhaltensweisen und Gewohnheiten, 33 Aussagen.';
    $scope.templates_titel_titel_3 = 'Muster Max';

});