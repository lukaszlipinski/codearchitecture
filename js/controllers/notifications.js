app.define('controller/notifications', function() {
    'use strict';

    var NotificationsController = function(options) {
        this.view = null;
        this.el = options.el;
        this.uniqueId = 0;

        this.initialize(options);
    };

    NotificationsController.prototype = {
        /**
         * Initializes controller
         */
        initialize : function() {
            this.initializeView();
        },

        /**
         * Initializes controller's view
         */
        initializeView : function() {
            var NotificationsView = app.get('view/notifications');

            this.view = new NotificationsView({
                el : this.el,
                controller : this
            });
        },

        getUniqueId : function() {
            return ++this.uniqueId;
        },

        showMessages : function(messages) {
            this.view.showMessages(messages);
        },

        /**
         * Destroys controller
         */
        destroy : function() {
            this.view.destroy();
        }
    };

    return NotificationsController;
});
