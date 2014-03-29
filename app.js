angular.module('optinomic', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('optinomic').config(function($routeProvider) {

    $routeProvider.
        when('/template/:id',{templateUrl: 'partial/templates/templates.html'}).
        when('/home',{templateUrl: 'partial/home/home.html'}).
    /* Add New Routes Above */
    otherwise({redirectTo:'/home'});

});

angular.module('optinomic').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
