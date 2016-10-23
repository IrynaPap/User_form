'use strict'

window.forms = document.getElementsByName("user-form");
window.i = 0;
require("./createForms.js");
require("./createResultForm.js");
require("./navigationButtons.js")
require("./validateData.js");
// require("bootstrap-material-design")
// require("bootstrap-material-design/dist/css/bootstrap-material-design.css")
// require("bootstrap-material-design/dist/css/ripples.css")
require('bootstrap/dist/css/bootstrap.css')

require("selectize")
require("./style.css");
require("selectize/dist/css/selectize.bootstrap3.css");

var $ = require('jquery');
var components = require('./components');


$(document).ready(function () {
    $(".row").append(components.container);
    renderStep2();
});