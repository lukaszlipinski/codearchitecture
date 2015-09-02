/*global Button */

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
            this.initializeButtons();
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
                this.registerComponent('placeholder_' + i, new Placeholder(textboxes[i]));
            }
        },

        initializeButtons : function() {
            var some_button = this.registerComponent('some_button', new Button(this.el, {
                caption : 'Some Button',
                disabled : true
            }).on('btn:click', this.onSomeButtonClick.bind(this)));
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

        onSomeButtonClick : function(e, btn) {
            var state = btn.getState();

            this.controller.onSomeButtonClick(state);
        },

        /**
         * Destroys view
         */
        destroy : function() {

        }
    };

    return FormView;
});