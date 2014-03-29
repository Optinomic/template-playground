angular.module('optinomic').directive('cardTitel', function() {
	return {
		restrict: 'E',
		replace: true,
		scope: {
            mytitel: '=titel',
            mysubtitel: '=subtitel',
            patientInfo: '=patient'
		},
		templateUrl: 'directive/card-titel/card-titel.html',
		link: function(scope, element, attrs, fn) {

            // Empty Title
            if (scope.mytitel === undefined) {
                scope.title = 'Titel is undefined';
            } else {
                scope.title = scope.mytitel;
            }

            // Empty SubTitle
            if (scope.mysubtitel === undefined) {
                scope.subtitel_show = false;
                scope.subtitle = '';
            } else {
                scope.subtitle = scope.mysubtitel;
                scope.subtitel_show = true;
            }

            // Show PatientInfo if available
            if (scope.patientInfo !== undefined) {
                scope.patientInfo_show = true;
            } else {
                scope.patientInfo_show = false;
            }


            //console.log ('Titel', scope);


		}
	};
});
