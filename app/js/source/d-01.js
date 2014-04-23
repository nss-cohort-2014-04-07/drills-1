(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    $('#go').click(go);
  }

  function go(){
    getInput().split(',').map(strip).map(casing).map(div).forEach(append);
  }

  function append(div){
    $('#storage').append(div);
  }

  function div(word){
    var cls = (word.length % 2) ? 'odd' : 'even';
    return '<div class="'+cls+'">'+word+'</div>';
  }

  function casing(word){
    return (word.length % 2) ? word.toUpperCase() : word.toLowerCase();
  }

  function strip(word){
    return word.trim();
  }

  function getInput(){
    return $('#sentence').val();
  }
})();
