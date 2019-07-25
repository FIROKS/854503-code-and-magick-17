'use strict';

var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;

var FIRST_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

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
  showSetupElement(similarWizardListContainerElement);
};

var showSetupElement = function (element) {
  element.classList.remove('hidden');

  userWizardElementEye.addEventListener('click', onUserWizardElementEyeClick);
  userWizardElementCoat.addEventListener('click', onUserWizardElementCoatClick);
  userWizardElementFireball.addEventListener('click', onUserWizardElementFireballClick);

  setupOpenElement.removeEventListener('click', onSetupOpenElementClick);
  setupCloseElement.addEventListener('click', onSetupCloseElementClick);
  setupElement.addEventListener('submit', onSetupElementSubmit);
};

var hideSetupElement = function (element) {
  element.classList.add('hidden');

  userWizardElementEye.removeEventListener('click', onUserWizardElementEyeClick);
  userWizardElementCoat.removeEventListener('click', onUserWizardElementCoatClick);
  userWizardElementFireball.removeEventListener('click', onUserWizardElementFireballClick);

  setupOpenElement.addEventListener('click', onSetupOpenElementClick);
};

var onSetupOpenElementClick = function (evt) {
  evt.preventDefault();

  showSetupElement(setupElement);
};

var onSetupCloseElementClick = function (evt) {
  evt.preventDefault();

  hideSetupElement(setupElement);
};

var onUserWizardElementEyeClick = function (evt) {
  evt.preventDefault();
  changeEyeColor(userWizardElementEye);
};

var onUserWizardElementCoatClick = function (evt) {
  evt.preventDefault();

  changeCoatColor(userWizardElementCoat);
};

var onUserWizardElementFireballClick = function (evt) {
  evt.preventDefault();

  changeFireballColor(userWizardElementFireball);
};

var onSetupElementSubmit = function (evt) {
  evt.preventDefault();
  formElement.submit();
};

var changeEyeColor = function (eye) {
  var color;
  var colorInputElement = setupElement.querySelector('input[name="fireball-color"]');
  color = getRandomElement(EYES_COLOR);
  eye.style.fill = color;
  colorInputElement.value = color;
};

var changeCoatColor = function (coat) {
  var color;
  var colorInputElement = setupElement.querySelector('input[name="coat-color"]');
  color = getRandomElement(COAT_COLOR);
  coat.style.fill = color;
  colorInputElement.value = color;
};

var changeFireballColor = function (fireball) {
  var color;
  var colorInputElement = setupElement.querySelector('input[name="fireball-color"]');
  color = getRandomElement(FIREBALL_COLOR);
  fireball.style.backgroundColor = color;
  colorInputElement.value = color;
};

var setupElement = document.querySelector('.setup');
var setupOpenElement = document.querySelector('.setup-open');
var setupCloseElement = setupElement.querySelector('.setup-close');

var formElement = document.querySelector('.setup-wizard-form');

var userWizardElement = setupElement.querySelector('.setup-wizard');
var userWizardElementEye = userWizardElement.querySelector('.wizard-eyes');
var userWizardElementCoat = userWizardElement.querySelector('.wizard-coat');
var userWizardElementFireball = setupElement.querySelector('.setup-fireball-wrap');

var similarWizardListContainerElement = document.querySelector('.setup-similar');
var similarWizardListElement = similarWizardListContainerElement.querySelector('.setup-similar-list');

var wizardTemplateElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = generateWizards();

renderWizards(wizards);

setupOpenElement.addEventListener('click', onSetupOpenElementClick);
