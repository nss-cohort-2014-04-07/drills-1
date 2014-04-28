(function(){
  'use strict';

  $(document).ready(init);

  var $div;

  function init(){
    $('#add').click(clickAdd);
    $('body').on('click', '.rectangle', clickRectangle);
    $('body').keydown(arrowDown);
  }

  function arrowDown(event){
    switch(event.which){
      case 37:
        move(0, -1);
        break;
      case 38:
        move(-1, 0);
        break;
      case 39:
        move(0, 1);
        break;
      case 40:
        move(1, 0);
    }

    if(event.which >= 37 && event.which <= 40){
      event.preventDefault();
    }
  }

  function move(vertical, horizontal){
    var top = parseInt($div.css('top')) + vertical;
    var left = parseInt($div.css('left')) + horizontal;

    $div.css({'top': top, 'left': left});
  }

  function clickRectangle(){
    $div = $(this);
  }

  function clickAdd(){
    var browser = browserDimensions();
    var rectangle = createRectangle();
    var position = startPosition(browser, rectangle);
    add(rectangle, position);
  }

  function add(rectangle, position){
    var $rect = $('<div>');
    $rect.addClass('rectangle');
    $rect.css({'top': position.top, 'left': position.left, 'width': rectangle.width, 'height': rectangle.height, 'background-color': rectangle.color});
    $('body').append($rect);
  }

  function startPosition(browser, rectangle){
    var position = {};

    position.top = random(0, browser.height - rectangle.height);
    position.left = random(0, browser.width - rectangle.width);

    return position;
  }

  function createRectangle(){
    var rectangle = {};

    rectangle.width = random(10, 100);
    rectangle.height = random(10, 100);
    rectangle.color = 'rgba('+random(0, 255)+','+random(0, 255)+','+random(0, 255)+','+Math.random()+')';

    return rectangle;
  }

  function browserDimensions(){
    var browser = {};

    browser.width = window.innerWidth;
    browser.height = window.innerHeight;

    return browser;
  }

  function random(start, end){
    var difference = end - start + 1;
    var rnd = Math.floor(Math.random() * difference);
    return start + rnd;
  }
})();
