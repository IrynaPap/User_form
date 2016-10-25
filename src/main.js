'use strict'


require("./navigationButtons.js")
require("./validateData.js");
// require("bootstrap-material-design")
// require("bootstrap-material-design/dist/css/bootstrap-material-design.css")
// require("bootstrap-material-design/dist/css/ripples.css")
require('bootstrap/dist/css/bootstrap.css')

require("selectize")
require("selectize/dist/css/selectize.bootstrap3.css");
require("./style.css");

var $ = require('jquery');
var components = require('./components');


$(document).ready(function () {
    $(".row").append(components.container);
    window.forms = document.getElementsByClassName("user_form");
    window.i = 0;
    renderStep2();
    document.getElementsByClassName("btn_nav_top")[i].style.color = "#333"
});

