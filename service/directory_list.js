angular.module('optinomic').factory('directoryList',function() {

    // Some fake testing data

    var optinomic_directories = [
        {
            "title":"Optinomic Logo",
            "description":"Show us your love.",
            "version":"1.0",
            "lastUpdate":"2014-03-31",
            "id" : "optinomic-logo"
        },
        {
            "title":"Title / Subtitle with Infoline",
            "description":"A nice looking title for your cards.",
            "version":"1.0",
            "lastUpdate":"2014-03-30",
            "id" : "card-title"
        },
        {
            "title":"Score with threshold",
            "description":"A simple score based on threshold. Typically BDI-II.",
            "version":"1.0",
            "lastUpdate":"2014-03-30",
            "id" : "score-threshold"
        },
        {
            "title":"Stanine",
            "description":"Stanine (STAndard NINE) is a method of scaling test scores on a nine-point standard scale with a mean of five and a standard deviation of two.",
            "version":"1.0",
            "lastUpdate":"2014-03-30",
            "id" : "stanine"
        }
    ];

    return optinomic_directories;
});