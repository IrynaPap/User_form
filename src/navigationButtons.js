require("selectize")
var $ = require('jquery');


window.page = function (page) {
    if (checkValidayte()) {
        if (forms[page.innerText - 1].style.display !== "block") {
            forms[page.innerText - 1].style.display = "block";
            forms[i].style.display = "none";
            i = page.innerText - 1
        }
    }
}

window.next = function () {

    forms[i].setAttribute("page", i)
    if (checkValidayte()) {
        if (i !== forms.length - 1) {
            forms[i].style.display = "none";
            forms[i + 1].style.display = "block";
            i++;
            document.getElementsByClassName("btn_nav_top")[i - 1].style.color = "#ff9800";
            document.getElementsByClassName("btn_nav_top")[i].style.color = "rgb(51, 51, 51)";
            if (i == 3) {
                $("#next_button").text("Завершить");
                setBtnStyle("next_button")
            }
        } else {
            forms[i].style.display = "none";
            $("#start_button").css("display", "inline-block");
            $("#next_button").css("display", "none");
            $("#prev_button").css("display", "none");;
            $("#nav_group").css("display", "none");

            createResultForm()
        }
    }
}

function setBtnStyle(btn_id) {
    document.getElementById(btn_id).style.backgroundColor = "#f7931d";
    document.getElementById(btn_id).removeAttribute("class", "nav_btn")
    document.getElementById(btn_id).setAttribute("class", "btn btn-default text-center ")
    document.getElementById(btn_id).style.color = "#ffffff"
}

window.prev = function () {
    if (i !== 0) {
        forms[i].style.display = "none";
        forms[i - 1].style.display = "block";
        i--;
        var errorElem = document.getElementsByClassName('error');
        for (var k = 0; k < errorElem.length; k++) {
            errorElem[k].style.display = 'none';
        }
        $("#next_button").text("Следующий");
        $("#next_button").css("backgroundColor", "#fff");
        $("#next_button").css("color", "#ff9800");
        $("#next_button").css("display", "inline-block");
    }
}
window.start = function () {
    var m, n;
    var $countries = $('#countries').selectize({
        persist: true,
        create: true
    });

    (function () {
        var selectize = $countries[0].selectize;
        selectize.clear();
    })()

    forms[i].style.display = "none";
    $("#start_button").css("display", "none");
    $("#result").css("display", "none");


    document.querySelector("input[type=name]").value = "";
    document.querySelector("input[type=email]").value = "";


    while(document.getElementsByTagName("ul")[0].firstChild){
        document.getElementsByTagName("ul")[0].firstChild.remove()
    }

    n = $(".checkbox").length;
    for (var j = 0; j < n + 1; j++) {
        document.querySelectorAll("input[type=text]")[j + 1].value = "";
        document.querySelectorAll("input[type=text]")[j + 1].style.display = "none";
    };

    var soc = {};
    for (var l = 0; l < n; l++) {
        document.querySelectorAll("input[type=checkbox]")[l].checked = false;
    }

    i = 0;
    forms[i].style.display = "block";
    $("#next_button").text("Следующий")
    for (var c = 0; c < $(".btn_nav_top").length; c++) {
        $(".btn_nav_top").css("color", "#bbbbbb")
    }
    document.getElementsByClassName("btn_nav_top")[i].style.color = "rgb(51, 51, 51)"
    $("#next_button").css("backgroundColor", "#fff");
    $("#next_button").css("color", "#ff9800");
    $("#next_button").css("display", "inline-block");
    $("#prev_button").css("display", "inline-block");
    $("#nav_group").css("display", "block");


};





