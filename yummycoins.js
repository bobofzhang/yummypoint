

// if (Meteor.isServer) {
//   Meteor.startup(function () {
//     //Prices.remove({});
//   });

//   Meteor.methods({

//     getBitCoinData: function (){
//       var bitTransArray = [];
//       var num = 0;
//       this.unblock();
//       var result = Meteor.http.get('https://data.mtgox.com/api/1/BTCUSD/trades?raw');
//       var bitTrans = result.data;
//       // console.log(bitTrans.length);
//       for (var i = 0; i < 30000; i++) {
//         bitTran = bitTrans[i];
//         var newDate = new Date(bitTran['date']*1000);
//         // console.log(newDate);
//         // var bitNode = {
//         //   price: bitTran['price'],
//         //   amount: bitTran['amount'], 
//         //   date: newDate
//         // }

//         bitTransArray.push( [bitTran['price'], num++] );
//         Prices.insert({
//           // _id: bitTran['tid'],
//           date: newDate,
//           price: bitTran['price'], 
//           amount: bitTran['amount'],
//           transId: bitTran['tid'],
//           currency: bitTran['price_currency'],
//           item: bitTran['item'],
//           primary: bitTran['primary'],
//           properties: bitTran['properties']
//         })
//       }
//       console.log(bitTransArray);
//       return bitTransArray;
//     }
//   });
// }

// if (Meteor.isClient) {

//   Meteor.methods({
//     bitData: function () {
//       var priceData = Prices.find({});
//       var pricePoint = _.map(priceData, function(obj) {
//         console.log(_.values(obj));
//         return _.values(obj);

//         // console.log(_.values(_.values(obj)[0]));
//         // // var newObj = _.values(priceObj);
//         // // _.map(priceObj, function(newObj) {
//         // console.log(priceObj);
//         // console.log('i got this');
//         // return newObj;
//       }) 
//         // console.log(priceObj);
//         // var newObj = priceArray[0];
//         // console.log(newObj);
//         // console.log('hi');
//         // console.log(_.values(obj));
//       // });
//       console.log(pricePoint);
//       var priceObj = _.each(pricePoint[0], function(newObj) {
//         console.log(_.values(newObj));
//         // var spotPrice = newObj['price'];
//         // console.log(spotPrice);
//         // return spotPrice
//       })
//       return priceData;
//     }
//   })

// Meteor.methods({

//   D3testinit: function() {

//     // var dataset = [];
//     // var numDataPoints = 50;
//     // var xRange = Math.random() * 1000;
//     // var yRange = 1;
//     // for (var i = 0; i < numDataPoints; i++) {
//     //     var newNumber1 = Math.round(Math.random() * xRange);
//     //     var newNumber2 = yRange++;
//     //     dataset.push([newNumber1, newNumber2]);
//     // }

