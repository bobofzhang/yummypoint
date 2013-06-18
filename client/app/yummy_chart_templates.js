
Meteor.methods({
  d3BubbleChart: function(){
    var dataPoint = function (value, r, g) {
      // console.log(value);
      // console.log(r);
      // console.log(g);
      return value && r && g;
    }

    var dataset = [];
    for (var i = 0; i < 100; i++) {           //Loop 25 times
          var newNumber = Math.random() * 30;  //New random number (0-30)
          dataset = dataset.concat(newNumber); //Add new number to array
          var t = dataset[i];
          var r = Math.random() * 230; 
          // var g = function(t) { return -r(t) * r(t) / 2.5; };       
          var g = (r*r/t / 2.5);   //gravity scale
          dataPoint(dataset[i], r, g);
        };

    // w = Math.max( $(window).width() * 0.85, 960 );  //width
    // h = Math.max( $(window).height() * 0.85, 600 ); //height
    w = 1000;
    h = 700;
    var m = 20;
    var center = { x : ( w - m ) / 2, y : ( h - m ) / 2};

    var k = Math.sqrt(dataset.length / (w * h));
    console.log(k);
    
    var gravity  = 0.01; //gravity constants
    // var gravity = (100 * k);
    // var charge = (-10 / k);
    var damper   = 0.2;
    var friction = 0.9;

    // var force = d3.layout.force()
    //                 .size([ w - m, h - m ]); //gravity engine
    // var force = d3.layout.force()
    //               .charge(function(d, i) { return i ? 0 : -2000; })
    //               .nodes(dataset)
    //               .size([ w - m, h - m ]); //gravity engine

    var svg = d3.select("body")
                .append("svg")
                .attr("height", h)// + "px")
                .attr("width", w);//+ "px"); 
                

    var force = d3.layout
                  .force()
                  .size([ w - m, h - m ])
                  .nodes(dataset); // data set was working value

    var circles = svg
                    .append("g")
                    .selectAll("a")
                    .attr("id", "circles")
                    .data(force.nodes());

    force.nodes().forEach( function(dataset, i) {
      x = Math.random()* (w/2);
      y = 100 + (Math.random() * (h/2));
      // var r = Math.random() * 130; 
      // console.log(r);  
    });

    var node = circles.enter()
                      .append("a")
                      .append("circle")
                      .attr("r", function(r) { return r; })//r) //(r * Math.random()))
                      .attr("cx", function(dataset) { return (x + (Math.random()*300)); })
                      .attr("cy", function(dataset) { return (y + (Math.random()*300)); })
                      .attr("fill", "#ff7f0e")  //function(d) { return z( d.comments ); })
                      .attr("stroke-width", 2)
                      .attr("stroke", "yellow"); //function(d) { return d3.rgb(z( d.comments )).darker(); })
      
    d3.selectAll("circle")
      .transition()
      .delay(function(dataset, i) { return i * 10; })
      .duration( 150 )
      .attr("r", function(r) { return r; });//function(dataset) { return r( dataset ); });

      //     //Loads gravity
      // loadGravity(moveCenter);
      var loadGravity = function(generator) {
        // console.log('i am in the load');
        force
            .gravity(100 * 0.011952286093343936)
            .charge(-10/0.011952286093343936)
            // .charge( g * (Math.random()*2))
            .friction(0.5)
            // .on("tick", function() {
            //   node
            //     .attr("cx", function(dataset) { return x; })
            //     .attr("cy", function(dataset) { return y; });
            //   })
            // .start();
            .on("tick", function(e) {
              generator(e.alpha);
              node
                .attr("cx", function(dataset) { return (x + (Math.random()*500)); })
                .attr("cy", function(dataset) { return (y + (Math.random()*500)); })
            }).start();
            //   node
            //     .attr("cx", function(dataset) { return x; })
            //     .attr("cy", function(dataset) { return y; });
            // }).start();
      }
          // Generates a gravitational point in the middle
      var moveCenter = function(alpha) {
        force.nodes().forEach(function(dataset) {
          x = Math.random()* (w/2);
          y = 100 + (Math.random() * (h/2));
          x = x + (center.x - x) * (damper + 0.02) * alpha;
          y = y + (center.y - y) * (damper + 0.02) * alpha;
         // dataset.x = dataset.x + (center.x - dataset.x) * (damper + 0.02) * alpha;
         //  dataset.y = dataset.y + (center.y - dataset.y) * (damper + 0.02) * alpha;
         console.log(x);
        });
      }
      loadGravity(moveCenter);
    }
  })

