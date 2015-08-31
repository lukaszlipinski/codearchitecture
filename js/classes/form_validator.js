app.define('class/form_validator', function() {
    'use strict';

	/**
	 * - przejrzysta struktura
	 * - jedyna zależnością jest że 'validator' musi miec zaimplementowana metode 'getErrors'
	 */

    /**
     * @param {Array} validators   An array of {Validate} class instances
     * @constructor
     */
    function FormValidator(validators) {
        this.validators = validators;
        this.errors = [];

        this.initialize();
    }

    FormValidator.prototype = {
        initialize : function() {
            this.validators.forEach(function(validator) {
                this.errors = this.errors.concat(validator.getErrors());
            }.bind(this));
        },

        /**
         * Determines whether fields in the form are correctly filled
         *
         * @returns {Boolean}
         */
        isValid : function() {
            return this.errors.length === 0;
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

    return FormValidator;
});