
//var slideNumber;
var userBubFileCount = -1;
var userBubShowName;
var userBubSlideNumber;


Meteor.methods({
  passShowNameUserBub: function (showName) {
    userBubShowName = showName;
    return userBubShowName;
  }
})

Meteor.methods({
  passSlideCountUserBub: function (count) {
    userBubSlideNumber = count;
    return userBubSlideNumber;
  }
})

Template.yummy_coins.events({
  'click #user-bubble-chart-nav': function() {
    $('#user-chart-options-row').append('<div id="user-bub-instruct" class="span12"><span class="user-bub-info"> Upload a CSV file to create a line graph slide </br> The first column is the Bubble radius </br> The second column is Bubble title </span></div>')
    $('#user-chart-options-row').append('<div id="bub-cloak-inputs" class="span12"><div id="user-bub-inputs" class="clearfix" onclick="files.click()"><span class="input-text"> Upload file from computer </span><input type="file" id="files" name="files[]" style="visibility:hidden;"/></div></div>');
  }
})

Template.yummy_coins.events({
  'change #user-bub-inputs': function (event, tmpl) {
    $('.line-chart-data-sources').remove();
    $('.data-source-details').remove();
    $('#slide-controls').remove();
    $('#create-text-sub').remove();
    $('#public-data-row').remove();
    $('#twitter-data-row').remove();
    $('#bitcoin-data-row').remove();
    $('#bitly-data-row').remove();
    $('.chart-data-sources-types').remove();
    $('#slide-nav-row').append('<div id="create-text-sub" class="span6"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span6"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');

    function printTable(file) {
      var reader = new FileReader();
      reader.readAsText(file);
      reader.onload = function(event){
        var info = event.target.result;
        var data = $.csv.toArrays(info);
        Files.insert({
          name: file.name,
          count: userBubFileCount,
          file: data,
          meteorUser: Meteor.userId(),
          show: userBubShowName
        })
      };
      reader.onerror = function(){ alert('Unable to read ' + file.fileName); };
    }
    var files = event.target.files; // FileList object
    var file = files[0];
    printTable(file);
    userBubFileCount++
    Meteor.call('passFileCount', userBubFileCount);
    return $('#user-bub-inputs').remove() &&  $('.make-start').append('<div id="post-user-file-upload"><div id="upload-success-msg" class="span12"><span class="success-msg"><p> File Upload Success </p></span></div><div class="span2"></div><div id="render-user-bub-file" class="span8 see-userFile"> <span class="view-userFile"> <p> Preview Your Uploaded Data Bubble Chart </p></span></div><div class="span2></div></div>')
  }
})

Template.yummy_coins.events({
  'click #render-user-bub-file': function () {
    $('#user-data-row').remove();
    $('#create-chart-sub').remove();
    $('#create-text-sub').remove();
    $('#show-content-title').remove();
    $('.make-start').append('<div id="user-bub-chart-render" class="span12"></div>');
    $('#slide-nav-row').append('<div id="save-user-bub-slide" class="span4 save-userfile-chart"> <span class="save-userfile"> <p> Save this Bubble Graph </p></span></div>');
    $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p>Create a Text Slide </p></span></div>');
    $('#slide-nav-row').append('<div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
    Meteor.call('userBubbleChart', userBubFileCount);
  }
})

Meteor.methods ({
    userBubbleChart: function(index){
        var currentUser = Meteor.userId();
        $('#slide-inputs-chart-user-bubble').remove();
        $('#post-user-file-upload').remove();
        $('#render-user-bub-file').remove();

        $('#user-bub-chart-render').append('<div id="slide-inputs-chart-user-bubble" class="show-user-bub-slide"></div>');

        //var rawData = Hotbits.find({}, { sort: { time: -1, clickrate: -1 }, limit: 80 }).fetch();

        var rawData;

        rawData = Files.find({}).fetch();
        var fileUserFilter = _.filter(rawData, function (obj) {
          if (obj['meteorUser'] === currentUser && obj['show'] === userBubShowName) {
            return obj;
          }
        })

        var myData = fileUserFilter[index]['file'];

        var dataset = [];

        for (var i = 0; i < 30; i++) {
          dataset.push([myData[i][0], myData[i][1]]);
        }

        console.log(dataset);

        var w = 1000;
        var h = 700;
        var m = 20;
        var center = { 
          x : ( w - m ) / 2, 
          y : ( h - m ) / 2
        };

        var gravity  = 0.1; //gravity constants
        var damper   = 0.2;
        var friction = 0.9;

        var force = d3       //gravity engine
                      .layout
                      .force()
                      .size([ w - m,
                              h - m ]);

        var svg = d3.select("#slide-inputs-chart-user-bubble")
                    .append("svg")
                    .attr("id", "svg-canvas")
                    .attr("height", h)
                    .attr("width", w);

        var r = d3.scale.linear()
                .domain([
                        d3.min(dataset, function(d) { return d[0]; }),
                        d3.max(dataset, function(d) { return d[0]; }) 
                        ])
                .range ([ 
                        d3.min(dataset, function(d) { return d[0]; }),
                        d3.max(dataset, function(d) { return d[0]; }) 
                        ])
                .clamp([true]);

        var g = function (d) {
            return ((-r(d) * r(d)) / 2.5);   
        };

        var launch = function () {
            force
                .nodes(dataset);

            circles = svg.append("svg")
                        .attr("id", "circles")
                        .selectAll("g")
                        .data(force.nodes());

            force.nodes().forEach(function(d,i) {
                d.x = Math.random() * w;
                d.y = Math.random() * h;
            });

            var node = circles 
                    .enter()
                    .append("g")
                    .attr("class", "bub-node")
                    .append("circle")
                    .attr("r", 0)
                    .attr("cx", function (d) { return d.x; })
                    .attr("cy", function (d) { return d.y; })
                    .attr("fill", "rgba(20, 53, 173, .5)")
                    .attr("stroke-width", 2)
                    .attr("stroke", "yellow")
                    .on("mouseover", function(){d3.select(this).style("fill", "rgba(213, 0, 101, 0.5)");})
                    .on("mouseout", function(){d3.select(this).style("fill", "rgba(20, 53, 173, .5)");});

            d3.selectAll("circle")
                    .transition()
                    .delay(function(d,i) { return i * 10; })
                    .duration( 1000 )
                    .attr("r", function (d) { return r( d[0]); });

            node.append("title")
                .attr("class", "title-text")
                .text(function (d) { return (d[1] + ", " + d[0]) ; })
                .style("font-size", "18px");

            node.append("g")
                .append("text")
                .attr("cx", function (d) { return d.x; })
                .attr("cy", function (d) { return d.y; })
                .attr("dy", "1em")
                .text(function (d) { return (d[1] + ", " + d[0]) ; });

            var loadGravity = function (generator) {
                force
                    .gravity(gravity)
                    .charge( function (d) { return g( d[0] ); })
                    .friction(friction)
                    .on("tick", function (e) {
                        generator(e.alpha);
                        node 
                            .attr("cx", function (d) { return d.x; })
                            .attr("cy", function (d) { return d.y; });
                    }).start();
            }

            var moveCenter = function (alpha) {
                force.nodes().forEach(function(d) {
                    d.x = d.x + (center.x - d.x) * (damper + 0.02) * alpha;
                    d.y = d.y + (center.y - d.y) * (damper + 0.02) * alpha;   
                });
            }
            loadGravity(moveCenter);
        }
        launch();
    }
})

