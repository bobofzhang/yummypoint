
var thisShow;
var slideNumber;

Template.yummy_coins.events({
  'click #line-chart-nav': function() {
    $('.line-chart-data-sources').remove();
    $('.data-source-details').remove();
    $('#slide-controls').remove();
    $('#create-text-sub').remove();
    $('#bar-chart-switch').remove();
    $('#bubble-chart-switch').remove();
    $('#public-data-row').remove();
    $('#twitter-data-row').remove();
    $('#bitcoin-data-row').remove();
    $('#bitly-data-row').remove();
    //$('#slide-nav-row').append('<div id="save-bitcoin-slide" class="span4 save-bitcoin-slide"> <span class="save-bitcoin"> <p> Save this sick Line Graph </p></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
    //$('#slide-nav-row').append('<div id="bar-chart-switch" class="span2"><span class="bar-recall"><p> Switch to Bar Chart </p></span></div><div id="bubble-chart-switch" class="span2"><span class="bubble-recall"><p> Switch to Bubble Chart </p></span></div>');
    //$('.make-start').append('<div class="data-source-details"><div class="row"><div id="twitter-switch" class="span6"> <span class="twitter"> <h3> Switch to Twitter Data </h3> </span></div><div id="bitly-switch" class="span6"> <span class="bitly"> <h3> Switch to Bitly Data </h3> </span></div></div></div>');
    $('.make-start').append('<div id="inputs" class="span12 clearfix"><input type="file" id="files" name="files[]" /></div>');
  }
})

// Template.yummy_coins.events({
//   'click #userFile-chart': function(){
//     $('.line-chart-data-sources').remove();
//     $('.data-source-details').remove();
//     $('#slide-controls').remove();
//     $('#create-text-sub').remove();
//     $('#bar-chart-switch').remove();
//     $('#bubble-chart-switch').remove();
//     $('#slide-nav-row').append('<div id="save-bitcoin-slide" class="span4 save-bitcoin-slide"> <span class="save-bitcoin"> <p> Save this sick Line Graph </p></span></div>');
//     $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div>');
//     $('#slide-nav-row').append('<div id="bar-chart-switch" class="span2"><span class="bar-recall"><p> Switch to Bar Chart </p></span></div><div id="bubble-chart-switch" class="span2"><span class="bubble-recall"><p> Switch to Bubble Chart </p></span></div>');
//     $('.make-start').append('<div class="data-source-details"><div class="row"><div id="twitter-switch" class="span6"> <span class="twitter"> <h3> Switch to Twitter Data </h3> </span></div><div id="bitly-switch" class="span6"> <span class="bitly"> <h3> Switch to Bitly Data </h3> </span></div></div></div>');
//     $('.make-start').append('<div id="inputs" class="span12 clearfix"><input type="file" id="files" name="files[]" /></div>');
//   }
// })

Template.yummy_coins.events({
  'change #inputs': function (event, tmpl) {
    console.log('i feel you');
    // event.preventDefault();
    // $('#files').bind('change', handleFileSelect);

    //function handleFileSelect(event) {
      var files = event.target.files; // FileList object
      var file = files[0];
      printTable(file);

      function printTable(file) {
      console.log('i am in printTable');
      var reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function(event){
        var csv = event.target.result;
        //console.log(csv);
        var data = $.csv.toArrays(csv);
        console.log(data);
        Files.insert({
          name: file.name,
          file: data
        })
      };
      reader.onerror = function(){ alert('Unable to read ' + file.fileName); };
    }
  return $('#inputs').remove() &&  $('.make-start').append('<div id="render-userFile" class="span12 see-userFile"> <span class="view-userFile"> <p> Preview Your Uploaded Data </p></span></div>')
  }
})

Template.yummy_coins.events({
  'click #render-userFile': function () {
    //$('#row chart-data-sources-types').remove();
    $('#user-data-row').remove();
    // $('#render-userFile').remove();
    // $('.make-start').append('<div id="slide-inputs-chart" class="span12 show-title-slide"></div>');
    Meteor.call('userFileLineChart');
  }
})

Meteor.methods({
  userFileLineChart: function() {
    console.log('i am in the userFileLineChart line graph method');
    $('.bitly-chart').remove();
    $('.userFile-chart').remove();
    $('#user-data-row').remove();
    $('#render-userFile').remove();
    $('.make-start').append('<div id="slide-inputs-chart" class="span12 show-title-slide"></div>');
    
    var rawData;

    rawData = Files.find({}).fetch();
    var myData = rawData[0]['file'];
    console.log(myData);

    var data = [];

    for (var i = 0; i < myData.length; i++) {
      data.push([myData[i][0], myData[i][1]]);
      console.log(myData[i][0]);
      console.log(myData[i][1]);
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
        // .domain([d3.min(data), d3.max(data)])
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

    var svg = d3.select("#slide-inputs-chart").append("svg")
                              .attr("width", width + margin.left + margin.right)
                              .attr("height", height + margin.top + margin.bottom)
                              .attr("class", "userFile-chart")
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

