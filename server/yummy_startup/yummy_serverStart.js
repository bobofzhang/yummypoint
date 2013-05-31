
var dataArray = [];

Meteor.startup(function () {
  Slides.remove({});
  Shows.remove({});
  //Hotbits.remove({});
  //Prices.remove({});
  //Files.remove({});
  var pricesSet = Prices.findOne({});
  if (pricesSet == null) {
    var result = Meteor.http.get('http://data.mtgox.com/api/1/BTCUSD/trades/fetch');
    var bitTrans = result.data['return'];
    var dataLength = bitTrans.length;
    console.log(dataLength);
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
  if (dataArray.length == null || dataArray.length < 1) {
    var newData = Prices.find({}, {limit: 150}).fetch();
    var newDataArray = _.map(newData, function(obj) {
      var newObj = _.pick(obj, 'price', 'date');
      var newArray = _.values(newObj);
      dataArray.push(newArray);
    })
    // return newDataArray && dataArray;
    return Datastores.insert({
      priceData: dataArray
    })
  }
});  