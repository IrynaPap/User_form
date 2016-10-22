window.checkValidayte = function() {
    if (i == 0) {
        if (!document.querySelector("input[type=email]").value.match(/[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i)) {
              document.getElementById('error_mail').style.display = "block";
            return (false)
        } else {
            document.querySelector("input[type=email]").style.border = "auto"
              document.getElementById('error_mail').style.display = "none";
            return (forms[i].checkValidity())
        }
    }
    if (i == 1) {
        if (document.getElementsByClassName('dropdown_input')[1].value == "Город" || document.getElementsByClassName('dropdown_input')[0].value == "Страна") {
            
            return false;
        } else {
            return true;
        }
    }
    if (i == 2) {
        if (typeof socField == undefined) {
            if (socField.style.display == "block") {
                console.log(socField)
                return socField.checkValidity()
            }
        } else {
            return true
        }
    }
    if (i == 3) {
        if (typeof image == "undefined") {
            return false
        } else {
            return true
        }
    }
};