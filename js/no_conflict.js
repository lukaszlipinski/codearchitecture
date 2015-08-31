(function(window) {
    'use strict';

    var modules = {};

    /**
     * Application namespace
     */
    window.app = {
        /**
         * Saves module definition in the application namespace
         *
         * @param {String} name
         * @param {Function} module
         */
        define : function(name, module) {
            modules[name] = module();
        },

        /**
         * Returns module definition
         *
         * @param {String} name
         * @returns {Function|Object}
         */
        get : function(name) {
            return modules[name];
        }
    };
}(this));
