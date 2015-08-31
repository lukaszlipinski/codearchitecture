app.define('helper/translation', function() {
    'use strict';

	/**
	 * Przykład helpera
	 */

    return {
        stringReplace : function(text) {
            if (!text) {
                return '';
            }

            for(var i = 1; i < arguments.length; i++) {
                text = text.split('%' + i).join(arguments[i]);
            }

            return text;
        }
    };
});














