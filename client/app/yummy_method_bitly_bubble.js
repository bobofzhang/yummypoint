var bitPhrase = "food network";
var thisShow;
var slideNumber;
var preDataSet = [];

Meteor.methods({
  passSlideCountBitBub: function (count) {
    slideNumber = count;
    return slideNumber;
  }
})

Meteor.methods({
  passShowNameBitBub: function (showName) {
    thisShow = showName;
    return thisShow;
  }
})

Template.yummy_coins.events({
    'click #bitly-bubble-chart-nav': function () {
        $('.line-chart-data-sources').remove();
        $('.data-source-details').remove();
        $('#slide-controls').remove();
        $('#create-text-sub').remove();
        $('.chart-data-sources-types').remove();
        $('#slide-inputs').remove();
        $('.make-start').append('<div id="chart-render-bitly-bubble" class="span12"></div>');
        $('#slide-nav-row').append('<div id="save-bitly-slide-bubble" class="span4 save-bitly-bubble"> <span class="save-bit-bub"> <p> Save Bitly Bubble Graph </p></span></div>');
        $('#slide-nav-row').append('<div id="create-text-sub" class="span4"> <span class="text-slide-sub"><p> Create a Text Slide </p></span></div>');
        $('#slide-nav-row').append('<div id="create-chart-sub" class="span4"> <span class="chart-slide-sub"><p> Chart Slide Home </p></span></div>');
        return Deps.autorun(function(){ return Meteor.call('d3BubbleChart'); });
        //return Meteor.call('d3BubbleChart');
    },
    'click #save-bitly-slide-bubble': function() {
        Shows.insert([
        { show: thisShow },
        { slide: slideNumber },
        { contents: "Meteor.call('d3BubbleChart')" }, 
        { slideType: "chart" },
        { dataSource: "bitly" },
        { fileNum: ""}, 
        { meteorUser: Meteor.userId() },
        { chartType: "bubble" }
        ]);
        $('#slide-links').append('<div id="saved-slide'+slideNumber+'" title="'+ slideNumber +'" class="span1 saved-slide"><span class="slidelink' + slideNumber + '"<p> Slide' + ' ' + slideNumber + '</p></span></div>');
        $('#slide-instruct').remove();
        $('#save-bitly-slide-bubble').remove();
        $('#create-text-sub').remove();
        $('#bar-chart-switch').remove();
        $('#bubble-chart-switch').remove();
        $('create-chart-sub').remove();
        $('#slide-inputs').remove();
        $('#slide-inputs-chart').remove();
        $('#create-chart-sub').remove();
        $('#chart-render').remove();
        $('#chart-render-bitly').remove();
        $('#chart-render-bitly-bubble').remove();
        $('.make-start').append('<div id="slide-inputs" class="span12 slide-inputs"></div>');
        $('#slide-inputs').append('<div class="slide-title"></div><div class="bullet-one"></div><div class="bullet-two"></div><div class="bullet-three"></div>');
        $('#slide-nav-row').append('<div id="create-chart-sub" class="span12"> <span class="chart-slide-sub"><p> Create Chart Slide </p></span></div>');
        $('.slide-title').append('<input id="slide-title" class="slide-text" type="text" placeholder="Enter Slide Title Here" autofocus />');
        Meteor.call('tickSlideCount');
        //Meteor.clearInterval("renderHotBits"); showNameEED TO FIGURE OUT HOW TO ACCESS THE SET INTERVAL HANDLE
    }
})

Meteor.methods ({
    d3BubbleChart: function(){
        $('#slide-inputs-chart-bitly-bubble').remove();
        $('#chart-render-bitly-bubble').append('<div id="slide-inputs-chart-bitly-bubble" class="show-title-slide"></div>');

        var rawData = Hotbits.find({}, { sort: { time: -1, clickrate: -1 }, limit: 80 }).fetch();

        var dataset = [];

        for (var i = 0; i < 50; i++) {
          dataset.push([rawData[i].clickrate, rawData[i].phrase]);
        }

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

        var svg = d3.select("#slide-inputs-chart-bitly-bubble")
                    .append("svg")
                    .attr("id", "svg-canvas")
                    .attr("height", h)
                    .attr("width", w);

        var r = d3.scale.linear()
                .domain([
                        d3.min(dataset, function(d) { return d[0]; }),
                        d3.max(dataset, function(d) { return d[0]; }) 
                        ])
                .range ([ 1, 125 ])
                .clamp([true]);

        var g = function (d) {
            return -r(d) * r(d) / 2.5;   
        };

        var launch = function () {
            force
                .nodes(dataset);

            circlesDiv = svg.append("svg")
                        .attr("id", "circles")
                        .selectAll("g")
                        .data(force.nodes());

            force.nodes().forEach(function(d,i) {
                d.x = Math.random() * w;
                d.y = Math.random() * h;
            });

            var node = circlesDiv 
                    .enter()
                    .append("g");
            var circleElems = node.attr("class", "bub-node")
                    .append("circle")
                    .attr("r", 0)
                    .attr("cx", function (d) { return d.x; })
                    .attr("cy", function (d) { return d.y; })
                    .attr("fill", "rgba(20, 53, 173, .5)")
                    .attr("stroke-width", 2)
                    .attr("stroke", "yellow")
                    .on("mouseover", function(){d3.select(this).style("fill", "rgba(213, 0, 101, 0.5)");})
                    .on("mouseout", function(){d3.select(this).style("fill", "rgba(20, 53, 173, .5)");});
            circleElems.append("title")
                    .attr("class", "title-text")
                    .text(function (d) { return (d[1] + ", " + d[0]) ; })
                    .style("font-size", "18px");
                    //.attr("id", "bub-text")
                    //.attr("fill", "rgba(220, 220, 220, 0.5)")
                    // .append("text")
                    // .attr("text-anchor", "middle")
                    // .attr("dy", ".3em")
                    // //.style("font-size", function(d) { return (10 * d[0]); })
                    // .style("color", "white")
                    // .style("z-index", "10")
                    // .text(function (d) { return d[1]; });

            d3.selectAll("circle")
                    .transition()
                    .delay(function(d,i) { return i * 10; })
                    .duration( 1000 )
                    .attr("r", function (d) { return r( d[0]); });

            node.append("text")
                .attr("cx", function (d) { return d.x; })
                .attr("cy", function (d) { return d.y; })
                .attr("dy", ".3em")
                .text(function (d) { return (d[1] + ", " + d[0]) ; });

            var loadGravity = function (generator) {
                force
                    .gravity(gravity)
                    .charge( function (d) { return g( d[0] ); })
                    .friction(friction)
                    .on("tick", function (e) {
                        generator(e.alpha);
                        circleElems 
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



