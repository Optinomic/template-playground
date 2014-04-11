angular.module('optinomic').directive('scale', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            myscale_data: '=scaledata',
            myscale: '=scale'
        },

        template:
        '<div class="m">' + 
            '<div ng-show="myscale === 9">' + 
                '<div class="t_c">' + 
                    '<p style="margin-top: 5px; margin-bottom: 5px;">' + 
                        '<small>' + 
                            'Normalbereich' + 
                        '</small>' + 
                        '<br>{{myscale_data.population}}' + 
                    '</p>' + 
                '</div>' + 
                '<table class="table table-condensed">' + 
                    '<!-- Header -->' + 
                    '<tr class="beschriftung_klein">' + 
                        '<td class="hidden-xs t_r" style="width: 25%">' + 
                            '<p style="margin-left: 5px; margin-right: 5px;">' + 
                                'Stanine' + 
                                '<br>%' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="bg_1 t_c b_r">' + 
                            '<p>' + 
                                '1' + 
                                '<br>4%' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="bg_2 t_c b_r">' + 
                            '<p>' + 
                                '2' + 
                                '<br>7%' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="bg_2 t_c b_r">' + 
                            '<p>' + 
                                '3' + 
                                '<br>12%' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="bg_3 t_c b_r">' + 
                            '<p>' + 
                                '4' + 
                                '<br>17%' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="bg_3 t_c b_r">' + 
                            '<p>' + 
                                '5' + 
                                '<br>20%' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="bg_3 t_c b_r">' + 
                            '<p>' + 
                                '6' + 
                                '<br>17%' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="bg_2 t_c b_r">' + 
                            '<p>' + 
                                '7' + 
                                '<br>12%' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="bg_2 t_c b_r">' + 
                            '<p>' + 
                                '8' + 
                                '<br>7%' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="bg_1 t_c">' + 
                            '<p>' + 
                                '9' + 
                                '<br>4%' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="hidden-xs t_l" style="width: 25%">' + 
                            '<p style="margin-left: 5px; margin-right: 5px;">' + 
                                '<small>' + 
                                    'Stanine' + 
                                    '<br>%' + 
                                '</small>' + 
                            '</p>' + 
                        '</td>' + 
                    '</tr>' + 
                    '<!-- Results -->' + 
                    '<tr ng-repeat="result in myscale_data.results">' + 
                        '<td class="hidden-xs t_r" style="width: 25%">' + 
                            '<div class="scale_description">' + 
                                '{{result.question}}' + 
                                '<small>' + 
                                    '{{result.sub_left}}' + 
                                '</small>' + 
                            '</div>' + 
                        '</td>' + 
                        '<td class="bg_1 t_c b_r">' + 
                            '<div ng-show="result.stanine === 1" class="scale_result">X</div>' + 
                        '</td>' + 
                        '<td class="bg_2 t_c b_r">' + 
                            '<div ng-show="result.stanine === 2" class="scale_result">X</div>' + 
                        '</td>' + 
                        '<td class="bg_2 t_c b_r">' + 
                            '<div ng-show="result.stanine === 3" class="scale_result">X</div>' + 
                        '</td>' + 
                        '<td class="bg_3 t_c b_r">' + 
                            '<div ng-show="result.stanine === 4" class="scale_result">X</div>' + 
                        '</td>' + 
                        '<td class="bg_3 t_c b_r">' + 
                            '<div ng-show="result.stanine === 5" class="scale_result">X</div>' + 
                        '</td>' + 
                        '<td class="bg_3 t_c b_r">' + 
                            '<div ng-show="result.stanine === 6" class="scale_result">X</div>' + 
                        '</td>' + 
                        '<td class="bg_2 t_c b_r">' + 
                            '<div ng-show="result.stanine === 7" class="scale_result">X</div>' + 
                        '</td>' + 
                        '<td class="bg_2 t_c b_r">' + 
                            '<div ng-show="result.stanine === 8" class="scale_result">X</div>' + 
                        '</td>' + 
                        '<td class="bg_1 t_c">' + 
                            '<div ng-show="result.stanine === 9" class="scale_result">X</div>' + 
                        '</td>' + 
                        '<td class="hidden-xs t_l" style="width: 25%">' + 
                            '<div class="scale_description">' + 
                                '{{result.question}}' + 
                                '<small>' + 
                                    '{{result.sub_right}}' + 
                                '</small>' + 
                            '</div>' + 
                        '</td>' + 
                    '</tr>' + 
                    '<!-- Footer -->' + 
                    '<tr class="beschriftung_klein text-info hidden-xs">' + 
                        '<td class="hidden-xs t_r" style="width: 25%">' + 
                            '<p style="margin-left: 5px; margin-right: 5px;">' + 
                                '%' + 
                                '<br>Stanine' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="bg_1 t_c b_r">' + 
                            '<p>' + 
                                '4%' + 
                                '<br>1' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="bg_2 t_c b_r">' + 
                            '<p>' + 
                                '7%' + 
                                '<br>2' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="bg_2 t_c b_r">' + 
                            '<p>' + 
                                '12%' + 
                                '<br>3' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="bg_3 t_c b_r">' + 
                            '<p>' + 
                                '17%' + 
                                '<br>4' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="bg_3 t_c b_r">' + 
                            '<p>' + 
                                '20%' + 
                                '<br>5' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="bg_3 t_c b_r">' + 
                            '<p>' + 
                                '17%' + 
                                '<br>6' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="bg_2 t_c b_r">' + 
                            '<p>' + 
                                '12%' + 
                                '<br>7' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="bg_2 t_c b_r">' + 
                            '<p>' + 
                                '7%' + 
                                '<br>8' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="bg_1 t_c">' + 
                            '<p>' + 
                                '4%' + 
                                '<br>9' + 
                            '</p>' + 
                        '</td>' + 
                        '<td class="hidden-xs t_l" style="width: 25%">' + 
                            '<p style="margin-left: 5px; margin-right: 5px;">' + 
                                '%' + 
                                '<br>Stanine' + 
                            '</p>' + 
                        '</td>' + 
                    '</tr>' + 
                '</table>' + 
                '<div class="hidden-xs t_c">' + 
                    '<p style="margin-top: -15px; margin-bottom: 5px;">' + 
                        '{{myscale_data.population}}' + 
                        '<br>' + 
                        '<small>' + 
                            'Normalbereich' + 
                        '</small>' + 
                    '</p>' + 
                '</div>' + 
                '<div class="visible-xs" style="margin-top: -15px; margin-bottom: 5px;">' + 
                    '<div ng-repeat="result in myscale_data.results">' + 
                        '<div class="row b_t">' + 
                            '<div class="col-xs-12 t_c m">' + 
                                '{{result.question}} &nbsp;&nbsp;({{result.stanine}})' + 
                            '</div>' + 
                        '</div>' + 
                        '<div class="row">' + 
                            '<div class="col-xs-6 t_r">' + 
                                '<small>' + 
                                    '{{result.sub_left}}' + 
                                '</small>' + 
                            '</div>' + 
                            '<div class="col-xs-6">' + 
                                '<small>' + 
                                    '{{result.sub_right}}' + 
                                '</small>' + 
                            '</div>' + 
                        '</div>' + 
                    '</div>' + 
                '</div>' + 
            '</div>' + 
        '</div>',

        //templateUrl: 'directive/scale/scale.html',

        link: function(scope, element, attrs, ngModel) {



            function updateStuff() {

                // console.log('scale => ', scope.myscale);
                // console.log('results => ', scope.myscale_data);

            }

            updateStuff();

            // Watch for changes.
            //scope.$watch('mydata', function() {
            //    updateStuff();
            //}, true);

        }
    };
});