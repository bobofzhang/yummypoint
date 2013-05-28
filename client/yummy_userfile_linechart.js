

var thisShow;
var slideNumber;

// Meteor.methods({
//   passShowName: function (showName) {
//     console.log('in the passShowName');
//     thisShow = showName;
//     return thisShow;
//   }
// })

// Meteor.methods({
//   passSlideCount: function (count) {
//     console.log('in passSlideCount');
//     slideNumber = count;
//     console.log(slideNumber);
//     return slideNumber;
//   }
// })

// Template.yummy_coins.events({
//   'click #save-userFile-slide': function() {
//     console.log('saving userFile chart');
//     console.log(thisShow);
//     Shows.insert([
//       { show: thisShow },
//       { slide: slideNumber },
//       { contents: 'Deps.autorun(function(){ return Meteor.call("bitlyLineChartD3", ' + bitPhrase + '); }) && Meteor.call("renderHotBits");' },
//       { slideType: "chart" },
//       { dataSource: "bitly" },
//     ]);
//     $('#slide-links').append('<div id="saved-slide" class="span1"><span class="slidelink' + slideNumber + '"<p> Slide' + ' ' + slideNumber + '</p></span></div>');
//     $('.bitly-chart').remove();
//     $('.hot-bits').remove();
//     $('#slide-instruct').remove();
//     $('#twitter-switch').remove();
//     $('#bitcoin-switch').remove();
//     $('#save-bitly-slide').remove();
//     $('#create-text-sub').remove();
//     $('#bar-chart-switch').remove();
//     $('#bubble-chart-switch').remove();
//     $('#slide-inputs').remove();
//     $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
//     $('#slide-inputs').append('<div class="slide-title"></div><div class="bullet-one"></div><div class="bullet-two"></div><div class="bullet-three"></div>');
//     $('#slide-nav-row').append('<div id="img-back-upload" class="span4"> <span class="back-img"><p> Upload background image </p></span></div><div id="slide-controls" class="span4"><span class="make-slide"><p class="make-first-slide"> Save Slide and Continue </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
//     $('.slide-title').append('<input id="slide-title" class="slide-text" type="text" placeholder="Enter Slide Title Here" autofocus />');
//     $('.make-start').append('<div id="slide-instruct" class="span12 slide-inputs"><span class="instruct-title"><h2>Enter your slide title above </h2></span></div>');
//     Meteor.call('tickSlideCount');
//     //Meteor.clearInterval("renderHotBits"); showNameEED TO FIGURE OUT HOW TO ACCESS THE SET INTERVAL HANDLE
//     //$('#yummy-shows').append('<div id="start-chart" class="span 4"><span class="start-chart"><h3> Start Chart </h3></span></div>');
//   },
//   'click #start-chart': function() {
//     var showSlide = (Shows.find({ 0 : { show: thisShow }}).fetch());
//     console.log(showSlide);
//     $('.make-start').remove();
//     var type = showSlide[0]['1']['slideType'];
//     if (type === "chart") {
//       var func = showSlide[0]['2']['contents'];
//       console.log(func);
//       return func;
//     }
//   }
// })

Meteor.methods({
  userFileLineChart: function(hotbits) {
    console.log('i am in the bitly line graph method');
    $('.bitly-chart').remove();

    var rawData;

    rawData = Files.find({}).fetch();
    var myData = rawData[0]['file'];
    console.log(myData);

    var data = [];

    for (var i = 0; i < myData.length; i++) {
      data.push([myData[i][0], myData[i][1]]);
      console.log(myData[i][0]);
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
                              .attr("class", "bitly-chart")
                              .append("g")
                              .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


    x.domain(d3.extent(data, function(d) { return d[1]; }));
    y.domain(d3.extent(data, function(d) { return d[0]; }));

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
        .datum(data)
        .attr("class", "line")
        .attr("d", line);

    return data;
  }
})

