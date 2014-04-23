(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go').click(go);
  }

  function go(){
    var outer = getInput().split('-').map(strip);
    var bases = outer[0].split(',').map(strip);
    var exponents = outer[1].split(',').map(strip);
    var results = answers(bases, exponents);
    var divs = createDivs(bases, exponents, results);
    $('#storage').append(divs);
  }

  function createDivs(b, e, r){
    var divs = [];

    for(var i = 0; i < b.length; i++){
      var top = '<div>'+b[i]+'<sup>'+e[i]+'</sup></div>';
      var btm = '<div>'+r[i]+'</div>';
      var out = '<div>'+top+btm+'</div>';
      divs.push(out);
    }
    
    return divs;
  }

  function answers(bases, exponents){
    var results = [];

    for(var i = 0; i < bases.length; i++){
      results.push(Math.pow(bases[i], exponents[i]));
    }

    return results;
  }

  function strip(str){
    return str.trim();
  }

  function getInput(){
    return $('#data').val();
  }
})();
