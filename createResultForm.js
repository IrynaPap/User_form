
function getFormData() {

}



window.createResultForm = function () {
    var resultForm = document.getElementById("result");
    var pics = document.getElementById("pics");
    resultForm.style.display = "block";
    pics.style.backgroundImage = "url('./files/" + image + ".jpg')"
};
