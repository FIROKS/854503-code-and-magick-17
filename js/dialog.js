'use strict';

var onUploadElementMouseDown = function (evtMouseDown) {
  evtMouseDown.preventDefault();
  var dragged = false;

  var startCoordinates = {
    x: evtMouseDown.clientX,
    y: evtMouseDown.clientY
  };

  var onDocumentMouseMove = function (evtMouseMove) {
    evtMouseMove.preventDefault();

    dragged = true;

    var shift = {
      x: startCoordinates.x - evtMouseMove.clientX,
      y: startCoordinates.y - evtMouseMove.clientY
    };

    startCoordinates = {
      x: evtMouseMove.clientX,
      y: evtMouseMove.clientY
    };

    setupElement.style.left = (setupElement.offsetLeft - shift.x) + 'px';
    setupElement.style.top = (setupElement.offsetTop - shift.y) + 'px';
  };

  var onDocumentMouseUp = function (evtMouseUp) {
    evtMouseUp.preventDefault();

    if (dragged) {
      uploadElement.addEventListener('click', onUploadElementClick);
    }

    document.removeEventListener('mousemove', onDocumentMouseMove);
    document.removeEventListener('mouseup', onDocumentMouseUp);
  };

  document.addEventListener('mousemove', onDocumentMouseMove);
  document.addEventListener('mouseup', onDocumentMouseUp);
};

var onArtifactsShopElementMouseDown = function (evtMouseDown) {
  evtMouseDown.preventDefault();

  var element = evtMouseDown.target;

  element.style.position = 'absolute';

  var startCoordinates = {
    x: evtMouseDown.clientX,
    y: evtMouseDown.clientY
  };

  var onDocumentMouseMove = function (evtMouseMove) {
    evtMouseMove.preventDefault();

    var shift = {
      x: startCoordinates.x - evtMouseMove.clientX,
      y: startCoordinates.y - evtMouseMove.clientY
    };

    startCoordinates = {
      x: evtMouseDown.clientX,
      y: evtMouseDown.clientY
    };

    element.style.left = (startCoordinates.x - shift.x) + 'px';
    element.style.top = (startCoordinates.y - shift.y) + 'px';
  };

  var onUserArtifactsElementMouseOver = function (evtMouseOver) {
    evtMouseOver.preventDefault();

    evtMouseOver.target.appendChild(element);
    element.removeAttribute('style');

    userArtifactsElement.removeEventListener('mouseover', onUserArtifactsElementMouseOver);
  };

  var onDocumentMouseUp = function (evtMouseUp) {
    evtMouseUp.preventDefault();

    document.removeEventListener('mousemove', onDocumentMouseMove);
    document.removeEventListener('mouseup', onDocumentMouseUp);
  };

  userArtifactsElement.addEventListener('mouseover', onUserArtifactsElementMouseOver);

  document.addEventListener('mousemove', onDocumentMouseMove);
  document.addEventListener('mouseup', onDocumentMouseUp);
};

var onUploadElementClick = function (evt) {
  evt.preventDefault();

  uploadElement.removeEventListener('click', onUploadElementClick);
};

var setupElement = document.querySelector('.setup');
var uploadElement = setupElement.querySelector('.upload');

var artifactsShopElement = setupElement.querySelector('.setup-artifacts-shop');
var artifactsShopCellElements = artifactsShopElement.querySelectorAll('.setup-artifacts-cell');

var userArtifactsElement = setupElement.querySelector('.setup-artifacts');
var userArtifactsCellElements = userArtifactsElement.querySelectorAll('.setup-artifacts-cell');

uploadElement.addEventListener('mousedown', onUploadElementMouseDown);
artifactsShopElement.addEventListener('mousedown', onArtifactsShopElementMouseDown);


window.dialog = {
  setDefaultCoordinates: function () {
    setupElement.removeAttribute('style');
  }
};
