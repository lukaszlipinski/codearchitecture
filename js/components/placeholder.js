app.define('component/placeholder', function() {
    'use strict';

	/**
	 * - przykład komponentu
	 */

    /**
     * Placeholder Class
     *
     * @param el {HTMLElement}
     * @constructor
     */
    function Placeholder(el) {
        this.className = 'placeholder';
        this.el = el;
        this.input = el.querySelector('input, textarea');
        this.placeholder = this.createElement();

        this.initialize();
    }

    Placeholder.prototype = {
        /**
         * Initializes component
         */
        initialize : function() {
            this.initializeEventListeners();
            this.validateVisibility();
        },

        /**
         * Registers UI events
         */
        initializeEventListeners : function() {
            this.input.addEventListener('keyup', this.validateVisibility.bind(this));
        },

        /**
         * Creates placeholder element and injects it to the textbox or textarea
         *
         * @returns {HTMLElement}
         */
        createElement : function() {
            var placeholder = document.createElement('div');
            placeholder.className = this.className;
            placeholder.innerHTML = this.el.getAttribute('data-placeholder');

            this.el.appendChild(placeholder);

            return this.el.querySelector('.' + this.className);
        },

        /**
         * Checks whether placeholder should be visible or hidden
         *
         * @param e {Object}
         */
        validateVisibility : function(/*e*/) {
            var stringLen = (this.input.value || '').length;

            this.placeholder.style.display = stringLen > 0 ? 'none' : 'block';
        },

        /**
         * Destroys component
         */
        destroy : function() {
            this.input.removeEventListener('keyup', this.validateVisibility.bind(this));
        }
    };

    return Placeholder;
});
