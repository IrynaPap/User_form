/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(3);

	var i = 0;
	window.next = function() {
	    var forms = document.getElementsByName("user-form");
	    if (forms[i].checkValidity()) {
	        if (i !== forms.length - 1) {
	            forms[i].style.display = "none";
	            forms[i + 1].style.display = "block";
	            i++;
	        } else {
	            alert("тут будет формочка")
	        }
	    } else {
	        alert("beda")
	    }
	}


	window.getCountry = function(){
	    loadCountries()
	}

/***/ },
/* 1 */
/***/ function(module, exports) {

	

/***/ },
/* 2 */
/***/ function(module, exports) {

	

/***/ },
/* 3 */
/***/ function(module, exports) {

	function loadCountries() {
	    var request = new XMLHttpRequest();
	    request.open('GET', './files/countries.json', true); 
	    request.onreadystatechange = function () {
	        if (request.readyState == 4) {
	            if (request.status == 200) {
	                var countries = JSON.parse(request.responseText);
	                console.log(countries)
	            }
	            else
	                console.log("Error loading page\n");
	        }
	    };
	    request.send(null);
	}

	function loadCities() {
	    var request = new XMLHttpRequest();
	    request.open('GET', './files/countries.json', true); 
	    request.onreadystatechange = function () {
	        if (request.readyState == 4) {
	            if (request.status == 200) {
	                var cities = JSON.parse(request.responseText);
	            }
	            else
	                console.log("Error loading page\n");
	        }
	    };
	    request.send(null);
	}


/***/ }
/******/ ]);