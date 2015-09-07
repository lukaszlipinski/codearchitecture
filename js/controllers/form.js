/*global BaseController, Events */

app.define('controller/form', function() {
    'use strict';

    var FormController = function(options) {
        this.view = null;
        this.el = options.el;
        this.notificationsController = options.notificationsController;

        this.initialize(options);
    };

    FormController.prototype = {
        initialize : function() {
            this.initializeView();
            this.initializeEventListeners();
        },

        initializeView : function() {
            var FormView = app.get('view/form');

            this.view = new FormView({
                el : this.el,
                controller : this
            });
        },

        initializeEventListeners : function() {
            //Przykład nasluchu na zdarzenia z kolekcji. Tworzymy zawsze funkcje listenera
            this.getCollection('fields').onAddField(this, this.onAddField.bind(this));
			this.getCollection('fields').on('add filed', this.onAddField.bind(this));//zle

            //Przykład nasłuchu na eventy globalne (np bardzo luzna komunikacja miedzy modułami)
            this.observeEvent(Events.something.happend, this.onSomethingHappend.bind(this));

			//Nie dla eventow UI
        },

        /**
         * Shows messages given as argument to user
         *
         * @param {Array} messages
         */
        showMessages : function(messages) {
            this.notificationsController.showMessages(messages);
        },

        /**
         * Returns form validator
         *
         * @param {Object} data
         * @returns {FormValidator}
         */
        getFormValidator : function(data) {
            var FormValidator = app.get('class/form_validator');
            var Validate = app.get('class/validate');

            var validator = new FormValidator([
                new Validate(data.field_first_name).isPlainText("Incorrect first name"),
                new Validate(data.field_last_name).isPlainText("Incorrect last name"),
                new Validate(data.field_textarea_1).hasLength(1, 10, "Text in 'textarea 1' has %3 characters but should be in range of %1 and %2"),
                new Validate(data.field_textarea_2).hasLength(1, 20, "Text in 'textarea 2' has %3 characters but should be in range of %1 and %2"),
                new Validate(data.field_email).isEmail("Incorrect email address"),
                new Validate(data.field_password).isPassword("Incorrect password"),
                new Validate(data.field_vid_number).hasLength(1, 10, "Vid number has %3 characters but should be in range of %1 and %2").isVidNumber("Incorrect VID number"),
                new Validate(data.field_tickets_count).isInRange(1, 10, "Invalid ticket count")
            ]);

            return validator;
        },

        /**
         * Returns list of form elements names
         *
         * @returns {String[]}
         */
        getFieldsNames : function() {
            return [
                'field_first_name', 'field_last_name', 'field_textarea_1', 'field_textarea_2',
                'field_email', 'field_password', 'field_vid_number', 'field_tickets_count'
            ];
        },

        /**
         * Handles 'on submit' event
         *
         * @param {Object} e
         * @param {Object} data
         * @returns {Boolean}
         */
        onFormSubmit : function(e, data) {
            var formValidator = this.getFormValidator(data);

            if (!formValidator.isValid()) {
                //Stop submission
                e.preventDefault();

                this.showMessages(formValidator.getErrors());
            }

            return true;
        },

        onAddField : function() {
            //Zrób coś
        },

        onSomethingHappend : function() {
            //Zrób coś
        },

        onSomeButtonClick : function(type) {
            //zrób coś z tą informacją
        },

        destroy : function() {
            this.view.destroy();
        }
    };

    return FormController;
});
