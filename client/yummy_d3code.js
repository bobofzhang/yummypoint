
// var D3testinit = function() {

//   var dataset = [];
//   var numDataPoints = 50;
//   var xRange = Math.random() * 1000;
//   var yRange = 1;
//   for (var i = 0; i < numDataPoints; i++) {
//       var newNumber1 = Math.round(Math.random() * xRange);
//       var newNumber2 = yRange++;
//       dataset.push([newNumber1, newNumber2]);
//   }

//   var margin = {
//     top: 20, 
//     right: 50, 
//     bottom: 30, 
//     left: 50
//   };

//   var width = 960 - margin.left - margin.right;
//   var height = 500 - margin.top - margin.bottom;

//   var x = d3.time.scale()
//       .range([0, width]);

//   var y = d3.scale.linear()
//       .range([height, 0]);

//   var xAxis = d3.svg.axis()
//       .scale(x)
//       .orient("bottom")
//       .ticks(50);

//   var yAxis = d3.svg.axis()
//       .scale(y)
//       .orient("left");

//   var line = d3.svg.line()
//       .x(function(d) { return x(d[1]); })
//       .y(function(d) { return y(d[0]); });

//   var svg = d3.select("body").append("svg")
//                             .attr("width", width + margin.left + margin.right)
//                             .attr("height", height + margin.top + margin.bottom)
//                             .append("g")
//                             .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


//   x.domain(d3.extent(dataset, function(d) { return d[1]; }));
//   y.domain(d3.extent(dataset, function(d) { return d[0]; }));

//   svg.append("g")
//       .attr("class", "x axis")
//       .attr("transform", "translate(0," + height + ")")
//       .call(xAxis);

//   svg.append("g")
//       .attr("class", "y axis")
//       .call(yAxis)
//       .append("text")
//       .attr("transform", "rotate(-90)")
//       .attr("y", 6)
//       .attr("dy", ".71em")
//       .style("text-anchor", "end")
//       .text("Price ($)");

//   svg.append("path")
//       .datum(dataset)
//       .attr("class", "line")
//       .attr("d", line);

//   console.log(dataset);
// }





// // // var d3testInit = function () {

// // if (Meteor.isClient) {

// // var margin = {top: 20, right: 50, bottom: 30, left: 50};
// // var width = 960 - margin.left - margin.right;
// // var height = 500 - margin.top - margin.bottom;

// // var parseDate = d3.time.format("%d-%b-%y").parse;

// // var bisectDate = d3.bisector(function(d) {
// //    return d.date; 
// // }).left;

// // var formatValue = d3.format(",.2f");

// // var formatCurrency = function(d) { 
// //   return "$" + formatValue(d); 
// // };

// // var x = d3.time.scale().range([0, width]);

// // var y = d3.scale.linear().range([height, 0]);

// // var xAxis = d3.svg.axis().scale(x).orient("bottom");

// // var yAxis = d3.svg.axis().scale(y).orient("left");

// // var line = d3.svg.line()
// //             .x(function(d) {
// //               console.log(x(d.date));
// //               return x(d.date);
// //             })
// //             .y(function(d) { 
// //               return y(d.close); 
// //             });

// // var svg = d3.select("body").append("svg")
// //                             .attr("width", width + margin.left + margin.right)
// //                             .attr("height", height + margin.top + margin.bottom)
// //                             .append("g")
// //                             .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


// // // d3.tsv("yummydata.tsv", function(error, data) {
// // //   data.forEach(function(d) {
// // //     console.log(d.date);
// // //     d.date = parseDate(d.date);
// // //     d.close = +d.close;
// // //   });

// // //   data.sort(function(a, b) {
// // //     return a.date - b.date;
// // //   });

// //   // bitData.forEach(function(price) {
// //   // //   console.log('hi');
// //   // //   bitArray.push(price);
// //   // });

// //   x.domain([bitData[0].date, bitData[150].date]);
// //   y.domain(d3.extent(bitData, function(d) { 
// //     return d.close; 
// //   }));

// //   svg.append("g")
// //       .attr("class", "x axis")
// //       .attr("transform", "translate(0," + height + ")")
// //       .call(xAxis);

// //   svg.append("g")
// //       .attr("class", "y axis")
// //       .call(yAxis)
// //     .append("text")
// //       .attr("transform", "rotate(-90)")
// //       .attr("y", 6)
// //       .attr("dy", ".71em")
// //       .style("text-anchor", "end")
// //       .text("Price ($)");

// //   svg.append("path")
// //       .datum(data)
// //       .attr("class", "line")
// //       .attr("d", line);

// //   var focus = svg.append("g")
// //       .attr("class", "focus")
// //       .style("display", "none");

// //   focus.append("circle")
// //       .attr("r", 4.5);

// //   focus.append("text")
// //       .attr("x", 9)
// //       .attr("dy", ".35em");

// //   svg.append("rect")
// //       .attr("class", "overlay")
// //       .attr("width", width)
// //       .attr("height", height)
// //       .on("mouseover", function() { focus.style("display", null); })
// //       .on("mouseout", function() { focus.style("display", "none"); })
// //       .on("mousemove", mousemove);

// //   function mousemove() {
// //     var x0 = x.invert(d3.mouse(this)[0]),
// //         i = bisectDate(data, x0, 1),
// //         d0 = data[i - 1],
// //         d1 = data[i],
// //         d = x0 - d0.date > d1.date - x0 ? d1 : d0;
// //     focus.attr("transform", "translate(" + x(d.date) + "," + y(d.close) + ")");
// //     focus.select("text").text(formatCurrency(d.close));
// //   }

// // }



// // }
