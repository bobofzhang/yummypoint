  
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

Meteor.methods({
  passShowNameBitCoin: function (showName) {
    console.log('in the passShowNameBitCoin');
    thisShowBitCoin = showName;
    return thisShowBitCoin;
  }
})

Meteor.methods({
  passSlideCountBitCoin: function (count) {
    console.log('in passSlideCountBitCoin');
    slideNumberBitCoin = count;
    return slideNumberBitCoin;
  }
})

Meteor.methods({
  showBitCoinLine: function (func) {
    console.log('in showBitCoinLine bitch');
    return func;
  }
})

Template.yummy_coins.events({
  'click #save-bitcoin-slide': function() {
    console.log('saving bitcoin chart');
    console.log(thisShowBitCoin);
    Shows.insert([
      { show: thisShowBitCoin },
      { slide: slideNumberBitCoin },
      { contents: "Meteor.call('D3testinit')" },
      { slideType: "chart" },
      { dataSource: "bitcoin" },
    ]);
    $('#slide-links').append('<div id="saved-slide" class="span1"><span class="slidelink' + slideNumberBitCoin + '"<p> Slide' + ' ' + slideNumberBitCoin + '</p></span></div>');
    $('.bitly-chart').remove();
    $('.bitcoin-chart').remove();
    $('#slide-instruct').remove();
    $('#twitter-switch').remove();
    $('#bitly-switch').remove();
    $('#save-bitcoin-slide').remove();
    $('#create-text-sub').remove();
    $('#bar-chart-switch').remove();
    $('#bubble-chart-switch').remove();
    $('#slide-inputs').remove();
    $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
    $('#slide-inputs').append('<div class="slide-title"></div><div class="bullet-one"></div><div class="bullet-two"></div><div class="bullet-three"></div>');
    $('#slide-nav-row').append('<div id="img-back-upload" class="span4"> <span class="back-img"><p> Upload background image </p></span></div><div id="slide-controls" class="span4"><span class="make-slide"><p class="make-first-slide"> Save Slide and Continue </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
    $('.slide-title').append('<input id="slide-title" class="slide-text" type="text" placeholder="Enter Slide Title Here" autofocus />');
    $('.make-start').append('<div id="slide-instruct" class="span12 slide-inputs"><span class="instruct-title"><h2>Enter your slide title above </h2></span></div>');
    Meteor.call('tickSlideCount');
    //Meteor.clearInterval("renderHotBits"); showNameEED TO FIGURE OUT HOW TO ACCESS THE SET INTERVAL HANDLE
    //$('#yummy-shows').append('<div id="start-chart" class="span 4"><span class="start-chart"><h3> Start Chart </h3></span></div>');
  }
})

Meteor.setInterval(function(){
  Meteor.call("getBitCoinData", function(error, result) {
    console.log('hi');
    // console.log(result);
    var dataset = result;
    return setData(result);
  })
}, 60000);

Meteor.methods({

  D3testinit: function() {
    // var dataset = getData();
    $('.bitcoin-chart').remove();
    var checkBitTime = Prices.find({}, { sort: { date: -1 }, limit: 1 }).fetch();
    console.log(checkBitTime);

    var rawData;
    rawData = Prices.find({}, { sort: { date: -1 }, limit: 100 }).fetch();
    //rawData = Prices.find({}, { sort: { time: -1 }, limit: 10 }).fetch();
    // console.log(rawData);

    var dataset = [];

    for (var i = 0; i < rawData.length; i++) {
      dataset.push([rawData[i]['price'], rawData[i]['time']]);
    }

    var margin = {
      top: 20, 
      right: 50, 
      bottom: 30, 
      left: 50
    };

    var width = 960 - margin.left - margin.right;
    var height = 500 - margin.top - margin.bottom;

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

    var svg = d3.select("body").append("svg")
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
    // return console.log(dataset);
  }
})


Meteor.methods({

  D3BarChart: function() {

    var data = getData();
    console.log('in barchar');
    console.log(data);

    // var t = 1297110663, // start time (seconds since epoch)
    // v = 70, // start value (subscribers)
    // data = d3.range(50).map(next); // starting dataset

    // function next() {
    //   return {
    //     time: ++t,
    //     value: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
    //   };
    // }

    // setInterval(function() {
    //   data.shift();
    //   data.push(next());
    //   redraw();
    // }, 1500);

    var w = 10,
        h = 120;

    var x = d3.scale.linear()
    .domain([0, 1])
    .range([0, w]);

    var y = d3.scale.linear()
    .domain([115, 118])
    .rangeRound([0, 120]);

    var chart = d3.select("body").append("svg")
      .attr("class", "chart")
      .style("border", "1px solid black")
      .attr("width", w * data.length - 1)
      .attr("height", h);

    chart.selectAll("rect")
      .data(data)
      .enter().append("rect")
      .attr("x", function(d, i) { return x(i) - .5; })
      .attr("y", function(d) { return h - y(d[0]); })
      .attr("width", w)
      .attr("height", function(d) { console.log(d[0]); return y(d[0]); })
      .style("fill", function(d) {
        var returnColor;
        if (d[0] === 116) { returnColor = "blue"; 
          } else if (d[0] > 116 &&  d[0] <= 116.27) { returnColor = "purple";
          // } else if (d.value > 8 && d.value <= 12 ) { returnColor = "yellow";
          // } else if (d.value > 4 && d.value <= 8 ) { returnColor = "green";
          } else if (d[0] > 116.27) { returnColor = "red"; }
          return returnColor;
        });

    chart.append("line")
      .attr("x1", 0)
      .attr("x2", w * data.length)
      .attr("y1", h - .5)
      .attr("y2", h - .5)
      .style("stroke", "#000");

    // function redraw() {

    //   var rect = chart.selectAll("rect")
    //       .data(data, function(d) { return d.time; });

    //   rect.enter().insert("rect", "line")
    //       .attr("x", function(d, i) { return x(i + 1) - .5; })
    //       .attr("y", function(d) { return h - y(d.value) - .5; })
    //       .attr("width", w)
    //       .attr("height", function(d) { return y(d.value); })
    //     .transition()
    //       .duration(1000)
    //       .attr("x", function(d, i) { return x(i) - .5; });

    //   rect.transition()
    //       .duration(1000)
    //       .attr("x", function(d, i) { return x(i) - .5; });

    //   rect.exit().transition()
    //       .duration(1000)
    //       .attr("x", function(d, i) { return x(i - 1) - .5; })
    //       .remove();
    // }
  }
})
    

