
function getFormData() {

}



window.createResultForm = function () {
    var resultForm = document.getElementById("result");
    var pics = document.getElementById("pics");
    var name = document.querySelector("input[type=name]").value;
    var mail = document.querySelector("input[type=email]").value;
    var country = document.getElementsByClassName("item")[0].innerHTML;
    var city = document.getElementsByClassName("item")[1].innerHTML;

    var socials =[];

    //for( )
    if(socField.style.display = "inline-block"){
        var val = socField.value;
    }
    console.log(name, mail, country, city, val)

   




    resultForm.style.display = "block";
    pics.style.backgroundImage = "url('./files/" + image + ".jpg')"
};
