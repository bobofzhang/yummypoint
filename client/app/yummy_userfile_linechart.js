
var slideNumber;
var fileCount = -1;
var thisShowName;
var thisSlideNumber;


Meteor.methods({
  passShowNameUserData: function (showName) {
    thisShowName = showName;
    return thisShowName;
  }
})

Meteor.methods({
  passSlideCountUserData: function (count) {
    thisSlideNumber = count;
    return thisSlideNumber;
  }
})

Template.yummy_coins.events({
  'click #user-data-line-nav': function() {
    $('#user-chart-options-row').append('<div id="user-line-instruct" class="span12"><span class="user-line-info"> Upload a CSV file to create a line graph slide </br> The first column is the x-axis </br> The second column is the y-axis </span></div>')
    $('#user-chart-options-row').append('<div id="cloak-inputs" class="span12"><div id="inputs" class="clearfix" onclick="files.click()"><span class="input-text"> Upload file from computer </span><input type="file" id="files" name="files[]" style="visibility:hidden;"/></div></div>');
    // $('.line-chart-data-sources').remove();
    // $('.data-source-details').remove();
    // $('#slide-controls').remove();
    // $('#create-text-sub').remove();
    // $('#public-data-row').remove();
    // $('#twitter-data-row').remove();
    // $('#bitcoin-data-row').remove();
    // $('#bitly-data-row').remove();
    // //$('#slide-nav-row').append('<div id="save-bitcoin-slide" class="span4 save-bitcoin-slide"> <span class="save-bitcoin"> <p> Save this sick Line Graph </p></span></div>');
    // $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p>Switch to Create Text Slide without saving </p></span></div>');
    // $('#slide-nav-row').append('<div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p>Switch to Create Chart Slide without saving </p></span></div>');
    // $('.make-start').append('<div id="inputs" class="span12 clearfix"><input type="file" id="files" name="files[]" /></div>');
  }
})

Template.yummy_coins.events({
  'change #inputs': function (event, tmpl) {
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
    $('.chart-data-sources-types').remove();
    $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    // event.preventDefault();
    var files = event.target.files; // FileList object
    var file = files[0];
    printTable(file);
    fileCount++

    function printTable(file) {
      var reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function(event){
        var csv = event.target.result;
        var data = $.csv.toArrays(csv);
        Files.insert({
          name: file.name,
          count: fileCount,
          file: data,
          meteorUser: Meteor.userId(),
          show: thisShowName
        })
      };
      reader.onerror = function(){ alert('Unable to read ' + file.fileName); };
    }
    return $('#inputs').remove() &&  $('.make-start').append('<div id="post-user-file-upload"><div id="upload-success-msg" class="span12"><span class="success-msg"><p> File Upload Success </p></span></div><div class="span2"></div><div id="render-userFile" class="span8 see-userFile"> <span class="view-userFile"> <p> Preview Your Uploaded Data Line Chart </p></span></div><div class="span2></div></div>')
  }
})

Template.yummy_coins.events({
  'click #render-userFile': function () {
    $('#user-data-row').remove();
    $('.make-start').append('<div id="chart-render" class="span12"></div>');
    Meteor.call('userFileLineChart', fileCount);
  }
})

Template.yummy_coins.events({
  'click #save-userfile-slide': function () {
    Shows.insert([
      { show: thisShowName },
      { slide: thisSlideNumber },
      { contents: "Meteor.call('userFileLineChart')" },
      { slideType: "chart" },
      { dataSource: "userfile" },
      { fileNum: fileCount },
      { meteorUser: Meteor.userId() },
      { chartType: "line" }
    ]);
    $('#slide-links').append('<div id="saved-slide" class="span1"><span class="slidelink' + thisSlideNumber + '"<p> Slide' + ' ' + thisSlideNumber + '</p></span></div>');
    $('.bitly-chart').remove();
    $('.bitcoin-chart').remove();
    $('#slide-instruct').remove();
    $('#twitter-switch').remove();
    $('#bitly-switch').remove();
    $('#save-bitcoin-slide').remove();
    $('#save-userfile-slide').remove();
    $('#create-text-sub').remove();
    $('#bar-chart-switch').remove();
    $('#bubble-chart-switch').remove();
    $('#create-chart-sub').remove();
    $('#slide-inputs').remove();
    $('#slide-inputs-chart').remove();
    $('#chart-render').remove();
    $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
    $('#slide-inputs').append('<div class="slide-title"></div><div class="bullet-one"></div><div class="bullet-two"></div><div class="bullet-three"></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span12"> <span class="chart-slide-sub"><p>Create a Chart Slide </p></span></div>');
    $('.slide-title').append('<input id="slide-title" class="slide-text" type="text" placeholder="Enter Slide Title Here" autofocus />');
    Meteor.call('tickSlideCount');
  }
})

Meteor.methods({
  userFileLineChart: function(index) {
    var currentUser = Meteor.userId();
    $('.bitly-chart').remove();
    $('.userFile-chart').remove();
    $('#user-data-row').remove();
    $('#render-userFile').remove();
    $('#post-user-file-upload').remove();
    $('#create-chart-sub').remove();
    $('#create-text-sub').remove();
    $('#show-content-title').remove();
    $('#slide-nav-row').append('<div id="save-userfile-slide" class="span4 save-userfile-chart"> <span class="save-userfile"> <p> Save this Line Graph </p></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    $('#chart-render').append('<div id="slide-inputs-chart" class="show-title-slide"></div>');
    var rawData;

    rawData = Files.find({}).fetch();
    var fileUserFilter = _.filter(rawData, function (obj) {
      if (obj['meteorUser'] === currentUser && obj['show'] === thisShowName) {
        return obj;
      }
    })

    var myData = fileUserFilter[index]['file'];

    var data = [];

    for (var i = 0; i < myData.length; i++) {
      var newDate = Date.parse(myData[i][1]);
      console.log(newDate);
      data.push([myData[i][0], newDate]);
    }

    //console.log(data);

    var margin = {
      top: 20, 
      right: 50, 
      bottom: 30, 
      left: 50
    };

    var width = 960 - margin.left - margin.right;
    var height = 500 - margin.top - margin.bottom;

    var x = d3.time.scale()
        // .domain([
        //   d3.min(data, function(d) { return d[1]; }),
        //   d3.max(data, function(d) { return d[1]; }) 
        //   ])
        .range([ 0, width ]);

    var y = d3.scale.linear()
        // .domain([
        //   d3.min(data, function(d) { return d[0]; }),
        //   d3.max(data, function(d) { return d[0]; }) 
        //   ])
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
        .style("text-anchor", "end");
        // .text("Price ($)");

    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .style("stroke", "red")
        .style("fill", "black")
        .attr("d", line);

    return data;
  }
})

