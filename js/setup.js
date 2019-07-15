'use strict';

// генерируем волшебников
(function () {
	
	var similarListElement = document.querySelector('.setup-similar-list');
	document.querySelector('.setup-similar').classList.remove('hidden');
	var similarWizardTemplate = document.querySelector('#similar-wizard-template').content;
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

	var generateWizards = function() {
		var mixWizardNames = SimilarWizards.NAME;
		var mixWizardSurnames = SimilarWizards.SURNAME;

		var wizards = [];
		for (var i = 0; i <= SimilarWizards.COUNT; i++) {
		  	wizards.push({
			names: mixWizardNames[i],
		    surnames: mixWizardSurnames[i],
			coatColor: window.getRandomElement(SimilarWizards.COAT),
			eyesColor: window.getRandomElement(SimilarWizards.EYES)
			});
		}
		return wizards;
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

	
	// change color
	wizardCoat.addEventListener('click', function() {
		wizardCoat.style.fill = window.getRandomElement(SimilarWizards.COAT);
	});

	wizardEyes.addEventListener('click', function() {
		wizardEyes.style.fill = window.getRandomElement(SimilarWizards.EYES);
	});

	fireball.addEventListener('click', function() {
		fireball.style.backgroundColor = window.getRandomElement(SimilarWizards.FIREBALL);
	});


	// Генерация случайных чисел
	window.getRandomElement = function(array) {

		for (var i = 0; i < array.length; i++) {
		var randomIndex = Math.floor(Math.random() * array.length);
		var randomElement = array[randomIndex];
		}
		return randomElement;
	};

	renderWizards();


})();



	









