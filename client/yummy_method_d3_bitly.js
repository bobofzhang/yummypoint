
var bitPhrase = "jennifer aniston";
var thisShow;
var slideNumber;

Meteor.methods({
  passShowName: function (showName) {
    console.log('in the passShowName');
    thisShow = showName;
    return thisShow;
  }
})

Meteor.methods({
  passSlideCount: function (count) {
    console.log('in passSlideCount');
    slideNumber = count;
    console.log(slideNumber);
    return slideNumber;
  }
})

Template.yummy_coins.events({
  'click #save-bitly-slide': function() {
    console.log('saving bitly chart');
    console.log(thisShow);
    Shows.insert([
      { show: thisShow },
      { slide: slideNumber },
      { contents: 'Deps.autorun(function(){ return Meteor.call("bitlyLineChartD3", ' + bitPhrase + '); }) && Meteor.setInterval(function(){ Meteor.call("renderHotBits") }, 10000) && Meteor.call("renderHotBits");' },
      { slideType: "chart" },
      { dataSource: "bitly" },
    ]);
    $('#slide-links').append('<div id="saved-slide" class="span1"><span class="slidelink' + slideNumber + '"<p> Slide' + ' ' + slideNumber + '</p></span></div>');
    $('.bitly-chart').remove();
    $('.hot-bits').remove();
    $('#slide-instruct').remove();
    $('#twitter-switch').remove();
    $('#bitcoin-switch').remove();
    $('#save-bitly-slide').remove();
    $('#create-text-sub').remove();
    $('#bar-chart-switch').remove();
    $('#bubble-chart-switch').remove();    
    $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
    $('#slide-inputs').append('<div class="slide-title"></div><div class="bullet-one"></div><div class="bullet-two"></div><div class="bullet-three"></div>');
    $('#slide-nav-row').append('<div id="img-back-upload" class="span4"> <span class="back-img"><p> Upload background image </p></span></div><div id="slide-controls" class="span4"><span class="make-slide"><p class="make-first-slide"> Save Slide and Continue </p></span></div><div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
    $('.slide-title').append('<input id="slide-title" class="slide-text" type="text" placeholder="Enter Slide Title Here" autofocus />');
    $('.make-start').append('<div id="slide-instruct" class="span12 slide-inputs"><span class="instruct-title"><h2>Enter your slide title above </h2></span></div>');
    //Meteor.clearInterval("renderHotBits"); showNameEED TO FIGURE OUT HOW TO ACCESS THE SET INTERVAL HANDLE
    //$('#yummy-shows').append('<div id="start-chart" class="span 4"><span class="start-chart"><h3> Start Chart </h3></span></div>');
  },
  'click #start-chart': function() {
    var showSlide = (Shows.find({ 0 : { show: thisShow }}).fetch());
    console.log(showSlide);
    $('.make-start').remove();
    var type = showSlide[0]['1']['slideType'];
    if (type === "chart") {
      var func = showSlide[0]['2']['contents'];
      console.log(func);
      return func;
    }
  }
})

Meteor.methods({
  bitlyLineChartD3: function(hotbits) {
    console.log('i am in the bitly line graph method');
    $('.bitly-chart').remove();

    var rawData;

    //Deps.autorun(function(){
    rawData = Hotbits.find({ phrase: bitPhrase }).fetch();
      //return rawData;
    //})
    var data = [];

    for (var i = 0; i < rawData.length; i++) {
      data.push([rawData[i].clickrate, rawData[i].time]);
      console.log(rawData[i].clickrate);
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

var data = [];

Meteor.methods({

  bitlyBarChartD3: function() {

    var rawData;

 
    rawData = Hotbits.find({ phrase: "angelina jolie" }, {limit: 50}).fetch();
    // rawData = Hotbits.find({}).fetch();

    // var data = [];

    for (var i = 0; i < rawData.length; i++) {
      data.push(rawData[i].clickrate);//, rawData[i].time]);
      // console.log(data);
      // console.log(data);
    }
    // var now = new Date();
    // var t = now.getTime(); // start time (seconds since epoch)
    // v = 70, // start value (subscribers)

    // data = d3.range(50);

    // function next() {
    //   return {
    //     time: ++t,
    //     value: v = ~~Math.max(10, Math.min(90, v + 10 * (Math.random() - .5)))
    //   };
    // }
    // console.log(data[3][0]);
    // setInterval(function() {
    //   data.shift();
    //   data.push(next());
    //   redraw();
    // }, 1500);

    var w = 20,
        h = 240;
        // x = 0;

    var x = d3.scale.linear()
    .domain([0, 1])
    .range([0, w]);

    var y = d3.scale.linear()
    .domain([d3.min(data), d3.max(data)])
    .rangeRound([0, h]);

    var chart = d3.select("body").append("svg")
      .attr("class", "chart")
      .style("border", "1px solid black")
      .attr("width", w * data.length - 1)
      .attr("height", h);



    chart.selectAll("rect")
      .data(data)
      .enter().append("rect")
      // .attr("x", function(d, i) { return x(i) - .5; })
      // .attr("y", function(d) { return h - y(d[0]); })
      .attr("x", function(d, i) { return x(i) - .5 ; })
      .attr("y", function(d, i) { return h - y(data[i]) - .5 ; })
      .attr("width", w)
      // .attr("height", function(d) { return y(d[0]); })
      .attr("height", function(d, i) { return y(data[i]); })
      .style("fill", "black");//function(d) {
        // var returnColor;
        // if (d[0] === 116) { returnColor = "blue"; 
        //   } else if (d[0] > 116 &&  d[0] <= 116.27) { returnColor = "purple";
        //   // } else if (d.value > 8 && d.value <= 12 ) { returnColor = "yellow";
        //   // } else if (d.value > 4 && d.value <= 8 ) { returnColor = "green";
        //   } else if (d[0] > 116.27) { returnColor = "red"; }
        //   return returnColor;
        // });

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
    

