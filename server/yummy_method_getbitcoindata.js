
// Meteor.setInterval(function(){
//   Meteor.call("getBitCoinData", function(error, result) { 
//     console.log("get getBitCoinData called"); 
//     return result;
//   })
// }, 10000);

var lastBitTime;
var dataset = [];


Meteor.methods({

  getBitCoinData: function (){
    console.log('here is bitTime');
    console.log(lastBitTime);
    this.unblock();
    var result = Meteor.http.get('https://data.mtgox.com/api/1/BTCUSD/trades?raw');
    // var result = Meteor.http.get('http://data.mtgox.com/api/1/BTCUSD/ticker');
    var dataLength = result.data.length;
    console.log(dataLength);
    var bitTrans = result.data;
    // console.log(bitTrans)
    // for (var i = 0; i < 50; i++) {
    for (var i = dataLength-200; i < dataLength; i++) {
      bitTran = bitTrans[i];
      var newTime = new Date(bitTran['date']*1000);
      var newDate = bitTran['date'];
      if (lastBitTime == null) {
        lastBitTime = newDate;
        console.log('I am null');
      }
      if (newDate > lastBitTime) {
        // console.log('hi i am in the loop');
        // console.log('baseline');
        // console.log( newDate - lastBitTime );
        lastBitTime = newDate;
        dataset.push([bitTran['price'], newDate]);
        Prices.insert({
          date: newDate,
          time: newTime,
          price: bitTran['price'], 
          amount: bitTran['amount'],
          transId: bitTran['tid'],
          currency: bitTran['price_currency'],
          item: bitTran['item'],
          primary: bitTran['primary'],
          properties: bitTran['properties']
        })
      }
    }
    // console.log(dataset);
    console.log(lastBitTime);
    return dataset;
  }
});






