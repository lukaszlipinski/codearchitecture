/*global jQuery */

(function() {
	"use strict";

	function CustomSlider(el, params) {
		this.el = el;
		this.settings = _.extend({
			min : 1,
			max : 10,
			step : 1,
			value : 0,
			disabled : false
		}, params);

		this.slider = null;
		this.button_left = null;
		this.button_right = null;

		this.initialize();
	}

	CustomSlider.prototype = {
		initialize : function() {
			var isDisabled = this.settings.disabled,
				settings = this.settings;

			this.slider = this.el.find('.js-slider').slider({
				min : settings.min,
				max : settings.max,
				step : settings.step,
				value : settings.value,
				$parent : $el,
				disabled : isDisabled
			});

			this.button_left = this.el.find('.js-button-left').button({
				template : 'empty',
				disabled : isDisabled
			}).on('btn:click', function() {
				this.slider.stepDown();
			}.bind(this));

			this.button_right = this.el.find('.js-button-right').button({
				template : 'empty',
				disabled : isDisabled
			}).on('btn:click', function() {
				this.slider.stepUp();
			}.bind(this));
		},

		setValue : function(value, props) {
			this.slider.setValue(value, props);

			return this;
		},

		getValue : function() {
			return this.slider.getValue();
		},

		setMax : function(value) {
			this.slider.setMax(value);

			return this;
		},

		getMax : function() {
			return this.slider.getMax();
		},

		disable : function() {
			this.button_left.disable();
			this.button_right.disable();
			this.slider.disable();

			return this;
		},

		enable : function() {
			this.button_left.enable();
			this.button_right.enable();
			this.slider.enable();

			return this;
		},

		destroy : function() {
			this.button_left.destroy();
			this.button_right.destroy();
			this.slider.destroy();
		}
	};

	return CustomSlider;
}());
