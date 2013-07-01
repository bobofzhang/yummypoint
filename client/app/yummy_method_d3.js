  
var dataset;

var setData = function (data) {
  dataset = data;
  return data;
}

var getData = function () {
  return dataset;
}

var thisShowBitCoin;
var slideNumberBitCoin;

var bitcoinInterval = Meteor.setInterval(function(){
  Meteor.call("getBitCoinData", function(error, result) {
    var dataset = result;
    return setData(result);
  })
}, 30000);

//Session.set("bitcoinInterval", bitcoinInterval);

Meteor.methods({
  passShowNameBitCoin: function (showName) {
    thisShowBitCoin = showName;
    return thisShowBitCoin;
  }
})

Meteor.methods({
  passSlideCountBitCoin: function (count) {
    slideNumberBitCoin = count;
    return slideNumberBitCoin;
  }
})

Meteor.methods({
  showBitCoinLine: function (func) {
    return func;
  }
})

Template.yummy_coins.events({
  'click #save-bitcoin-slide': function() {
    Shows.insert([
      { show: thisShowBitCoin },
      { slide: slideNumberBitCoin },
      { contents: "Meteor.call('D3testinit')" },
      { slideType: "chart" },
      { dataSource: "bitcoin" },
      { fileNum: ""},
      { meteorUser: Meteor.userId() },
      { chartType: "line" }
    ]);
    $('#slide-links').append('<div id="saved-slide'+slideNumberBitCoin+'" title="'+ slideNumberBitCoin +'" class="span1 saved-slide"><span class="slidelink' + slideNumberBitCoin + '"<p> Slide' + ' ' + slideNumberBitCoin + '</p></span></div>');
    $('.bitly-chart').remove();
    $('.bitcoin-chart').remove();
    $('#slide-instruct').remove();
    $('#twitter-switch').remove();
    $('#bitly-switch').remove();
    $('#save-bitcoin-slide').remove();
    $('#create-text-sub').remove();
    $('#bar-chart-switch').remove();
    $('#bubble-chart-switch').remove();
    $('#create-chart-sub').remove();
    $('#slide-inputs').remove();
    $('#slide-inputs-chart').remove();
    $('#chart-render').remove();
    $('#chart-render-bitcoin').remove();
    $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
    $('#slide-inputs').append('<div class="slide-title"></div><div class="bullet-one"></div><div class="bullet-two"></div><div class="bullet-three"></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span12"> <span class="chart-slide-sub"><p> Create Chart Slide </p></span></div>');
    $('.slide-title').append('<input id="slide-title" class="slide-text" type="text" placeholder="Enter Slide Title Here" autofocus />');
    Meteor.call('tickSlideCount');
    //Meteor.clearInterval("renderHotBits"); showNameEED TO FIGURE OUT HOW TO ACCESS THE SET INTERVAL HANDLE
    //$('#yummy-shows').append('<div id="start-chart" class="span 4"><span class="start-chart"><h3> Start Chart </h3></span></div>');
  }
})


Meteor.methods({

  D3testinit: function() {
    $('.bitcoin-chart').remove();
    $('#slide-inputs-chart-bitcoin').remove();
    $('#chart-render-bitcoin').append('<div id="slide-inputs-chart-bitcoin" class="show-title-slide"></div>');
    var checkBitTime = Prices.find({}, { sort: { date: -1 }, limit: 1 }).fetch();

    var rawData;
    rawData = Prices.find({}, { sort: { date: -1 }, limit: 500 }).fetch();


    var dataset = [];

    for (var i = 0; i < rawData.length; i++) {
      dataset.push([rawData[i]['price'], rawData[i]['time']]);
      console.log(rawData[i]['time']);
    }

    var margin = {
      top: 50, 
      right: 50, 
      bottom: 30, 
      left: 50
    };

    var width = 950 - margin.left - margin.right;
    var height = 550 - margin.top - margin.bottom;

    var x = d3.time.scale()
        .range([0, width]);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom")
        .ticks(5);

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left");

    var line = d3.svg.line()
        .x(function(d) { return x(d[1]); })
        .y(function(d) { return y(d[0]); });

    var svg = d3.select("#slide-inputs-chart-bitcoin").append("svg")
                              .attr("width", width + margin.left + margin.right)
                              .attr("height", height + margin.top + margin.bottom)
                              .attr("class", "bitcoin-chart")
                              .append("g")
                              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    x.domain(d3.extent(dataset, function(d) { return d[1]; }));
    y.domain(d3.extent(dataset, function(d) { return d[0]; }));

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

    svg.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Price ($)");

    svg.append("path")
        .datum(dataset)
        .attr("class", "line")
        .attr("d", line);

    return dataset;
  }
})

