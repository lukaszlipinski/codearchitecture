app.define('view/form', function() {
    'use strict';

    var FormView = function(options) {
        this.el = options.el;
        this.controller = options.controller;

        this.initialize(options);
    };

    FormView.prototype = {
        /**
         * Initializes view
         */
        initialize : function() {
            this.initializePlaceholders();
            this.initializeEventListeners();
        },

        initializeEventListeners : function() {
            this.el.addEventListener('submit', this.onFormSubmit.bind(this));
        },

        /**
         * Initializes placeholders for all textboxes and textareas in the document
         */
        initializePlaceholders : function() {
            var textboxes = this.el.querySelectorAll('.textbox, .textarea');
            var Placeholder = app.get('component/placeholder');

            for(var i = 0; i < textboxes.length; i++) {
                //all instances should be stored and destroyed when are no longer in use
                new Placeholder(textboxes[i]);
            }
        },

        onFormSubmit : function(e) {
            var fieldsNames = this.controller.getFieldsNames(),
                elements = this.el.elements;
            var data = {};

            fieldsNames.forEach(function(name) {
                data[name] = elements[name].value;
            });

            this.controller.onFormSubmit(e, data);
        },

        /**
         * Destroys view
         */
        destroy : function() {
            this.el.removeEventListener('submit', this.onFormSubmit.bind(this));
        }
    };

    return FormView;
});