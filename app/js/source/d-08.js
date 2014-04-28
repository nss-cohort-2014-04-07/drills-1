(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#sum').click(clickSum);
  }

  function clickSum(){
    $('#symbols').val().split(',').map(stripUC).map(url).forEach(getQuote);
  }

  var sum = 0;
  var count = 0;
  function getQuote(url, index, urls){
    $.getJSON(url, function(quote){
      sum += quote.LastPrice;
      count++;

      if(count === urls.length){
        $('#result').text(sum);
      }
    });
  }

  function url(symbol){
    return 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
  }

  function stripUC(symbol){
    return symbol.trim().toUpperCase();
  }


})();
