(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    var aw = window.innerWidth;
    var ah = window.innerHeight;
    var bw = $('#big').width();
    var bh = $('#big').height();
    var cw = $('#small').width();
    var ch = $('#small').height();

    positionDiv(aw, ah, bw, bh, '#big');
    positionDiv(bw, bh, cw, ch, '#small');

    $('#big').click(clickBig);
    $('#small').click(clickSmall);
    $('body').keydown(pressArrow);
  }

  var $div;

  function pressArrow(event){
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
    var maxHeight = getParentHeight() - getChildHeight();
    var maxWidth = getParentWidth() - getChildWidth();

    if(top >= 0 && top <= maxHeight && left >= 0 && left <= maxWidth){
      $div.css({'top': top, 'left': left});
    }
  }

  function getChildHeight(){
    return $div.height();
  }

  function getChildWidth(){
    return $div.width();
  }

  function getParentHeight(){
    return $div.parent().height() || window.innerHeight;
  }

  function getParentWidth(){
    return $div.parent().width() || window.innerWidth;
  }

  function clickBig(){
    $div = $(this);
  }

  function clickSmall(event){
    $div = $(this);
    event.stopPropagation();
  }

  function positionDiv(parentWidth, parentHeight, childWidth, childHeight, selector){
    var top = random(0, parentHeight - childHeight);
    var left = random(0, parentWidth - childWidth);
    $(selector).css({'top': top, 'left': left});
  }

  function random(start, end){
    var difference = end - start + 1;
    var rnd = Math.floor(Math.random() * difference);
    return start + rnd;
  }
})();
