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

var onUploadElementClick = function (evt) {
  evt.preventDefault();

  uploadElement.removeEventListener('click', onUploadElementClick);
};

var setupElement = document.querySelector('.setup');
var uploadElement = setupElement.querySelector('.upload');

uploadElement.addEventListener('mousedown', onUploadElementMouseDown);

window.dialog = {
  setDefaultCoordinates: function () {
    setupElement.removeAttribute('style');
  }
};
