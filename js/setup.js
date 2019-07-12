'use strict';



var setup = document.querySelector('.setup');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;


var SimilarWizards = {
	COUNT: 4,
	NAME: ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'],
	SURNAME: ['Да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'],
	COAT: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
	EYES: ['black', 'red', 'blue', 'yellow', 'green']
	};



var openPopup = function() {
	document.querySelector('.setup-similar').classList.remove('hidden');
	setup.classList.remove('hidden');
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

openPopup();
renderWizards();







