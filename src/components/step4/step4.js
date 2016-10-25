var $ = require('jquery');

window.chooseCat = function (img) {
   var errorCat = $('#error_cat')
   $(errorCat).css("display","none");
    window.image = img.getAttribute("name");
    if (image !== "dog4") {
        document.getElementById('error_cat').style.display = "none";
        document.getElementById('error_dog').style.display = "none";
    } else {
        document.getElementById('error_dog').style.display = "block";
    }
}