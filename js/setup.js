'use strict';

var FIRST_NAMES = ['Иван', 'Хуан', 'Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];

var WIZARDS_LIMIT = 4;

var generateWizard = function () {
  return {
    name: {
      firstName: FIRST_NAMES[generateRandomNumber(FIRST_NAMES.length - 1)],
      lastName: LAST_NAMES[generateRandomNumber(LAST_NAMES.length - 1)]
    },
    coatColor: COAT_COLOR[generateRandomNumber(COAT_COLOR.length - 1)],
    eyesColor: EYES_COLOR[generateRandomNumber(EYES_COLOR.length - 1)],

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
};

var setupElement = document.querySelector('.setup');

var similarWizardListContainerElement = document.querySelector('.setup-similar');
var similarWizardListElement = similarWizardListContainerElement.querySelector('.setup-similar-list');

var wizardTemplateElement = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = generateWizards();

renderWizards(wizards);
showElement(setupElement);
