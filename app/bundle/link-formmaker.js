var Forms =
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
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(83)
	module.exports.template = __webpack_require__(84)


/***/ },

/***/ 83:
/***/ function(module, exports) {

	module.exports = {

	        link: {
	            label: 'Formmaker'
	        },

	        props: ['link'],

	        data: function () {
	            return {
	                forms: [],
	                formid: ''
	            }
	        },

	        created: function () {
	            //TODO don't retrieve entire form objects
	            this.$resource('api/formmaker/form').get(function (forms) {
	                this.forms = forms;
	                if (forms.length) {
	                    this.formid = forms[0].id;
	                }
	            });
	        },

	        watch: {

	            formid: function (formid) {
	                this.link = '@formmaker/form/front?id=' + formid;
	            }

	        },

	        computed: {

	            formOptions: function () {
	                return _.map(this.forms, function (form) {
	                    return {text: form.title, value: form.id};
	                });
	            }

	        }

	    };

	    window.Links.components['formmaker'] = module.exports;

/***/ },

/***/ 84:
/***/ function(module, exports) {

	module.exports = "<div class=\"uk-form-row\">\n        <label for=\"form-link-formmaker\" class=\"uk-form-label\">{{ 'Form' | trans }}</label>\n        <div class=\"uk-form-controls\">\n            <select id=\"form-link-formmaker\" class=\"uk-width-1-1\" v-model=\"formid\" options=\"formOptions\"></select>\n        </div>\n    </div>";

/***/ }

/******/ });