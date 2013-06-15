
// var dataArray = [];

Meteor.methods({
  clearPriceDB: function(){
    var priceCount = Prices.find().count();
    console.log(priceCount);
    var thisTime = (new Date * 1000);
    console.log(thisTime);
    // var aDayAgo = thisTime - 86400000;
    var aDayAgo = thisTime - 3600000;
    console.log(aDayAgo);
    if (priceCount > 1200) {
      // Prices.remove( {time: {$lt: aDayAgo} } );
      Prices.remove({});
      var result = Meteor.http.get('http://data.mtgox.com/api/1/BTCUSD/trades/fetch');
      var bitTrans = result.data['return'];
      var dataLength = bitTrans.length;
      for (var i = 0; i < 100; i++) {
        bitTran = bitTrans[i];
        var newTime = new Date(bitTran['date']*1000);
        var newDate = bitTran['date'];
        var tradeID = bitTran['tid'];
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
  }
})

var priceFlush = Meteor.setInterval(function(){
    Meteor.call("clearPriceDB");
  }, 360000);

Meteor.startup(function () {
  Slides.remove({});
  Shows.remove({});
  //Hotbits.remove({});
  //Prices.remove({});
  Files.remove({});
  Shownames.remove({});

  var pricesSet = Prices.findOne({});
  if (pricesSet == null) {
    var result = Meteor.http.get('http://data.mtgox.com/api/1/BTCUSD/trades/fetch');
    var bitTrans = result.data['return'];
    var dataLength = bitTrans.length;
    for (var i = 0; i < 100; i++) {
      bitTran = bitTrans[i];
      var newTime = new Date(bitTran['date']*1000);
      var newDate = bitTran['date'];
      var tradeID = bitTran['tid'];
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
  // if (dataArray.length == null || dataArray.length < 1) {
  //   var newData = Prices.find({}, {limit: 150}).fetch();
  //   var newDataArray = _.map(newData, function(obj) {
  //     var newObj = _.pick(obj, 'price', 'date');
  //     var newArray = _.values(newObj);
  //     dataArray.push(newArray);
  //   })
  //   // return newDataArray && dataArray;
  //   return Datastores.insert({
  //     priceData: dataArray
  //   })
  // }
});  