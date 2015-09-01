app.define('model/some_model', function() {
    return BaseModel.extend({
        initialize : function() {

        },

        /**
         * Getter
         */
        getSize : function() {
            return this.size;
        },

        /**
         * Setter
         */
        setSize : function(value) {
            this.size = value;
        }
    });
});
