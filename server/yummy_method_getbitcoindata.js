
var lastBitTime;
var dataset = [];
var lastTradeID;


Meteor.methods({

  getBitCoinData: function (){
    // var checkBitTime = Prices.find({}, { sort: { date: -1 }, limit: 1 }).fetch();
    // if (checkBitTime[0] == null) {
    //   lastBitTime = 1;
    // } else {
    //   lastBitTime = checkBitTime[0]['date'];
    // }
    this.unblock();
    var checkLastTrade = Prices.find({}, { sort: { transId: -1 }, limit: 1 }).fetch();
    var lastTradeID = checkLastTrade[0]['transId'];
    console.log(lastTradeID);
    //var result = Meteor.http.get('https://data.mtgox.com/api/1/BTCUSD/trades?raw');
    var result = Meteor.http.get('http://data.mtgox.com/api/1/BTCUSD/trades/fetch');
    var bitTrans = result.data['return'];
    var dataLength = bitTrans.length;
    console.log(dataLength);

    // var dataLength = result.data.length; //>>>> USED WITH RAW <<<<<<<<
    // var bitTrans = result.data;   //>>>> USED WITH RAW <<<<<<<<
    // console.log(bitTrans)
    for (var i = 0; i < dataLength; i++) {
      bitTran = bitTrans[i];
      var newTime = new Date(bitTran['date']*1000);
      var newDate = bitTran['date'];
      var tradeID = bitTran['tid'];
      // if (lastBitTime == null) {
      //   lastBitTime = newDate;
      //   console.log('I am null');
      // }
      // if (newDate > lastBitTime || lastBitTime == null) {
      if (tradeID > lastTradeID || lastTradeID == null) {
        //console.log('hi i am in the loop');
        // console.log('baseline');
        // console.log( newDate - lastBitTime );
        // lastBitTime = newDate;
        // lastTradeID = tradeID;
        // dataset.push([bitTran['price'], newDate]);
        Prices.insert({
          date: newDate,
          time: newTime,
          price: bitTran['price'], 
          amount: bitTran['amount'],
          transId: tradeID,
          currency: bitTran['price_currency'],
          item: bitTran['item'],
          primary: bitTran['primary'],
          properties: bitTran['properties']
        })
      }
    }
    // for (var i = dataLength-200; i < dataLength; i++) {
    //   bitTran = bitTrans[i];
    //   var newTime = new Date(bitTran['date']*1000);
    //   var newDate = bitTran['date'];
    //   if (lastBitTime == null) {
    //     lastBitTime = newDate;
    //     console.log('I am null');
    //   }
    //   if (newDate > lastBitTime) {
    //     // console.log('hi i am in the loop');
    //     // console.log('baseline');
    //     // console.log( newDate - lastBitTime );
    //     lastBitTime = newDate;
    //     dataset.push([bitTran['price'], newDate]);
    //     Prices.insert({
    //       date: newDate,
    //       time: newTime,
    //       price: bitTran['price'], 
    //       amount: bitTran['amount'],
    //       transId: bitTran['tid'],
    //       currency: bitTran['price_currency'],
    //       item: bitTran['item'],
    //       primary: bitTran['primary'],
    //       properties: bitTran['properties']
    //     })
    //   }
    // }
    // console.log(dataset);
    console.log(lastTradeID);
    return dataset;
  }
});






