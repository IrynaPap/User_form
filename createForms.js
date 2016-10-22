
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
}

window.dropList = function (list) {
    if (list.style.display == 'block')
        list.style.display = 'none';
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

window.check = function (status) {
    var soc = status.nextSibling;
    window.socField = soc.nextSibling;
    if (socField.style.display == "none") {
        socField.style.display = "block";
        console.log(socField.style.display)
    } else {
        socField.style.display = "none"
    }
}

window.chooseCat = function (img) {
    window.image = img.getAttribute("name");
    if (image !== "dog4") {
        document.getElementById('error_dog').style.display = "none";
    } else {
        document.getElementById('error_dog').style.display = "block";
    }
}