'use strict';

var FIRST_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var WIZARDS_LIMIT = 4;

var generateWizard = function () {
  return {
    name: {
      firstName: getRandomElement(FIRST_NAMES),
      lastName: getRandomElement(LAST_NAMES)
    },
    coatColor: getRandomElement(COAT_COLOR),
    eyesColor: getRandomElement(EYES_COLOR),
  };
};

var generateWizards = function () {
  var wizards = [];

  for (var i = 0; i < WIZARDS_LIMIT; i++) {
    wizards.push(generateWizard());
  }
  return wizards;
};

var generateRandomNumber = function (to) {
  return Math.round(0 - 0.5 + Math.random() * (to - 0 + 1));
};

var getRandomElement = function (valueList) {
  return valueList[generateRandomNumber(FIRST_NAMES.length - 1)];
};

var createWizard = function (wizard) {
  var newWizardElement = wizardTemplateElement.cloneNode(true);
  var newWizardElementName = newWizardElement.querySelector('.setup-similar-label');
  var newWizardElementCoat = newWizardElement.querySelector('.wizard-coat');
  var newWizardElementEyes = newWizardElement.querySelectorAll('.wizard-eyes');

  newWizardElementName.textContent = wizard.name.firstName + ' ' + wizard.name.lastName;
  newWizardElementCoat.style.fill = wizard.coatColor;
  newWizardElementEyes.forEach(function (eye) {
    eye.style.fill = wizard.eyesColor;
  });

  return newWizardElement;
};

var renderWizards = function (wizards) {
  var fragment = document.createDocumentFragment();

  wizards.forEach(function (wizard) {
    fragment.appendChild(createWizard(wizard));
  });

  similarWizardListElement.appendChild(fragment);
  showElement(similarWizardListContainerElement);
};

<<<<<<< Updated upstream
var showElement = function (element) {
  element.classList.remove('hidden');
=======
var showSetupElement = function () {
  setupElement.classList.remove('hidden');

  setupOpenElement.removeEventListener('click', onSetupOpenElementClick);
  setupOpenElement.removeEventListener('focus', onSetupOpenElementFocus);

  document.addEventListener('keydown', onSetupElementEscPress);

  userWizardEyeElement.addEventListener('click', onUserWizardEyeElementClick);
  userWizardCoatElement.addEventListener('click', onUserWizardCoatElementClick);
  userWizardFireballElement.addEventListener('click', onUserWizardFireballElementClick);


  setupCloseElement.addEventListener('click', onSetupCloseElementClick);
  setupCloseElement.addEventListener('focus', onSetupCloseElementFocus);

  setupSubmitElement.addEventListener('focus', onSetupSubmitElementFocus);
  setupSubmitElement.addEventListener('click', onSetupSubmitElementClick);
};

var hideSetupElement = function () {
  setupElement.classList.add('hidden');

  setupOpenElement.addEventListener('click', onSetupOpenElementClick);
  setupOpenElement.addEventListener('focus', onSetupOpenElementFocus);

  userWizardEyeElement.removeEventListener('click', onUserWizardEyeElementClick);
  userWizardCoatElement.removeEventListener('click', onUserWizardCoatElementClick);
  userWizardFireballElement.removeEventListener('click', onUserWizardFireballElementClick);

  setupCloseElement.addEventListener('click', onSetupCloseElementClick);
  setupCloseElement.removeEventListener('focus', onSetupCloseElementFocus);

  document.removeEventListener('keydown', onSetupElementEscPress);
  document.removeEventListener('keydown', onSetupCloseElementEnterPress);

  setupSubmitElement.removeEventListener('focus', onSetupSubmitElementFocus);
  setupSubmitElement.removeEventListener('click', onSetupSubmitElementClick);
  document.removeEventListener('keydown', onSetupSubmitElementEnterPress);
};

var changeFireballColor = function (fireball) {
  var color = getRandomElement(FIREBALL_COLOR);
  var colorInputElement = setupElement.querySelector('input[name="fireball-color"]');
  fireball.style.backgroundColor = color;
  colorInputElement.value = color;
};

var changeElementColor = function (element, values, input) {
  var color = getRandomElement(values);
  var colorInputElement = setupElement.querySelector(input);

  element.style.fill = color;
  colorInputElement.value = color;
};

var onSetupOpenElementClick = function (evt) {
  evt.preventDefault();

  showSetupElement();
};

var onSetupCloseElementClick = function (evt) {
  evt.preventDefault();

  hideSetupElement();
};

var onSetupElementEscPress = function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    evt.preventDefault();

    hideSetupElement();
  }
};

var onUserWizardEyeElementClick = function (evt) {
  evt.preventDefault();

  changeElementColor(userWizardEyeElement, EYES_COLOR, SELECTOR_EYE_COLOR_INPUT);
};

var onUserWizardCoatElementClick = function (evt) {
  evt.preventDefault();

  changeElementColor(userWizardCoatElement, COAT_COLOR, SELECTOR_COAT_COLOR_INPUT);
};

var onUserWizardFireballElementClick = function (evt) {
  evt.preventDefault();

  changeFireballColor(userWizardFireballElement);
};

var onSetupCloseElementFocus = function () {
  document.addEventListener('keydown', onSetupCloseElementEnterPress);
};

var onSetupCloseElementEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    evt.preventDefault();

    hideSetupElement();
  }
};

var onSetupElementSubmit = function () {
  formElement.submit();
  hideSetupElement();
};

var onSetupSubmitElementFocus = function () {
  document.addEventListener('keydown', onSetupSubmitElementEnterPress);
};

var onSetupSubmitElementClick = function (evt) {
  evt.preventDefault();

  onSetupElementSubmit();
};

var onSetupSubmitElementEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    evt.preventDefault();

    onSetupElementSubmit();
  }
};

var onSetupOpenElementFocus = function () {
  document.addEventListener('keydown', onSetupOpenElementEnterPress);
};

var onSetupOpenElementEnterPress = function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    evt.preventDefault();
    document.removeEventListener('keydown', onSetupOpenElementEnterPress);

    showSetupElement();
  }
>>>>>>> Stashed changes
};


var setupElement = document.querySelector('.setup');
<<<<<<< Updated upstream
=======
var setupOpenElement = document.querySelector('.setup-open-icon');
var setupCloseElement = setupElement.querySelector('.setup-close');
var setupSubmitElement = setupElement.querySelector('.setup-submit');

var formElement = setupElement.querySelector('.setup-wizard-form');

var userWizardElement = setupElement.querySelector('.setup-wizard');
var userWizardEyeElement = userWizardElement.querySelector('.wizard-eyes');
var userWizardCoatElement = userWizardElement.querySelector('.wizard-coat');
var userWizardFireballElement = setupElement.querySelector('.setup-fireball-wrap');
>>>>>>> Stashed changes

var similarWizardListContainerElement = document.querySelector('.setup-similar');
var similarWizardListElement = similarWizardListContainerElement.querySelector('.setup-similar-list');

var wizardTemplateElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = generateWizards();

renderWizards(wizards);
showElement(setupElement);
