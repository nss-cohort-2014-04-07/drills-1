(function(){
  'use strict';

  $(document).ready(init);

  var quotes = [];

  function init(){
    $('#add').click(add);
  }

  function add(){
    var sym = $('#symbol').val().trim().toUpperCase();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+sym+'&callback=?';
    $.getJSON(url, display);
  }

  function display(quote){
    quotes.push(quote);
    var $quote = $('<div>');
    $quote.addClass('quote');
    $quote.text(quote.Name + ': $' + quote.LastPrice);
    $quote.css('background-color', 'rgba('+random(0, 255)+','+random(0, 255)+','+random(0, 255)+','+Math.random()+')');
    $('#quotes').append($quote);
    position($quote, quote.LastPrice);
  }

  function position($element, price){
    var dimQuote = dimension($element);
    var dimParent = dimension($('#quotes'));
    var count = quotes.length;
    var scale = 1;

    var left = dimQuote.width * (count - 1);
    var top = dimParent.height - (price / scale);
    $element.css({'top': top, 'left': left});
  }

  function dimension($element){
    var dim = {};
    dim.width = $element.width();
    dim.height = $element.height();
    return dim;
  }

  function random(start, end){
    var difference = end - start + 1;
    var rnd = Math.floor(Math.random() * difference);
    return start + rnd;
  }
})();
