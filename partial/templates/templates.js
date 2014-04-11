angular.module('optinomic').controller('TemplatesCtrl', function($scope, $routeParams) {

    // Get current directives info - the stupid way
    for (var i = 0; i < $scope.directives.length; i++) {
        if ($scope.directives[i].id === $routeParams.id) {
            $scope.current_directive = $scope.directives[i];
            //console.log ('current=', $scope.current_directive);
        }
    }


    $scope.current_directive_id = $routeParams.id;
    $scope.current_directive_include = 'partial/templates/sub/' + $routeParams.id + '.html';


    //<card-title>
    $scope.templates_titel_titel_1 = 'Lebenszufriedenheit und Glück';
    $scope.templates_titel_titel_2 = 'Persönliche Verhaltensweisen und Gewohnheiten, 33 Aussagen.';
    $scope.templates_titel_titel_3 = 'Muster Max';

    //<score>


    $scope.my_label = {
        "population" : "Frauen, 20-30 Jahre",
        "results": {
            "0": {
                "question": "Stress durch Unsicherheit",
                "sub_left": "Stabiles Umfeld. Keine Belastung.",
                "sub_right": "Unsicherheit in wichtigen Lebensbereichen",
                "stanine": 3,
                "sum_score": 40
            },
            "1": {
                "question": "Stress durch Überforderung",
                "sub_left": "Keine Belastung durch Überforderung",
                "sub_right": "Überforderung in wichtigen Lebensbereichen",
                "stanine": 7,
                "sum_score": 30
            },
            "2": {
                "question": "Stress durch Verlust",
                "sub_left": "Keine Belastung durch Verlust und negative Ereignisse",
                "sub_right": "Belastung durch Verlust und negative Ereignisse",
                "stanine": 8,
                "sum_score": 10
            },
            "3": {
                "question": "Gesamt - Stressbelastung",
                "sub_left": "Geringe Belastung",
                "sub_right": "Hohe, gesundheitsschädliche Belastung",
                "stanine": 9,
                "sum_score": 0
            },
            "4": {
                "question": "Stresssymptome",
                "sub_left": "Wenige körperliche und psychische Symptome",
                "sub_right": "Viele körperliche und psychische Symptome",
                "stanine": 1,
                "sum_score": 3
            },
            "5": {
                "question": "Positives Denken",
                "sub_left": "Ungünstig: Selbstzweifel und Fokus auf Negatives",
                "sub_right": "Gute Stressbewältigung durch positives Denken",
                "stanine": 3,
                "sum_score": 67
            },
            "6": {
                "question": "Aktive Stressbewältigung",
                "sub_left": "Ungünstig: Stressoren werden nicht beseitigt",
                "sub_right": "Gute aktive und vorbeugende Stressbewältigung",
                "stanine": 4,
                "sum_score": 5
            },
            "7": {
                "question": "Soziale Unterstützung",
                "sub_left": "Ungünstig: Kaum Unterstützung durch andere",
                "sub_right": "Gut: Viel Unterstützung durch Freunde und Bekannte",
                "stanine": 6,
                "sum_score": 50
            },
            "8": {
                "question": "Halt im Glauben",
                "sub_left": "Ungünstig: Kaum religiöser / spiritueller Halt",
                "sub_right": "Gut: Person findet Halt im Glauben",
                "stanine": 2,
                "sum_score": 3
            },
            "9": {
                "question": "Alkohol- und Zigarettenkonsum",
                "sub_left": "Gut: Kein erhöhter Alkohol - oder Zigarettenkonsum",
                "sub_right": "Ungünstige Bewältigung durch Alkohol und Zigaretten",
                "stanine": 6,
                "sum_score": 40
            }
        }
    };


    $scope.scale_ranges = {
        "ranges": [{
            "from": 0,
            "to": 8,
            "result": "Keine Depression"
        }, {
            "from": 9,
            "to": 13,
            "result": "Minimale Depression"
        }, {
            "from": 14,
            "to": 19,
            "result": "Leichte Depression"
        }, {
            "from": 20,
            "to": 28,
            "result": "Mittelschwere Depression"
        }, {
            "from": 29,
            "to": 63,
            "result": "Schwere Depression"
        }]
    };

});