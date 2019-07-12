'use strict';



var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var similarListElement = document.querySelector('.setup-similar-list');
document.querySelector('.setup-similar').classList.remove('hidden');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
var setupClose = document.querySelector('.setup-close');
var setupOpenIcon = document.querySelector('.setup-open-icon');
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var wizardCoat = document.querySelector('.wizard-coat');
var wizardEyes = document.querySelector('.wizard-eyes');
var fireball = document.querySelector('.setup-fireball-wrap');


var SimilarWizards = {
	COUNT: 4,
	NAME: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
	SURNAME: ['Да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
	COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
	EYES: ['black', 'red', 'blue', 'yellow', 'green'],
	FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
	};


wizardCoat.addEventListener('click', function() {
	wizardCoat.style.fill = getRandomElement(SimilarWizards.COAT);
});

wizardEyes.addEventListener('click', function() {
	wizardEyes.style.fill = getRandomElement(SimilarWizards.EYES);
});

fireball.addEventListener('click', function() {
	fireball.style.backgroundColor = getRandomElement(SimilarWizards.FIREBALL);
});

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
	setup.classList.remove('hidden');
	document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
	setup.classList.add('hidden');
	document.removeEventListener('keydown', onPopupEscPress);
};



var generateWizards = function() {
	var mixWizardNames = SimilarWizards.NAME;
	var mixWizardSurnames = SimilarWizards.SURNAME;

	var wizards = [];
	for (var i = 0; i <= SimilarWizards.COUNT; i++) {

	  wizards.push({
	  names: mixWizardNames[i],
	  surnames: mixWizardSurnames[i],
	  coatColor: getRandomElement(SimilarWizards.COAT),
	  eyesColor: getRandomElement(SimilarWizards.EYES)
	});
	}
	return wizards;
};

// Генерация случайных чисел
var getRandomElement = function(array) {

	for (var i = 0; i < array.length; i++) {
	var randomIndex = Math.floor(Math.random() * array.length);
	var randomElement = array[randomIndex];
	}
	return randomElement;
};


// Клонируем шаблон волшебника
var renderWizards = function() {
	var similarWizards = generateWizards();
	var fragment = document.createDocumentFragment();
	for (var i = 0; i < similarWizards.length; i++) {
	fragment.appendChild(renderWizard(similarWizards[i]));
	}
	similarListElement.appendChild(fragment);
};


var renderWizard = function (wizard) {
	var wizardElement = similarWizardTemplate.cloneNode(true);
	wizardElement.querySelector('.setup-similar-label').textContent = wizard.names + '\n ' + wizard.surnames;
	wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
	wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

	return wizardElement;
};

renderWizards();