//     var dataset = [ 
//     [ '111.26561', 0 ],
//   [ '111.26561', 1 ],
//   [ '111.2671', 2 ],
//   [ '111.27138', 3 ],
//   [ '111.28001', 4 ],
//   [ '111.2919', 5 ],
//   [ '111.29995', 6 ],
//   [ '111.3', 7 ],
//   [ '111.32183', 8 ],
//   [ '111.36061', 9 ],
//   [ '111.26001', 10 ],
//   [ '111.26001', 11 ],
//   [ '111.18282', 12 ],
//   [ '111.1', 13 ],
//   [ '110.6', 14 ],
//   [ '110.6', 15 ],
//   [ '110.5715', 16 ],
//   [ '110.571', 17 ],
//   [ '110.57', 18 ],
//   [ '110.57', 19 ],
//   [ '110.5685', 20 ],
//   [ '110.562', 21 ],
//   [ '110.56', 22 ],
//   [ '110.56', 23 ],
//   [ '110.56', 24 ],
//   [ '110.55372', 25 ],
//   [ '110.553', 26 ],
//   [ '110.55076', 27 ],
//   [ '110.55', 28 ],
//   [ '110.548', 29 ],
//   [ '110.50002', 30 ],
//   [ '111.26001', 31 ],
//   [ '111.26002', 32 ],
//   [ '111.26002', 33 ],
//   [ '111.2656', 34 ],
//   [ '111.2656', 35 ],
//   [ '111.2656', 36 ],
//   [ '111.2656', 37 ],
//   [ '111.2656', 38 ],
//   [ '111.2656', 39 ],
//   [ '111.26561', 40 ],
//   [ '111.26561', 41 ],
//   [ '111.26561', 42 ],
//   [ '111.26561', 43 ],
//   [ '111.26561', 44 ],
//   [ '111.28911', 45 ],
//   [ '111.28911', 46 ],
//   [ '111.28912', 47 ],
//   [ '111.28912', 48 ],
//   [ '111.26561', 49 ],
//   [ '111.26002', 50 ],
//   [ '111.3', 51 ],
//   [ '111.3', 52 ],
//   [ '111.3', 53 ],
//   [ '111.30001', 54 ],
//   [ '111.30001', 55 ],
//   [ '111.36061', 56 ],
//   [ '111.38933', 57 ],
//   [ '111.3925', 58 ],
//   [ '111.40003', 59 ],
//   [ '111.41875', 60 ],
//   [ '111.42', 61 ],
//   [ '111.44362', 62 ],
//   [ '111.46998', 63 ],
//   [ '111.47', 64 ],
//   [ '111.475', 65 ],
//   [ '111.49', 66 ],
//   [ '111.4961', 67 ],
//   [ '111.4961', 68 ],
//   [ '111.4961', 69 ],
//   [ '111.4961', 70 ],
//   [ '111.4961', 71 ],
//   [ '111.4961', 72 ],
//   [ '111.4961', 73 ],
//   [ '111.4961', 74 ],
//   [ '111.4961', 75 ],
//   [ '111.4961', 76 ],
//   [ '111.4961', 77 ],
//   [ '111.4961', 78 ],
//   [ '111.4961', 79 ],
//   [ '111.4961', 80 ],
//   [ '111.4961', 81 ],
//   [ '111.4961', 82 ],
//   [ '111.4961', 83 ],
//   [ '111.4961', 84 ],
//   [ '111.4961', 85 ],
//   [ '111.4961', 86 ],
//   [ '111.4961', 87 ],
//   [ '111.4961', 88 ],
//   [ '111.4961', 89 ],
//   [ '111.4961', 90 ],
//   [ '111.4961', 91 ],
//   [ '111.4961', 92 ],
//   [ '111.4961', 93 ],
//   [ '111.4961', 94 ],
//   [ '111.4961', 95 ],
//   [ '111.4961', 96 ],
//   [ '111.5', 97 ],
//   [ '111.5', 98 ],
//   [ '111.5', 99 ] 
//   ];

//     var margin = {
//       top: 20, 
//       right: 50, 
//       bottom: 30, 
//       left: 50
//     };

//     var width = 960 - margin.left - margin.right;
//     var height = 500 - margin.top - margin.bottom;

//     var x = d3.time.scale()
//         .range([0, width]);

//     var y = d3.scale.linear()
//         .range([height, 0]);

//     var xAxis = d3.svg.axis()
//         .scale(x)
//         .orient("bottom")
//         .ticks(50);

//     var yAxis = d3.svg.axis()
//         .scale(y)
//         .orient("left");

//     var line = d3.svg.line()
//         .x(function(d) { return x(d[1]); })
//         .y(function(d) { return y(d[0]); });

//     var svg = d3.select("body").append("svg")
//                               .attr("width", width + margin.left + margin.right)
//                               .attr("height", height + margin.top + margin.bottom)
//                               .append("g")
//                               .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


//     x.domain(d3.extent(dataset, function(d) { return d[1]; }));
//     y.domain(d3.extent(dataset, function(d) { return d[0]; }));

//     svg.append("g")
//         .attr("class", "x axis")
//         .attr("transform", "translate(0," + height + ")")
//         .call(xAxis);

//     svg.append("g")
//         .attr("class", "y axis")
//         .call(yAxis)
//         .append("text")
//         .attr("transform", "rotate(-90)")
//         .attr("y", 6)
//         .attr("dy", ".71em")
//         .style("text-anchor", "end")
//         .text("Price ($)");

//     svg.append("path")
//         .datum(dataset)
//         .attr("class", "line")
//         .attr("d", line);
//     // console.log(dataset);
//   }
// })

//   // Meteor.call("bitData", function(error, priceData) {
//   //   console.log('hi' + priceData);
//   //   return priceData;
//   // });
// }