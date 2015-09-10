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

	module.exports = __webpack_require__(75)
	module.exports.template = __webpack_require__(76)


/***/ },

/***/ 67:
/***/ function(module, exports) {

	module.exports = {

	    props: ['isAdmin'],

	    methods: {
	        getDataObject: function (defaultValue) {
	            if (this.isAdmin) {
	                this.field.data.value = this.field.data.value || defaultValue;
	                return this.field.data;
	            }
	            this.submission.data[this.field.id].type = this.field.type;
	            this.submission.data[this.field.id].label = this.field.label;
	            this.submission.data[this.field.id].value = defaultValue;
	            this.submission.data[this.field.id].prepared = this.field.prepared;
	            return this.submission.data[this.field.id];
	        },
	        fieldInvalid: function (form) {
	            return form[this.fieldid].invalid;
	        }

	    },

	    computed: {
	        fieldRequired: function () {
	            return this.field.data.required && !this.isAdmin ? true : false;
	        },
	        fieldLabel: function () {
	            return this.isAdmin ? 'Default value' : this.field.label;
	        }
	    }

	};

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	var formmakerfieldMixin = __webpack_require__(67);

	    module.exports = {

	        inherit: true,

	        mixins: [formmakerfieldMixin],

	        data: function () {
	            return {
	                fieldid: _.uniqueId('formmakerfield_')
	            };
	        },

	        created: function () {
	            var defaultValue = this.field.data.multiple ? [] : this.field.options.length ? this.field.options[0].value : '';
	            this.$set('dataObject', this.getDataObject(this.field.data.value || defaultValue));
	        }

	    };

	    window.Formmakerfields.components['pulldown'] = module.exports;

/***/ },

/***/ 76:
/***/ function(module, exports) {

	module.exports = "<div v-show=\"isAdmin && field.data.multiple\" class=\"uk-form-row\">\n        <label for=\"form-size\" class=\"uk-form-label\">{{ 'Size' | trans }}</label>\n\n        <div class=\"uk-form-controls\">\n            <input id=\"form-size\" class=\"uk-form-width-small uk-text-right\" type=\"number\" min=\"1\"\n                   v-model=\"field.data.size\" number>\n        </div>\n    </div>\n\n    <div class=\"uk-form-row {{field.data.classSfx || ''}}\">\n        <label for=\"{{ fieldid }}\" class=\"uk-form-label\" v-show=\"!field.data.hide_label\">{{ fieldLabel | trans\n            }}</label>\n\n        <div class=\"uk-form-controls\">\n\n            <select v-if=\"field.data.multiple\" class=\"uk-form-width-large\" multiple=\"multiple\"\n                    options=\"field.options\"\n                    v-attr=\"name: fieldid, id: fieldid, size:field.data.size > 1 ? field.data.size : false\"\n                    v-model=\"dataObject.value\"\n                    v-valid=\"required: fieldRequired\"></select>\n\n            <select v-if=\"!field.data.multiple\" class=\"uk-form-width-large\"\n                    options=\"field.options\"\n                    v-attr=\"name: fieldid, id: fieldid, size:field.data.size > 1 ? field.data.size : false\"\n                    v-model=\"dataObject.value\"\n                    v-valid=\"required: fieldRequired\"></select>\n\n            <p class=\"uk-form-help-block uk-text-danger\" v-show=\"fieldInvalid(form)\">{{ field.data.requiredError ||\n                'Please select a value' | trans }}</p>\n        </div>\n    </div>";

/***/ }

/******/ });