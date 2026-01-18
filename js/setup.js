'use strict';


(function () {
  const popup = document.querySelector('.setup');
  const setupForm = popup.querySelector('.setup-wizard-form');
  const setupFormBtn = setupForm.querySelector('.setup-submit');

  const wizard = setupForm.querySelector('.setup-wizard-appearance');
  const wizardCoat = wizard.querySelector('.wizard-coat');
  const wizardCoatColor = wizard.querySelector('input[name="coat-color"]');
  const wizardEyes = wizard.querySelector('.wizard-eyes');
  const wizardEyesColor = wizard.querySelector('input[name="eyes-color"]');
  const fireball = document.querySelector('.setup-fireball-wrap');
  const fireballColor = fireball.querySelector('input[name="fireball-color"]');


  const getNextColor = function (colors, currentColor) {
    const currentColorIndex = colors.indexOf(currentColor);

    return currentColorIndex !== colors.length - 1 ? colors[currentColorIndex + 1] : colors[0];
  };


  const onCoatClick = function () {
    wizardCoatColor.value = getNextColor(window.util.WizardsProps.COAT_COLORS, wizardCoatColor.value);
    wizardCoat.style.fill = wizardCoatColor.value;

    window.debounce(function () {
      window.updateWizards(window.similarWizards);
    });
  };

  const onEyesClick = function () {
    wizardEyesColor.value = getNextColor(window.util.WizardsProps.EYES_COLORS, wizardEyesColor.value);
    wizardEyes.style.fill = wizardEyesColor.value;

    window.debounce(function () {
      window.updateWizards(window.similarWizards);
    });
  };

  const onFireballClick = function () {
    fireballColor.value = getNextColor(window.util.WizardsProps.FIREBALL_COLORS, fireballColor.value);
    fireball.style.background = fireballColor.value;
  };


  const sendForm = function () {
    popup.classList.add('hidden');
    setupFormBtn.disabled = false;
  };

  const showError = function (errorMessage) {
    window.util.showError(errorMessage);
    setupFormBtn.disabled = false;
  };

  const onFormSubmit = function (evt) {
    evt.preventDefault();
    setupFormBtn.disabled = true;

    window.backend.save(new FormData(setupForm), sendForm, showError);
  };


  wizardCoat.addEventListener('click', onCoatClick);
  wizardEyes.addEventListener('click', onEyesClick);
  fireball.addEventListener('click', onFireballClick);

  setupForm.addEventListener('submit', onFormSubmit);
})();

















