window.page = function (page) {
    console.log(i, page.innerText)
    if (checkValidayte()) {
        if (forms[page.innerText - 1].style.display !== "block") {
            forms[page.innerText - 1].style.display = "block";
            forms[i].style.display = "none";
            i = page.innerText - 1
            console.log(i, page.innerText + " after")
        }
    }
}

window.next = function () {
    var errorMessege = document.getElementById("error_empty");
    forms[i].setAttribute("page", i)
    console.log(i)
    if (checkValidayte()) {
        errorMessege.style.display = "none"
        if (i !== forms.length - 1) {
            forms[i].style.display = "none";
            forms[i + 1].style.display = "block";
            errorMessege.style.display = "none"
            i++;
        } else {
            errorMessege.style.display = "none"
            forms[i].style.display = "none";
            document.getElementById("start_button").style.display = "block";
            createResultForm()
        }
    } else {
        if (errorMessege.style.display == "none") {
            errorMessege.style.display = "block"
        }

    }
}

window.prev = function () {
    var forms = document.getElementsByName("user-form");
    if (i !== 0) {
        forms[i].style.display = "none";
        forms[i - 1].style.display = "block";
        i--;
    }
}

