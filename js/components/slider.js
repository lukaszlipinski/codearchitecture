app.define('component/placeholder', function() {
    'use strict';

    function Slider(el, params) {
        var slider = this;

        this.settings = Object.assign({
            min : 1,
            max : 10,
            step : 1,
            value : 0,
            disabled : false
        }, params);

        this.el = el;

        /**
         * Private API
         */
        function initializeEventListeners() {
            slider.el.addEventListener('mousedown', function() {
                //cos
            });

            document.addEventListener('mouseup', function() {
                slider.el.removeEventListener('mousemove');
            });
        }

        function loadTemplate() {

        }

        /**
         * Initialize
         */
        (function() {
            initializeEventListeners();
        }());
    }

    /**
     * Public API
     */
    Slider.inherits(APP.Observer, {
        value : {
            get : function() {
                return this.settings.value;
            },

            set : function(value) {
                var oldValue = this.settings.value;

                this.settings.value = value;

                this.trigger('sl:change:value', [value, oldValue]);
            }
        }
    }).implement({
        destroy : function() {
            //unbind all events
        }
    });

    return Slider;
});
