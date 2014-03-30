angular.module('optinomic').factory('directoryList',function() {

    // Some fake testing data

    var optinomic_directories = [
        {
            "title":"Title / Subtitle with Infoline",
            "version":"1.0",
            "lastUpdate":"2014-03-30",
            "id" : "card-title"
        },
        {
            "title":"Stanine",
            "version":"1.0",
            "lastUpdate":"2014-03-30",
            "id" : "stanine"
        }
    ];

    return optinomic_directories;
});