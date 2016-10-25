window.chooseCat = function (img) {
   window.image = img.getAttribute("name");
    if (image !== "dog4") {
        document.getElementById('error_cat').style.display = "none";
        document.getElementById('error_dog').style.display = "none";
    } else {
        document.getElementById('error_dog').style.display = "block";
    }
}