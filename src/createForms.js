

window.check = function (status) {
   
    var soc = status.nextSibling;
   window.socField = soc.nextSibling;
    if (socField.style.display == "none") {
        socField.style.display = "inline-block";
    } else {
        socField.style.display = "none"
         document.getElementById('error_soc').style.display = "none";
    }

    console.log(socField)
}

window.chooseCat = function (img) {
   window.image = img.getAttribute("name");
    if (image !== "dog4") {
        document.getElementById('error_cat').style.display = "none";
        document.getElementById('error_dog').style.display = "none";
    } else {
        document.getElementById('error_dog').style.display = "block";
    }
}