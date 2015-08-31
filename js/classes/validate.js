app.define('class/validate', function() {
    'use strict';

	/**
	 * - niezalezna klasa walidujaca do wielokrotnego uzytku
	 */

    function Validate(str) {
        this.str = str || "";
        this.errors = [];
    }

    Validate.prototype = {
        /**
         * Checks whether password is fulfilling criteria
         *
         * @param {String} errorMessage
         * @returns {Validate}
         */
        isPassword : function(errorMessage) {
            var strLen = this.str.length;
            var containsNumber = new RegExp(/\d/);
            var containsLetter = new RegExp(/\D/);
            var containsSpecialCharacter = new RegExp(/[^A-Za-z0-9]/);

            if (strLen < 8 || !containsNumber.test(this.str) || !containsLetter.test(this.str) || !containsSpecialCharacter.test(this.str)) {
                this.errors.push(errorMessage);
            }

            return this;
        },

        /**
         * Checks whether email is fulfilling criteria
         *
         * @param {String} errorMessage
         * @returns {Validate}
         */
        isEmail : function(errorMessage) {
            var regexObj = new RegExp(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/);

            if (!regexObj.test(this.str)) {
                this.errors.push(errorMessage);
            }

            return this;
        },

        /**
         * Checks whether VID number is fulfilling criteria
         *
         * @param {String} errorMessage
         * @returns {Validate}
         */
        isVidNumber : function(errorMessage) {
            var regexObj = new RegExp(/^([0-9]{1,})$/);

            if (!regexObj.test(this.str)) {
                this.errors.push(errorMessage);
            }

            return this;
        },

        /**
         * Checks whether string has correct length
         *
         * @param {Number} minimal required length
         * @param {Number} maximal required length
         * @param {String} errorMessage
         * @returns {Validate}
         */
        hasLength : function(min, max, errorMessage) {
            var strLen = this.str.length;
            var HelperTranslation = app.get('helper/translation');

            if (strLen < min || strLen > max) {
                this.errors.push(HelperTranslation.stringReplace(errorMessage, min, max, strLen));
            }

            return this;
        },

        /**
         * Checks whether value is a number and is in given range
         *
         * @param {Number} min
         * @param {Number} max
         * @param {String} errorMessage
         * @returns {Validate}
         */
        isInRange : function(min, max, errorMessage) {
            var num = parseInt(this.str, 10) || 0;
            var HelperTranslation = app.get('helper/translation');

            if (num < min || num > max) {
                this.errors.push(HelperTranslation.stringReplace(errorMessage, min, max, num));
            }

            return this;
        },

        /**
         * Checks whether string does not contain numbers
         *
         * @param errorMessage
         * @returns {Validate}
         */
        isPlainText : function(errorMessage) {
            var regexObj = new RegExp(/\d/);

            if (regexObj.test(this.str)) {
                this.errors.push(errorMessage);
            }

            return this;
        },

        /**
         * Returns array of error messages of not passed checks
         *
         * @returns {Array}
         */
        getErrors : function() {
            return this.errors;
        }
    };

    return Validate;
});