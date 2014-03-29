angular.module('optinomic').directive('cardTitle', function() {
	return {
		restrict: 'E',
		replace: true,
        transclude: true,
        scope: {
            mytitle1: '=title',
            mytitle2: '=subtitle',
            mytitle3: '=info'
		},
        template:
            '<div class="card_titel">' +
            ' <h2 class="m" style="margin: 15px;">{{title}}</h2>' +
            ' <span class="titel_border"></span>' +

            '<div class="card_sub" ng-show="subtitel_show">' +
            ' <p ng-show="patientInfo_show" style="font-size: 0.85em;">{{mytitle3}}</p>' +
            ' <p>{{subtitle}}</p>' +
            '</div>' +
            '<div style="magrin: 15px;" ng-hide="subtitel_show">&nbsp;</div>' +
            '</div>',
		//templateUrl: 'directive/card-title/card-title.html',
		link: function(scope, element, attrs, ngModel) {


            function updateStuff() {
                // Empty Title
                if ((scope.mytitle1 === undefined) || (scope.mytitle1 === '')) {
                    scope.title = 'Titel is undefined';
                } else {
                    scope.title = scope.mytitle1;
                }

                // Empty SubTitle
                if (scope.mytitle2 === undefined) {
                    scope.subtitel_show = false;
                    scope.subtitle = '';
                } else {
                    scope.subtitle = scope.mytitle2;
                    scope.subtitel_show = true;
                }

                // Show PatientInfo if available
                if (scope.mytitle3 !== undefined) {
                    scope.patientInfo_show = true;
                } else {
                    scope.patientInfo_show = false;
                }
            }

            updateStuff();

            // Watch for changes.
            scope.$watch('mytitle1' ,function(){
                updateStuff();
            }, true);
            scope.$watch('mytitle2' ,function(){
                updateStuff();
            }, true);
            scope.$watch('mytitle3' ,function(){
                updateStuff();
            }, true);

            //console.log ('Titel', scope);
		}
	};
});
