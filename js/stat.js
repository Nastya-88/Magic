'use strict';

window.renderStatistics = function (ctx, names, times) {
  var cloud = {
    x: 100,
    y: 10,
    width: 420,
    height: 270,
    backgroundColor: '#fff',
    shadowStyle: 'rgba(0, 0, 0, 0.7)',
    titleText: {
      font: '16px PT Mono',
      color: '#000',
      baseLine: 'top',
      text: 'Вы победили!\nСписок результатов:',
      x: 120,
      y: 30,
      yOffset: 20
    },
    histogram: {
      height: 150,
      columnWidth: 40,
      gap: 50,
      initial_X: 155,
      initial_Y: 250,
      color: '#000',
      myColor: 'red', 
      max: -1,
      maxIndex: -1,
      step: 0,

      getPlayerColor: function () {

        var hue = 240;
        var saturation = Math.floor(Math.random() * 100);
        var lightness = 50;

        return 'hsl(' + hue + ',' + saturation + '%,' + lightness + '%)';
      }
      
    }
  };

  // тень облака
  ctx.fillStyle = cloud.shadowStyle;
  ctx.fillRect(cloud.x + 10, cloud.y + 10, cloud.width, cloud.height);

  // облако
  ctx.fillStyle = cloud.backgroundColor;
  ctx.fillRect(cloud.x, cloud.y, cloud.width, cloud.height);

  // текст
  ctx.font = cloud.titleText.font;
  ctx.fillStyle = cloud.titleText.color;
  ctx.textBaseline = cloud.titleText.baseLine;

 
  var titleTextLines = cloud.titleText.text.split('\n');

  
  var titleText_Y = cloud.titleText.y;

  titleTextLines.forEach(function (value, index) {

    if (index !== 0) {
      titleText_Y += cloud.titleText.yOffset;
    }

    ctx.fillText(value, cloud.titleText.x, titleText_Y);
  });

  // максимальное значение
  times.forEach(function (value, index) {
    if (value > cloud.histogram.max) {
      cloud.histogram.max = value;
      cloud.histogram.maxIndex = index;
    }
  });

  // step
  cloud.histogram.step = cloud.histogram.height / (cloud.histogram.max - 0);

  // гистограмма
  var column_X = cloud.histogram.initial_X;

  times.forEach(function (value, index) {

    if (index !== 0) {
      column_X += cloud.histogram.columnWidth + cloud.histogram.gap;
    }

    // меняем цвет гистограммы
    if (names[index] === 'Вы') {
      ctx.fillStyle = cloud.histogram.myColor;
    } else {
      ctx.fillStyle = cloud.histogram.getPlayerColor();
    }

    var columnHeight = value * cloud.histogram.step;

    
    ctx.fillRect(column_X, cloud.histogram.initial_Y, cloud.histogram.columnWidth, -columnHeight);

    // подписи 
    var nameLabelY = cloud.histogram.initial_Y + 5; 
    var timeLabelY = cloud.histogram.initial_Y - (columnHeight + 25); 

    ctx.fillStyle = cloud.histogram.color;
    ctx.fillText(Math.round(value), column_X, timeLabelY);
    ctx.fillText(names[index], column_X, nameLabelY);
  });
};
