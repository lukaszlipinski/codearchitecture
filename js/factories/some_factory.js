app.define('factory/some_factory', function() {
    return {
        getVerticalSlider : function(el) {
            return new Slider(el, {
                min : 1,
                max : 2,
                step : 0.5,
                value : 1,
                orientation : 'vertical',OrientationEnums.VERTICAL
            });
        },

        getSnappingSlider : function(el) {
            return new Slider(el, {
                min : 1,
                max : 2,
                step : 0.5,
                value : 1,
                snap : true
            });
        }
    };
});