'use strict'

require("./load-data.js");

var forms = document.getElementsByName("user-form");
var i = 0;

var field = document.getElementsByClassName('dropdown-toggle')[0];
var fieldSib = document.getElementsByClassName('dropdown-toggle')[1];

function getFormData() {

}
function checkValidayte() {
    console.log(i)
    if (i == 0) {
        return forms[i].checkValidity()
    }
    if (i == 2) {
        if (fieldSib.innerText == "Город" || field.innerText == "Страна") {
            alert("dsddsd")
        }
    }
};

function createResultForm() {
    var resultForm = document.getElementById("result");
    var pics = document.getElementById("pics");
    resultForm.style.display = "block";
    pics.style.backgroundImage = "url('./files/" + img + ".jpg')"
};

window.page = function (page) {
    console.log(i, page.innerText)
    if (forms[i].checkValidity()) {
        if (forms[page.innerText - 1].style.display !== "block") {
            forms[page.innerText - 1].style.display = "block";
            forms[i].style.display = "none";
            i = page.innerText - 1
            console.log(i, page.innerText + " after")
        }
    }
};

window.next = function () {
    forms[i].setAttribute("page", i)
    if (checkValidayte()) {
        if (i !== forms.length - 1) {
            forms[i].style.display = "none";
            forms[i + 1].style.display = "block";
            i++;
        } else {
            forms[i].style.display = "none";
            createResultForm()
        }
    } else {
        alert("beda")
    }
};

window.prev = function () {
    var forms = document.getElementsByName("user-form");
    if (checkValidayte()) {
        if (i !== 0) {
            forms[i].style.display = "none";
            forms[i - 1].style.display = "block";
            i--;
        }
    }
};


window.createList = function (listEelement, list, field) {
    if (listEelement.style.display == 'none') {
        listEelement.style.display = 'block';
        for (var key in list) {
            var li = document.createElement("li");
            var a = document.createElement("a");
            a.setAttribute("href", "#");
            a.setAttribute("data", key);
            listEelement.appendChild(li);
            li.appendChild(a);
            a.innerText = list[key];
            a.addEventListener("click", function () { chooseElement(this, list, listEelement, field) })
        }
    } else {
        dropList(listEelement)
    }
};


window.dropList = function (list) {
    if (list.style.display == 'block')
        list.style.display = 'none';
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
};

window.chooseElement = function (num, list, listEelement, field) {
    var choose = num.getAttribute("data")
    field.innerText = list[choose];
    field.setAttribute("countryCode", choose);
    dropList(listEelement)
};

window.getCountry = function () {
    window.field = document.getElementsByClassName('dropdown-toggle')[1];
    window.fieldSib = document.getElementsByClassName('dropdown-toggle')[0]
   /* if (fieldSib.innerHTML !== "Город") {
        fieldSib.innerHTML = "Город"
    }*/
    if (document.getElementById('dropdown-city').style.display == "block") {
        dropList(document.getElementById('dropdown-city'))

    }
    document.getElementById('error').style.display = "none";


    loadCountries(function (countries) {
        var listCountries = countries;
        var listCountry = document.getElementById('dropdown-country');

        createList(listCountry, listCountries, field)
    })
};

window.getCity = function () {
    loadCities(function (cities) {
        var list = [];
        var listCities = cities;

        var code = fieldSib.getAttribute("countrycode");
        //document.getElementsByClassName('dropdown-toggle')[0].getAttribute("countrycode");
        for (var key in listCities) {
            if (listCities[key].country == code) {
                list.push(listCities[key].name);
            };
        }
        var listCity = document.getElementById('dropdown-city');
        if (list.length !== 0) {
            createList(listCity, list, field)
        } else {
            document.getElementById('error').style.display = "block";
        }

    })
};



window.check = function (status) {
    var soc = status.nextSibling;
    var socField = soc.nextSibling;
    if (socField.style.display == "none") {
        socField.style.display = "block";
        console.log(socField.style.display)
    } else {
        socField.style.display = "none"
    }
}

window.chooseCat = function (img) {
    window.img = img.getAttribute("name");
    if (img.getAttribute("name") !== "dog4") {
        document.getElementById('errorDog').style.display = "none";
    } else {
        document.getElementById('errorDog').style.display = "block";
    }
}
