// constants
var CLOUD_X = 100;
var CLOUD_Y = 10;

var CLOUD_WIDTH = '420px';
var CLOUD_HEIGHT = '270px';
var CLOUD_COLOR = 'rgba(255, 255, 255, 0.7)';

var SHADOW_OFFSET_X = 10;
var SHADOW_OFFSET_Y = 10;

var SHADOW_X = CLOUD_X - SHADOW_OFFSET_X;
var SHADOW_Y = CLOUD_Y - SHADOW_OFFSET_Y;

var SHADOW_WIDTH = '420px';
var SHADOW_HEIGHT = '270px';
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var TEXT_COLOR = 'grba(0, 0, 0, 1)';
var TEXT_CONGRATS =  'Ура вы победили!\nСписок результатов:';
var TEXT_FONT_SIZE = '16px';
var TEXT_FONT_FAMILY = 'PT Mono';


var BAR_DISTANCE = 50;

/// functions

// var generateRandomColor = function() {
//     return 'sdfsdf..' + geneteRandomNumber(...) + '..sdfsdfsdf.'
// }

var drawRect = function(x, y, width, heigth, color) {
  fillRect(x, y, width, heigth, color);
}

// for (var i = 0; ...; i++) {
    // x for bar
    // 1: begin
    // 2: begin + width bar + bar distance
    // 3: begin + width bar + bar distance + width bar + bar distance

    // y for bar
    // use minus
    // plus way - hard way
// }

window.renderStatistics = function(ctx, names, times) {
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_COLOR);
  ctx.fillRect(SHADOW_X, SHADOW_Y, SHADOW_WIDTH, SHADOW_HEIGHT, SHADOW_COLOR);
}



// main code

var canvasElement = document.querySelector('.demo').children[0];
var ctx = canvasElement.getContext('2d');
// console.log(canvasElement);
