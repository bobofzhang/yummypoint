  
var dataset;

var setData = function (data) {
  dataset = data;
  return data;
}

var getData = function () {
  return dataset;
}

// Meteor.call("getBitCoinData", function(error, result) {
//   console.log('hi');
//   console.log(result);
//   var dataset = result;
//   return setData(result);
// });

Meteor.methods({

  D3testinit: function() {
    var dataset = getData();

    // var dataset = [];
    // var numDataPoints = 200;
    // var xRange = Math.random() * 1000;
    // var yRange = 1;
    // for (var i = 0; i < numDataPoints; i++) {
    //     var newNumber1 = Math.round(Math.random() * xRange);
    //     var newNumber2 = yRange++;
    //     dataset.push([newNumber1, newNumber2]);
    // }

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
    return console.log(dataset);
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
    

