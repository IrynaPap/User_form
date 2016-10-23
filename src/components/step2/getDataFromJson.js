module.exports.loadCountries = function (callback) {
    var request = new XMLHttpRequest();
    request.open('GET', './files/countries.json', true);
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                var countries = JSON.parse(request.responseText);
                callback(Object.keys(countries).map(function (key) {
                    return { value: key, label: countries[key] };
                }));
            }
            else
                console.log("Error loading page\n");
        }
    };
    request.send(null);
}

module.exports.loadCities = function (id, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', './files/cities.json', true);
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                var cities = JSON.parse(request.responseText);
                callback(
                    Object.keys(cities)
                        .map(function (key) {
                            return cities[key];
                        })
                        .filter(function (val) {
                            return val.country == id;
                        })
                        .map(function (val, index) {
                            return { value: val.name, label: val.name };
                        })
                )
            }
            else
                console.log("Error loading page\n");
        }
    };
    request.send(null);
}

