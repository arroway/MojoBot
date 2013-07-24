var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var barsOffset = 10;
var left = 10;
var right = 10
var bottom = 5;

function init(){

  var barChart = new $jit.BarChart({  
  injectInto: 'infovis',  
  animate: true,  
  orientation: 'vertical',  
  hoveredColor: '#ece5e4', 
  barsOffset: barsOffset,  
  Margin: {  
    top: 30,  
    left: left,  
    right: right,  
    bottom:bottom  
  },  
  labelOffset: 5,  
  type: useGradients? 'stacked:gradient' : 'stacked',  
  showAggregates:true,  
  showLabels:true,  
  Label: {  
    type: labelType, //Native or HTML  
    size: 13,  
    family: 'Arial',  
    color: 'white'  
  },  
  Tips: {  
    enable: true,  
    onShow: function(tip, elem) {  
      tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;  
    }  
  }  
  });  

  $.ajax({
    url: '/tree/capslock',
    type: 'GET',
    dataType: 'JSON',
    success: function(data) {
      json = $.parseJSON(data);
      barChart.loadJSON(json);  
    }
  });

  var barChart2 = new $jit.BarChart({  
  injectInto: 'infovis2',  
  animate: true,  
  orientation: 'vertical',  
  hoveredColor: '#ece5e4', 
  barsOffset: barsOffset,  
  Margin: {  
    top: 30,  
    left: left,  
    right: right,  
    bottom: bottom  
  },  
  labelOffset: 5,  
  type: useGradients? 'stacked:gradient' : 'stacked',  
  showAggregates:true,  
  showLabels:true,  
  Label: {  
    type: labelType, //Native or HTML  
    size: 13,  
    family: 'Arial',  
    color: 'white'  
  },  
  Tips: {  
    enable: true,  
    onShow: function(tip, elem) {  
      tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;  
    }  
  }  
  });  

  $.ajax({
    url: '/tree/facepalm',
    type: 'GET',
    dataType: 'JSON',
    success: function(data) {
      json = $.parseJSON(data);
      barChart2.loadJSON(json);  
    }
  });

  var barChart3 = new $jit.BarChart({  
  injectInto: 'infovis3',  
  animate: true,  
  orientation: 'vertical',  
  hoveredColor: '#ece5e4', 
  barsOffset: barsOffset,  
  Margin: {  
    top: 30,  
    left: left,  
    right: right,  
    bottom: bottom  
  },  
  labelOffset: 5,  
  type: useGradients? 'stacked:gradient' : 'stacked',  
  showAggregates:true,  
  showLabels:true,  
  Label: {  
    type: labelType, //Native or HTML  
    size: 13,  
    family: 'Arial',  
    color: 'white'  
  },  
  Tips: {  
    enable: true,  
    onShow: function(tip, elem) {  
      tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;  
    }  
  }  
  });  

  $.ajax({
    url: '/tree/interrogative',
    type: 'GET',
    dataType: 'JSON',
    success: function(data) {
      json = $.parseJSON(data);
      barChart3.loadJSON(json);  
    }
  });

  var barChart4 = new $jit.BarChart({  
  injectInto: 'infovis4',  
  animate: true,  
  orientation: 'vertical',  
  hoveredColor: '#ece5e4', 
  barsOffset: barsOffset,  
  Margin: {  
    top: 30,  
    left: left,  
    right: right,  
    bottom: bottom  
  },  
  labelOffset: 5,  
  type: useGradients? 'stacked:gradient' : 'stacked',  
  showAggregates:true,  
  showLabels:true,  
  Label: {  
    type: labelType, //Native or HTML  
    size: 13,  
    family: 'Arial',  
    color: 'white'  
  },  
  Tips: {  
    enable: true,  
    onShow: function(tip, elem) {  
      tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;  
    }  
  }  
  });  

  $.ajax({
    url: '/tree/lol',
    type: 'GET',
    dataType: 'JSON',
    success: function(data) {
      json = $.parseJSON(data);
      barChart4.loadJSON(json);  
    }
  });

  var barChart5 = new $jit.BarChart({  
  injectInto: 'infovis5',  
  animate: true,  
  orientation: 'vertical',  
  hoveredColor: '#ece5e4', 
  barsOffset: barsOffset,  
  Margin: {  
    top: 30,  
    left: left,  
    right: right,  
    bottom: bottom  
  },  
  labelOffset: 5,  
  type: useGradients? 'stacked:gradient' : 'stacked',  
  showAggregates:true,  
  showLabels:true,  
  Label: {  
    type: labelType, //Native or HTML  
    size: 13,  
    family: 'Arial',  
    color: 'white'  
  },  
  Tips: {  
    enable: true,  
    onShow: function(tip, elem) {  
      tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;  
    }  
  }  
  });  

  $.ajax({
    url: '/tree/log',
    type: 'GET',
    dataType: 'JSON',
    success: function(data) {
      json = $.parseJSON(data);
      barChart5.loadJSON(json);  
    }
  });

  var barChart6 = new $jit.BarChart({  
  injectInto: 'infovis6',  
  animate: true,  
  orientation: 'vertical',  
  hoveredColor: '#ece5e4', 
  barsOffset: barsOffset,  
  Margin: {  
    top: 30,  
    left: left,  
    right: right,  
    bottom: bottom  
  },  
  labelOffset: 5,  
  type: useGradients? 'stacked:gradient' : 'stacked',  
  showAggregates:true,  
  showLabels:true,  
  Label: {  
    type: labelType, //Native or HTML  
    size: 13,  
    family: 'Arial',  
    color: 'white'  
  },  
  Tips: {  
    enable: true,  
    onShow: function(tip, elem) {  
      tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;  
    }  
  }  
  });  

  $.ajax({
    url: '/tree/osef',
    type: 'GET',
    dataType: 'JSON',
    success: function(data) {
      json = $.parseJSON(data);
      barChart6.loadJSON(json);  
    }
  });

  var barChart7 = new $jit.BarChart({  
  injectInto: 'infovis7',  
  animate: true,  
  orientation: 'vertical',  
  hoveredColor: '#ece5e4', 
  barsOffset: barsOffset,  
  Margin: {  
    top: 30,  
    left: left,  
    right: right,  
    bottom: bottom  
  },  
  labelOffset: 5,  
  type: useGradients? 'stacked:gradient' : 'stacked',  
  showAggregates:true,  
  showLabels:true,  
  Label: {  
    type: labelType, //Native or HTML  
    size: 13,  
    family: 'Arial',  
    color: 'white'  
  },  
  Tips: {  
    enable: true,  
    onShow: function(tip, elem) {  
      tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;  
    }  
  }  
  });  

  $.ajax({
    url: '/tree/sad',
    type: 'GET',
    dataType: 'JSON',
    success: function(data) {
      json = $.parseJSON(data);
      barChart7.loadJSON(json);  
    }
  });

  var barChart8 = new $jit.BarChart({  
  injectInto: 'infovis8',  
  animate: true,  
  orientation: 'vertical',  
  hoveredColor: '#ece5e4', 
  barsOffset: barsOffset,  
  Margin: {  
    top: 30,  
    left: left,  
    right: right,  
    bottom: bottom  
  },  
  labelOffset: 5,  
  type: useGradients? 'stacked:gradient' : 'stacked',  
  showAggregates:true,  
  showLabels:true,  
  Label: {  
    type: labelType, //Native or HTML  
    size: 13,  
    family: 'Arial',  
    color: 'white'  
  },  
  Tips: {  
    enable: true,  
    onShow: function(tip, elem) {  
      tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;  
    }  
  }  
  });  

  $.ajax({
    url: '/tree/happy',
    type: 'GET',
    dataType: 'JSON',
    success: function(data) {
      json = $.parseJSON(data);
      barChart8.loadJSON(json);  
    }
  });

  var barChart9 = new $jit.BarChart({  
  injectInto: 'infovis9',  
  animate: true,  
  orientation: 'vertical',  
  hoveredColor: '#ece5e4', 
  barsOffset: barsOffset,  
  Margin: {  
    top: 30,  
    left: left,  
    right: right,  
    bottom: bottom  
  },  
  labelOffset: 5,  
  type: useGradients? 'stacked:gradient' : 'stacked',  
  showAggregates:true,  
  showLabels:true,  
  Label: {  
    type: labelType, //Native or HTML  
    size: 13,  
    family: 'Arial',  
    color: 'white'  
  },  
  Tips: {  
    enable: true,  
    onShow: function(tip, elem) {  
      tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;  
    }  
  }  
  });  

  $.ajax({
    url: '/tree/amazed',
    type: 'GET',
    dataType: 'JSON',
    success: function(data) {
      json = $.parseJSON(data);
      barChart9.loadJSON(json);  
    }
  });

  var barChart10 = new $jit.BarChart({  
  injectInto: 'infovis10',  
  animate: true,  
  orientation: 'vertical',  
  hoveredColor: '#ece5e4', 
  barsOffset: barsOffset,  
  Margin: {  
    top: 30,  
    left: left,  
    right: right,  
    bottom: bottom  
  },  
  labelOffset: 5,  
  type: useGradients? 'stacked:gradient' : 'stacked',  
  showAggregates:true,  
  showLabels:true,  
  Label: {  
    type: labelType, //Native or HTML  
    size: 13,  
    family: 'Arial',  
    color: 'white'  
  },  
  Tips: {  
    enable: true,  
    onShow: function(tip, elem) {  
      tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;  
    }  
  }  
  });  

  $.ajax({
    url: '/tree/confused',
    type: 'GET',
    dataType: 'JSON',
    success: function(data) {
      json = $.parseJSON(data);
      barChart10.loadJSON(json);  
    }
  });

  var barChart11 = new $jit.BarChart({  
  injectInto: 'infovis11',  
  animate: true,  
  orientation: 'vertical',  
  hoveredColor: '#ece5e4', 
  barsOffset: barsOffset,  
  Margin: {  
    top: 30,  
    left: left,  
    right: right,  
    bottom: bottom  
  },  
  labelOffset: 5,  
  type: useGradients? 'stacked:gradient' : 'stacked',  
  showAggregates:true,  
  showLabels:true,  
  Label: {  
    type: labelType, //Native or HTML  
    size: 13,  
    family: 'Arial',  
    color: 'white'  
  },  
  Tips: {  
    enable: true,  
    onShow: function(tip, elem) {  
      tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;  
    }  
  }  
  });  

  $.ajax({
    url: '/tree/fpga',
    type: 'GET',
    dataType: 'JSON',
    success: function(data) {
      json = $.parseJSON(data);
      barChart11.loadJSON(json);  
    }
  });

  var barChart12 = new $jit.BarChart({  
  injectInto: 'infovis12',  
  animate: true,  
  orientation: 'vertical',  
  hoveredColor: '#ece5e4', 
  barsOffset: barsOffset,  
  Margin: {  
    top: 30,  
    left: left,  
    right: right,  
    bottom: bottom  
  },  
  labelOffset: 5,  
  type: useGradients? 'stacked:gradient' : 'stacked',  
  showAggregates:true,  
  showLabels:true,  
  Label: {  
    type: labelType, //Native or HTML  
    size: 13,  
    family: 'Arial',  
    color: 'white'  
  },  
  Tips: {  
    enable: true,  
    onShow: function(tip, elem) {  
      tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;  
    }  
  }  
  });  

  $.ajax({
    url: '/tree/win',
    type: 'GET',
    dataType: 'JSON',
    success: function(data) {
      json = $.parseJSON(data);
      barChart12.loadJSON(json);  
    }
  });

  var barChart13 = new $jit.BarChart({  
  injectInto: 'infovis13',  
  animate: true,  
  orientation: 'vertical',  
  hoveredColor: '#ece5e4', 
  barsOffset: barsOffset,  
  Margin: {  
    top: 30,  
    left: left,  
    right: right,  
    bottom: bottom  
  },  
  labelOffset: 5,  
  type: useGradients? 'stacked:gradient' : 'stacked',  
  showAggregates:true,  
  showLabels:true,  
  Label: {  
    type: labelType, //Native or HTML  
    size: 13,  
    family: 'Arial',  
    color: 'white'  
  },  
  Tips: {  
    enable: true,  
    onShow: function(tip, elem) {  
      tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;  
    }  
  }  
  });  

  $.ajax({
    url: '/tree/demoralized',
    type: 'GET',
    dataType: 'JSON',
    success: function(data) {
      json = $.parseJSON(data);
      barChart13.loadJSON(json);  
    }
  });

  var barChart14 = new $jit.BarChart({  
  injectInto: 'infovis14',  
  animate: true,  
  orientation: 'vertical',  
  hoveredColor: '#ece5e4', 
  barsOffset: barsOffset,  
  Margin: {  
    top: 30,  
    left: left,  
    right: right,  
    bottom: bottom  
  },  
  labelOffset: 5,  
  type: useGradients? 'stacked:gradient' : 'stacked',  
  showAggregates:true,  
  showLabels:true,  
  Label: {  
    type: labelType, //Native or HTML  
    size: 13,  
    family: 'Arial',  
    color: 'white'  
  },  
  Tips: {  
    enable: true,  
    onShow: function(tip, elem) {  
      tip.innerHTML = "<b>" + elem.name + "</b>: " + elem.value;  
    }  
  }  
  });  

  $.ajax({
    url: '/tree/rage',
    type: 'GET',
    dataType: 'JSON',
    success: function(data) {
      json = $.parseJSON(data);
      barChart14.loadJSON(json);  
    }
  });


}
