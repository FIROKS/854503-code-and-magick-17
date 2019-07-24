'use strict';

// constants
var CLOUD_X = 100;
var CLOUD_Y = 10;

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_COLOR = 'rgba(255, 255, 255, 1)';

var SHADOW_OFFSET_X = 10;
var SHADOW_OFFSET_Y = 10;

var SHADOW_X = CLOUD_X + SHADOW_OFFSET_X;
var SHADOW_Y = CLOUD_Y + SHADOW_OFFSET_Y;

var SHADOW_WIDTH = 420;
var SHADOW_HEIGHT = 270;
var SHADOW_COLOR = 'rgba(0, 0, 0, 0.7)';

var TEXT_OFFSET_X = 20;
var TEXT_OFFSET_Y = 20;

var TEXT_X = CLOUD_X + TEXT_OFFSET_X;
var TEXT_Y = CLOUD_Y + TEXT_OFFSET_Y;

var TEXT_COLOR = 'grba(0, 0, 0, 1)';
var TEXT_CONGRATULATION =  'Ура вы победили!\nСписок результатов:';
var TEXT_FONT_SIZE = '16px';
var TEXT_FONT_FAMILY = 'PT Mono';

var BAR_DISTANCE = 50;
var BAR_WIDTH = 40;
var BAR_MAX_HEIGHT = 150;
var BAR_FIRST_COLOR = 'rgba(255, 0, 0, 1)';
var BAR_COLOR_TEMPLATE = 'rgba(0, 83, 138, {alpha})';
var BAR_OFFSET_X = 40;
var BAR_OFFSET_Y = 30;

var TIMES_OFFSET_Y = 10;

var NAMES_OFFSET_Y = 20;

var generateRandomColor = function() {
  return BAR_COLOR_TEMPLATE.replace('{alpha}', Math.random().toFixed(2));
};

var drawRect = function(ctx, x, y, width, heigth, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, width, heigth);
}

var drawText = function(ctx, x, y, text, fontFamily, fontSize, color) {
  ctx.font = fontSize + ' ' + fontFamily;
  ctx.fillStyle = color;
  ctx.fillText(text, x, y);
};

var drawShadow = function(ctx) {
  drawRect(ctx, SHADOW_X, SHADOW_Y, SHADOW_WIDTH, SHADOW_HEIGHT, SHADOW_COLOR);
};

var drawCloud = function(ctx) {
  drawRect(ctx, CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT, CLOUD_COLOR);
};

var drawCongratulationText = function(ctx) {
  drawText(ctx, TEXT_X, TEXT_Y, TEXT_CONGRATULATION, TEXT_FONT_FAMILY, TEXT_FONT_SIZE, TEXT_COLOR);
};

var drawTimeText = function(ctx, x, y, text) {
  drawText(ctx, x, y - TIMES_OFFSET_Y, text, TEXT_FONT_FAMILY, TEXT_FONT_SIZE, TEXT_COLOR);
};

var drawNameText = function(ctx, x, y, text) {
  drawText(ctx, x, y + NAMES_OFFSET_Y, text, TEXT_FONT_FAMILY, TEXT_FONT_SIZE, TEXT_COLOR);
}

var findMaxTime = function(times) {
  var max = times[0];
  for (var i = 1; i < times.length; i++) {
    if (times[i] > max) {
      max = times[i];
    }
  }
  return max;
}

var drawBars = function (ctx, names, times) {
  var x;
  var y;
  var height;
  debugger;
  var maxTime = findMaxTime(times);

  for (var i = 0; i < times.length; i++) {
    x = CLOUD_X + BAR_OFFSET_X + i * (BAR_DISTANCE + BAR_WIDTH);
    y = CLOUD_Y + CLOUD_HEIGHT - BAR_OFFSET_Y;
    height = BAR_MAX_HEIGHT * times[i] / maxTime;

    if (names[i] === 'Вы') {
      drawRect(ctx, x, y, BAR_WIDTH, -height, BAR_FIRST_COLOR);
    } else {
      drawRect(ctx, x, y, BAR_WIDTH, -height, generateRandomColor());
    }

    drawNameText(ctx, x, y, names[i]);
    drawTimeText(ctx, x, y - height, Math.round(times[i]));
  }
}

window.renderStatistics = function(ctx, names, times) {

  drawShadow(ctx);
  drawCloud(ctx);
  drawCongratulationText(ctx);
  drawBars(ctx, names, times);

};
