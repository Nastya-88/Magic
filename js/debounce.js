'use strict';


(function () {
	var DEBOUNCE_INTERVAL = 500; //ms
	var lastTimeout;

	var removeDebounce = function(callback) {

			if (lastTimeout) {
				clearTimeout(lastTimeout);
			}
			lastTimeout = setTimeout(callback, DEBOUNCE_INTERVAL);
		};
		window.debounce = removeDebounce;
})();


