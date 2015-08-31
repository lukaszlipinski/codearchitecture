app.define('view/notifications', function() {
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

        },

        showMessages : function(messages) {
            //I don't use document.createDocumentFragment() on purpose
            messages.forEach(function(message, index) {
                var el = document.createElement('div');
                var id = 'notification_' + this.controller.getUniqueId();

                el.className = 'notification';
                el.innerHTML = message;
                el.id = id;

                //Fake delay
                setTimeout(function() {
                    this.el.appendChild(el);
                }.bind(this), 600 * index);
            }.bind(this));
        },

        /**
         * Destroys view
         */
        destroy : function() {

        }
    };

    return FormView;
});