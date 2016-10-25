
window.check = function (status) {
    window.id = status.value;
    if (status.checked) {
        document.getElementById(id).style.display = "block"
    } else {
        document.getElementById(id).style.display = "none"
        document.getElementById('error_soc').style.display = "none";
    }

}
