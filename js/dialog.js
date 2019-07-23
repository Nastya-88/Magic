'use strict';


(function () {

	// открытие и закрытие окна
	window.setup = document.querySelector('.setup');
	var setupOpen = document.querySelector('.setup-open');
	var setupClose = document.querySelector('.setup-close');
	var setupOpenIcon = document.querySelector('.setup-open-icon');
	var dialogHandler = document.querySelector('.upload');
	var form = document.querySelector('.setup-wizard-form');
	var ESC_KEYCODE = 27;
	var ENTER_KEYCODE = 13;
	

	setupOpen.addEventListener('click', function() {
		openPopup();
	});

	setupClose.addEventListener('click', function() {
		closePopup();
	});
	setupClose.addEventListener('keydown', function(evt) {
		if (evt.keyCode === ENTER_KEYCODE) {
			closePopup();
		}
	});

	setupOpenIcon.addEventListener('keydown', function(evt) {
		if (evt.keyCode === ENTER_KEYCODE) {
			openPopup();
		}
	});

	var onPopupEscPress = function (evt) {
		if (evt.keyCode === ESC_KEYCODE) {
			closePopup();
		}
	};
	var openPopup = function() {
		window.setup.classList.remove('hidden');
		document.addEventListener('keydown', onPopupEscPress);
	};

	var closePopup = function() {
		window.setup.classList.add('hidden');
		document.removeEventListener('keydown', onPopupEscPress);
	};


	// перетаскивание
	

	dialogHandler.addEventListener('mousedown', function(evt) {
	evt.preventDefault();

	var startCoords = {
		x: evt.clientX,
		y: evt.clientY

	};

	var dragged = false;

	var onMouseMove = function(moveEvt) {
		moveEvt.preventDefault();
		dragged = true;

		var shift = {
			x: startCoords.x - moveEvt.clientX,
			y: startCoords.y - moveEvt.clientY
		};

		startCoords = {
			x: moveEvt.clientX,
			y: moveEvt.clientY
		};

		window.setup.style.top = (window.setup.offsetTop - shift.y) + 'px';
		window.setup.style.left = (window.setup.offsetLeft - shift.x) + 'px';
	};

	var onMouseUp = function (upEvt) {
		upEvt.preventDefault();

		document.removeEventListener('mousemove', onMouseMove);
		document.removeEventListener('mouseup', onMouseUp);

		if (dragged) {
			var onClickPreventDefault = function (evt) {
				evt.preventDefault();

				dialogHandler.removeEventListener('click', onClickPreventDefault)
			};
			dialogHandler.addEventListener('click', onClickPreventDefault);
		}
	};

	document.addEventListener('mousemove', onMouseMove);
	document.addEventListener('mouseup', onMouseUp);

	});

	

	// form.addEventListener('submit', function (evt) {
	// 	window.upload(new FormData(form), function(response) {
	// 		window.setup.classList.add('hidden');
	// 	})
	// 	evt.preventDefault();
	// });
})();






