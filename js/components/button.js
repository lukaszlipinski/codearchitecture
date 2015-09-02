(function($) {
	'use strict';

	$.fn.button = function(params) {
		var settings = $.extend({
			caption : '',
			disabled : false
		}, params);

		var _self = this, $el = $(this);

		/**
		 * Removes all binded events from component
		 */
		function unbindEvents(destroy) {
			$el.off('.button');
			$el.off('btn:click');
		}

		/**
		 * Binds all events
		 */
		function bindEvents() {
			$el.on('click.button', function(e) {
				if (settings.disabled) {
					return;
				}

				_self.trigger('btn:click', [_self]);
			});
		}

		/**
		 * Disables or enables component, also adds "disabled" class to the root node
		 * and "disabled" attribute on the input element, so the component can be skinned
		 *
		 * @param {Boolean}   bool   Determinates whether component is enabled or not
		 */
		function disable(bool) {
			settings.disabled = bool;

			$el.toggleClass('disabled', bool);
		}

		/**
		 * Public method which allows to change the caption of the button
		 *
		 * @param {String} caption   new caption of the button
		 *
		 * @return {Object}  jQuery Component Object
		 */
		this.setCaption = function(caption) {
			settings.caption = caption;

			setCaption();

			return this;
		};

		/**
		 * Public method which returns button's caption
		 *
		 * @return {String}
		 */
		this.getCaption = function() {
			return settings.caption;
		};

		/**
		 * Disables button
		 *
		 * @return {Object}  jQuery Component Object
		 */
		this.disable = function(value) {
			//implment me
			return this;
		};

		/**
		 * Enables button
		 *
		 * @return {Object}  jQuery Component Object
		 */
		this.enable = function() {
			//implment me
			return this;
		};

		/**
		 * Cleans up stuff before component will be removed
		 */
		this.destroy = function() {
			unbindEvents();
		};

		//Initialization
		(function() {
			loadTemplate();
			bindEvents();
		}());

		return this;
	};
}(jQuery));