// Template.yummy_coins.events({
//   'click .chart-slide': function () {
//     console.log('I am playing with charts');
//     $('.text-slide').remove();
//     $('.chart-slide').remove();
//     $('.slide-preview').remove();
//     // $('.liveData-slide').remove();
//     // $('.make-start').append('<div class="create_graph"><input type="button" class="add_chart" value="Make a Chart!" /> </br> </br></div>');
//     // $('.top-body').append('<div class="create_graph"><div class="row"><div class=span12><span class="line-chart"> <p> Line Chart</p></span> </div></div></div>');
//     $('.make-start').append('<div class="create_graph"><div class="row"><div class="span4"> <span class="line-chart"> <h1> Line Chart</h1></span></div><div class="span4"> <span class="bar-chart"> <h1> Bar Chart</h1></span></div><div class="span4"> <span class="bubble-chart"> <h1> Bubble Chart </h1> </span> </div> </div> </div>');
//     // $('.make-start').append('<div class="slide_inputs"><div class="slide-title"><input id="slide-title" type="text" /> <input type="button" class="add-title" value="Slide Title" /><div class="bullet_one"><input id="bullet_one" type="text" /> <input type="button" class="add" value="Make a Point" /> </br> </br></div> <div class="bullet_two"> <input id="bullet_two" type="text"/> <input type="button" class="add2" value="Make a Point" /> </br> <br> </div> <div class="bullet_three"><input id="bullet_three" type="text" /> <input type="button" class="add3" value="Make a Point" /> </br> </br></div> <input type="button" class="make_another_slide" value="Make Another Slide" /> </br> <br> <input type="button" class="save_slides" value="Save and Preview" /> </br> <br></div>');
//   }
// })

Template.yummy_coins.events({
  'click .bubble-chart': function () {
    return Meteor.call('d3BubbleChart');
  }
})

// Template.yummy_coins.events({
//   'click .line-chart': function () {
//     $('.create_graph').remove();
//     $('.make-start').append('<div class="line-chart-options"><div class="row"><div class="span12"> <span class="line-chart"> <h1> Line Chart</h1></span></div></div></div>');
//     $('.make-start').append('<div class="line-chart-data-sources"><div class="row"><div class="span6"> Upload a File </div><div class="span6"><span class="live-data-header"> <h3> Use Live Data Sources </h3> </span></div></div></div>');
//     $('.make-start').append('<div class="data-source-details"><div class="row"><div class="span6"></div><div class="span2"><span class="twitter"> <h3> Twitter </h3> </span></div><div class="span2"><span class="bit-coins"> <h3> Bit Coins </h3> </span></div><div class="span2"><span class="bitly"> <h3> Bitly </h3> </span></div></div></div>');
//     // Meteor.call("getBitCoinData");
//     // return Meteor.call('D3testinit');
//   }
// })

// Template.yummy_coins.events({
//   'click .bit-coins': function () {
//     $('.line-chart-data-sources').remove();
//     $('.data-source-details').remove();
//     $('.make-start').append('<div class="chosen-data-source"><div class="row"><div class="span12"> <h3> Live Data </h3></span></div></div></div>');
//     $('.make-start').append('<div class="data-source-details"><div class="row"><div class="span12"> <span class="bit-coins"> <h3> Bit Coins </h3> </span></div></div></div>');
//     return Meteor.call('D3testinit');
//   }
// })

// Template.yummy_coins.events({
//   'click .bitly': function () {
//     $('.line-chart-data-sources').remove();
//     $('.data-source-details').remove();
//     $('.make-start').append('<div class="chosen-data-source"><div class="row"><div class="span12"> <h3> Live Data </h3></span></div></div></div>');
//     $('.make-start').append('<div class="data-source-details"><div class="row"><div class="span12"> <span class="bit-coins"> <h3> Bitly </h3> </span></div></div></div>');
//     return Deps.autorun(function(){ return Meteor.call('bitlyLineChartD3'); });
//   }
// })

Template.yummy_coins.events({
  'click .bar-chart': function () {
    $('.create_graph').remove();
    $('.make-start').append('<div class="bar-chart-options"><div class="row"><div class="span12"> <span class="bar-chart"> <h1> Bar Chart</h1></span></div></div></div>');
    $('.make-start').append('<div class="bar-chart-data-sources"><div class="row"><div class="span6"> Upload a File </div><div class="span6"><span class="live-data-header"> <h3> Use Live Data Sources </h3> </span></div></div></div>');
    $('.make-start').append('<div class="data-source-details"><div class="row"><div class="span6"></div><div class="span2"><span class="bar-twitter"> <h3> Twitter </h3> </span></div><div class="span2"><span class="bar-bit-coins"> <h3> Bit Coins </h3> </span></div><div class="span2"><span class="bar-bitly"> <h3> Bitly </h3> </span></div></div></div>');
    // Meteor.call("getBitCoinData");
    // return Meteor.call('D3testinit');
  }
})

Template.yummy_coins.events({
  'click .bar-bitly': function () {
    $('.bar-chart-data-sources').remove();
    //$('.data-source-details').remove();
    $('.make-start').append('<div class="chosen-data-source"><div class="row"><div class="span12"> <h3> Live Data </h3></span></div></div></div>');
    //$('.make-start').append('<div class="data-source-details"><div class="row"><div class="span12"> <span class="bit-coins"> <h3> Bitly </h3> </span></div></div></div>');
    return Deps.autorun(function(){ return Meteor.call('bitlyBarChartD3'); });
  }
})

// Template.yummy_coins.events({
//   'click .bar-chart': function () {
//     return Meteor.call('D3BarChart');
//   }
// })


