

Meteor.methods({

  getBitCoinData: function (){
    dataset = [];
    num = 1;
    this.unblock();
    var result = Meteor.http.get('https://data.mtgox.com/api/1/BTCUSD/trades?raw');
    // var result = Meteor.http.get('http://data.mtgox.com/api/1/BTCUSD/ticker');
    var bitTrans = result.data;
    for (var i = 0; i < 50; i++) {
      bitTran = bitTrans[i];
      var newDate = new Date(bitTran['date']*1000);
      dataset.push([bitTran['price'], newDate]);
      // var newDate = new Date(bitTran['date']*1000);
      // Prices.insert({
      //   // _id: bitTran['tid'],
      //   date: bitTran['date'],
      //   price: bitTran['price'], 
      //   amount: bitTran['amount'],
      //   transId: bitTran['tid'],
      //   currency: bitTran['price_currency'],
      //   item: bitTran['item'],
      //   primary: bitTran['primary'],
      //   properties: bitTran['properties']
      // })
    }
    console.log(dataset);
    return dataset;
  }
});






