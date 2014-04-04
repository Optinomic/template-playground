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
            "title":"Score (with threshold)",
            "description":"A simple score - can be compared to thresholds. Typically BDI-II.",
            "version":"1.0",
            "lastUpdate":"2014-03-30",
            "id" : "score-threshold"
        },
        {
            "title":"Scale",
            "description":"Simple 0 to 5 or Stanine (STAndard NINE) is a method of scaling test scores on a nine-point standard scale with a mean of five and a standard deviation of two.",
            "version":"1.0",
            "lastUpdate":"2014-03-30",
            "id" : "scale"
        }
    ];

    return optinomic_directories;
});