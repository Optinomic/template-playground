angular.module('optinomic').directive('scoreThreshold', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            myscore: '=score',
            mymax: '=max',
            mymin: '=min',
            myshow_min_max: '=showMinMax'
        },
        templateUrl: 'directive/score-threshold/score-threshold.html',
        link: function(scope, element, attrs, ngModel) {


            function just_do_it() {

                if (scope.myshow_min_max === false) {
                    scope.show_min_max = false;
                } else {
                    scope.show_min_max = true;
                }


                scope.score = scope.myscore;
                scope.max = scope.mymax;
                scope.min = scope.mymin;

                scope.postition = (100 / (scope.max - scope.min) * scope.score) / 100;
                scope.postition = scope.postition * 85 + 7;


                if (scope.postition >= 50) {
                    scope.postition_score = scope.postition - 2;
                    scope.postition_align = 'end';
                } else {
                    scope.postition_score = scope.postition + 2;
                    scope.postition_align = 'start';
                }


            }

            just_do_it();

            // Watch for changes.
            scope.$watch('myscore', function() {
                just_do_it();
            }, true);
            scope.$watch('mymax', function() {
                just_do_it();
            }, true);
            scope.$watch('mymin', function() {
                just_do_it();
            }, true);

            //console.log ('Titel', scope);
        }
    };
});