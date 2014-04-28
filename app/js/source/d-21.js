/* global AmCharts:true */

(function(){
  'use strict';

  $(document).ready(init);

  function init(){
    makeGraph();
    $('#add').click(add);
  }

  function add(){
    var symbol = $('#symbol').val().trim().toUpperCase();
    var url = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol='+symbol+'&callback=?';
    $.getJSON(url, function(quote){
        addQuoteToChart(quote);
    });
  }

  function addQuoteToChart(quote){
    var stock = {};
    stock.company = quote.Name;
    stock.quote = quote.LastPrice;

    chart.dataProvider.push(stock);
    chart.validateData();
  }

  var chart;

  function makeGraph(){
    chart = AmCharts.makeChart('graph', {
      'type': 'serial',
      'theme': 'chalk',
      'dataProvider': [],
      'valueAxes': [{
          'gridColor':'#FFFFFF',
  		'gridAlpha': 0.2,
  		'dashLength': 0
      }],
      'gridAboveGraphs': true,
      'startDuration': 1,
      'graphs': [{
          'balloonText': '[[category]]: <b>[[value]]</b>',
          'fillAlphas': 0.8,
          'lineAlpha': 0.2,
          'type': 'column',
          'valueField': 'quote'
      }],
      'chartCursor': {
          'categoryBalloonEnabled': false,
          'cursorAlpha': 0,
          'zoomable': false
      },
      'categoryField': 'company',
      'categoryAxis': {
          'gridPosition': 'start',
          'gridAlpha': 0
      },
  	'exportConfig':{
  	  'menuTop': 0,
  	  'menuItems': [{
        'icon': '/lib/3/images/export.png',
        'format': 'png'
        }]
  	}
    });
  }
})();
