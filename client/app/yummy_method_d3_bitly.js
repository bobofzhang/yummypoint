
var bitPhrase;
var thisShow;
var slideNumber;

Meteor.methods({
  passShowName: function (showName) {
    thisShow = showName;
    return thisShow;
  }
})

Meteor.methods({
  passSlideCount: function (count) {
    slideNumber = count;
    return slideNumber;
  }
})

Meteor.methods({
  renderHotBits: function(){
    var bitTags = Hotbits.find({}, { sort: { time: -1, clickrate: -1 }, limit: 50 }).fetch();
    var bitTagsArray =[]; 
    for (var i = 0; i < bitTags.length; i++) {
        bitTagsArray.push(bitTags[i]['phrase']);
    }
    var bitArray = _.uniq(bitTagsArray);
    console.log(bitArray);
    $('.hot-bits').remove();
    $('.make-start').append('<div id="hot-bits-div"></div>');
    $('#hot-bits-div').append('<div id="hot-bit-1" class="span3 hot-bits-div"><span class="hot-bits"><p id="hot-bit1" title="' + bitArray[0] + '">' + bitArray[0] + '</p></span></div>');
    $('#hot-bits-div').append('<div id="hot-bit-2" class="span3 hot-bits-div"><span class="hot-bits"><p id="hot-bit2" title="' + bitArray[1] + '">' + bitArray[1] + '</p></span></div>');
    $('#hot-bits-div').append('<div id="hot-bit-3" class="span3 hot-bits-div"><span class="hot-bits"><p id="hot-bit3" title="' + bitArray[2] + '">' + bitArray[2] + '</p></span></div>');
    $('#hot-bits-div').append('<div id="hot-bit-4" class="span3 hot-bits-div"><span class="hot-bits"><p id="hot-bit4" title="' + bitArray[3] + '">' + bitArray[3] + '</p></span></div>');
    $('#hot-bits-div').append('<div id="hot-bit-5" class="span3 hot-bits-div"><span class="hot-bits"><p id="hot-bit5" title="' + bitArray[4] + '">' + bitArray[4] + '</p></span></div>');
    $('#hot-bits-div').append('<div id="hot-bit-6" class="span3 hot-bits-div"><span class="hot-bits"><p id="hot-bit6" title="' + bitArray[5] + '">' + bitArray[5] + '</p></span></div>');
    $('#hot-bits-div').append('<div id="hot-bit-7" class="span3 hot-bits-div"><span class="hot-bits"><p id="hot-bit7" title="' + bitArray[6] + '">' + bitArray[6] + '</p></span></div>');
    $('#hot-bits-div').append('<div id="hot-bit-8" class="span3 hot-bits-div"><span class="hot-bits"><p id="hot-bit8" title="' + bitArray[7] + '">' + bitArray[7] + '</p></span></div>');
    $('#hot-bits-div').append('<div id="hot-bit-9" class="span3 hot-bits-div"><span class="hot-bits"><p id="hot-bit9" title="' + bitArray[8] + '">' + bitArray[8] + '</p></span></div>');
    $('#hot-bits-div').append('<div id="hot-bit-10" class="span3 hot-bits-div"><span class="hot-bits"><p id="hot-bit10" title="' + bitArray[9] + '">' + bitArray[9] + '</p></span></div>');
    $('#hot-bits-div').append('<div id="hot-bit-11" class="span3 hot-bits-div"><span class="hot-bits"><p id="hot-bit11" title="' + bitArray[10] + '">' + bitArray[10] + '</p></span></div>');
    $('#hot-bits-div').append('<div id="hot-bit-12" class="span3 hot-bits-div"><span class="hot-bits"><p id="hot-bit12" title="' + bitArray[11] + '">' + bitArray[11] + '</p></span></div>');
  }
})

