  
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
      //console.log(rawData[i]['time']);
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

