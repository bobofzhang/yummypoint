
var thisShowBitBar;
var slideNumber;

Meteor.methods({
  passShowNameBitBar: function (showName) {
    thisShowBitBar = showName;
    return thisShowBitBar;
  }
})

Meteor.methods({
  passSlideCountBitBar: function (count) {
    slideNumberBitBar = count;
    return slideNumberBitBar;
  }
})

Template.yummy_coins.events({
  'click #coin-bar-chart-nav': function () {
    $('.line-chart-data-sources').remove();
    $('.data-source-details').remove();
    $('#slide-controls').remove();
    $('#create-text-sub').remove();
    $('.chart-data-sources-types').remove();
    $('.make-start').append('<div id="chart-bar-render-bitcoin" class="span12"></div>');
    $('#slide-nav-row').append('<div id="save-bitcoin-slide" class="span4 save-bitcoin-slide"> <span class="save-bitcoin"> <p> Save Bitcoin Graph </p></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    return Deps.autorun(function(){ return Meteor.call('bitcoinBarChart'); });
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
  bitcoinBarChart: function() {
    //var data = getData();
    $('.bitcoin-chart').remove();
    $('#slide-inputs-chart-bar-bitcoin').remove();
    $('#chart-bar-render-bitcoin').append('<div id="slide-inputs-chart-bar-bitcoin" class="show-title-slide"></div>');

    var checkBitTime = Prices.find({}, { sort: { date: -1 }, limit: 1 }).fetch();

    var rawData;
    rawData = Prices.find({}, { sort: { date: -1 }, limit: 50 }).fetch();


    var data = [];

    for (var i = 0; i < rawData.length; i++) {
      data.push([rawData[i]['price'], rawData[i]['time']]);
    }

    // var t = 1297110663, // start time (seconds since epoch)
    // v = 70, // start value (subscribers)
    // data = d3.range(50).map(next); // starting dataset

    var margin = {
      top: 50, 
      right: 50, 
      bottom: 30, 
      left: 50
    };

    var w = 950 - margin.left - margin.right;
    var h = 550 - margin.top - margin.bottom;

    var n = data.length;

    var c = w/n;

    // var w = 15,
    //     h = 550;

    var x = d3.time.scale()
        .range([0, c]);

    // var y = d3.scale.linear()
    //  .domain([0, 300])
    //  .rangeRound([0, h]);

    var y = d3.scale.linear()
      .domain([
              d3.min(data, function(d) { return d[0]; }),
              d3.max(data, function(d) { return d[0]; }) 
              ])
      // .rangeRound([
      //         d3.min(data, function(d) { return d[0]; }),
      //         d3.max(data, function(d) { return d[0]; }) 
      //         ]);
      .rangeRound([h/2, 500]);

    var chart = d3.select("#slide-inputs-chart-bar-bitcoin")
      .append("svg")
      .attr("class", "chart")
      // .style("border", "1px solid black")
      .attr("width", w)// * data.length - 1)
      .attr("height", h)
      .attr("cx", -50 )//function (d) { return d.x; })
      .attr("cy", 0 );//function (d) { return d.y; });
      //.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    chart.selectAll("rect")
      .data(data)
      .enter().append("rect")
      .attr("x", function(d, i) { return x(i) - .5; })
      .attr("y", function(d) { return h - y(d[0]); })
      .attr("width", c)
      .attr("height", function(d) { console.log(d[0]); return y(d[0]); })
      .style("fill", function(d) {
        var returnColor;
        if (d[0] <= 102.55) { returnColor = "blue"; 
          } else if (d[0] > 102.55 &&  d[0] <= 106) { returnColor = "purple";
          // } else if (d.value > 8 && d.value <= 12 ) { returnColor = "yellow";
          // } else if (d.value > 4 && d.value <= 8 ) { returnColor = "green";
          } else if (d[0] > 102.6) { returnColor = "red"; }
          return returnColor;
        });

    chart.append("line")
      .attr("x1", 0 )
      .attr("x2", w )//* data.length)
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
    

