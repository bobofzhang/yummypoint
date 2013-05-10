
Meteor.startup(function () {
  //Prices.remove({});
});

Meteor.methods({

  getBitCoinData: function (){
    // var num = 0;
    this.unblock();
    var result = Meteor.http.get('https://data.mtgox.com/api/1/BTCUSD/trades?raw');
    var bitTrans = result.data;
    // console.log(bitTrans.length);
    for (var i = 0; i < bitTrans.length; i++) {
      bitTran = bitTrans[i];
      // var newDate = new Date(bitTran['date']*1000);
      // bitTransArray.push( [bitTran['price'], num++] );
      Prices.insert({
        // _id: bitTran['tid'],
        date: bitTran['date'],
        price: bitTran['price'], 
        amount: bitTran['amount'],
        transId: bitTran['tid'],
        currency: bitTran['price_currency'],
        item: bitTran['item'],
        primary: bitTran['primary'],
        properties: bitTran['properties']
      })
    }
    // console.log(bitTrans);
    return bitTrans;
  }
});