Template.yummy_coins.events({
  'click #hot-bit-1': function() {
    var hotBitVal = document.getElementById("hot-bit1");
    var bitPhraseVal = hotBitVal.getAttribute("title");
    bitPhrase = bitPhraseVal;
    $('#hot-bits-div').remove();
    $('#create-chart-sub').remove();
    $('#slide-nav-row').append('<div id="save-bitly-slide" class="span4 save-bitly-slide"> <span class="save-bitly"> <p> Save Bitly Line Graph </p></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    $('#slide-nav-row').append('<div id="hotbit-line-chart" class="span12"><span class="line-chart"><h4>'+ bitPhraseVal +'</h4></span></div>');
    return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3', bitPhraseVal); });
  }
})

Template.yummy_coins.events({
  'click #hot-bit-2': function() {
    var hotBitVal = document.getElementById("hot-bit2");
    var bitPhraseVal = hotBitVal.getAttribute("title");
    bitPhrase = bitPhraseVal;
    $('#hot-bits-div').remove();
    $('#create-chart-sub').remove();
    $('#slide-nav-row').append('<div id="save-bitly-slide" class="span4 save-bitly-slide"> <span class="save-bitly"> <p> Save Bitly Line Graph </p></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    $('#slide-nav-row').append('<div id="hotbit-line-chart" class="span12"><span class="line-chart"><h4>'+ bitPhraseVal +'</h4></span></div>');
    return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3', bitPhraseVal); });
  }
})

Template.yummy_coins.events({
  'click #hot-bit-3': function() {
    var hotBitVal = document.getElementById("hot-bit3");
    var bitPhraseVal = hotBitVal.getAttribute("title");
    bitPhrase = bitPhraseVal;
    $('#hot-bits-div').remove();
    $('#create-chart-sub').remove();
    $('#slide-nav-row').append('<div id="save-bitly-slide" class="span4 save-bitly-slide"> <span class="save-bitly"> <p> Save Bitly Line Graph </p></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    $('#slide-nav-row').append('<div id="hotbit-line-chart" class="span12"><span class="line-chart"><h4>'+ bitPhraseVal +'</h4></span></div>');
    return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3', bitPhraseVal); });
  }
})

Template.yummy_coins.events({
  'click #hot-bit-4': function() {
    var hotBitVal = document.getElementById("hot-bit4");
    var bitPhraseVal = hotBitVal.getAttribute("title");
    bitPhrase = bitPhraseVal;
    $('#hot-bits-div').remove();
    $('#create-chart-sub').remove();
    $('#slide-nav-row').append('<div id="save-bitly-slide" class="span4 save-bitly-slide"> <span class="save-bitly"> <p> Save Bitly Line Graph </p></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    $('#slide-nav-row').append('<div id="hotbit-line-chart" class="span12"><span class="line-chart"><h4>'+ bitPhraseVal +'</h4></span></div>');
    return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3', bitPhraseVal); });
  }
})

Template.yummy_coins.events({
  'click #hot-bit-5': function() {
    var hotBitVal = document.getElementById("hot-bit5");
    var bitPhraseVal = hotBitVal.getAttribute("title");
    bitPhrase = bitPhraseVal;
    $('#hot-bits-div').remove();
    $('#create-chart-sub').remove();
    $('#slide-nav-row').append('<div id="save-bitly-slide" class="span4 save-bitly-slide"> <span class="save-bitly"> <p> Save Bitly Line Graph </p></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    $('#slide-nav-row').append('<div id="hotbit-line-chart" class="span12"><span class="line-chart"><h4>'+ bitPhraseVal +'</h4></span></div>');
    return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3', bitPhraseVal); });
  }
})

Template.yummy_coins.events({
  'click #hot-bit-6': function() {
    var hotBitVal = document.getElementById("hot-bit6");
    var bitPhraseVal = hotBitVal.getAttribute("title");
    bitPhrase = bitPhraseVal;
    $('#hot-bits-div').remove();
    $('#create-chart-sub').remove();
    $('#slide-nav-row').append('<div id="save-bitly-slide" class="span4 save-bitly-slide"> <span class="save-bitly"> <p> Save Bitly Line Graph </p></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    $('#slide-nav-row').append('<div id="hotbit-line-chart" class="span12"><span class="line-chart"><h4>'+ bitPhraseVal +'</h4></span></div>');
    return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3', bitPhraseVal); });
  }
})

Template.yummy_coins.events({
  'click #hot-bit-7': function() {
    var hotBitVal = document.getElementById("hot-bit7");
    var bitPhraseVal = hotBitVal.getAttribute("title");
    bitPhrase = bitPhraseVal;
    $('#hot-bits-div').remove();
    $('#create-chart-sub').remove();
    $('#slide-nav-row').append('<div id="save-bitly-slide" class="span4 save-bitly-slide"> <span class="save-bitly"> <p> Save Bitly Line Graph </p></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    $('#slide-nav-row').append('<div id="hotbit-line-chart" class="span12"><span class="line-chart"><h4>'+ bitPhraseVal +'</h4></span></div>');
    return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3', bitPhraseVal); });
  }
})

Template.yummy_coins.events({
  'click #hot-bit-8': function() {
    var hotBitVal = document.getElementById("hot-bit8");
    var bitPhraseVal = hotBitVal.getAttribute("title");
    bitPhrase = bitPhraseVal;
    $('#hot-bits-div').remove();
    $('#create-chart-sub').remove();
    $('#slide-nav-row').append('<div id="save-bitly-slide" class="span4 save-bitly-slide"> <span class="save-bitly"> <p> Save Bitly Line Graph </p></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    $('#slide-nav-row').append('<div id="hotbit-line-chart" class="span12"><span class="line-chart"><h4>'+ bitPhraseVal +'</h4></span></div>');
    return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3', bitPhraseVal); });
  }
})

Template.yummy_coins.events({
  'click #hot-bit-9': function() {
    var hotBitVal = document.getElementById("hot-bit9");
    var bitPhraseVal = hotBitVal.getAttribute("title");
    bitPhrase = bitPhraseVal;
    $('#hot-bits-div').remove();
    $('#create-chart-sub').remove();
    $('#slide-nav-row').append('<div id="save-bitly-slide" class="span4 save-bitly-slide"> <span class="save-bitly"> <p> Save Bitly Line Graph </p></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    $('#slide-nav-row').append('<div id="hotbit-line-chart" class="span12"><span class="line-chart"><h4>'+ bitPhraseVal +'</h4></span></div>');
    return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3', bitPhraseVal); });
  }
})

Template.yummy_coins.events({
  'click #hot-bit-10': function() {
    var hotBitVal = document.getElementById("hot-bit10");
    var bitPhraseVal = hotBitVal.getAttribute("title");
    bitPhrase = bitPhraseVal;
    $('#hot-bits-div').remove();
    $('#create-chart-sub').remove();
    $('#slide-nav-row').append('<div id="save-bitly-slide" class="span4 save-bitly-slide"> <span class="save-bitly"> <p> Save Bitly Line Graph </p></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    $('#slide-nav-row').append('<div id="hotbit-line-chart" class="span12"><span class="line-chart"><h4>'+ bitPhraseVal +'</h4></span></div>');
    return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3', bitPhraseVal); });
  }
})

Template.yummy_coins.events({
  'click #hot-bit-11': function() {
    var hotBitVal = document.getElementById("hot-bit11");
    var bitPhraseVal = hotBitVal.getAttribute("title");
    bitPhrase = bitPhraseVal;
    $('#hot-bits-div').remove();
    $('#create-chart-sub').remove();
    $('#slide-nav-row').append('<div id="save-bitly-slide" class="span4 save-bitly-slide"> <span class="save-bitly"> <p> Save Bitly Line Graph </p></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    $('#slide-nav-row').append('<div id="hotbit-line-chart" class="span12"><span class="line-chart"><h4>'+ bitPhraseVal +'</h4></span></div>');
    return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3', bitPhraseVal); });
  }
})

Template.yummy_coins.events({
  'click #hot-bit-12': function() {
    var hotBitVal = document.getElementById("hot-bit12");
    var bitPhraseVal = hotBitVal.getAttribute("title");
    bitPhrase = bitPhraseVal;
    $('#hot-bits-div').remove();
    $('#create-chart-sub').remove();
    $('#slide-nav-row').append('<div id="save-bitly-slide" class="span4 save-bitly-slide"> <span class="save-bitly"> <p> Save Bitly Line Graph </p></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    $('#slide-nav-row').append('<div id="hotbit-line-chart" class="span12"><span class="line-chart"><h4>'+ bitPhraseVal +'</h4></span></div>');
    return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3', bitPhraseVal); });
  }
})

Template.yummy_coins.events({
  'click #save-bitly-slide': function() {
    Shows.insert([
      { show: thisShow },
      { slide: slideNumber },
      { contents: bitPhrase }, 
      { slideType: "chart" },
      { dataSource: "bitly" },
      { fileNum: ""}, 
      { meteorUser: Meteor.userId() },
      { chartType: "line" }
    ]);
    $('#slide-links').append('<div id="saved-slide" class="span1"><span class="slidelink' + slideNumber + '"<p> Slide' + ' ' + slideNumber + '</p></span></div>');
    $('.bitly-chart').remove();
    $('.hot-bits').remove();
    $('#hot-bits-div').remove();
    $('#hotbit-line-chart').remove();
    $('#slide-instruct').remove();
    $('#save-bitly-slide').remove();
    $('#create-text-sub').remove();
    $('#slide-inputs').remove();
    $('#slide-inputs-chart').remove();
    $('#create-chart-sub').remove();
    $('#chart-render').remove();
    $('#chart-render-bitly').remove();
    $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
    $('#slide-inputs').append('<div class="slide-title"></div><div class="bullet-one"></div><div class="bullet-two"></div><div class="bullet-three"></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span12"> <span class="chart-slide-sub"><p> Create Chart Slide </p></span></div>');
    $('.slide-title').append('<input id="slide-title" class="slide-text" type="text" placeholder="Enter Slide Title Here" autofocus />');
    Meteor.call('tickSlideCount');
  },
  'click #start-chart': function() {
    var showSlide = (Shows.find({ 0 : { show: thisShow }}).fetch());
    $('.make-start').remove();
    var type = showSlide[0]['1']['slideType'];
    if (type === "chart") {
      var func = showSlide[0]['2']['contents'];
      return func;
    }
  }
})

Meteor.methods({
  bitlyLineChartD3: function(hotbits) {
    console.log('i am in bitly render');
    $('.bitly-chart').remove();
    $('#slide-inputs-chart-bitly').remove();
    $('#chart-render-bitly').append('<div id="slide-inputs-chart-bitly" class="show-title-slide"></div>');

    var rawData;

    rawData = Hotbits.find({ phrase: hotbits }).fetch();

    var data = [];

    for (var i = 0; i < rawData.length; i++) {
      data.push([rawData[i].clickrate, rawData[i].time]);
      // console.log(rawData[i].clickrate);
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

    var svg = d3.select("#slide-inputs-chart-bitly").append("svg")
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
        .text(""+ hotbits + "link clickrate");

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
    

