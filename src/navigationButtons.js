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

    forms[i].setAttribute("page", i)
    
    if(i == 2){
        window.socArr = []
        //for(key in socField){
            if(socField.style.display=="inline-block"){
                console.log(socField.length)
        }
        //}

        console.log(socField)
    }

    if (checkValidayte()) {
        if (i !== forms.length - 1) {
            forms[i].style.display = "none";
            forms[i + 1].style.display = "block";
            i++;
        } else {
            forms[i].style.display = "none";
            document.getElementById("start_button").style.display = "inline-block";
            document.getElementById("next_button").style.display = "none"
            document.getElementById("prev_button").style.display = "none"
            createResultForm()
        }
    }
}

window.prev = function () {


    var forms = document.getElementsByName("user-form");
    if (i !== 0) {
        forms[i].style.display = "none";
        forms[i - 1].style.display = "block";
        i--;
       /* var errorElem = document.getElementsByClassName('error');
        for (i = 0; i < errorElem.length; i++) {
            errorElem[i].style.display = 'none';
        }*/
    }
}
window.start = function () {
    i = 0;
}
