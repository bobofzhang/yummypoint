
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
    }
})

Meteor.methods ({
    d3BubbleChart: function(){
        //$('.bitly-chart').remove();
        $('#slide-inputs-chart-bitly-bubble').remove();
        $('#chart-render-bitly-bubble').append('<div id="slide-inputs-chart-bitly-bubble" class="show-title-slide"></div>');

        var rawData = Bubhotbits.find().fetch();
        var dataset = [];

        for (var i = 0; i < 100; i++) {
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
                    .attr("height", h)
                    .attr("width", w);

        var r = d3.scale.linear()
                .domain([
                        d3.min(dataset, function(d) { return d[0]; }),
                        d3.max(dataset, function(d) { return d[0]; }) 
                        ])
                .range ([ 1, 150 ])
                .clamp([true]);

        var g = function (d) {
            return -r(d) * r(d) / 2.5;   
        };

        var launch = function () {
            console.log('i am in launch');
            force
                .nodes(dataset);

            circles = svg.append("g")
                        .attr("id", "circles")
                        .selectAll("a")
                        .data(force.nodes());

            force.nodes().forEach(function(d,i) {
                d.x = Math.random() * w;
                d.y = Math.random() * h;
            });

            var node = circles 
                    .enter()
                    .append("a")
                    .append("circle")
                    .attr("r", 0)
                    .attr("cx", function (d) { return d.x; })
                    .attr("cy", function (d) { return d.y; })
                    .attr("fill", "#ff7f0e")
                    .attr("stroke-width", 2)
                    .attr("stroke", "yellow")
                    .text(function (d) { return d[1]; })
                    .attr("text-anchor", "middle")
                    .attr("dy", ".3em")
                    //.style("font-size", "24px") // initial guess
                    .style("font-size", function(d) { return (10 * d[0]); });

            d3.selectAll("circle")
                    .transition()
                    .delay(function(d,i) { return i * 10; })
                    .duration( 1000 )
                    .attr("r", function (d) { return r( d[0] ); });

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



// Meteor.methods({
//   d3BubbleChart: function(){
//     //$('.bitly-chart').remove();
//     $('#slide-inputs-chart-bitly').remove();
//     $('#chart-render-bitly-bubble').append('<div id="slide-inputs-chart-bitly-bubble" class="show-title-slide"></div>');
    
//     var dataPoint = function (value, r, g) {
//       return value && r && g;
//     }

//     var rawData;

//     rawData = Bubhotbits.find().fetch();

//     var dataset = [];

//     for (var i = 0; i < rawData.length; i++) {
//       dataset.push([rawData[i].clickrate, rawData[i].phrase]);
//     }

//     console.log(dataset);

//     for (var i = 0; i < dataset.length; i++) {
//       var r = dataset[i][0];
//       var g = (r*r / 2.5);   //gravity scale
//       dataPoint(dataset[i], r, g);
//     }

//     // var dataset = [];
//     // for (var i = 0; i < 100; i++) {           //Loop 25 times
//     //       var newNumber = Math.random() * 30;  //New random number (0-30)
//     //       dataset = dataset.concat(newNumber); //Add new number to array
//     //       var t = dataset[i];
//     //       var r = Math.random() * 230; 
//     //       // var g = function(t) { return -r(t) * r(t) / 2.5; };       
//     //       var g = (r*r/t / 2.5);   //gravity scale
//     //       dataPoint(dataset[i], r, g);
//     //     };

//     var w = 1000;
//     var h = 700;
//     var m = 20;
//     var center = { 
//       x : ( w - m ) / 2, 
//       y : ( h - m ) / 2
//     };

//     //var k = Math.sqrt(dataset.length / (w * h));
    
//     var gravity  = -0.01; //gravity constants
//     var damper   = 0.2;
//     var friction = 0.9;


//     var force = d3.layout
//                   .force()
//                   .size([ w - m, h - m ])
//                   .nodes(dataset); // data set was working value

//     var svg = d3.select("#slide-inputs-chart-bitly-bubble")
//                 .append("svg")
//                 .attr("height", h)//+ "px")
//                 .attr("width", w);//+ "px"); 
                
//     var circles = svg
//                     .append("g")
//                     .selectAll("a")
//                     .attr("id", "circles")
//                     .data(force.nodes());

//     // r = d3.scale.linear()
//     //   .domain([ d3.min(posts, function(d) { return d.score; }),
//     //             d3.max(posts, function(d) { return d.score; }) ])
//     //   .range([ 0, 1 ])

//     force.nodes().forEach( function(dataset, i) {
//       x = Math.random()* (w/2);
//       y = 100 + (Math.random() * (h/2)); 
//     });

//     var node = circles.enter()
//                       .append("a")
//                       .append("circle")
//                       .attr("r", function(r) { return r; })//r) //(r * Math.random()))
//                       .attr("cx", function(dataset) { return (x + (Math.random()*300)); })
//                       .attr("cy", function(dataset) { return (y + (Math.random()*300)); })
//                       .attr("fill", "#ff7f0e")  //function(d) { return z( d.comments ); })
//                       .attr("stroke-width", 2)
//                       .attr("stroke", "yellow"); //function(d) { return d3.rgb(z( d.comments )).darker(); })
      
//     d3.selectAll("circle")
//       .transition()
//       .delay(function(dataset, i) { return i * 10; })
//       .duration( 1500 )
//       .attr("r", function(r) { return r; });//function(dataset) { return r( dataset ); });

//       var loadGravity = function(generator) {
//         force
//             .gravity(100 * 0.011952286093343936)
//             .charge(-10/0.011952286093343936)
//             .friction(0.5)
//             .on("tick", function(e) {
//               generator(e.alpha);
//               node
//                 .attr("cx", function(dataset) { return (x + (Math.random()*500)); })
//                 .attr("cy", function(dataset) { return (y + (Math.random()*500)); })
//             }).start();
//       }
//           // Generates a gravitational point in the middle
//       var moveCenter = function(alpha) {
//         force.nodes().forEach(function(dataset) {
//           x = Math.random()* (w/2);
//           y = 100 + (Math.random() * (h/2));
//           x = x + (center.x - x) * (damper + 0.02) * alpha;
//           y = y + (center.y - y) * (damper + 0.02) * alpha;
//         });
//       }
//       loadGravity(moveCenter);
//     }
//   })

