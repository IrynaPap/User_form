var jsonModule = require('./getDataFromJson.js');

require("selectize")
var $ = require('jquery');


window.renderStep2 = function () {
    var $cities = $("#cities").selectize({
        valueField: 'value',
        labelField: 'label',
        searchField: ['label']
    });

    var $countries = $("#countries").selectize({
        valueField: 'value',
        labelField: 'label',
        searchField: ['label'],
        onChange: function (val) {
            var cities = $cities[0].selectize;
            cities.load(function (callback) {
                jsonModule.loadCities(val, function (result) {
                    cities.clearOptions();
                    if (result && result.length) {
                        cities.enable();
                        callback(result);
                    } else {
                        cities.disable();
                        callback();
                    }
                });
            });

        }
    });

    $countries[0].selectize.load(jsonModule.loadCountries);


    $cities[0].selectize.disable();
}