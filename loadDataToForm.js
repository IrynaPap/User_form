window.chooseElement = function (num, list, listEelement, field) {
    var choose = num.getAttribute("data")
    field.value = list[choose];
    field.setAttribute("countryCode", choose);
    dropList(listEelement)
}

window.getCountry = function () {
    var field = document.getElementsByClassName('dropdown_input')[0];
    var fieldSib = document.getElementsByClassName('dropdown_input')[1];
    if (fieldSib.innerHTML !== "Город") {
        fieldSib.innerHTML = "Город"
    }
    if (document.getElementById('dropdown_city').style.display == "block") {
        dropList(document.getElementById('dropdown_city'))

    }
    document.getElementById('error').style.display = "none";
    loadCountries(function (countries) {
        var listCountries = countries;
        var listCountry = document.getElementById('dropdown_country');

        createList(listCountry, listCountries, field)
    })
};

window.getCity = function () {
    loadCities(function (cities) {
        var list = [];
        var listCities = cities;
        var field = document.getElementsByClassName('dropdown_input')[1];
        var code = document.getElementsByClassName('dropdown_input')[0].getAttribute("countrycode");
        for (var key in listCities) {
            if (listCities[key].country == code) {
                list.push(listCities[key].name);
            };
        }
        var listCity = document.getElementById('dropdown_city');
        if (list.length !== 0) {
            createList(listCity, list, field)
        } else {
            document.getElementById('error').style.display = "block";
        }

    })
};

