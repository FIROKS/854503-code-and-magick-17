'use strict';

var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

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

var showElement = function (element) {
  element.classList.remove('hidden');
  setupOpenElement.removeEventListener('click', onSetupOpenElementClick);
  setupCloseElement.addEventListener('click', onSetupCloseElementClick);
};

var hideElement = function (element) {
  element.classList.add('hidden');
  setupOpenElement.addEventListener('click', onSetupOpenElementClick);
};

var onSetupOpenElementClick = function (evt) {
  evt.preventDefault();

  showElement(setupElement);
};

var onSetupCloseElementClick = function (evt) {
  evt.preventDefault();

  hideElement(setupElement);
};

var onSetupOpenElementFocus = function (evt) {
  evt.preventDefault();
  setupOpenElement.addEventListener('keydown', onSetupEnterPress);
};

var onSetupEnterPress = function (evt) {
  evt.preventDefault();

  if (evt.keyCode === ESC_KEYCODE) {
    showElement(setupElement);
  }
};

var setupElement = document.querySelector('.setup');
var setupOpenElement = document.querySelector('.setup-open');
var setupCloseElement = setupElement.querySelector('.setup-close');

var similarWizardListContainerElement = document.querySelector('.setup-similar');
var similarWizardListElement = similarWizardListContainerElement.querySelector('.setup-similar-list');

var wizardTemplateElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = generateWizards();

renderWizards(wizards);

setupOpenElement.addEventListener('click', onSetupOpenElementClick);
// setupOpenElement.addEventListener('focus', onSetupOpenElementFocus);
