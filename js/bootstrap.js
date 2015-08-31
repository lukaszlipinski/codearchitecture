(function(window) {
    'use strict';

    var FormController = app.get('controller/form');
    var NotificationsController = app.get('controller/notifications');

    //Controllers
    var formController = new FormController({
        el : document.getElementById('register_form'),
        notificationsController : new NotificationsController({
            el : document.getElementById('notifications')
        })
    });
}(this));
