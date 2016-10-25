var $ = require('jquery');
function getFormData() {

}



window.createResultForm = function () {
    var resultForm = document.getElementById("result");
    var pics = document.getElementById("pics");
    var name = document.querySelector("input[type=name]").value;
    var mail = document.querySelector("input[type=email]").value;
    var country = document.getElementsByClassName("item")[0].innerText;
    var city = document.getElementsByClassName("item")[1].innerText;

    $("#pers_info>h1").text(name)
    $("#pers_info>p").text(mail)
    $("#pers_info>span:first").text(city)
    $("#pers_info>span:last").text(country)

        var soc = {};
        var n = $(".checkbox").length;
        for (var j = 0; j < n; j++) {
            var index = document.querySelectorAll("input[type=checkbox]")[j].value;
            var value = document.getElementById(index).value;
            if (value !== "") {
                soc[j + 1] = { ind: index, val: value };
            };
        };

        var ul = resultForm.getElementsByTagName("ul")[0];
        for(key in soc){
            var li = document.createElement("li");
            ul.appendChild(li);
            li.innerText = soc[key].ind+" : " + soc[key].val
        }
   
    console.log(name, mail, country, city)

    resultForm.style.display = "block";
    pics.style.backgroundImage = "url('./files/" + image + ".jpg')"
};
