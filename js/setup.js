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
    wizards[i] = generateWizard();
  }
  return wizards;
}

var generateRandomNumber = function (to) {
  return Math.round(0 - 0.5 + Math.random() * (to - 0 + 1));
}

var renderWizards = function(wizards) {

}

var setupElement = document.querySelector('.setup');
var wizardTemplateElement = document.querySelector('#similar-wizard-template').content.querySelector('#setup-similar-item');
var wizards = generateWizards();


setupElement.classList.remove('hidden');
