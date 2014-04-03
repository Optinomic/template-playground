angular.module('optinomic').directive('scoreThreshold', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            myscore: '=score',
            mymax: '=max',
            mymin: '=min',
            myshow_min_max: '=showMinMax',
            myshow_percent_scale: '=showPercentScale',
            myshow_scale_ranges: '=scaleRanges'
        },
        templateUrl: 'directive/score-threshold/score-threshold.html',
        link: function(scope, element, attrs, ngModel) {

            function get_position(my_value) {
                my_value = (100 / (scope.max - scope.min) * my_value) / 100;
                my_value = my_value * 85 + 7;
                return my_value;
            }


            function just_do_it() {
                //Variablen initialisieren
                scope.score = scope.myscore;
                scope.max = scope.mymax;
                scope.min = scope.mymin;


                if (scope.myshow_min_max === false) {
                    scope.show_min_max = false;
                } else {
                    scope.show_min_max = true;
                }

                if (scope.myshow_percent_scale === false) {
                    scope.show_percent_scale = false;
                } else {
                    scope.show_percent_scale = true;
                }

                if (scope.myshow_scale_ranges === undefined) {
                    console.log('No Scale Ranges.');
                    scope.show_scale_ranges = false;
                } else {
                    scope.show_scale_ranges = true;

                    //Loop durch alle Scales
                    for (var i = 0; i < scope.myshow_scale_ranges.ranges.length; i++) {
                        scope.myshow_scale_ranges.ranges[i].from_position = get_position(scope.myshow_scale_ranges.ranges[i].from);
                        scope.myshow_scale_ranges.ranges[i].to_position = get_position(scope.myshow_scale_ranges.ranges[i].to);
                        scope.myshow_scale_ranges.ranges[i].width_position = scope.myshow_scale_ranges.ranges[i].to_position - scope.myshow_scale_ranges.ranges[i].from_position;

                        if ( (scope.score >= scope.myshow_scale_ranges.ranges[i].from) && (scope.score <= scope.myshow_scale_ranges.ranges[i].to) ) {
                            scope.myshow_scale_ranges.ranges[i].fill_color = "#EE3B16";

                        } else {
                            scope.myshow_scale_ranges.ranges[i].fill_color = "#C2C2C2";
                        }

                        console.log('LOOP = ', scope.myshow_scale_ranges.ranges[i]);


                    }

                    console.log('Scale Ranges = ', scope.myshow_scale_ranges);
                }

                scope.postition = get_position(scope.score);


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