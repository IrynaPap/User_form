
window.checkValidayte = function () {
    if (i == 0) {
        if (document.querySelector("input[type=name]").value == "") {
            document.getElementById('error_name').style.display = "block";
            return false
        } else {
            if (!document.querySelector("input[type=email]").value.match(/[0-9a-z_]+@[0-9a-z_]+\.[a-z]{2,5}/i)) {
                document.getElementById('error_mail').style.display = "block";
                document.getElementById('error_name').style.display = "none";
                return false
            } else {
                document.querySelector("input[type=email]").style.border = "auto"
                document.getElementById('error_mail').style.display = "none";
                document.getElementById('error_name').style.display = "none";
                return true
            }
        }
    }
    if (i == 1) {
        if (document.getElementsByClassName("item")[0] == undefined) {
            document.getElementById('error_country').style.display = "block";
            return false;
        } else {
            document.getElementById('error_country').style.display = "none";
            if (document.getElementsByClassName("item")[1] == undefined) {
                document.getElementById('error_city').style.display = "block";
                return false;
            } else {
                document.getElementById('error_city').style.display = "none";
                return true;
            }
        }
    }
    if (i == 2) {
        if (typeof id !== "undefined") {
            if (document.getElementById(id).style.display == "block") {
                if (document.getElementById(id).value == "") {
                    document.getElementById('error_soc').style.display = "block";
                    return false
                } else {
                    document.getElementById('error_soc').style.display = "none";
                    return true
                }
            } else {
                return true;
            }
        } else {
            document.getElementById('error_soc').style.display = "none";
            return true
        }
    }
    if (i == 3) {
        if (typeof image == "undefined" || image == "dog4") {
            document.getElementById('error_cat').style.display = "block";
            return false
        } else {
            document.getElementById('error_cat').style.display = "none";
            return true
        }
    }
};