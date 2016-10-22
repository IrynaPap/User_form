window.loadCountries = function(callback) {
    var request = new XMLHttpRequest();
    request.open('GET', './files/countries.json', true); 
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                var countries = JSON.parse(request.responseText);
              callback(countries);
            }
            else
                console.log("Error loading page\n");
        }
    };
    request.send(null);
}

 window.loadCities = function(callback) {
    var request = new XMLHttpRequest();
    request.open('GET', './files/cities.json', true); 
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                var cities = JSON.parse(request.responseText);
                callback(cities)
            }
            else
                console.log("Error loading page\n");
        }
    };
    request.send(null);
}

